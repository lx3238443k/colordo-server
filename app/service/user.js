const {Service} = require('egg');
class UserService extends Service{

    async saveUserInfo(code,userInfo){
        
        const appid ='wxb95cd616553301a5';
        const secret ='2fcb7f62ba044d0395345d67a64b94fe';
        // 调用微信接口获取openid
        const res = await this.ctx.curl(`https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${code}&grant_type=authorization_code`, { dataType: 'json' });
        const upsert = 'INSERT INTO `user` (`openId` ,`gender` ,`city` ,`province`,`country`,`avatarUrl`,`nickName`,`session_key`) VALUES (?,? ,?,?,?,?,?,?) ON DUPLICATE KEY UPDATE session_key=?';
        const info  =[res.data.openid,userInfo.gender,userInfo.city,userInfo.province,userInfo.country,userInfo.avatarUrl,userInfo.nickName,res.data.session_key,res.data.session_key];
        const sql_res = await this.app.mysql.query(upsert,info); 
     
        return res.data;
    }
  
    
    

    
}

module.exports = UserService;