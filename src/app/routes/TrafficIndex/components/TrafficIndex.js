import React, { Component, PropTypes } from 'react';

/**
 * @author sylvenas 
 * @doc 交通流量指数主页面
 * @class TrafficIndex
 * @extends {Component}
 */
class TrafficIndex extends Component {

    render() {
        console.log(this.props)
        return (
            <div>{this.props.children}</div>
        )
    }
}

TrafficIndex.propTypes = {
    children: PropTypes.element.isRequired,
}

export default TrafficIndex;