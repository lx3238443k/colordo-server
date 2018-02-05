module.exports = app => {
    const {router,controller} = app;
    router.post('saveUserInfo','/saveUserInfo',controller.user.saveUserInfo)
}