import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';

import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/hardware/keyboard-arrow-left';

import Nav from '../../../components/Nav/Nav';
import styles from './signal.css';

class Signal extends Component {

    componentWillMount() {
        console.log('I am Signal');
    }

    render() {
        return (
            <div>
                <Nav parentUrl={'/'} parentName={'首页'} nowName={'hello'}></Nav>
                <h1>Signal</h1>
            </div>
        );
    }
}

export default Signal;