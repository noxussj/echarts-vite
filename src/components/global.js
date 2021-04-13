import ToLayout from './plug/block/layout.vue';
import Model from './plug/block/model.vue';
import SubModel from './plug/block/sub-model.vue';

import PieAnnular from './echarts/pie/pie-annular.vue';
import LineSimple from './echarts/line/line-simple.vue';
import BarxSimple from './echarts/barx/barx-simple.vue';

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
    app.component('LineSimple', LineSimple);
    app.component('BarxSimple', BarxSimple);
};
