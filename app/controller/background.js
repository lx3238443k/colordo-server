const path = require('path');
const sendToWormhole = require('stream-wormhole');
const awaitWriteStream = require('await-stream-ready').write;
const Controller = require('egg').Controller;
const fs = require('fs');

class BackgroundController extends Controller {

    // 上传文件,文件&openid
    async upload() {
        let result;

        const stream = await this.ctx.getFileStream();
        const openid=encodeURIComponent(stream.fieldname);
        const filename = openid + Date.parse(new Date()) + path.extname(stream.filename).toLowerCase();

        try {
            const user=await this.app.mysql.get('user',{openId:openid});
            const currentFile=user.backgroundImage;
            const oldpath= path.join(this.config.baseDir, this.config.multipart.picturePath, currentFile);
            if(fs.existsSync(oldpath)){
                fs.unlinkSync(oldpath);
            }
            const target = path.join(this.config.baseDir, this.config.multipart.picturePath, filename);
            const writeStream = fs.createWriteStream(target);
            await awaitWriteStream(stream.pipe(writeStream));
            await this.app.mysql.update('user',{backgroundImage:filename},{where:{openId:openid}})
            result='suc'
        } catch (err) {
            result='fail'
            await sendToWormhole(stream);
            throw err;
        }
        this.ctx.body ={result:result,filename:filename};
    }
    //下载图片，openid
    async download() {
        const filePath = path.resolve(this.config.multipart.picturePath, this.ctx.params.filename);
        this.ctx.set('Content-Type', 'image/' + path.extname(filePath).slice(1));
        this.ctx.body = fs.createReadStream(filePath);
    }
}

function deleteBackgroundImage(openid){

}


module.exports = BackgroundController;
