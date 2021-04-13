/**
 * 压缩本地文件
 */
module.exports = (() => {
    let fs = require('fs');
    let archiver = require('archiver');

    let compressFile = (entry, exitus) => {
        return new Promise((resolve) => {
            /**
             * 创建文件输出流
             */
            let output = fs.createWriteStream(exitus);

            /**
             * 设置压缩级别
             */
            let archive = archiver('zip', {
                zlib: { level: 9 },
            });

            /**
             * 文件输出流结束
             */
            output.on('close', () => {
                console.log(`总共 ${archive.pointer()} 字节`);
                console.log('archiver完成文件的归档，文件输出流描述符已关闭');
                resolve(true);
            });

            /**
             * 通过管道方法将输出流存档到文件
             */
            archive.pipe(output);

            /**
             * 从子目录追加文件并将其命名为“新子dir”在存档中
             */
            archive.directory(entry);

            /**
             * 完成归档
             */
            archive.finalize();
        });
    };

    return compressFile;
})();
