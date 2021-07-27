<template>
    <div class="echarts-dom" ref="echart"></div>
</template>

<script>
export default {
    mounted() {
        let data = [
            {
                name: '数据1',
                series: [30, 40, 40, 60],
                xAxis: ['08-01', '08-02', '08-03', '08-04'],
            },
            {
                name: '数据2',
                series: [30, 20, 10, 80],
                xAxis: ['08-05', '08-06', '08-07', '08-08'],
            },
            {
                name: '数据3',
                series: [30, 20, 10, 30],
                xAxis: ['08-09', '08-10', '08-11', '08-12'],
            },
        ];

        this.$echarts.dispatch('lineSplit', {
            dom: this.$refs.echart,
            param: {
                data: data,
                // color: ['rgba(255, 0, 0, 1)', 'rgba(0, 255, 0, 1)', 'rgba(0, 0, 255, 1)'], // 插拔式开关（颜色）
                // isAreaColor: true, // 插拔式开关（是否开启区域渐变）
                // isSmooth: true, // 插拔式开关（是否开启曲线）
            },
            opt: {},
        });
    },
};
</script>
