const { Service } = require('egg');
class TodoService extends Service {

    async addTodo(openid, todo) {
        return base(this, msq_addTodo, arguments);
    }
    async deleteTodo(openid, todo) {
        return base(this,msq_deleteTodo, arguments);
    }
    async updateTodo(openid, todo) {
        return base(this,msq_updateTodo, arguments);
    }
    async getTodo(openid) {
        return base(this,msq_getTodos, arguments);
    }
}

//高阶函数，fun--函数，param--参数
//执行成功返回‘suc’反之返回‘fail’
async function base(context,fun, param) {
    try {
        //如果有返回则返回，没有则返回'suc'
        let result=await fun.apply(context, param);
        return result || 'suc';
    } catch (err) {
        console.log(err);
        return 'fail';
    }
}


async function msq_addTodo(openid, todo) {
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

async function msq_deleteTodo(openid, remindId) {
    //先删除todouser
    let msq_res1 = await this.app.mysql.delete('todoUser', { todoId: todoid });
    //再删除todos
    let msq_res2 = await this.app.mysql.delete('todos', { remindId: todoid });
}

async function msq_updateTodo(openid, remindId, row) {
    row['remindId'] = remindId;
    let msq_res = await this.app.mysql.update('todos', row);
}

//返回openid对应的所有的todos
async function msq_getTodos(openid) {
    let todos = await this.app.mysql.query('select * from todos left join usertodo where usertodo.userId=?', [openid])
    return todos;
}

module.exports = TodoService;