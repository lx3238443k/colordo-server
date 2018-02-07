module.exports = app => {
    const {router,controller} = app;
    router.post('saveUserInfo','/user/saveUserInfo',controller.user.saveUserInfo);

    router.post('addTodo','/todo/addTodo',controller.todo.addTodo);
    router.post('addShareTodo','/todo/addShareTodo',controller.todo.addShareTodo);
    router.post('deleteTodo','/todo/deleteTodo',controller.todo.deleteTodo);
    router.post('updateTodo','/todo/updateTodo',controller.todo.updateTodo);
    router.get('/todo/getTodos',controller.todo.getTodos);
    
    router.get('/todo/getTodoAndComments',controller.todo.getTodoAndComments);

    router.post('addComment','/comment/addComment',controller.comment.addComment);
    router.post('deleteComment','/comment/deleteComment',controller.comment.deleteComment);
    router.post('updateComment','/comment/updateComment',controller.comment.updateComment);


}