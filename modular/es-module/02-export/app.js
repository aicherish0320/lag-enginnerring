// import { name, fn } from './module.js'

// console.log(name)
// fn()

import { name, hello } from './module.js'

console.log(name)

setTimeout(() => {
  console.log(name)
}, 2000)
