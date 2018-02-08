const wx = require('./secret');
exports.keys = '123'


exports.mysql = {
  client: {
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: wx.mysql_secret,
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

// config/config.default.js
exports.multipart = {
  fileSize: '2mb',
  picturePath:'app/public/pictures',
  whitelist: [
    '.png',
    '.jpg',
    '.gif',
    '.jpeg'
  ],
};

