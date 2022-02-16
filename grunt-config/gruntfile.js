module.exports = (grunt) => {
  grunt.initConfig({
    foo: {
      bar: 'bar'
    }
  })

  grunt.registerTask('foo', () => {
    console.log(grunt.config('foo.bar'))
  })
}
