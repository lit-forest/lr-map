import React from 'react'
import { IndexLink, Link } from 'react-router';

import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/hardware/keyboard-arrow-left';

import styles from './counter.css';

const style = {
    back: {
        position: 'absolute',
        top: '-1px',
        left: '0px',
        color:'red'
    }
}

export const Counter = (props) => (
    <div style={{ margin: '0 auto' }}>
        <Subheader>
            <Link to={'/'} >
                <IconButton style={style.back}><NavigationClose/></IconButton>
                <div className={styles.back}>首页</div>
            </Link>
        </Subheader>
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
