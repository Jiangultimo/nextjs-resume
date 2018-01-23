const express = require('express');
const app = express();
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const DBOperation = require('./util/util');

nextApp.prepare().then( () => {
    app.get('*', (req, res) => {
        handle(req, res);
    })
}).catch( err => console.error(err) );

module.exports = app;
