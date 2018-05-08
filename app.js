const Koa = require('koa');
const app = new Koa();

const router = require('./lib/createRouter');
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then( () => {
    router.init({
        app: app,
        nextApp: nextApp
    });
    app.get('*', (req, res) => {
        handle(req, res);
    })
}).catch( err => console.error(err) );

module.exports = app;
