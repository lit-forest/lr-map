import React from 'react'
import { IndexLink, Link } from 'react-router';

import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/hardware/keyboard-arrow-left';

import Nav from '../../../components/Nav/Nav';
import styles from './counter.css';

export const Counter = (props) => (
    <div style={{ margin: '0 auto' }}>
        <Nav parentUrl={'/'} parentName={'首页'}></Nav>
        <h2>Counter: {props.counter}</h2>
        <button className='btn btn-default' onClick={props.increment}>
            Increment
    </button>
        {' '}
        <button className='btn btn-default' onClick={props.doubleAsync}>
            Double (Async)
    </button>
    </div>
)

Counter.propTypes = {
    counter: React.PropTypes.number.isRequired,
    doubleAsync: React.PropTypes.func.isRequired,
    increment: React.PropTypes.func.isRequired
}

export default Counter
