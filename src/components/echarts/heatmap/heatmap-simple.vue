<template>
    <div class="echarts-dom" ref="echart"></div>
</template>

<script>
export default {
    mounted() {
        let data = {
            yAxis: ['Sta', 'Fri', 'Thu', 'Wed', 'Tue', 'Mon', 'Sun'],
            xAxis: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月'],
            series: [],
        };

        // 行
        new Array(7).fill(null).map((rowItem, rowIndex) => {
            // 列
            new Array(10).fill(null).map((colItem, colIndex) => {
                let value = Math.round(Math.random() * 10);

                data.series.push([colIndex, rowIndex, value]);
            });
        });

        this.$echarts.dispatch('heatmapSimple', {
            dom: this.$refs.echart,
            param: {
                data: data,
                // color: ['rgba(168, 39, 255, 1)', 'rgba(11, 80, 255, 1)'], // 插拔式开关（颜色）
            },
            opt: {},
        });
    },
};
</script>
