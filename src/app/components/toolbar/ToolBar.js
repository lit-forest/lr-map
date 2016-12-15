import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import LayerCtrl from './components/LayerCtrl';
import Bookmark from './components/Bookmark';
import Query from './containers/QueryContainer';
import Tool from './components/Tool';
import FullScreen from './components/FullScreen';
import More from './components/More';

import styles from './toolBar.css';

/**
 * @author sylvenas
 * @doc ToolBar 容器
 * @class ToolBar
 * @extends {Component}
 */
class ToolBar extends Component {
    /**
     * Creates an instance of ToolBar.
     * state item->为每个功能下对应的具体功能，key-> 为选择的某一个容器的指代
     * @param {Object} props
     * @memberOf ToolBar
     */
    constructor(props) {
        super(props);
        this.state = {
            item: <div />,
            key: 6
        }
    }
    /**
     * @doc 每一个单元格点击事件
     * @doc 判断点击的哪一个单元格，以及是否展示
     * @param {string} liId 点击的单元格的ID
     * @memberOf ToolBar
     */
    itemClick(liId) {
        switch (liId) {
            case 'layerCtrl':
                this.state.key == liId ?
                    this.setState({
                        item: <div />,
                        key: 0
                    }) : this.setState({
                        item: <LayerCtrl layers={_layer_global} />,
                        key: liId
                    });
                break;
            case 'bookmark':
                this.state.key == liId ?
                    this.setState({
                        item: <div />,
                        key: 1
                    }) : this.setState({
                        item: <Bookmark />,
                        key: liId
                    });
                break;
            case 'query':
                this.state.key == liId ?
                    this.setState({
                        item: <div />,
                        key: 2
                    }) : this.setState({
                        item: <Query />,
                        key: liId
                    });
                break;
            case 'tool':
                this.state.key == liId ?
                    this.setState({
                        item: <div />,
                        key: 3
                    }) : this.setState({
                        item: <Tool />,
                        key: liId
                    });
                break;
            case 'fullScreen':
                this.state.key == liId ?
                    this.setState({
                        item: <div />,
                        key: 4
                    }) : this.setState({
                        item: <div />,
                        key: liId
                    });
                break;
            case 'more':
                this.state.key == liId ?
                    this.setState({
                        item: <div />,
                        key: 5
                    }) : this.setState({
                        item: <More />,
                        key: liId
                    });
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div className={styles.layerbox}>
                <ul>
                    <li id='layerCtrl' ref='layerCtrl' onClick={() => this.itemClick(this.refs.layerCtrl.id)}>
                        <span className={this.state.key === 'layerCtrl' ? styles.layerCtrl_active : styles.layerCtrl}>图层</span>
                    </li>
                    <li id='bookmark' ref="bookmark" onClick={() => this.itemClick(this.refs.bookmark.id)}>
                        <span className={this.state.key === 'bookmark' ? styles.bookmark_active : styles.bookmark}>书签</span>
                    </li>
                    <li id='query' ref="query" onClick={() => this.itemClick(this.refs.query.id)}>
                        <span className={this.state.key === 'query' ? styles.query_active : styles.query}>查询</span>
                    </li>
                    <li id='tool' ref="tool" onClick={() => this.itemClick(this.refs.tool.id)}>
                        <span className={this.state.key === 'tool' ? styles.tool_active : styles.tool}>测量</span>
                    </li>
                    <li id='fullScreen' ref="fullScreen" onClick={() => this.itemClick(this.refs.fullScreen.id)}>
                        <span className={styles.fullscreen}>全屏</span>
                    </li>
                    <li id='more' ref="more" onClick={() => this.itemClick(this.refs.more.id)}>
                        <span className={this.state.key === 'more' ? styles.moreActive : styles.more}>更多</span>
                    </li>
                </ul>
                <ReactCSSTransitionGroup
                    id='bucket'
                    component="div"
                    transitionName='animation'
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {React.cloneElement(this.state.item, {
                        key: this.state.key
                    })}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

ToolBar.propTypes = {

};

export default ToolBar;