/**
 * 图例排列
 */
let align = (param) => {
    /**
     * 参数接收
     */
    let { data, isPercent, col, top, left, space } = param;

    /**
     * 补空位
     */
    let number = data.length % 2;

    new Array(number).fill(null).map((item) => {
        data.push({
            name: '　',
            value: 0,
        });
    });

    /**
     * 数据分组
     */
    let values = data.map((item) => item.value);

    let total = values.reduce((a, b) => a + b);

    let legend = [];

    new Array(col).fill(null).map((item) => {
        legend.push({
            show: true,
            top: top,
            icon: 'circle',
            itemWidth: 5,
            itemHeight: 5,
            itemGap: 15,
            orient: 'vertical',
            textStyle: {
                color: '#000',
                fontSize: 12,
            },
            formatter: (name) => {
                let res = '　';

                let item = data.filter((item) => item.name === name);

                if (name !== '　') {
                    if (isPercent) {
                        let percent = Number(((item[0].value / total) * 100).toFixed(2));

                        res = `${name} ${percent}%`;
                    } else {
                        res = `${name}`;
                    }
                }

                return res;
            },
            data: [],
        });
    });

    let index = 0;

    data.map((item) => {
        /**
         * 占位符隐藏图标
         */
        if (item.name === '　') {
            legend[index].data.push({
                name: item.name,
                icon: 'none',
                textStyle: {
                    color: 'rgba(0, 0, 0, 0)',
                },
            });
        }

        // push
        else {
            legend[index].data.push(item.name);
        }

        if (index === 2) {
            index = -1;
        }

        index++;
    });

    /**
     * 设置横向间隔
     */
    legend.map((item) => {
        item.left = left;

        left += space;
    });

    return legend;
};

export default {
    align,
};
