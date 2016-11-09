export default () => ({
    path: 'signal',
    getComponent(nextState, cb) {
        require.ensure(
            [],
            (require) => {
                const Signal = require('./components/Signal').default;
                cb(null, Signal)
            },
            'signal'
        )
    }
})