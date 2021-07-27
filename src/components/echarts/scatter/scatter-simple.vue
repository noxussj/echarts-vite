<template>
    <div class="echarts-dom" ref="echart"></div>
</template>

<script>
export default {
    mounted() {
        let data = {
            series: [
                {
                    name: '男性',
                    data: [
                        [Math.random() * 10000, Math.random() * 100, Math.random() * 50, 'Australia'],
                        [Math.random() * 10000, Math.random() * 100, Math.random() * 50, 'Canada'],
                        [Math.random() * 10000, Math.random() * 100, Math.random() * 50, 'China'],
                        [Math.random() * 10000, Math.random() * 100, Math.random() * 50, 'Cuba'],
                        [Math.random() * 10000, Math.random() * 100, Math.random() * 50, 'Finland'],
                        [Math.random() * 10000, Math.random() * 100, Math.random() * 50, 'France'],
                        [Math.random() * 10000, Math.random() * 100, Math.random() * 50, 'Germany'],
                        [Math.random() * 10000, Math.random() * 100, Math.random() * 50, 'Iceland'],
                        [Math.random() * 10000, Math.random() * 100, Math.random() * 50, 'India'],
                        [Math.random() * 10000, Math.random() * 100, Math.random() * 50, 'Japan'],
                        [Math.random() * 10000, Math.random() * 100, Math.random() * 50, 'North Korea'],
                        [Math.random() * 10000, Math.random() * 100, Math.random() * 50, 'South Korea'],
                        [Math.random() * 10000, Math.random() * 100, Math.random() * 50, 'New Zealand'],
                        [Math.random() * 10000, Math.random() * 100, Math.random() * 50, 'Norway'],
                        [Math.random() * 10000, Math.random() * 100, Math.random() * 50, 'Poland'],
                        [Math.random() * 10000, Math.random() * 100, Math.random() * 50, 'Russia'],
                        [Math.random() * 10000, Math.random() * 100, Math.random() * 50, 'Turkey'],
                        [Math.random() * 10000, Math.random() * 100, Math.random() * 50, 'United Kingdom'],
                        [Math.random() * 10000, Math.random() * 100, Math.random() * 50, 'United States'],
                    ],
                },
                {
                    name: '女性',
                    data: [
                        [Math.random() * 10000, Math.random() * 100, Math.random() * 50, 'Australia'],
                        [Math.random() * 10000, Math.random() * 100, Math.random() * 50, 'Canada'],
                        [Math.random() * 10000, Math.random() * 100, Math.random() * 50, 'China'],
                        [Math.random() * 10000, Math.random() * 100, Math.random() * 50, 'Cuba'],
                        [Math.random() * 10000, Math.random() * 100, Math.random() * 50, 'Finland'],
                        [Math.random() * 10000, Math.random() * 100, Math.random() * 50, 'France'],
                        [Math.random() * 10000, Math.random() * 100, Math.random() * 50, 'Germany'],
                        [Math.random() * 10000, Math.random() * 100, Math.random() * 50, 'Iceland'],
                        [Math.random() * 10000, Math.random() * 100, Math.random() * 50, 'India'],
                        [Math.random() * 10000, Math.random() * 100, Math.random() * 50, 'Japan'],
                        [Math.random() * 10000, Math.random() * 100, Math.random() * 50, 'North Korea'],
                        [Math.random() * 10000, Math.random() * 100, Math.random() * 50, 'South Korea'],
                        [Math.random() * 10000, Math.random() * 100, Math.random() * 50, 'New Zealand'],
                        [Math.random() * 10000, Math.random() * 100, Math.random() * 50, 'Norway'],
                        [Math.random() * 10000, Math.random() * 100, Math.random() * 50, 'Poland'],
                        [Math.random() * 10000, Math.random() * 100, Math.random() * 50, 'Russia'],
                        [Math.random() * 10000, Math.random() * 100, Math.random() * 50, 'Turkey'],
                        [Math.random() * 10000, Math.random() * 100, Math.random() * 50, 'United Kingdom'],
                        [Math.random() * 10000, Math.random() * 100, Math.random() * 50, 'United States'],
                    ],
                },
            ],
        };

        this.$echarts.dispatch('scatterSimple', {
            dom: this.$refs.echart,
            param: {
                data: data,
            },
            opt: {},
        });
    },
};
</script>
