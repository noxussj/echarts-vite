/**
 * 垂直对齐方式
 * @param {Object} data 对象数组
 * @param {Boolean} isPercent 是否展示百分比
 * @param {Number} col 展示几列
 * @param {String} top 距离顶部
 * @param {String} left 距离左侧
 * @param {Number} space 列间隔
 */
let align = (param) => {
    // 数据定义
    let { data, isPercent, col, top, left, space } = param;
    let nameArr = data.map((item) => item.name); // 名称数组
    let values = data.map((item) => item.value);
    let total = values.reduce((a, b) => a + b);
    let res = [];
    let option = {
        show: true,
        top: top,
        left: left,
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
            let res = '';

            let item = data.filter((item) => item.name === name);

            if (item.length > 0) {
                if (isPercent) {
                    let percent = Number(((item[0].value / total) * 100).toFixed(2));

                    res = `${item[0].name} ${percent}%`;
                } else {
                    res = `${item[0].name}`;
                }
            } else {
                res = '　';
            }

            return res;
        },
    };
    let row = Math.ceil(data.length / col); // 总行数

    // 遍历列数
    new Array(col).fill(null).some((colItem, colIndex) => {
        let legendData = [];

        // 遍历行数
        new Array(row).fill(null).some((rowItem, rowIndex) => {
            let index = getIndex({
                col: col,
                colIndex: colIndex + 1,
                rowIndex: rowIndex + 1,
            });

            // 跳出循环
            if (index > col * row) {
                return true;
            } else {
                let name = nameArr[index - 1] || '　';
                if (name === '　') {
                    // 添加占位符
                    legendData.push({
                        name: '　',
                        icon: 'none',
                        textStyle: {
                            color: 'rgba(0, 0, 0, 0)',
                        },
                    });
                } else {
                    legendData.push(name);
                }
            }
        });

        res.push({
            data: legendData,
            ...option,
        });
        option.left += space;
    });

    return res;
};

/**
 * 返回对应的下标
 * @func getIndex
 * @param {Number} col 总列数（固定）
 * @param {Number} colIndex 当前列数（变量）
 * @param {Number} rowIndex 当前行数（变量）
 */
const getIndex = (param) => {
    let { col, colIndex, rowIndex } = param;
    let res = colIndex + col * (rowIndex - 1);

    return res;
};

export default {
    align,
};
