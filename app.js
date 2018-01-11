const express = require('express');
const app = express();
const DBOperation = require('./util/util');

app.get('/', (req, res) => {
    DBOperation.connectDB((client, db) => {
        DBOperation.insertData(db, {
            name:'hehe',
            link:'wu'
        }, (result) => {
            console.log(result)
            if(result.result.ok == 1){
                res.send('hello mongodb');
            }
        })
    })
})

app.listen(3000, () => {
    console.log('server start at port 3000');
})


