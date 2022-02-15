/*
  Grunt 的入口文件
  用于定义一些需要 Grunt 自动执行的任务
  需要导出一个函数
  此函数接收一个 grunt 的 形参，内部提供了一些创建任务时可以用到的 API
*/

module.exports = (grunt) => {
  grunt.registerTask('bad', () => {
    console.log('bad working')
    return false
  })
  grunt.registerTask('foo', () => {
    console.log('foo working')
  })
  grunt.registerTask('bar', () => {
    console.log('bar working')
  })
  grunt.registerTask('default', ['foo', 'bad', 'bar'])

  grunt.registerTask('async-bad', function () {
    const done = this.async()
    setTimeout(() => {
      console.log('async bad')
      done(false)
    }, 1000)
  })
}
