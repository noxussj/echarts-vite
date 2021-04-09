import { $echarts } from '../../index.js';
import color from '../../libs/color.js';

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
        color: color,
        tooltip: {
            trigger: 'axis',
        },
        xAxis: {
            type: 'category',
            data: xAxisData,
        },
        yAxis: {
            type: 'value',
        },
        series: lineData,
        dataZoom: [
            {
                type: 'slider',
                endValue: xAxisData[xAxisData.length - 1],
            },
            {
                type: 'inside',
            },
        ],
    };

    /**
     * 渲染
     */
    let echarts = $echarts.render(dom, option);
};
