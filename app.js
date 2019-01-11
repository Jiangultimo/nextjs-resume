const express = require('express');
const app = express();
const next = require('next');

const router = require('./lib/createRouter');
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

router.init({
  app: app,
  nextApp: undefined,
  isNext: false
})
nextApp.prepare().then( () => {
  router.init({ // 防止刷新页面出现404的情况
    app: app,
    nextApp: nextApp,
    isNext: true
  });
  app.get('*', (req, res) => {
    handle(req, res);
  });
}).catch( err => console.error(err) );

app.listen(process.env.PORT || 3000);
