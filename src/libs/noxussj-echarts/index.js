import { toLowerCaseBar } from './libs/name-format.js';

class Echarts {
    constructor(echarts) {
        this.echarts = echarts;
    }

    /**
     * 继承父级图表配置项
     */
    async extens(echartsName, param) {
        let keys = ['pie', 'line', 'barx'];

        let key = '';

        keys.map((item) => {
            let reg = new RegExp(`^${item}`, 'g');

            if (reg.test(echartsName)) {
                key = item;
            }
        });

        if (!key) {
            console.error('提示', `该图表名称${echartsName}不存在`);

            return false;
        }

        let name = toLowerCaseBar(echartsName);

        let dispatch = () => import(`./echarts/${key}/${name}.js`);

        let component = (await dispatch()).default(param);

        return component;
    }

    /**
     * 渲染图表
     */
    render(dom, opt) {
        let instance = this.echarts.init(dom);

        instance.setOption(opt);

        return instance;
    }
}

let $echarts = null;

export let use = (pack) => {
    $echarts = new Echarts(pack);
};

export { $echarts };
