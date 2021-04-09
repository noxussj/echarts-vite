import { toLowerCaseBar } from './libs/name-format.js';
import EchartsExtens from './libs/echarts-extens.js';
import echartsMap from './libs/echarts-map.js';

class Echarts {
    constructor(echarts) {
        this.echarts = echarts;
    }

    /**
     * 继承option
     */
    extens(FirstOBJ, SecondOBJ) {
        let echartsExtens = new EchartsExtens();

        return echartsExtens.extens(FirstOBJ, SecondOBJ);
    }

    /**
     * 调用指定图表方法
     */
    async dispatch(echartsName, param) {
        let names = Object.keys(echartsMap);

        if (names.indexOf(echartsName) === -1) {
            console.error('提示', `该图表名称${echartsName}不存在`);

            return false;
        }

        let dispatch = echartsMap[echartsName];

        let component = await dispatch(param);

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
