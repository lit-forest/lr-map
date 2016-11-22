import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Map from '../components/map/Map';
import Search from '../components/search/Search';
import Rbox from '../components/rbox/Rbox';
import ToolBar from '../components/toolBar/ToolBar';


const styles = {
    root: {
        zIndex: 2000,
        position: 'absolute',
        right: '0px',
        bottom: '130px',
        height: '560px',
        width: '330px',
        opacity: 1,
        boxShadow: '-2px 2px 6px rgba(0,0,0,.3)',
        userSelect: 'none',
        backgroundColor: 'white',
        //display: 'none'
    }
}

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
        const {children, location} = this.props;
        return (
            <div>
                <Map></Map>
                <Search></Search>
                <Rbox></Rbox>
                <ToolBar></ToolBar>
                <ReactCSSTransitionGroup
                    id='bucket'
                    component="div"
                    style={styles.root}
                    transitionName='animation'
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {React.cloneElement(children, {
                        key: location.pathname
                    })}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

CoreLayout.propTypes = {
    children: PropTypes.element.isRequired,
    location: PropTypes.object.isRequired
};

export default CoreLayout;