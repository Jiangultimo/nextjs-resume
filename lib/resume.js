const fs = require('fs');
const yaml = require('js-yaml');
const path = require('path');
const root = path.join(__dirname, '..');

const resume = () => {
    try {
        const data = yaml.load(fs.readFileSync(`${root}/config/resume.yaml`), 'urf8');
        return data;
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

const style = () => {
    try{
        const style = yaml.load(fs.readFileSync(`${root}/config/style.yaml`), 'utf8');
        console.log(style);
        return style;
    }catch(err){
        console.error(err);
        process.exit(1);
    }
}

module.exports = {
    resume: resume(),
    style: style()
};
