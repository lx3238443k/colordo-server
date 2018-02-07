const Service = require('egg').Service;


class CommentService extends Service {
  async addComment(openid,comment) {
    return base(this,msq_addComment,arguments);
  }
  async deleteComment(commentId) {
    return base(this,msq_deleteComment,arguments);
  }
  async updateComment(commentUid,row) {
    return base(this,msq_updateComment,arguments);
  }
}

//高阶函数，context--上下文环境 fun--函数，param--参数
//执行成功返回‘suc’反之返回‘fail’
async function base(context, fun, param) {
  try {
    //如果有返回则返回，没有则返回'suc'
    let result = await fun.apply(context, param);
    return result || 'suc';
  } catch (err) {
    console.log(err);
    return 'fail';
  }
}

async function msq_addComment(openid,comment) {
  await this.app.mysql.insert('comment',comment);
}
async function  msq_deleteComment(commentId) {
  await this.app.mysql.delete('comment',{commentUid:commentId});
}
async function  msq_updateComment(commentUid,row) {
  await this.app.mysql.update('comment',row,{where:{commentUid:commentUid}});
}


module.exports = CommentService;
