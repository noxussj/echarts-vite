// 类型字典
let type = (data) => {
    try {
        let dist = {
            '[object Array]': 'array',
            '[object Object]': 'object',
            '[object Number]': 'number',
            '[object Function]': 'function',
            '[object String]': 'string',
            '[object Null]': 'null',
            '[object Undefined]': 'undefined',
        };

        return dist[Object.prototype.toString.call(data)];
    } catch (error) {
        console.log('error', error);
    }
};

/**
 * 对象多层合并
 */
let assign = (target = {}, sources = {}, filterKeys = []) => {
    let obj = target;

    /**
     * 如果其中有一个不是对象、数组，则返回
     */
    if (['object', 'array'].indexOf(type(target)) === -1 || ['object', 'array'].indexOf(type(sources)) === -1) {
        return sources;
    }

    for (let key in sources) {
        /**
         * 如果target也存在该key，并且key不在过滤列表中，则继续合并
         */
        if (target.hasOwnProperty(key) && filterKeys.indexOf(key) === -1) {
            obj[key] = assign(target[key], sources[key], filterKeys);
        }

        // 不存在就直接添加
        else {
            obj[key] = sources[key];
        }
    }
    return obj;
};

export default assign;
