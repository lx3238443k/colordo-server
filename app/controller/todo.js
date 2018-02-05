const {Controller} = require('egg');
class TodoController extends Controller{
   

    async addTodo(){
        const req = this.ctx.request.body;
        const res = await this.ctx.service.todo.addTodo(req.todos);
        this.ctx.body = res;
    }

    async deleteTodo(){
        const req = this.ctx.request.body;
    }

  
}

module.exports = TodoController;