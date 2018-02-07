const { Controller } = require('egg');
class TodoController extends Controller {

    /*
   *添加todo
   *所需参数:todo，openid
   */
    async addTodo() {
        const req = this.ctx.request.body;
        const res = await this.ctx.service.todo.addTodo(req.openid, req.todo);
        this.ctx.body = res;
    }

    /*
     *添加分享的todo
     *所需参数：openid,remindId
    */
    async addShareTodo() {
        const req = this.ctx.request.body;
        const res = await this.ctx.service.todo.addShareTodo(req.openid, req.remindId);
        this.ctx.body = res;
    }

    /*
    *删除分享的todo，从该任务中退出，不影响任务本身
    *所需参数：openid,remindId
   */
    async deleteShareTodo() {
        const req = this.ctx.request.body;
        const res = await this.ctx.service.todo.deleteShareTodo(req.openid, req.remindId);
        this.ctx.body = res;
    }
    /*
   *删除todo
   *所需参数:todos.remindId，openid,
   */
    async deleteTodo() {
        const req = this.ctx.request.body;
        const res = await this.ctx.service.todo.deleteTodo(req.openid, req.remindId);
        this.ctx.body = res;
    }

    /*
    *修改todo
    *所需参数：openid,reminderId,row
    *row为object包含 ，key为修改字段，value为修改字段的新值
    */
    async updateTodo() {
        const req = this.ctx.request.body;
        const res = await this.ctx.service.todo.updateTodo(req.openid, req.remindId, req.row);
        this.ctx.body = res;
    }


    /*
     *查询当前用户对应的todos
     *所需参数openid
    */
    async getTodos() {
        const querie = this.ctx.request.querie;
        const result = await this.ctx.service.todo.getTodos(querie.openid);
        this.ctx.body = res;
    }

    /*
    获取一条任务的详情，包括头像，子任务的详情
    参数 remindId
    */
    async getTodoAndComments() {
        const querie = this.ctx.request.querie;
        const result = await this.ctx.service.todo.getTodoAndComments(querie.remindId);
        this.ctx.body = res;
    }


}

module.exports = TodoController;