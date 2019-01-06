const fs = require('fs');
const path = require('path');

class CreateRouter {
  init(options) {
    const { app, nextApp } = options;
    const root = path.join(__dirname, '../');
    const files = fs.readdirSync(`${root}/pages`);
    const apiFiles = fs.readdirSync(`${root}/serve`);

    for (let apiFile of apiFiles) { // fetch data的api路由
      const apiFileName = path.basename(apiFile, '.js');
      app.use(`/${apiFileName}`, require(`${root}/serve/${apiFile}`));
    }

    for (let file of files) { // 处理pages中的页面路由，防止刷新404
      let fileName = path.basename(file, '.js');
      app.use(`/${fileName}`, function (req, res) {
        nextApp.render(req, res, `/${fileName}`);
      })
    }
  }
}

module.exports = new CreateRouter;
