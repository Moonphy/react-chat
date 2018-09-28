# react-chat

a web chat application. It is written by node.js, mongodb, socket.io and react

## 功能

0. 用户, 群组, 私聊, 群聊
0. 文本, 图片, 代码, url等多种类型消息
0. 创建/搜索/加入群组, 搜索/添加好友
0. 桌面通知, 声音提醒
0. 自定义桌面背景, 主题颜色和文本颜色
0. 显示群组在线成员
0. 发送滑稽表情, 搜索表情包
0. 新消息语音播报


## 目录

    |-- [build]                   // Webpack build
    |-- [client]                  // Client code
    |-- [config]                  // Config
    |-- [dist]                    // Packaging output directory
    |-- [doc]                     // Document
    |-- [public]                  // Static resources
    |-- [server]                  // Server code
    |-- [utils]                   // Util method
    |-- .babelrc                  // Babel config
    |-- .eslintignore             // Eslint ignore config
    |-- .eslintrc                 // Eslint rule config
    |-- .gitignore                // Git ignore config
    |-- .nodemonrc                // Nodemon config
    |-- package-lock.json         // npm
    |-- package.json              // npm
    |-- yarn.lock                 // yarn
    ...

## 安装运行

### 第一步
推荐使用yarn，也可以npm
~~~bash
yarn || npm install
~~~ 
### 第二步
修改配置文件：
* 服务端配置：config/server.js
* 客户端配置：config/client.js
* webpack配置：config/webpack.js

大部分配置项用默认值即可, 只有七牛相关配置需要修改, 否则将会导致无法发送图片消息, 无法修改个人/群组头像

七牛配置说明:
* qiniuAccessKey 从七牛 个人面板 - 密钥管理 页面获取
* qiniuSecretKey 从七牛 个人面板 - 密钥管理 页面获取
* qiniuBucket 存储空间的名称
* qiniuUrlPrefix 存储空间的域名, 从七牛 存储空间 - 内容管理 页面获取, 需要写成 //xxx/ 或者 http://xxx/ 或者 https://xxx/ 的格式

### 第三步
~~~bash
npm run server
~~~ 
~~~bash
npm run client
~~~ 
### 第四步
浏览器地址 http://localhost:8080
