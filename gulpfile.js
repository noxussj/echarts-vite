/**
 * 自动化部署
 */
(async () => {
    let gulp = require('gulp');
    let sftp = require('gulp-sftp-up5');
    let createDirectory = require('./src/deploy/create-directory.js');
    let deleteFiles = require('./src/deploy/delete-files.js');
    let compressFile = require('./src/deploy/compress-file.js');
    let dateFormat = require('./src/deploy/date-format.js');

    let date = dateFormat(new Date(), 'yyyy-MM-dd hmss');

    await createDirectory('compress');

    await compressFile('src', `compress/${date}.zip`); // 压缩本地文件

    let sftpConfig = {
        host: '119.23.53.98', // 服务器地址
        user: 'hn', // 帐号
        pass: 'abc-123-123', // 密码
        port: 22, // 端口
    };

    // 更新web目录
    gulp.src('dist/**').pipe(
        sftp({
            // removeCurrentFolderFiles: true, // 手动在源码中将 linux rm -rf 命令 换成 windows rmdir /s /q ${removePath.replace(/\//g,'\\')}命令
            remotePath: 'web/echarts',
            ...sftpConfig,
        })
    );

    // 版本备份
    gulp.src(`compress/${date}.zip`).pipe(
        sftp({
            remotePath: '/bak/echarts',
            ...sftpConfig,
            callback: function () {
                deleteFiles(`./compress/${date}.zip`); // 手动在源码中添加callback事件 options.callback && options.callback()
            },
        })
    );
})();
