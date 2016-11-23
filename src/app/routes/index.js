import CoreLayout from '../layouts/CoreLayout';
import Home from './Home'
import TrafficIndex from './TrafficIndex';
import Signal from './Signal';
import CounterRoute from './Counter'

/**
 * @author sylvenas
 * @doc 主路由配置,根路由为CoreLayout,默认路由为Home,其他的路由按需加载
 * @param {Object} store
 */
const createRoutes = (store) => (
    {
        childRoutes: [{
            path: '/',
            component: CoreLayout,
            indexRoute: Home,
            childRoutes: [
                CounterRoute(store),
                Signal(store),
                TrafficIndex(store)
            ]
        }]
    })

export default createRoutes