const fs = require('fs');
const yaml = require('js-yaml');
const path = require('path');
const root = path.join(__dirname, '..');

const resume = () => {
    const data = yaml.load(fs.readFileSync(`${root}/config/resume.yaml`), 'urf8');
    return data;
}

module.exports = resume();
