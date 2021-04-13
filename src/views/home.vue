<template>
    <div class="views__home">
        <div class="chart-panel">
            <pie-annular></pie-annular>
        </div>

        <!-- <div class="chart-panel">
            <barx-simple></barx-simple>
        </div> -->

        <!-- <div class="chart-panel">
            <line-simple></line-simple>
        </div> -->
    </div>
</template>


<style lang="less" scoped>
.views__home {
    padding: 20px;
    height: 500px;

    .chart-panel {
        margin-bottom: 20px;
        padding: 10px;
        width: 590px;
        height: 355px;
        background-color: #fff;
        box-shadow: rgb(10 9 9 / 10%) 0px 0px 5px;
    }
}
</style>