const {Service} = require('egg');
class TodoService extends Service{

    async addTodo(todos,openid){
        
        let msq_res = await this.app.mysql.insert('todos',todos);
        const usertodo = {
            userId:openid,
            todoId:todos.remindId,
            isOwner:true
        }
        let msql_res = await this.app.mysql.insert('userTodo',usertodo);

        

    }
    
    

    
}

module.exports = TodoService;