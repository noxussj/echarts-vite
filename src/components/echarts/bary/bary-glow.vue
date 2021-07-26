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
                    data: [2168, 2478, 3448, 6009, 9230],
                },
            ],
            yAxis: ['搜索引擎', '直接访问', '邮件营销', '联盟广告', '视频广告'],
        };

        this.$echarts.dispatch('baryGlow', {
            dom: this.$refs.echart,
            param: {
                data: data,
            },
            opt: {},
        });
    },
};
</script>
