module.exports = (() => {
    let fs = require('fs');

    /**
     * 删除文件
     */
    let deleteFiles = (path) => {
        return new Promise((resolve) => {
            fs.unlink(path, (err) => {
                if (err) {
                    throw err;
                }

                console.log('文件:' + path + '删除成功！');
            });
        });
    };

    return deleteFiles;
})();
