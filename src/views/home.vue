<template>
    <div class="views__home">

        <div class="chart-panel">
            <!-- <pie-annular></pie-annular> -->

            <line-simple></line-simple>
        </div>
    </div>
</template>

<script>
import PieAnnular from '../components/echarts/pie/pie-annular.vue';
import LineSimple from '../components/echarts/line/line-simple.vue';

export default {
    components: {
        PieAnnular,
        LineSimple,
    },
    mounted() {},
};
</script>

<style lang="less" scoped>
.views__home {
    padding: 20px;
    height: 500px;

    .chart-panel {
        padding: 10px;
        width: 590px;
        height: 355px;
        background-color: #fff;
        box-shadow: rgb(10 9 9 / 10%) 0px 0px 5px;
    }
}
</style>