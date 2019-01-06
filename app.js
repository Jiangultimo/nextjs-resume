const express = require('express');
const app = express();
const next = require('next');

const router = require('./lib/createRouter');
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then( () => {
  router.init({ // 方式刷新页面出现404的情况
    app: app,
    nextApp: nextApp
  });
  app.get('*', (req, res) => {
    handle(req, res);
  });
}).catch( err => console.error(err) );

module.exports = app;
