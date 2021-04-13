import { $echarts } from '../../index.js';
import { $color } from '../../libs/echarts-style.js';
import legendTools from '../../libs/echarts-legend.js';

export default ({ dom, param, opt }) => {
    let { data } = param;

    /**
     * 对外参数
     */

    let radius = [40, 60];
    let center = ['center', 120];

    /**
     * 数据转换百分比
     */
    let values = data.map((item) => item.value);
    let total = values.reduce((a, b) => a + b);
    let percentData = data.map((item) => {
        return {
            name: item.name,
            value: Number(((item.value / total) * 100).toFixed(2)),
        };
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
                color: $color.theme[index],
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
                    color: $color.theme[index].replace(/(\d+)(\))/g, `${0.5}$2`),
                },
            },
        });
    });

    /**
     * 统计展示文案
     */
    let centerData = [
        {
            name: '总数',
            value: total,
        },
    ];

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
     * 添加分割线
     */
    seriesData.push({
        name: '　',
        value: 0,
    });

    highlightData.push({
        name: '　',
        value: 0,
    });

    /**
     * 图例格式化
     */
    let legend = legendTools.align({
        data: data,
        isPercent: true, // 是否展示百分比
        col: 3, // 展示几列
        bottom: 20, // 距离底部
        left: 50, // 距离左侧
        space: 130, // 列间隔
    });

    /**
     * 导出配置项
     */
    let option = {
        tooltip: {
            trigger: 'item',
            formatter: (param) => {
                let res = '';
                if (param.name.indexOf('border') === -1) {
                    let item = data.filter((item) => item.name === param.name);

                    if (item.length > 0) {
                        res = `${param.name} : ${item[0].value}件`;
                    }
                }
                return res;
            },
        },
        legend: legend,
        series: [
            {
                type: 'pie',
                center: center,
                radius: radius,
                label: {
                    show: true,
                    position: 'center',
                    color: '#fff',
                    formatter: (param) => {
                        let res = '';
                        if (param.name.indexOf('border') === -1) {
                            res = `{name|${param.name}}`;
                            res += `\n{value|${param.value}}件`;
                        }
                        return res;
                    },
                    rich: {
                        name: {
                            fontFamily: 'sans-serif',
                            fontSize: 14,
                            lineHeight: 21,
                        },
                        value: {
                            fontFamily: 'unidreamLED',
                            fontSize: 22,
                            lineHeight: 33,
                        },
                    },
                },
                emphasis: {
                    scale: false,
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(0, 0, 0, 0)',
                    },
                },
                data: centerData,
            },
            {
                type: 'pie',
                center: center,
                radius: radius,
                label: {
                    show: false,
                },
                emphasis: {
                    scale: false,
                },
                data: seriesData,
            },
            {
                type: 'pie',
                center: center,
                radius: radius,
                label: {
                    show: false,
                },
                emphasis: {
                    scaleSize: 15,
                },
                data: highlightData,
            },
        ],
    };

    /**
     * 渲染
     */
    let extensOption = $echarts.extens(opt, option);

    let echarts = $echarts.render(dom, extensOption);

    echarts.dispatchAction({
        type: 'legendUnSelect',
        name: '　',
    });

    let lastName = '';

    echarts.on('legendselectchanged', (e) => {
        /**
         * 图例联动
         */
        let names = seriesData.map((item) => item.name);

        let selected = e.selected[e.name];

        let nextName = names[names.indexOf(e.name) + 1];

        let newNames = percentData.map((item) => item.name);

        percentData[newNames.indexOf(e.name)].selected = selected;

        echarts.dispatchAction({
            type: selected ? 'legendSelect' : 'legendUnSelect',
            name: nextName,
        });

        let selectedData = percentData.filter((item) => item.selected !== false);

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
