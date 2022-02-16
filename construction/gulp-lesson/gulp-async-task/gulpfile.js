const fs = require('fs')

exports.callback = (done) => {
  console.log('callback task')
  done()
}

exports.callback_error = (done) => {
  console.log('callback error')
  done(new Error('task failed!'))
}

exports.promise = () => {
  console.log('promise task')
  return Promise.resolve()
}

exports.promise_error = () => {
  console.log('promise task')
  return Promise.reject('task failed!')
}

const timeout = (time) => {
  return new Promise((resolve) => resolve(setTimeout, time))
}

exports.async = async () => {
  await timeout(1000)
  console.log('async task')
}

exports.stream = () => {
  const readStream = fs.createReadStream('package.json')
  const writeStream = fs.createWriteStream('temp.txt')
  readStream.pipe(writeStream)
  return writeStream
}
