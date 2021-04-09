/**
 * 格式（小写驼峰）转 格式（小写横杠）
 */
let toLowerCaseBar = (data) => {
    let res = '';

    if (data) {
        res = data.replace(/[A-Z]/g, (item) => `-${item.toLowerCase()}`);
    }

    return res;
};

export { toLowerCaseBar };
