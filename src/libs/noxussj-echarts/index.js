class Echarts {
    constructor(echarts) {
        this.echarts = echarts;
    }

    /**
     * 继承父级图表配置项
     */
    async extens(name, param) {
        let dispatch = () => import('./echarts/pie/pie-annular.js');

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
