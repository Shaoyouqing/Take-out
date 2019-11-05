# gshop

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
### 创建一个项目有两种方法
1、vue init webpack demo  适用于大中小型项目
2、vue init webpack-simple demo  适用于中小型项目


## Take-out 整体结构
|-- build : webpack 相关的配置文件夹(基本不需要修改)
|-- config: webpack 相关的配置文件夹(基本不需要修改) 
    |-- index.js: 指定的后台服务的端口号和静态资源文件夹
|-- node_modules 
|-- src : 源码文件夹
    |-- main.js: 应用入口 js
|-- static: 静态资源文件夹 
|-- .babelrc: babel 的配置文件 
|-- .editorconfig: 通过编辑器的编码/格式进行一定的配置 
|-- .eslintignore: eslint 检查忽略的配置 
|-- .eslintrc.js: eslint 检查的配置 
|-- .gitignore: git 版本管制忽略的配置 
|-- index.html: 主页面文件 
|-- package.json: 应用包配置文件 
|-- README.md: 应用描述说明的 readme 文件
## src的目录结构
|-- api   与后台交互模块
|-- common  通用资源文件夹  如：fonts/img/stylus
|-- components  非路由组件文件夹
    |-- FooterGuide---------------底部组件文件夹 
        |-- FooterGuide.vue--------底部组件 vue
|-- filters  自定义过滤组件文件夹
|-- mock  模拟数据接口文件夹
|-- pages  路由组件文件夹
    |-- Msite---------------首页组件文件夹 
        |-- Msite.vue--------首页组件 vue 
    |-- Search----------------搜索组件文件夹 
        |-- Search.vue---------搜索组件 vue 
    |-- Order--------------订单组件文件夹 
        |-- Order.vue-------订单组件 vue 
    |-- Profile--------------个人组件文件夹 
        |-- Profile.vue-------个人组件 vue
|-- router    路由器文件夹
|-- store   vuex相关模块文件夹
|-- APP.vue  应用组件
|-- main.js  入口js



## 1 slot卡槽占位
在我们使用非路由组件的时候，我们用卡槽占位，使用确知位置，在占的区域，<slot name="XXX"></slot>，在我们的填充区填入内容，在跟标签写入slot="XXX(同上XXX)"
注意：在样式的时候，直接在占位区写入

# a标签多用span去替代
在不影响我们的业务的情况下，我们可以用span去代替，因为a标签易发生默认事件
