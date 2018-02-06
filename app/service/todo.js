const { Service } = require('egg');
class TodoService extends Service {

    //高阶函数，fun--函数，param--参数
    //执行成功返回‘suc’反之返回‘fail’
    async base(fun, param) {
        try {
            //如果有返回则返回，没有则返回'suc'
            return fun.apply(null, param) || 'suc';
        } catch (err) {
            console.log(err);
            return 'fail';
        }
    }

    async msq_addTodo(openid, todo) {
        //插入todo
        let msq_res1 = await this.app.mysql.insert('todos', todo);
        //建立关联
        const usertodo = {
            userId: openid,
            todoId: todo.remindId,
            isOwner: true
        }
        let msq_res2 = await this.app.mysql.insert('userTodo', usertodo);
    }

    async msq_deleteTodo(openid, remindId) {
        //先删除todouser
        let msq_res1 = await this.app.mysql.delete('todoUser', { todoId: todoid });
        //再删除todos
        let msq_res2 = await this.app.mysql.delete('todos', { remindId: todoid });
    }

    async msq_updateTodo(openid, remindId, row) {
        row['remindId'] = remindId;
        let msq_res = await this.app.mysql.update('todos', row);
    }

    //返回openid对应的所有的todos
    async msq_getTodos(openid){
        let todos=await this.app.mysql.query('select * from todos left join usertodo where usertodo.userId=?',[openid])
        return todos;
    }

    async addTodo(openid, todo) {
        return base(msq_addTodo, arguments);
    }
    async deleteTodo(openid, todo) {
        return base(msq_deleteTodo, arguments);
    }
    async updateTodo(openid, todo) {
        return base(msq_updateTodo, arguments);
    }
    async getTodo(openid) {
        return base(msq_getTodos,arguments);
    }


}

module.exports = TodoService;