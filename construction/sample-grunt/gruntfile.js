/*
  Grunt 的入口文件
  用于定义一些需要 Grunt 自动执行的任务
  需要导出一个函数
  此函数接收一个 grunt 的 形参，内部提供了一些创建任务时可以用到的 API
*/

module.exports = (grunt) => {
  grunt.registerTask('foo', () => {
    console.log('Hello grunt from foo')
  })
  grunt.registerTask('bar', '任务描述', () => {
    console.log('Hello grunt from bar')
  })
  grunt.registerTask('default', ['foo', 'bar'])

  grunt.registerTask('async-task', function () {
    const done = this.async()
    setTimeout(() => {
      console.log('async-task')
      done()
    }, 1000)
  })
}
