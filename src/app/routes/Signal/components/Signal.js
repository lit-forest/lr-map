import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';

import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/hardware/keyboard-arrow-left';

import Nav from '../../../components/Nav/Nav';

const style = {
    root: {
        position: 'absolute',
        width: '100%'
    }
}

class Signal extends Component {

    componentWillMount() {
        console.log('I am Signal');
    }

    render() {
        return (
            <div style={style.root}>
                <Nav parentUrl={'/'} parentName={'首页'} nowName={'信号控制'}></Nav>
                <h1>Signal</h1>
            </div>
        );
    }
}

export default Signal;