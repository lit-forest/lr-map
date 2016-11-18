import CoreLayout from '../layouts/CoreLayout';
import Home from './Home'
import TrafficIndex from './TrafficIndex';
import Signal from './Signal';
import CounterRoute from './Counter'

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