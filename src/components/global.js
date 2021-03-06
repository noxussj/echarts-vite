import ToLayout from './plug/block/layout.vue';
import Model from './plug/block/model.vue';
import SubModel from './plug/block/sub-model.vue';

import PieAnnular from './echarts/pie/pie-annular.vue';
import PieLiquidfill from './echarts/pie/pie-liquidfill.vue';
import PiePolar from './echarts/pie/pie-polar.vue';
import LineSimple from './echarts/line/line-simple.vue';
import LineSplit from './echarts/line/line-split.vue';
import BarxSimple from './echarts/barx/barx-simple.vue';
import BarxClass from './echarts/barx/barx-class.vue';
import BarxMultiple from './echarts/barx/barx-multiple.vue';
import WordCloudSimple from './echarts/word-cloud/word-cloud-simple.vue';
import RadarBlock from './echarts/radar/radar-block.vue';
import ScatterSimple from './echarts/scatter/scatter-simple.vue';
import HeatmapSimple from './echarts/heatmap/heatmap-simple.vue';

/**
 * 全局组件
 */
export default (app) => {
    // 布局组件
    app.component('ToLayout', ToLayout);
    app.component('Model', Model);
    app.component('SubModel', SubModel);

    // 图表组件
    app.component('PieAnnular', PieAnnular);
    app.component('PieLiquidfill', PieLiquidfill);
    app.component('PiePolar', PiePolar);
    app.component('LineSimple', LineSimple);
    app.component('LineSplit', LineSplit);
    app.component('BarxSimple', BarxSimple);
    app.component('BarxClass', BarxClass);
    app.component('BarxMultiple', BarxMultiple);
    app.component('WordCloudSimple', WordCloudSimple);
    app.component('RadarBlock', RadarBlock);
    app.component('ScatterSimple', ScatterSimple);
    app.component('HeatmapSimple', HeatmapSimple);
};
