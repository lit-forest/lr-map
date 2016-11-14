import { injectReducer } from '../../store/reducers';
import OD from './routes/OD';
import Holiday from './routes/Holiday';

const createRoutes = (store) => ({
    path: 'trafficIndex',
    getChildRoutes(partialNextState, cb) {
        require.ensure([], (require) => {
            cb(null, [
                Holiday(store)
            ])
        })
    },
    getComponent(nextState, cb) {
        require.ensure(
            [],
            (require) => {
                const TrafficIndex = require('./components/TrafficIndex').default;
                cb(null, TrafficIndex)
            },
            'trafficIndex')
    }
})

export default createRoutes