import { createRouter, createWebHistory } from 'vue-router';

import routes from './routes.js';

export default (app) => {
    const router = createRouter({
        history: createWebHistory(),
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

    app.use(router);

    return router;
};
