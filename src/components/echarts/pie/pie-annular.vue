<template>
    <div class="echarts-dom" ref="echart"></div>
</template>

<script>
export default {
    mounted() {
        const data = [
            { value: 1048, name: '搜索引擎' },
            { value: 735, name: '直接访问' },
            { value: 580, name: '邮件营销' },
            { value: 484, name: '联盟广告' },
            { value: 300, name: '视频广告' },
        ];

        this.$echarts.dispatch('pieAnnular', {
            dom: this.$refs.echart,
            param: {
                data: data,

                radius: [40, 60], // 半径大小
                center: ['center', 120], // 位置

                // 插拔式开关（渐变色）
                gradient: {
                    start: ['rgba(168, 39, 255, 1)', 'rgba(130, 39, 255, 1)', 'rgba(90, 0, 255, 1)', 'rgba(31, 84, 255, 1)', 'rgba(46, 41, 255, 1)'],
                    end: ['rgba(6, 0, 255, 1)', 'rgba(11, 80, 255, 1)', 'rgba(0, 168, 255, 1)', 'rgba(0, 204, 255, 1)', 'rgba(15, 241, 255, 1)'],
                },
                // color: ['rgba(0, 255, 612, 1)', 'rgba(6, 0, 255, 1)'], // 插拔式开关（颜色，和渐变色冲突，只能开启其中一个）
                isLegendPercent: true, // 插拔式开关（图例百分比）
                isTransparent: true, // 插拔式开关（半透明高亮）
                isTotal: true, // 插拔式开关（是否展示总数）
                isSplitLine: true, // 插拔式开关（是否使用分割线）
                splitColor: 'rgba(255, 255, 255, 1)', // 插拔式开关（分割线颜色）
            },
            opt: {},
        });
    },
};
</script>
