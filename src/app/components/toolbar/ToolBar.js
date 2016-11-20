import React, { Component, PropTypes } from 'react';
import styles from './toolBar.css';
import LayerCtrl from './components/LayerCtrl';
import Bookmark from './components/Bookmark';
import Query from './components/Query';
import Tool from './components/Tool';
import FullScreen from './components/FullScreen';

class ToolBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: null,
            key: null,
            enum: {
                layerCtrl: false,
                bookmark: false,
                query: false,
                tool: false,
                fullScreen: false
            }
        }
    }
    liClick(liId) {
        switch (liId) {
            case 'layerCtrl':
                if (this.state.key == liId)
                    this.setState({
                        item: null,
                        key: null,
                        enum: {
                            layerCtrl: false,
                            bookmark: false,
                            query: false,
                            tool: false,
                            fullScreen: false
                        }
                    });
                else
                    this.setState({
                        item: <LayerCtrl />,
                        key: liId,
                        enum: {
                            layerCtrl: true,
                            bookmark: false,
                            query: false,
                            tool: false,
                            fullScreen: false
                        }
                    });
                break;
            case 'bookmark':
                if (this.state.key == liId)
                    this.setState({
                        item: null,
                        key: null,
                        enum: {
                            layerCtrl: false,
                            bookmark: false,
                            query: false,
                            tool: false,
                            fullScreen: false
                        }
                    });
                else
                    this.setState({
                        item: <Bookmark />,
                        key: liId,
                        enum: {
                            layerCtrl: false,
                            bookmark: true,
                            query: false,
                            tool: false,
                            fullScreen: false
                        }
                    });
                break;
            default:
                break;
        }
    }
    render() {
        return (
            <div id='toolBar' className={styles.layerbox}>
                <div id="layerbox" className={styles.layerboxIn}>
                    <ul>
                        <li id='layerCtrl' ref='layerCtrl' onClick={() => this.liClick(this.refs.layerCtrl.id)}>
                            <span className={this.state.enum.layerCtrl ? styles.layerCtrl_active : styles.layerCtrl}>图层</span>
                        </li>
                        <li id='bookmark' ref="bookmark" onClick={() => this.liClick(this.refs.bookmark.id)}>
                            <span className={this.state.enum.bookmark ? styles.bookmark_active : styles.bookmark}>书签</span>
                        </li>
                        <li id='query' ref="query" onClick={() => this.liClick(this.refs.query.id)}>
                            <span className={styles.subway}>查询</span>
                        </li>
                        <li id='tool' ref="tool" onClick={() => this.liClick(this.refs.tool.id)}>
                            <span className={styles.ranging}>测量</span>
                        </li>
                        <li id='fullScreen' ref="fullScreen" onClick={() => this.liClick(this.refs.fullScreen.id)}>
                            <span className={styles.fullscreen}>全屏</span>
                        </li>
                    </ul>
                </div>
                {this.state.item}
            </div>
        );
    }
}

ToolBar.propTypes = {

};

export default ToolBar;