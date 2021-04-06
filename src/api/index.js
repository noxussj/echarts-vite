import Config from 'noxussj-ajax';
import url from './url.js';

/**
 * 接口请求方法
 * @func request
 * @param {Object} method 请求方式： 仅支持GET、POST
 * @param {String} url 请求地址
 * @param {Object} param 请求参数
 */
let request = (option) => {
    // 没有指定接口名称时不发起请求
    url.map((item) => {
        if (option.url === item) {
            option.url = '';
        }
    });

    return new Config({
        header: {
            // 'accept-encoding': 'gzip, deflate, br',
            // Authorization: 'APPCODE edc39cc1dc5f4c139498322115b99e51'
            ...option.header,
        },
        method: option.method,
        url: option.url,
        param: option.param,
        progress: option.progress,
        interceptors: interceptors,
        response: response,
    });
};

/**
 * 请求拦截器
 * @func interceptors
 */
let interceptors = (config) => {
    return true;
};

/**
 * 响应拦截器
 * @func response
 */
let response = (data, config) => {
    let res = {};

    // 处理返回格式
    if (data.hasOwnProperty('data')) {
        res = data.data;
    } else {
        res = data;
    }

    return res;
};

export default request;
