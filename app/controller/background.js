
const path = require('path');
const sendToWormhole = require('stream-wormhole');
const Controller = require('egg').Controller;
const fs = require('fs');

class BackgroundController extends Controller {

    // 上传文件,文件&openid
    async upload() {
        const ctx = this.ctx;
        const openid = this.ctx.request.body.openid;
        let stream;
        let result;
        let name ;
        try {
            stream= await ctx.getFileStream();
            name=this.config.multipart.picturePath+'/'+ openid + path.extname(stream.filename);
            let writeStream = fs.createWriteStream(name, { flags : 'w' });
            stream.pipe(writeStream);
            result = 'suc';
        } catch (err) {
            result = 'fail';
            console.error(err);
        }
        this.ctx.body = {
            result: result,
            filename: name
        };

    }
    //下载图片，openid
    async download() {
        const filePath = path.resolve(this.config.multipart.picturePath,this.ctx.params.filename);
        this.ctx.set('Content-Type', 'image/'+path.extname(filePath).slice(1));

        this.ctx.body = fs.createReadStream(filePath);
    }
}

module.exports = BackgroundController;
