const fs = require('fs');
const yaml = require('js-yaml');
const path = require('path');
const shelljs = require('shelljs');
const rootPath = path.join(__dirname, '..');


class Deploy {
    checkGit(){
        if(!shelljs.which('git')){
            shelljs.echo('cant find git, install it!');
            shelljs.exit(1);
            return false;
        }else{
            return true;
        }
    }
    getGitConfig() {
        const git = new Promise( (resolve, reject) => {
            try{
                let gitConfig = yaml.load(fs.readFileSync(rootPath + '/_deploy.yml', 'utf8'));
                let config = gitConfig.deploy;
                config.url = `git@github.com:${config.username}/${config.repository}.git`;
                if(config.url == gitConfig.deploy.url){
                    resolve(config);
                }else{
                    reject('plz check your git config');
                }
            }catch(err){
                reject(err);
            }
        })
        return git;
    }
    _deploy(){
        const deploy = new Promise( (resolve, reject) => {
            if(this.checkGit()){
                
            }
        })
    }
}
new Deploy().checkGit();
new Deploy().getGitConfig().then( data => console.log(data));