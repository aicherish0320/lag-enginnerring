// import {} from './index.js'
// import * as module from './index.js'
// console.log(module)

// import('./index.js').then((res) => {
//   console.log('res >>> ', res)
// })

// 逗号前面的是默认导出，后面的具名导出
import obj, { age } from './index.js'

console.log(obj, age)
