const {Controller} = require('egg');
class TodoController extends Controller{

    /*
   *添加todo
   *所需参数:todo，openid
   */
    async addTodo(){
        const req = this.ctx.request.body;
        const res = await this.ctx.service.todo.addTodo(req.openid,req.todo);
        this.ctx.body = res;
    }

    /*
   *删除todo
   *所需参数:todos.remindId，openid,
   */
    async deleteTodo(){
        const req = this.ctx.request.body;
        const res = await this.ctx.service.todo.deleteTodo(req.openid,req.remindId);
        this.ctx.body =res;
    }

    /*
    *修改todo
    *所需参数：openid,reminderId,row
    *row为object包含 ，key为修改字段，value为修改字段的新值
    */
    async updateTodo(){
        const req =this.ctx.request.body;
        const res=await this.ctx.service.todo.updateTodo(req.openid,req.remindId,req.row);
        this.ctx.body=res;
    }
}

module.exports = TodoController;