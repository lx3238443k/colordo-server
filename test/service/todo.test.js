// test/controller/home.test.js
const { app, mock, assert } = require('egg-mock/bootstrap');

describe('test/service/todo.test.js', () => {
  // test cases
  it('should add todos',async ()=>{
    const ctx = app.mockContext();
    // 通过 ctx 访问到 service.todo
    const result = await ctx.service.todo.addTodo('oEg0L0Wou6qomnhDb_7PUTrmY2Qs',{
        remindId:'12344',
        createTime:'2018-02-06 14:06:00',
        creatorOpenId:'oEg0L0Wou6qomnhDb_7PUTrmY2Qs',
        eventContent:'123',
        todoColor:'red',
        eventTime:'2018-02-06 14:06:00',
        completeTime:null,
        isComplete:false
    })
    assert(result);
    assert(result === 'suc');

  })
});