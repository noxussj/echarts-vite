<template>
    <div class="echarts-dom" ref="echart"></div>
</template>

<script>
export default {
    mounted() {
        let data = {
            series: [
                {
                    name: '1月',
                    data: [2168, 2478, 3448, 6009, 9230],
                },
            ],
            axis: ['搜索引擎', '直接访问', '邮件营销', '联盟广告', '视频广告'],
        };

        this.$echarts.dispatch('barSimple', {
            dom: this.$refs.echart,
            param: {
                data: data,
                // direction: 'x', // 插拔式开关（方向）
                // stack: true, // 插拔式开关（堆叠）
                // background: 'rgba(180, 180, 180, 0.1)', // 插拔式开关（背景色）
                // color: ['rgba(168, 39, 255, 1)', 'rgba(11, 80, 255, 1)', 'rgba(0, 255, 213, 1)'], // 插拔式开关（颜色）
                // barWidth: 15, // 插拔式开关（柱状图尺寸）
            },
            opt: {},
        });
    },
};
</script>
