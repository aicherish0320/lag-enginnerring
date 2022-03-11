import { age, msg } from './module.mjs'
import fs from 'fs'
import _ from 'lodash'

fs.writeFileSync('./foo.txt', 'es module working')

const { camelCase } = _
// console.log(_.camelCase('ES Module'))
console.log(camelCase('ES Module'))

console.log(age, msg)
