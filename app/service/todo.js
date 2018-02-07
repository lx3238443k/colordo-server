const { Service } = require('egg');
class TodoService extends Service {

    async addTodo(openid, todo) {
        return base(this, msq_addTodo, arguments);
    }
    async addShareTodo(openid,remindId){
        return base(this,msq_addShareTodo,arguments);
    }
    async deleteShareTodo(openid,remindId){
        return base(this,msq_deleteShareTodo,arguments);
    }
    async deleteTodo(openid,remindId) {
        return base(this,msq_deleteTodo, arguments);
    }
    async updateTodo(openid,remindId,row) {
        return base(this,msq_updateTodo, arguments);
    }
    async getTodos(openid) {
        return base(this,msq_getTodos, arguments);
    }

    async getTodoAndComments(remindId){
       return base(this,msq_getTodoAndComments,arguments);
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

async function msq_deleteShareTodo(openid,remindId) {
    await this.app.mysql.delete('userTodo',{userId:openid,todoId:remindId});
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

async function msq_addShareTodo(openid,remindId) {
    let msq_res=await this.app.mysql.insert('userTodo',{userId:openid,todoId:remindId,isOwner:false});
}

async function msq_deleteTodo(openid, remindId) {
    //先删除todouser
    let msq_res1 = await this.app.mysql.delete('userTodo', { todoId: remindId });
    //再删除todos
    let msq_res2 = await this.app.mysql.delete('todos', { remindId: remindId });
}

async function msq_updateTodo(openid, remindId, row) {
    await this.app.mysql.update('todos', row,{where:{remindId:remindId}});
}

//返回openid对应的所有的todos
async function msq_getTodos(openid) {
    let todos = await this.app.mysql.query('select * from userTodo left join todos on userTodo.todoId=todos.remindId  where userTodo.userId=?', [openid])
    return todos;
}

async function msq_getTodoAndComments(remindId) {
    let remind= await this.app.mysql.query('select avatarUrl, nickName,remindId, createTime, creatorOpenId, eventContent, todoColor, eventTime, completeTime, isComplete from todos left join user on todos.creatorOpenId=user.openId where remindId=?',[remindId]);
    if(remind.length<1){
        return [];
    }
    remind=remind[0];
    
    let comments=await this.app.mysql.query(
        'select avatarUrl, nickName, commentId, commentUid, createTime, commentContent, commentColor, isComplete, completeTime, creatorOpenId, parentId from comment left join user on comment.creatorOpenId=user.openId where parentId=?'
        ,[remindId]);
    remind['comments']=comments;
    return remind;
}

module.exports = TodoService;