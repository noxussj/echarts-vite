import { createApp } from 'vue';
import dom from './app.vue';
const app = createApp(dom);

/**
 * 导入静态资源
 */
import './assets/css/reset.css';
import './assets/css/base.css';

/**
 * 导入第三方框架
 */
import elementPlus from './libs/import/element-plus.js';

elementPlus(app);

/**
 * 导入插件
 */
import Router from './router/index.js';

let router = Router(app);

/**
 * 完成路由后挂载到dom
 */
router.isReady().then(() => app.mount('#root'));
