import { injectReducer } from '../../../../store/reducers';

const createRoutes = (store) => ({
  path: 'od',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null,
        require('./OD').default)
    },'od')
  }
})

export default createRoutes