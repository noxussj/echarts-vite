import * as Echarts from 'echarts';

/**
 * 引用基本库
 */
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/grid';

/**
 * 引用扩展库
 */
import 'echarts-liquidfill';

import { use, $echarts } from 'noxussj-echarts';

export default (app) => {
    use(Echarts);

    app.config.globalProperties.$echarts = $echarts;
};
