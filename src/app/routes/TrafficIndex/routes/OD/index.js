import { injectReducer } from '../../../../store/reducers';

const createRoutes = (store) => ({
  path: 'od',
  component: require('./OD').default
})

export default createRoutes