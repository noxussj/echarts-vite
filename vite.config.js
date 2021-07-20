import vue from '@vitejs/plugin-vue';
import vitePluginImp from 'vite-plugin-imp';

/**
 * vite 配置
 */
export default {
    server: {
        hmr: false, // 关闭热更新
        port: 3002,
    },
    plugins: [
        vue(),
        vitePluginImp({
            libList: [
                {
                    libName: 'element-plus',
                    style: (name) => {
                        return `element-plus/lib/theme-chalk/${name}.css`;
                    },
                },
            ],
        }),
    ],
    build: {
        minify: 'esbuild', // 打包工具  terser （体积小，速度慢） esbuild （体积大，速度快）
    },
};
