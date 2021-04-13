import { type } from './dfs-deep-copy.js';

// 暂无数据校验
let check = data => {
    let res = true;

    // 数组
    if (type(data) === 'array') {
        if (data.length === 0) {
            res = false;
        }
    }

    // 对象
    else if (type(data) === 'object') {
        if (Object.keys(data).length === 0) {
            res = false;
        }
    }

    return res;
};

export default check;
