import React, { Component, PropTypes } from 'react';
import SearchResults from './SearchResults';
import styles from './rbox.css';

/**
 * @author sylvenas
 * @doc 左侧搜索结果展示面板
 * @class Rbox
 * @extends {Component}
 */
class Rbox extends Component {
    /**
     * Creates an instance of Rbox.
     * 
     * @param {Object} props
     * @state show->控制Rbox是否展示,true展示,false隐藏,默认true
     * @memberOf Rbox
     */
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            data: null
        }
    }
    /**
     * @doc 点击panCtrl反转show,切换Rbox的展示与隐藏
     * @memberOf Rbox
     */
    toggle() {
        this.setState({
            show: !this.state.show
        })
    }
    /**
     * @doc 设置要显示的子组件'
     * @param {Object} nextProps
     * @memberOf Rbox
     */
    componentWillReceiveProps(nextProps) {
        if (nextProps.searchRes == this.props.searchRes && nextProps.queryRes == this.props.queryRes) {

        } else if (nextProps.searchRes != this.props.searchRes && nextProps.queryRes == this.props.queryRes) {
            this.setState({ data: nextProps.searchRes.searchResults });

        } else if (nextProps.searchRes == this.props.searchRes && nextProps.queryRes != this.props.queryRes) {
            this.setState({ data: nextProps.queryRes.queryResults });

        }
    }
    /**
     * @child 异步请求返回的查询结果的数据
     * @returns Rbox组件
     * @memberOf Rbox
     */
    render() {
        const {searchRes, queryRes} = this.props;
        console.log(searchRes)
        console.log(queryRes)
        return (
            <div id="rbox" className={this.state.show ? styles.rboxShow : styles.rboxNone}>
                <SearchResults data={this.state.data} />
                <div className={styles.panCtrl} onClick={() => this.toggle()}>
                    <i className={styles.fa + ' ' + (this.state.show ? styles.faChevronUp : styles.faChevronDown)}></i>
                </div>
            </div>
        );
    }

}

Rbox.propTypes = {

};

export default Rbox;