module.exports = app => {
    const {router,controller} = app;
    router.post('saveUserInfo','/user/saveUserInfo',controller.user.saveUserInfo);
    router.post('addtodo','/todo/addtodo',controller.todo.addTodo);
}