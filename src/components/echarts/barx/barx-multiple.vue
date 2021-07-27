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
                    data: [10, 20, 30, 30, 10, 30],
                },
                {
                    name: '去年数据',
                    data: [10, 52, 40, 30, 20, 30],
                },
            ],
            axis: ['1月', '2月', '3月', '4月', '5月', '6月'],
        };

        this.$echarts.dispatch('barSimple', {
            dom: this.$refs.echart,
            param: {
                data: data,
            },
            opt: {},
        });
    },
};
</script>
