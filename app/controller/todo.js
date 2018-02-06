const {Controller} = require('egg');
class TodoController extends Controller{

    /*
   *添加todo
   *所需参数:todos，openid
   */
    async addTodo(){
        const req = this.ctx.request.body;
        const res = await this.ctx.service.todo.addTodo(req.todos,req.openid);
        this.ctx.body = res;
    }

    /*
   *删除todo
   *所需参数:todos.remindId，openid,
   */
    async deleteTodo(){
        const req = this.ctx.request.body;
        const res = await this.ctx.service.todo.deleteTodo();
        this.ctx.body =res;
    }

    /*
    *修改todo
    *所需参数：type，todoId，（color，eventTime，completeTime/isComplete）
    */
    async updateTodo(){
        const req = this.ctx.request.body;

        switch(req.type){
            case 'updateColor':

                break;
            case 'updateEventTime':

                break;
            case 'updateIsComplete':

                break;
        }
    }

  
}

module.exports = TodoController;