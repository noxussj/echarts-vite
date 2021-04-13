import { createRouter, createWebHashHistory } from 'vue-router';

import routes from './routes.js';

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
});

/**
 * 全局前置守卫
 */
router.beforeEach((to, from, next) => {
    next();
});

/**
 * 全局后置钩子
 */
router.afterEach((to, from) => {});

export default router;
