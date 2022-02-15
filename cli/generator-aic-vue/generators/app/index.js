const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.appname
      }
    ]).then((answers) => {
      this.answers = answers
    })
  }

  writing() {
    const templates = ['README.md', 'public/index.html']
    templates.forEach((temp) => {
      this.fs.copyTpl(
        this.templatePath(temp),
        this.destinationPath(temp),
        this.answers
      )
    })
  }
}
