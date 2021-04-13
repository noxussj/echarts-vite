// 深度优先遍历
let dfs = data => {
    let newData;

    if (type(data) === 'array') {
        newData = [];
        data.map((item, index) => {
            newData[index] = dfs(item);
        });
    } else if (type(data) === 'object') {
        newData = {};
        Object.keys(data).map(item => {
            newData[item] = dfs(data[item]);
        });
    } else {
        newData = data;
    }

    return newData;
};

// 类型字典
export let type = data => {
    let dist = {
        '[object Array]': 'array',
        '[object Object]': 'object',
        '[object Number]': 'number',
        '[object Function]': 'function',
        '[object String]': 'string',
        '[object Null]': 'null',
        '[object Undefined]': 'undefined'
    };

    return dist[Object.prototype.toString.call(data)];
};

export default dfs;
