import React from 'react';
import { render } from 'react-dom';
import createStore from './store/createStore'
import App from './containers/App';

const initialState = window.___INITIAL_STATE__
const store = createStore(initialState)

const routes = require('./routes/index').default(store);

const MOUNT_NODE = document.getElementById('root');
render(
    <App store={store} routes={routes}/>,
    MOUNT_NODE);


