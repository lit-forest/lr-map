import React, { Component, PropTypes } from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import styles from './bucket.css';
/**
 * @author sylvenas
 * @doc 右侧模块展示栏的容器(包括外轮廓和显隐控制按钮)
 * @class Bucket
 * @extends {Component}
 */
class Bucket extends Component {
    /**
     * Creates an instance of Bucket.
     * @state show->控制右侧模块栏的展示和隐藏,默认不显示
     * @param {any} props
     * @memberOf Bucket
     */
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }
    /**
     * @doc 切换右侧模块栏的显示和隐藏,每次点击控制按钮反转显隐
     * @memberOf Bucket
     */
    toggle() {
        this.setState({
            show: !this.state.show
        })
    }
    /**
     * @children 容器里面包含的子组件，由route决定，从CoreLayout组件传入
     * @returns 整体轮廓组件 
     * @memberOf Bucket
     */
    render() {
        const {children} = this.props;
        return (
            <div className={this.state.show ? styles.root : styles.root_none}>
                {children}
                <div className={styles.panCtrl} onClick={() => this.toggle()}>
                    <i className={styles.fa + ' ' + styles.faChevronR}></i>
                </div>
            </div>
        );
    }
}

Bucket.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Bucket;