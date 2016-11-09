import { injectReducer } from '../../store/reducers'

export default (store) => ({
    path: 'trafficIndex',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const TrafficIndex = require('./components/TrafficIndex').default;
            console.log(TrafficIndex);
            cb(null, TrafficIndex)
        }, 'trafficIndex')
    }
})