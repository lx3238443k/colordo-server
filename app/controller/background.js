const path = require('path');
const sendToWormhole = require('stream-wormhole');
const awaitWriteStream = require('await-stream-ready').write;
const Controller = require('egg').Controller;
const fs = require('fs');

class BackgroundController extends Controller {

    // 上传文件,文件&openid
    async upload() {
        const stream = await this.ctx.getFileStream();
        // console.log(stream)
        const filename = encodeURIComponent(stream.fieldname) + path.extname(stream.filename).toLowerCase();
        const target = path.join(this.config.baseDir, 'app/public/pictures', filename);
        const writeStream = fs.createWriteStream(target);
        let result;
        try {
            await awaitWriteStream(stream.pipe(writeStream));
            result='suc'
        } catch (err) {
            result='fail'
            await sendToWormhole(stream);
            throw err;
        }

        this.ctx.body =filename;

    }
    //下载图片，openid
    async download() {
        const filePath = path.resolve(this.config.multipart.picturePath, this.ctx.params.filename);
        this.ctx.set('Content-Type', 'image/' + path.extname(filePath).slice(1));

        this.ctx.body = fs.createReadStream(filePath);
    }
}


module.exports = BackgroundController;
