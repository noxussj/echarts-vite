import { $echarts } from '../../index.js';
import color from '../../libs/color.js';

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
        color: color,
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
            },
        },
        xAxis: {
            type: 'category',
            data: xAxisData,
        },
        yAxis: {
            type: 'value',
        },
        series: seriesData,
    };

    /**
     * 渲染
     */
    let echarts = $echarts.render(dom, option);
};
