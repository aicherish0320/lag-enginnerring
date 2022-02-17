# 前端工程化实践

提高效率，降低成本的一种手段

技术往往是为了解决问题而存在的

## 主要解决的问题

- 传统语言或语法的弊端
- 无法使用模块化/组件化
- 重复的机械式工作
- 代码风格统一、质量保证
- 依赖后端服务接口支持
- 整体依赖后端项目

## 工程化表现

一切以**提高效率**、**降低成本**、**质量保证**为目的的手段都属于**工程化**

一切重复的工作都应该被自动化
创建项目(使用 cli 创建项目结构) -> 编码(格式化代码、校验代码风格、编译/打包/构建) -> 预览/测试(Web Server/Mock/HMR/Source Map) -> 提交(Git Hooks/Lint-Staged/持续集成) -> 部署(CI/CD/自动化发布)

工程化 !== 某个工具

**Powered by Node.js，居功至伟的 Node.js**

# 内容概要

- 脚手架工具开发
- 自动化构建系统
- 模块化打包
- 项目代码规范化
- 自动化部署

## 脚手架工具

前端工程化的发起者

内容概要

- 脚手架的作用
- 常用的脚手架工具
- 通用脚手架工具剖析
- 开发一款脚手架

### 脚手架的本质作用

创建项目基础结构、提供项目规范和约定

- 相同的组织结构
- 相同的开发范式
- 相同的模块依赖
- 相同的工具配置
- 相同的基础代码

### 常用的脚手架工具

`create-react-app`
`vue-cli`

## 自动化构建

一切重复的工作本应自动化
源代码 -> 生产代码 (通过自动化构建完成)

自动化构建工作流
脱离运行环境兼容带来的问题
使用提高效率的语法、规范和标准

### 常见的自动化构建工具

- grunt
- gulp
- fis

新手需要规则，老手渴望自由。

#### grunt

JavaScript 世界的构建工具

自动化，对于需要反复重复的任务，例如压缩、编译、单元测试、Linting 等，自动化工具可以减轻你的劳动，简化你的工作。当你在`gruntfile`文件正确配置好了任务，任务运行器就会自动帮你或你的小组完成大部分无聊的工作

Grunt 插件

#### gulp (The streaming build system)

**gulp 异步任务的三种方式**

- 回调函数
- promise
- async/await

**gulp 构建过程核心工作原理**

输入（读取文件）-> 加工（压缩文件） -> 输出（写入文件）

**gulp 文件操作 API + 插件的使用**

- gulp-clean-css
- gulp-rename

**gulp 自动化构建案例**
