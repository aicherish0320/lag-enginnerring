/*
  多目标模式，可以让任务根据配置形成多个子任务
*/
module.exports = (grunt) => {
  grunt.initConfig({
    build: {
      css: {
        options: {
          foo: 'foo'
        }
      },
      js: 1
    }
  })
  grunt.registerMultiTask('build', function () {
    console.log(this.target, this.data, this.options())
  })
}
