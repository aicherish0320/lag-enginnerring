const { series, parallel } = require('gulp')

const task1 = (done) => {
  setTimeout(() => {
    console.log('task1 working~')
    done()
  }, 1000)
}

const task2 = (done) => {
  setTimeout(() => {
    console.log('task1 working~')
    done()
  }, 1000)
}

const task3 = (done) => {
  setTimeout(() => {
    console.log('task1 working~')
    done()
  }, 1000)
}

// exports.foo = series(task1, task2, task3)
exports.bar = parallel(task1, task2, task3)
