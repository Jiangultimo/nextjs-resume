const yaml = require('js-yaml');
const path = require('path');
const fs = require('fs');

const rootPath = path.join(__dirname, '..');

const getDBConfig = () => {
    try{
        let doc = yaml.load(
            fs.readFileSync(rootPath+'/.db.yaml', 'utf8')
        );
        return doc;
    }catch(e){
        console.error(e);
    }
}

class Config{
    constructor() {
        this.getDB= getDBConfig;
    }
}

module.exports = new Config;