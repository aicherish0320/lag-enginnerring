const sass = require('sass')
const loadGruntTasks = require('load-grunt-tasks')

module.exports = (grunt) => {
  grunt.initConfig({
    sass: {
      options: {
        implementation: sass
      },
      main: {
        files: {
          'dist/css/main.css': 'src/scss/main.scss'
        }
      }
    },
    babel: {
      options: {
        sourceMap: true,
        presets: ['@babel/preset-env']
      },
      main: {
        files: {
          'dist/js/index.js': 'src/js/index.js'
        }
      }
    },
    watch: {
      js: {
        files: ['src/js/**'],
        tasks: ['babel']
      },
      css: {
        files: ['src/scss/**'],
        tasks: ['sass']
      }
    }
  })

  // grunt.loadNpmTasks('grunt-sass')
  // 自动加载所有的 grunt 插件中的任务
  loadGruntTasks(grunt)

  grunt.registerTasks('default', ['sass', 'babel', 'watch'])
}

//! grunt-contrib-clean demo
// module.exports = (grunt) => {
//   grunt.initConfig({
//     clean: {
//       temp: 'temp/index.css'
//     }
//   })

//   grunt.loadNpmTasks('grunt-contrib-clean')
// }
