module.exports = {
  path: 'OD',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./OD'))
    }, 'OD')
  }
}