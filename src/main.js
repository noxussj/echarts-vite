import { createApp } from 'vue';
import dom from './app.vue';
let app = createApp(dom);

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
 * 挂载到dom
 */
app.mount('#root');
