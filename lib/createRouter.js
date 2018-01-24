const fs = require('fs');
const path = require('path');
const resume = require('../lib/resume');

class CreateRouter{
    constructor(){
    }

    init(options){
        const { app, nextApp } = options;
        const root = path.join(__dirname, '../');
        const files = fs.readdirSync(root+'/pages' );
        for(let file of files){
            let fileName = path.basename(file, '.js');
            app.use(`/${fileName}`, function(req, res){
                console.log('resume', resume);
                nextApp.render(req, res, `/${fileName}`, resume);
            })
        }
    }
}

module.exports = new CreateRouter;