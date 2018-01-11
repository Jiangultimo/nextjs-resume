const fs = require('fs');
const yaml = require('js-yaml');
const path = require('path');
const exec = require('child_process').exec;
const assert = require('assert');

const rootPath = path.join(__dirname, '..');

class Deploy {
    constructor() {
        this.deploy = null;
    }
    push() {
        try {
            console.log(rootPath);
            let doc = yaml.load(
                fs.readFileSync(rootPath + '/_deploy.yml', 'utf8')
            );
            console.log(doc);
            this.deploy = doc.deploy;
            console.log(this.deploy.type);
            if (this.deploy.type == 'git') {
                console.log(1);
                exec('cd ' + rootPath, (err, stdout, stderr) => {
                    console.log(2);
                    exec('git add .', (err, stdout, stderr) => {
                        console.log(3);
                        console.log(err);
                        // assert(null, err);
                        exec('git commit -m "' + this.deploy.commit+'"', (err, stdout, stderr) => {
                            assert(null, err);
                        })
                    })
                })
            }
            console.log(this.deploy);
        } catch (error) {
            console.error(error);
        }
    }
}
new Deploy().push();