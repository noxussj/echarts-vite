<template>
    <div class="echarts-dom" ref="echart"></div>
</template>

<script>
export default {
    mounted() {
        let data = [
            { name: '本科', value: 8848 },
            { name: '专科', value: 9527 },
            { name: '研究生', value: 10086 },
        ];

        this.$echarts.dispatch('piePolar', {
            dom: this.$refs.echart,
            param: {
                data: data,
            },
            opt: {},
        });
    },
};
</script>