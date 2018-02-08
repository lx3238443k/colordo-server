module.exports = app => {
    const {router,controller} = app;
    router.post('saveUserInfo','/user/saveUserInfo',controller.user.saveUserInfo);

    router.post('addTodo','/todo/addTodo',controller.todo.addTodo);
    router.post('addShareTodo','/todo/addShareTodo',controller.todo.addShareTodo);
    router.post('deleteShareTodo','/todo/deleteShareTodo',controller.todo.deleteShareTodo);
    router.post('deleteTodo','/todo/deleteTodo',controller.todo.deleteTodo);
    router.post('updateTodo','/todo/updateTodo',controller.todo.updateTodo);
    router.get('/todo/getTodos',controller.todo.getTodos);
    
    router.get('/todo/getTodoAndComments',controller.todo.getTodoAndComments);

    router.post('addComment','/comment/addComment',controller.comment.addComment);
    router.post('deleteComment','/comment/deleteComment',controller.comment.deleteComment);
    router.post('updateComment','/comment/updateComment',controller.comment.updateComment);


    router.post('uploadBackgroud','/background/upload',controller.background.upload);
    router.get('/background/download/:filename',controller.background.download);


}