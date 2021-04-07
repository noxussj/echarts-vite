import * as Echarts from 'echarts';
import { use, $echarts } from '../noxussj-echarts/index.js';

export default (app) => {
    use(Echarts);

    app.config.globalProperties.$echarts = $echarts;
};
