## lr-map 
为了解决目前在地图项目上面临的功能结构划分不够清晰,各模块功能代码杂糅在一起,地图展示不够简单易用而开发,整个项目的目的是为了建立基本的地图功能和逻辑结构划分,以方便以后的扩展和维护,主要采用技术为React,React-Route,Leaflet等.      

## 技术栈
* [ECMAScript](https://github.com/lukehoban/es6features)
* [react](https://github.com/facebook/react)
* [leaflet](https://github.com/Leaflet/Leaflet)
* [ArcGIS](https://github.com/Esri/esri-leaflet)
* [redux](https://github.com/rackt/redux)
* [react-router](https://github.com/rackt/react-router)
* [react-router-redux](https://github.com/rackt/react-router-redux)
* [webpack](https://github.com/webpack/webpack)
* [babel](https://github.com/babel/babel)
* [express](https://github.com/expressjs/express)
* [karma](https://github.com/karma-runner/karma)
* [eslint](http://eslint.org)   

##开发环境配置
* node `^4.5.0`
* npm `^3.0.0`     

##start
确认安装好开发环境配置，请开始以下步骤  

First 使用git或者直接下载压缩包到本地硬盘上.
```bash
$ git clone https://github.com/react-map/lr-map.git
```
Second 安装依赖开发包并启动webpack开发服务器.
```bash
$ npm install

$ npm start
```
Third 打开浏览器.
```bash
localhost:3232
```
##程序目录
这个项目的结构使用的是 **fractal(不规则碎片形：适合大型项目)***,方法的分组主要是依照特性而不是文件类型.注意,这个目录结构只是一个指引,并不一定要按这个来.这种结构谐在让程序更容易扩展，想了解更多请[点击这里](https://github.com/justingreenberg).
```
.
├── dist                         # 打包结果
├── docs                         # 项目文档
|   |──dev                       # 开发配置文档
|   └──start                     # 项目启动文档
├── examples                     # 项目中所使用的部分技术示例              
├── node_modules                 # 依赖的node模块
├── src                          # 程序源代码
│   ├── app                      # 程序启动和渲染
│   │   ├── components           # 全局可复用的表现组件(Presentational Components)
│   │   ├── containers           # 全局可复用的容器组件
│   │   ├── layouts              # 主页结构
│   │   ├── store                # Redux指定块
│   │   │   ├── createStore.js   # 创建和使用redux store
│   │   │   └── reducers.js      # Reducer注册和注入
│   │   └── routes               # 主路由和异步分割点
│   │   │   ├── Home             # 功能模块划分主页面
│   │   │   ├── Signal           # 信号控制业务功能
│   │   │   └── TrafficIndex     # 交通指数业务功能
│   │   └── main                 # 主程序入口
│   └── static                   # 全局静态文件
│       ├── conf                 # GIS服务配置文件,java后台连接配置文件
│       ├── css                  # 全局样式
│       ├── font                 # 字体
│       ├── img                  # 图片
│       └── index                # 首页 
│── tests                        # 单元测试
│── webpack-dev-conf             # 开发环境webpack配置
│── webpack-pro-conf             # 部署环境webpack配置     
```        
##页面轮廓    
页面展示风格复合当前主流地图布局，左侧为搜索栏和搜索结果,右上侧为地图常用功能,图层控制,空间查询等,右侧为可收缩面板,适用于各个模块的功能集成.
```
+---------------------------------------------------------+
| +----------------+                   +--------------+   |
| |     Search     |                   |   ToolBar    |   |
| +---------+ +----+                   +--------------+   |
| |                |                                      |
| |                |                           +----------|
| |                |                           |          |
| | Search Result  |                           |          |
| |                |                           |  Module  |
| |                |                           |          |
| |                |                           |          |
| |                |                           |          |
| |                |                           |          |
| +----------------+                           +----------|
|                                                         | 
|                                                         |
|                                                         |
|                                                         |
+---------------------------------------------------------+
```    
##样式
项目采用css-modules方式，少量全局样式，每个组件的样式采用模块化的内敛样式.       

##打包
Babel被配置[babel-plugin-transform-runtime](https://www.npmjs.com/package/babel-plugin-transform-runtime)可以让代码更优化.另外,在生产环境,我们使用[react-optimize](https://github.com/thejameskyle/babel-react-optimize)来优化React代码.    

##部署
打包完成之后，直接复制dist文件夹到相应的web容器(nginx,tomcat等),打包结果也可以直接浏览器打开.    

##Thanks
觉得不错的话,请Star一下本项目,这是对作者最大的支持.              
Thanks you guys all the time.     