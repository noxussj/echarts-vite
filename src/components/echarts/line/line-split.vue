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
            },
            opt: {},
        });
    },
};
</script>
