import color from '../../libs/color.js';
import { $echarts } from '../../index.js';

export default ({ dom, param, opt }) => {
    let { data } = param;

    /**
     * 数据转换百分比
     */
    let values = data.map((item) => item.value);
    let total = values.reduce((a, b) => a + b);
    let percentData = data.map((item) => {
        item.value = Number(((item.value / total) * 100).toFixed(2));

        return item;
    });

    /**
     * 基础饼图
     */
    let seriesData = [];

    percentData.map((item, index) => {
        seriesData.push({
            name: item.name,
            value: item.value,
            itemStyle: {
                color: color[index],
            },
        });
    });

    /**
     * 半透明高亮饼图
     */
    let highlightData = [];

    percentData.map((item, index) => {
        highlightData.push({
            name: item.name,
            value: item.value,
            itemStyle: {
                color: 'rgba(0, 0, 0, 0)',
                emphasis: {
                    color: color[index].replace(/(\d+)(\))/g, `${0.5}$2`),
                },
            },
        });
    });

    /**
     * 添加分割线
     */
    let borderWidth = data.length / 10;

    if (data.length > 1) {
        percentData.map((item, index) => {
            let border = {
                name: 'border' + index,
                value: borderWidth,
                itemStyle: {
                    normal: {
                        color: 'rgba(0, 0, 0, 0)',
                    },
                },
            };

            index++;

            seriesData.splice(index * 2 - 1, 0, border);
            highlightData.splice(index * 2 - 1, 0, border);
        });
    }

    /**
     * 导出配置项
     */
    let option = {
        tooltip: {
            trigger: 'item',
        },
        legend: {
            top: '5%',
            left: 'center',
        },
        series: [
            {
                type: 'pie',
                radius: [60, 90],
                label: {
                    show: false,
                },
                labelLine: {
                    show: false,
                },
                emphasis: {
                    scale: false,
                },
                data: seriesData,
            },
            {
                type: 'pie',
                radius: [60, 90],
                label: {
                    show: false,
                    position: 'center',
                },
                labelLine: {
                    show: false,
                },
                emphasis: {
                    scaleSize: 20,
                    label: {
                        show: true,
                    },
                },
                data: highlightData,
            },
        ],
    };

    /**
     * 渲染
     */
    let echarts = $echarts.render(dom, option);

    let lastName = '';

    echarts.on('legendselectchanged', (e) => {
        /**
         * 图例联动
         */
        let names = seriesData.map((item) => item.name);

        let selected = e.selected[e.name];

        let nextName = names[names.indexOf(e.name) + 1];

        let newNames = data.map((item) => item.name);

        data[newNames.indexOf(e.name)].selected = selected;

        echarts.dispatchAction({
            type: selected ? 'legendSelect' : 'legendUnSelect',
            name: nextName,
        });

        let selectedData = data.filter((item) => item.selected !== false);

        if (selectedData.length === 2 && selected) {
            echarts.dispatchAction({
                type: 'legendSelect',
                name: lastName,
            });
        }

        if (selectedData.length === 1) {
            selectedData.map((item) => {
                nextName = names[names.indexOf(item.name) + 1];

                lastName = nextName;

                echarts.dispatchAction({
                    type: 'legendUnSelect',
                    name: nextName,
                });
            });
        }

        /**
         * border联动
         */
        values = selectedData.map((item) => item.value);

        total = values.length > 0 ? values.reduce((a, b) => a + b) : 0;

        borderWidth = Number((total / 200).toFixed(2));

        option.series[0].data.map((item) => {
            if (item.name.indexOf('border') > -1) {
                item.value = borderWidth;
            }
        });

        option.series[1].data.map((item) => {
            if (item.name.indexOf('border') > -1) {
                item.value = borderWidth;
            }
        });

        echarts.setOption(option);
    });
};
