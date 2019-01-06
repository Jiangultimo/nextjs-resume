const fs = require('fs');
const yaml = require('js-yaml');
const path = require('path');
const root = path.join(__dirname, '..');

const info = () => {
  try {
    const data = yaml.load(fs.readFileSync(`${root}/config/resume.yaml`), 'urf8');
    const fileName = path.basename(`${root}/config/resume.yaml`);
    return data;
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

const style = () => {
  try{
    const style = yaml.load(fs.readFileSync(`${root}/config/style.yaml`), 'utf8');
    return style;
  }catch(err){
    console.error(err);
    process.exit(1);
  }
}

module.exports = {
  info: info(),
  style: style()
};
