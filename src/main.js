import { createApp } from 'vue';
import dom from './app.vue';
const app = createApp(dom);

/**
 * 导入静态资源
 */
import './assets/css/reset.css';
import './assets/css/base.css';

/**
 * 导入插件
 */
import router from './router/index.js';

app.use(router);

import store from './store/index.js';

app.use(store);

import less from 'less';

app.use(less);

/**
 * 导入第三方框架
 */
import elementPlus from './libs/import/element-plus.js';

elementPlus(app);

import echarts from './libs/import/echarts.js';

echarts(app);

/**
 * 完成路由后挂载到dom
 */
router.isReady().then(() => app.mount('#root'));
