module.exports = app => {
    const {router,controller} = app;
    router.post('saveUserInfo','/user/saveUserInfo',controller.user.saveUserInfo);
    router.post('addTodo','/todo/addTodo',controller.todo.addTodo);
    router.post('addShareTodo','/todo/addShareTodo',controller.todo.addShareTodo);
    router.post('deleteTodo','/todo/deleteTodo',controller.todo.deleteTodo);
    router.post('updateTodo','/todo/updateTodo',controller.todo.updateTodo);
    
    router.get('/todo/getTodo',controller.todo.getTodo);
}