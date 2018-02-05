const {Controller} = require('egg');
class UserController extends Controller{
    async saveUserInfo(){
        const req = this.ctx.request.body;
        const data = await this.ctx.service.user.saveUserInfo(req.js_code,req.userInfo);
        
        this.ctx.body = data;
    }
}

module.exports = UserController;