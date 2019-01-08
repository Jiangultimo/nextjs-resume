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
        const gitConfig = yaml.load(fs.readFileSync(rootPath + '/deploy.yml', 'utf8'));
        const config = gitConfig.deploy;
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
    if(this.checkGit()){
      this.getGitConfig().then( data => {
        const {type,repository, username, url, commit} = data;
        if(type == 'git'){

        }
      }).catch( err => shelljs.echo(err))
    }
    const deploy = new Promise( (resolve, reject) => {
      if(this.checkGit()){

      }
    })
  }
}
new Deploy().checkGit();
new Deploy().getGitConfig().then( data => console.log(data));
