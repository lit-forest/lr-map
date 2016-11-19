import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import styles from './TrafficIndex.css';

/**
 * @author sylvenas 
 * @doc 交通流量指数主页面
 * @class TrafficIndex
 * @extends {Component}
 */
class TrafficIndex extends Component {

    /**
     * @author sylvenas
     * @doc 交通指数的容器组件
     * @returns 指数主页面或者每个功能单页面
     * @animation 引用全局路由切换动画
     * @memberOf TrafficIndex
     */
    render() {
        const {children, location} = this.props;
        return (
            <ReactCSSTransitionGroup
                component="div"
                transitionName='animation'
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                {React.cloneElement(children, {
                    key: location.pathname
                })}
            </ReactCSSTransitionGroup>
        )
    }
}

TrafficIndex.propTypes = {
    children: PropTypes.element.isRequired,
    location: PropTypes.object.isRequired
}

export default TrafficIndex;