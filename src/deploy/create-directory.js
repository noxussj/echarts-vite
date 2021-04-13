module.exports = (() => {
    let fs = require('fs');

    /**
     * 创建目录
     */
    let createDirectory = (path) => {
        return new Promise((resolve) => {
            let arr = path.split('/');
            let checkDir = '';

            /**
             * 遍历循环
             */
            let loop = (index) => {
                if (index < arr.length) {
                    checkDir += `${arr[index]}/`;

                    fs.exists(checkDir, (exist) => {
                        if (!exist) {
                            fs.mkdir(checkDir, (data) => {
                                if (data === null) {
                                    loop(index + 1);
                                }
                            });
                        } else {
                            loop(index + 1);
                        }
                    });
                } else {
                    resolve(true);
                }
            };

            loop(0);
        });
    };

    return createDirectory;
})();
