exports.keys = '123'



exports.mysql = {
    client: {
      host: '127.0.0.1',
      port: '3306',
      user: 'root',
      password: '',
      database: 'colordoDB',
    },
    app: true,
    // load into agent, default is close
    agent: false,
  };

exports.security = {
   
      csrf: {
        enable: false,
      },
  
    

  };
