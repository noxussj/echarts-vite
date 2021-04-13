import { $echarts } from '../../index.js';
import { $color, $grid } from '../../libs/echarts-style.js';

export default ({ dom, param, opt }) => {
    let { data } = param;

    /**
     * 折线图数据
     */
    let lineData = [];

    let xAxisData = data.xAxis;

    data.series.map((item) => {
        lineData.push({
            name: item.name,
            data: item.data,
            type: 'line',
        });
    });

    /**
     * 导出配置项
     */
    let option = {
        color: $color.theme,
        grid: $grid,
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            icon: 'rect',
            top: 10,
            right: 20,
            itemWidth: 10,
            itemHeight: 3,
            itemGap: 15,
            textStyle: {
                color: '#fff',
                fontSize: 12,
            },
        },
        xAxis: {
            type: 'category',
            data: xAxisData,
            axisTick: {
                show: false,
            },
            axisLabel: {
                color: $color.xAxisLabel,
            },
            axisLine: {
                lineStyle: {
                    color: $color.xAxisLine,
                },
            },
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                color: $color.yAxisLabel,
            },
            splitLine: {
                lineStyle: {
                    color: $color.yAxisLine,
                },
            },
        },
        series: lineData,
    };

    /**
     * 渲染
     */
    let extensOption = $echarts.extens(opt, option);

    let echarts = $echarts.render(dom, extensOption);
};
