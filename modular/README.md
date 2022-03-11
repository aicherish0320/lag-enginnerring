# 模块化开发

## 模块化演变过程

1. stage1：文件划分方式

   缺点：污染全局作用域、命名冲突的问题、无法管理模块依赖关系、模块成员可以被修改
   早期模块化完全依靠约定

```js
// module-a.js
var name = 'module-a'
function method1() {
  console.log(name + '#method1')
}
// module-b.js
var name = 'module-b'
function method1() {
  console.log(name + '#method1')
}
// index.html
<script src="module-a.js"></script>
<script src="module-b.js"></script>
```

2. stage2：命名空间方式
   可以减少命名冲突

```js
// module-a.js
var moduleA = {
  name: 'module-a',
  method1: function () {
    console.log(this.name)
  }
}
// module.b.js
var moduleB = {
  name: 'module-b',
  method1: function () {
    console.log(this.name)
  }
}
// index.html
<script src="module-a.js"></script>
<script src="module-b.js"></script>
```

3. stage3：IIFE
   实现了私有成员的概念

```js
// module-a.js
  ;(
    function () {
      var name = 'module-a'
      function method1() {
        console.log(name + '#method1')
      }
    }
    window.moduleA = {
      method1: method1
    }
  )()
```

## 模块化规范

- CommonJS 规范

  1. 一个文件就是一个模块
  2. 每个模块都有单独的作用域
  3. 通过 module.exports 导出成员
  4. 通过 require 函数载入模块

CommonJS 是以同步模式加载模块

- AMD (Asynchronous Module Definition)

使用起来相对复杂、模块 js 文件请求频繁

Require.js

```js
// 定义一个模块
define('module1', ['jquery', './module2'], function ($, module2) {
  // 向外 导出的成员
  return {
    start: function () {
      $('body').animate({ margin: '200px' })
      module2()
    }
  }
})
// 载入一个模块
require(['./module1'], function (module1) {
  module1.start()
})
```

## ES Modules 基本特性

- 自动采用严格模式，忽略'use strict'
- 每个 ESM 模块都是单独的私有作用域
- ESM 是通过 CORS 去请求外部 JS 模块的
- ESM 的 script 标签会延迟执行脚本

### ES Modules 导入导出

```js
// module.js
const foo = 'es modules'
export { foo }
// app.js
import { foo } from './module.js'
console.log(foo)
```

**注意：**

1. export {}，后面的大括号是 export 语法，不是导出一个字面量变量
2. export default { }，后面的大括号，才是导出一个字面量变量，导入的时候，不能使用结构语法引入{ name, age }，import {}，后面的大括号也是语法
3. export {}，导出是变量的引用，并且是只读的
4. ES Module，引入文件不能省略文件扩展名、也不会自动引入文件夹下的 index.js
5. import 只能在最顶层引入文件，如果需要动态引入需要使用`import()`

**ES Module 和 CommonJS**

1. ES Modules 中可以导入 CommonJS 模块
2. CommonJS 中不能导入 ES Modules 模块
3. CommonJS 始终只会导出一个默认成员
4. 注意 import 不是解构导出对象

## 常用的模块化打包工具

## 基于模块化工具构建现代 Web 应用

## 打包工具的优化技巧
