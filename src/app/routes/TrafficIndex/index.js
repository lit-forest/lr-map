import { injectReducer } from '../../store/reducers';
import Home from './routes/Home';
import OD from './routes/OD';
import Holiday from './routes/Holiday';

const createRoutes = (store) => ({
    path: 'trafficIndex',
    //component: TrafficIndex,
    indexRoute: Home,
    getComponent(nextState, cb) {
        require.ensure(
            [],
            (require) => {
                const TrafficIndex = require('./components/TrafficIndex').default;
                cb(null, TrafficIndex)
            },
            'trafficIndex'
        )
    },
    getChildRoutes(partialNextState, cb) {
        require.ensure([], (require) => {
            cb(null, [
                OD(store),
                Holiday(store)
            ])
        })
    }
})

export default createRoutes