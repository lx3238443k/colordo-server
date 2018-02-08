
const Controller = require('egg').Controller;

class CommentController extends Controller {
  /*添加一个comment
   *参数openId ,comment
   */
  async addComment() {
    const req = this.ctx.request.body;
    const res = await this.ctx.service.comment.addComment(req.openid, req.comment);
    this.ctx.body = res;
  }
  /*删除一个comment
 *参数,commentUid
 */
  async deleteComment() {
    const req = this.ctx.request.body;
    const res = await this.ctx.service.comment.deleteComment(req.commentUid);
    this.ctx.body = res;
  }
   /*更新一个comment
 *参数commentUid，row
 */
  async updateComment() {
    const req = this.ctx.request.body;
    const res = await this.ctx.service.comment.updateComment(req.commentUid,req.row);
    this.ctx.body = res;
  }

}

module.exports = CommentController;
