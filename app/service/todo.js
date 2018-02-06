const {Service} = require('egg');
class TodoService extends Service{

    async addTodo(todos,openid){
        
        let msq_res1 = await this.app.mysql.insert('todos',todos);
        const usertodo = {
            userId:openid,
            todoId:todos.remindId,
            isOwner:true
        }
        let msq_res2 = await this.app.mysql.insert('userTodo',usertodo);

        return 'suc'

    }

    async deleteTodo(todoid,openid){

        let msq_res1 = await this.app.mysql.delete('todos',{ remindId : todoid});
        let msq_res2 = await this.app.mysql.delete('todoUser',{todoId:todoid,userId:openid});
        
        return 'suc'
    }
    
    

    
}

module.exports = TodoService;