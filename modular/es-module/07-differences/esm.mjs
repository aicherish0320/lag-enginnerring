// ESM 中没有 CommonJS 中那些模块全局成员了

console.log(import.meta)

import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)

const __dirname = dirname(__filename)

console.log(__filename)
console.log(__dirname)
