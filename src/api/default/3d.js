import request from '../libs/ajax/index.js';
import url from '../libs/ajax/url.js';

/**
 * 获取模型数据
 * @func getModel
 */
export const getModel = (param, progress) => {
    return request({
        method: 'GET', // 请求方式： GET、POST
        url: url[0] + `/comm/model`, // 请求地址
        param: param, // 请求参数
        progress: progress, // 进度条
    }).then((res) => {
        return new Promise((resolve) => {
            let data = res.replace(/^eval/, '');

            data = data.replaceAll('\\', '\\\\');

            let dist = eval(data);

            resolve(dist.split(','));
        });
    });
};
