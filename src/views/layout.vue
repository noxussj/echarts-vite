<template>
    <div class="views__layout">
        <to-layout :orient="'vertical'">
            <model :width="'100%'" :height="'33%'" :orient="'horizontal'">
                <sub-model :width="'25%'" :height="'100%'" title="pieLiquidfill">
                    <div class="to__block">
                        <pie-liquidfill></pie-liquidfill>
                    </div>
                </sub-model>
                <sub-model :width="'25%'" :height="'100%'" title="piePolar">
                    <div class="to__block">
                        <pie-polar></pie-polar>
                    </div>
                </sub-model>
                <sub-model :width="'25%'" :height="'100%'" title="radarBlock">
                    <div class="to__block">
                        <radar-block></radar-block>
                    </div>
                </sub-model>
                <sub-model :width="'25%'" :height="'100%'" title="wordCloudSimple">
                    <div class="to__block">
                        <word-cloud-simple></word-cloud-simple>
                    </div>
                </sub-model>
            </model>
            <model :width="'100%'" :height="'33%'" :orient="'horizontal'">
                <sub-model :width="'25%'" :height="'100%'" title="pieAnnular">
                    <div class="to__block">
                        <pie-annular></pie-annular>
                    </div>
                </sub-model>
                <sub-model :width="'25%'" :height="'100%'" title="lineSimple">
                    <div class="to__block">
                        <line-simple></line-simple>
                    </div>
                </sub-model>
                <sub-model :width="'25%'" :height="'100%'" title="lineSplit">
                    <div class="to__block">
                        <line-split></line-split>
                    </div>
                </sub-model>
                <sub-model :width="'25%'" :height="'100%'" title="barxSimple">
                    <div class="to__block">
                        <barx-simple></barx-simple>
                    </div>
                </sub-model>
            </model>
            <model :width="'100%'" :height="'34%'" :orient="'horizontal'">
                <sub-model :width="'25%'" :height="'100%'" title="barxMultiple">
                    <div class="to__block">
                        <barx-multiple></barx-multiple>
                    </div>
                </sub-model>
                <sub-model :width="'25%'" :height="'100%'" title="barxClass">
                    <div class="to__block">
                        <barx-class></barx-class>
                    </div>
                </sub-model>
                <sub-model :width="'25%'" :height="'100%'" title="scatterSimple">
                    <div class="to__block">
                        <scatter-simple></scatter-simple>
                    </div>
                </sub-model>
                <sub-model :width="'25%'" :height="'100%'" title="heatmapSimple">
                    <div class="to__block">
                        <heatmap-simple></heatmap-simple>
                    </div>
                </sub-model>
            </model>
        </to-layout>
    </div>
</template>

<style lang="less" scoped>
.views__layout {
    height: 100%;

    .to__block {
        height: 100%;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 4px;
    }
}
</style>