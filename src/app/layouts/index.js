import { injectReducer } from '../store/reducers'
import { search } from '../components/search/reducer';
import { query } from '../components/toolbar/modules/query/reducer';
import CoreLayout from './CoreLayout';

export default (store) => {
    injectReducer(store, { key: 'search', reducer: search })
    injectReducer(store, { key: 'query', reducer: query })
    return CoreLayout
}
