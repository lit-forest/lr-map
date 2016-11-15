import React, { Component, PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';
import ArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import MobileTearSheet from '../../../components/mobileTearSheet/MobileTearSheet';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import ArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';

import Nav from '../../../components/Nav/Nav';
import './trafficIndex.css';

/**
 * @author sylvenas 
 * @doc 交通流量指数主页面
 * @class TrafficIndex
 * @extends {Component}
 */
class TrafficIndex extends Component {

    componentWillMount() {
        console.log('in traffic')
    }

    render() {
        console.log('rendering', this.props.children);
        if (this.props.children === null)
            return (
                <div>
                    <Nav parentUrl={'/'} parentName={'首页'}></Nav>
                    <MobileTearSheet>
                        <List>
                            <Subheader>交通规律专题</Subheader>
                            <Link to={'/trafficIndex/holiday'}>
                                <ListItem
                                    primaryText="节假日专题"
                                    leftAvatar={<Avatar src="img/ok-128.jpg" />}
                                    rightIcon={<ArrowRight />}
                                    />
                            </Link>
                            <Link to={'/trafficIndex/od'}>
                                <ListItem
                                    primaryText="OD分析"
                                    leftAvatar={<Avatar src="img/kolage-128.jpg" />}
                                    rightIcon={<ArrowRight />}
                                    />
                            </Link>
                            <ListItem
                                primaryText="预测回放"
                                leftAvatar={<Avatar src="img/uxceo-128.jpg" />}
                                rightIcon={<ArrowRight />}
                                />
                            <ListItem
                                primaryText="指数更新"
                                leftAvatar={<Avatar src="img/kerem-128.jpg" />}
                                rightIcon={<ArrowRight />}
                                />
                            <ListItem
                                primaryText="交通事故"
                                leftAvatar={<Avatar src="img/raquelromanp-128.jpg" />}
                                rightIcon={<ArrowRight />}
                                />
                        </List>
                        <Divider />
                        <List>
                            <Subheader>系统配置</Subheader>
                            <ListItem
                                primaryText="区域配置"
                                leftAvatar={<Avatar src="img/chexee-128.jpg" />}
                                rightIcon={<ArrowRight />}
                                />
                            <ListItem
                                primaryText="OD配置"
                                leftAvatar={<Avatar src="img/jsa-128.jpg" />}
                                rightIcon={<ArrowRight />}
                                />
                        </List>
                    </MobileTearSheet>
                </div>
            )
        else
            return (
                <ReactCSSTransitionGroup component="div" transitionName="example" transitionEnterTimeout={2000} transitionLeaveTimeout={2000}>
                    {React.cloneElement(this.props.children || <div />, { key: this.props.location.pathname })}
                </ReactCSSTransitionGroup>
            )
    }

    /**
     * @author sylvenas
     * @doc 在路由跳转之前做出判断是回退还是进入子路由
     * @param {object} nextProps
     * @param {object} nextState
     * @returns bool
     * 
     * @memberOf TrafficIndex
     */
    shouldComponentUpdate(nextProps, nextState) {
        return (this.props.children != null && (nextProps.children != this.props.children));
    }


    componentWillUnmount() {
        console.log('leave TrafficIndex');
    }

}

TrafficIndex.propTypes = {
    children: PropTypes.element
}

export default TrafficIndex;