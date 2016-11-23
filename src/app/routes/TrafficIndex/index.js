import { injectReducer } from '../../store/reducers';
import Home from './routes/Home';
import OD from './routes/OD';
import Holiday from './routes/Holiday';

/**
 * @author sylvenas
 * @doc 按需加载指数模块的具体功能代码(也可以统一打包到整个指数模块代码中)
 * @param {any} store
 */
const createRoutes = (store) => ({
    path: 'trafficIndex',
    indexRoute: Home,
    /**
     * @doc 指数模块的容器组件
     * @param {any} nextState
     * @param {any} cb
     */
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
    /**
     * @doc 指数模块的每个功能的子路由和子组件加载
     * @param {any} partialNextState
     * @param {any} cb
     */
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