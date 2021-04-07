<template>
    <div class="echarts-dom" ref="echart"></div>
</template>

<script>
export default {
    mounted() {
        let data = [
            { value: 1048, name: '搜索引擎' },
            { value: 735, name: '直接访问' },
            { value: 580, name: '邮件营销' },
            { value: 484, name: '联盟广告' },
            { value: 300, name: '视频广告' },
        ];

        this.$echarts.extens('pieAnnular', {
            dom: this.$refs.echart,
            param: {
                data: data,
            },
            opt: {},
        });
    },
};
</script>
