<template>
    <div class="echarts-dom" ref="echart"></div>
</template>

<script>
export default {
    mounted() {
        let data = {
            series: [
                {
                    name: '今年数据',
                    data: [10, 20, 30, 30, 10, 30, 52, 40, 30, 20, 30, 20],
                },
                {
                    name: '去年数据',
                    data: [20, 30, 10, 20, 52, 40, 30, 30, 30, 10, 30, 20],
                },
            ],
            xAxis: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        };

        this.$echarts.extens('lineSimple', {
            dom: this.$refs.echart,
            param: {
                data: data,
            },
            opt: {},
        });
    },
};
</script>
