//module.exports 和 ES6 的export default 区别
// 如果你是使用 es6 的写法，也就是你的组件都是通过 export default 导出的，那么在 getComponent 方法里面需要加入 .default。
// getComponent(nextState, cb) {
//     require.ensure([], (require) => {
//       // 在后面加 .default
//       cb(null, require('components/layer/ReportPage')).default
//     }, 'ReportPage')
// }
//如果你是使用 CommonJS 的写法，也就是通过 module.exports 导出的，那就无须加 .default 了。