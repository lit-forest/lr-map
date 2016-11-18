import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Map from '../components/map/Map';
import Search from '../components/search/Search';
import Rbox from '../components/rbox/Rbox';
import ToolBar from '../components/toolBar/ToolBar';
import Bucket from '../components/bucket/Bucket';

import styles from './an.css';

/**
 * @author sylvenas
 * @doc 页面容器,包含Map、Search、Rbox、ToolBar、Bucket
 * @class CoreLayout
 * @extends {Component}
 */
class CoreLayout extends Component {
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps(nextProps) {

    }

    /**
     * @author sylvenas
     * @doc 阻止link导致的浏览器地址变化而引起的二次渲染
     * @param {object} nextProps
     * @param {object} nextState
     * @returns bool (ture 渲染，false不渲染)
     * @memberOf CoreLayout
     */
    shouldComponentUpdate(nextProps, nextState) {
        return (this.props.router.location.action === 'PUSH')
    }

    render() {
        const {children} = this.props;
        return (
            <div>
                <Map></Map>
                <Search></Search>
                <Rbox></Rbox>
                <ToolBar></ToolBar>
                <div className={styles.modular}>{children}</div>
            </div>
        )
    }
}

CoreLayout.propTypes = {
    children: PropTypes.element.isRequired
};

export default CoreLayout;