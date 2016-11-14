import CoreLayout from '../layouts/CoreLayout';
import TrafficIndex from './TrafficIndex';
import Signal from './Signal';
import CounterRoute from './Counter'

const createRoutes = (store) => (
    {
        path: '/',
        component: CoreLayout,
        // indexRoute: TrafficIndex(store),
        childRoutes: [
            CounterRoute(store),
            Signal(store),
            TrafficIndex(store)
        ]
    })

export default createRoutes