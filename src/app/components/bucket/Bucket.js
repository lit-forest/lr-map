import React, { Component, PropTypes } from 'react';
import { IndexLink, Link } from 'react-router'
import styles from './bucket.css';

class Bucket extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id='modularCol' className={styles.modular}>
                <Link to='/'>--首页--</Link>
                <Link to='/trafficIndex'>指数--</Link>
                <Link to='/signal'>信号--</Link>
                {this.props.child}
            </div>
        );
    }
}

Bucket.propTypes = {
    child:PropTypes.element
}

export default Bucket;