const fs = require('fs');
const path = require('path');
const { resume, style } = require('../lib/resume');

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
                const params = {
                    resume: resume,
                    style: style
                }
                nextApp.render(req, res, `/${fileName}`, params);
            })
        }
    }
}

module.exports = new CreateRouter;