import { $echarts } from '../../index.js';
import { $color, $grid } from '../../libs/echarts-style.js';

export default ({ dom, param, opt }) => {
    let { data } = param;

    /**
     * 基础数据
     */
    let seriesData = [];

    let xAxisData = data.xAxis;

    data.series.map((item) => {
        seriesData.push({
            name: item.name,
            data: item.data,
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)',
            },
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
            axisPointer: {
                type: 'shadow',
            },
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
        series: seriesData,
    };

    /**
     * 渲染
     */
    let extensOption = $echarts.extens(opt, option);

    let echarts = $echarts.render(dom, extensOption);
};
