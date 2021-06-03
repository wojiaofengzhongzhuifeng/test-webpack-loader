## xml-to-js-loader

## 作用

将项目的 xml 文件转化为 js 的普通对象

## 如何使用

1. npm run build

2. 在 dist 目录下新建 index.html 

3. 在 index.html 中引入 bundle.js

4. 打开 index.html 查看控制台

5. 在控制台,搜索 current config, 发现可以获取值

## 本 demo 核心

1. 如果 loader 执行异步操作,如何把异步结果返回出去?

    使用this.callback(err, value)

2. 如何写 loader 的参数? 以及如何在 loader 获取参数


