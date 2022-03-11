// export var name = 'foo module'
// export function hello() {
//   console.log('hello')
// }

let name = 'foo module'
function hello() {
  console.log('hello')
}

// export const msg = 'msg'

export { name, hello }
// export { name, hello as fn }
// export default { name, hello }
setTimeout(() => {
  name = 123
}, 1000)
// export default name
