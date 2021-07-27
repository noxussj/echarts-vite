<template>
    <div class="echarts-dom" ref="echart"></div>
</template>

<script>
export default {
    mounted() {
        let data = {
            series: [
                { name: '搜索引擎', data: [10, 20, 30, 10, 30, 52, 30, 40, 30, 20, 30, 20] },
                { name: '直接访问', data: [10, 40, 30, 20, 30, 20, 30, 30, 10, 30, 52, 20] },
                { name: '邮件营销', data: [10, 10, 30, 52, 40, 20, 30, 30, 30, 20, 30, 20] },
                { name: '联盟广告', data: [30, 20, 30, 20, 10, 20, 30, 30, 10, 30, 52, 40] },
            ],
            axis: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        };

        this.$echarts.dispatch('barSimple', {
            dom: this.$refs.echart,
            param: {
                data: data,
                stack: true, // 插拔式开关（堆叠）
            },
            opt: {},
        });
    },
};
</script>
