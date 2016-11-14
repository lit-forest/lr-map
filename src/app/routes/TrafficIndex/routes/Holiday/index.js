import { injectReducer } from '../../../../store/reducers';

const createRoutes = (store) => ({
  path: 'holiday',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null,
        require('./Holiday').default)
    },'holiday')
  }
})

export default createRoutes
