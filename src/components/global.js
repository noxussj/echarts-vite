import ToLayout from './plug/block/layout.vue';
import Model from './plug/block/model.vue';
import SubModel from './plug/block/sub-model.vue';

import PieAnnular from './echarts/pie/pie-annular.vue';
import PieLiquidfill from './echarts/pie/pie-liquidfill.vue';
import PiePolar from './echarts/pie/pie-polar.vue';
import LineSimple from './echarts/line/line-simple.vue';
import BarxSimple from './echarts/barx/barx-simple.vue';
import BarxClass from './echarts/barx/barx-class.vue';

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
    app.component('BarxSimple', BarxSimple);
    app.component('BarxClass', BarxClass);
};
