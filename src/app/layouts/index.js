import { injectReducer } from '../store/reducers'
import { search } from '../components/search/reducer';
import CoreLayout from './CoreLayout';

export default (store) => {
    injectReducer(store, { key: 'rbox', reducer: search })
    injectReducer(store, { key: 'rbox', reducer: search })
    return CoreLayout
}
