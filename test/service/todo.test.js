// test/controller/home.test.js
const { app, mock, assert } = require('egg-mock/bootstrap');

describe('test/service/todo.test.js', () => {
    // // test cases
    // it('should add todos', async () => {
    //     const ctx = app.mockContext();
    //     // 通过 ctx 访问到 service.todo
    //     const result = await ctx.service.todo.addTodo('oEg0L0Wou6qomnhDb_7PUTrmY2Qs', {
    //         remindId: '12345',
    //         createTime: '2018-02-06 14:06:00',
    //         creatorOpenId: 'oEg0L0Wou6qomnhDb_7PUTrmY2Qs',
    //         eventContent: '来自测试的数据',
    //         todoColor: 'red',
    //         eventTime: '2018-02-06 14:06:00',
    //         completeTime: null,
    //         isComplete: false
    //     })
    //     assert(result);
    //     assert(result === 'suc');
    // })

    // it('should add updateTodo', async () => {
    //     const ctx = app.mockContext();
    //     // 通过 ctx 访问到 service.todo
    //     const result = await ctx.service.todo.updateTodo('oEg0L0Wou6qomnhDb_7PUTrmY2Qs', '12345', {isComplete: true })
    //     assert(result);
    //     assert(result === 'suc');
    // })

    // it('should add SharedTodo', async () => {
    //     const ctx = app.mockContext();
    //     // 通过 ctx 访问到 service.todo
    //     const result = await ctx.service.todo.addShareTodo('oEg0L0Wou6qomnhDb_7PUTrmY2Qs','b9JaC25n33JwRlD6U0vJtFvjUqlwunjdYJI7972428878')
    //     assert(result);
    //     assert(result === 'suc');
    // })

    // it('should delete ShareTodo', async () => {
    //     const ctx = app.mockContext();
    //     // 通过 ctx 访问到 service.todo
    //     const result = await ctx.service.todo.deleteShareTodo('oEg0L0Wou6qomnhDb_7PUTrmY2Qs','b9JaC25n33JwRlD6U0vJtFvjUqlwunjdYJI7972428878')
    //     assert(result);
    //     assert(result === 'suc');
    // })
    

    // it('should add getTodos', async () => {
    //     const ctx = app.mockContext();
    //     // 通过 ctx 访问到 service.todo
    //     const result = await ctx.service.todo.getTodos('oEg0L0Wou6qomnhDb_7PUTrmY2Qs')
    //     assert(result);
    //     // console.log(result);
    // })


    // it('should add deleteTodo', async () => {
    //     const ctx = app.mockContext();
    //     // 通过 ctx 访问到 service.todo
    //     const result = await ctx.service.todo.deleteTodo('oEg0L0Wou6qomnhDb_7PUTrmY2Qs', '12345')
    //     assert(result);
    //     assert(result === 'suc');
    // })


    // it('获取任务的详情',async () => {
    //     const ctx = app.mockContext();
    //     // 通过 ctx 访问到 service.todo
    //     const result = await ctx.service.todo.getTodoAndComments('W7nQKUhlm5JV5YpvMzI5Qqqfagc9FR1Qt8h7914604854');
    //     console.log(result);
        
    // })

    it('获取任务的详情',async () => {
        const ctx = app.mockContext();
        // 通过 ctx 访问到 service.todo
        const result = await ctx.service.todo.getTodos('oEg0L0Wou6qomnhDb_7PUTrmY2Qs');
        console.log(result);
        
    })


});