import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';

import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/hardware/keyboard-arrow-left';

import styles from './signal.css';

const style = {
    back: {
        position: 'absolute',
        top: '-1px',
        left: '0px'
    }
}

class Signal extends Component {

    componentWillMount() {
        console.log('I am Signal');
    }

    render() {
        return (
            <div>
                <Subheader>
                    <Link to={'/'} >
                        <IconButton style={style.back}><NavigationClose /></IconButton>
                        <div className={styles.back}>首页</div>
                    </Link>
                </Subheader>
                <h1>Signal</h1>
            </div>
        );
    }
}

export default Signal;