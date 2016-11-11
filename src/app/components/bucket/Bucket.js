import React, { Component, PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';
import Paper from 'material-ui/Paper';
import styles from './bucket.css';

const style = {
    height: 80,
    width: 80,
    margin: '25px 10px',
    textAlign: 'center',
    display: 'inline-block',
    border: '1px solid #d0d5d8',
    borderTopWidth: '3px',
    borderColor: 'rgb(231, 76, 60) rgb(225, 227, 229) rgb(225, 227, 229)'
};

class Bucket extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id='modularCol' className={styles.modular}>
                <Link className={styles.link} to='/'>
                    <Paper style={style} zDepth={1}>首页</Paper>
                </Link>
                <Link to='/trafficIndex'>
                    <Paper style={style} zDepth={1}>指数</Paper>
                </Link>
                <Link to='/signal'>
                    <Paper style={style} zDepth={1}>信号</Paper>
                </Link>
                <Link to='/signal'>
                    <Paper style={style} zDepth={1}>诱导</Paper>
                </Link>
                <Link to='/signal'>
                    <Paper style={style} zDepth={1}>视频</Paper>
                </Link>
                <Link to='/signal'>
                    <Paper style={style} zDepth={1}>配置</Paper>
                </Link>
                {this.props.child}
            </div>
        );
    }
}

Bucket.propTypes = {
    child: PropTypes.element
}

export default Bucket;