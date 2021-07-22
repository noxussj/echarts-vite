<template>
    <div class="echarts-dom" ref="echart"></div>
</template>

<script>
export default {
    mounted() {
        let data = {
            indicator: [
                {
                    name: 'Sales',
                    max: 6000,
                },
                {
                    name: 'Administration',
                    max: 16000,
                },
                {
                    name: 'Techology',
                    max: 30000,
                },
                {
                    name: 'Customer Support',
                    max: 35000,
                },
                {
                    name: 'Development',
                    max: 50000,
                },
                {
                    name: 'Marketing',
                    max: 25000,
                },
            ],
            series: [
                {
                    value: [5000, 7000, 12000, 11000, 15000, 14000],
                    name: '预算分配（Allocated Budget）',
                },
            ],
        };

        this.$echarts.dispatch('radarBlock', {
            dom: this.$refs.echart,
            param: {
                data: data,
            },
            opt: {},
        });
    },
};
</script>