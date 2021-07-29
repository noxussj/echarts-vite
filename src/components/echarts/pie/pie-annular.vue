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
                isLegendPercent: true, // 插槽式开关（图例百分比）
                isTransparent: true, // 插拔式开关（半透明高亮）
                isTotal: true, // 插拔式开关（是否展示总数）
                isSplitLine: true, // 插拔式开关（是否使用分割线）
            },
            opt: {},
        });
    },
};
</script>
