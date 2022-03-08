// export var name = 'foo module'
// export function hello() {
//   console.log('hello')
// }

const name = 'foo module'
function hello() {
  console.log('hello')
}
// export { name, hello }
export { name, hello as fn }
