import React, { Component, PropTypes } from 'react';
import styles from './search.css';
import logoSrc from '../../../../static/img/logo.svg';

/**
 * @author sylvenas
 * @doc 搜索栏
 * @class Search
 * @extends {Component}
 */
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keys: ''
        }
    }
    handleChange(e) {
        this.setState({
            keys: e.target.value
        });
    }
    search() {
        const {onSearchClick} = this.props;
        onSearchClick(this.refs.searchVal.value);
    }
    handleKeyDown(e) {
        if (e.which === 13)
            this.search();
    }
    close() {
        this.refs.searchVal.value = '';
        this.setState({
            keys: ''
        });
        const {onSearchClick} = this.props;
        onSearchClick(this.refs.searchVal.value);
    }
    /**
     * 
     * 
     * @returns
     * 
     * @memberOf Search
     */
    render() {
        return (
            <section id="search" className={styles.search}>
                <header className={styles.searchbox}>
                    <img className={styles.logo} src={logoSrc} draggable="false" />
                    <div className={styles.iptbox}>
                        <input type="text" ref="searchVal" autoFocus="autofocus" onChange={(e) => this.handleChange(e)} onKeyDown={(e) => this.handleKeyDown(e)} placeholder="搜索地名、公交站、地铁站" className={styles.searchipt} />
                    </div>
                    <span id="separator" className={styles.separator}></span>
                    <div className={styles.direntry} id="searchbtn" title="搜索" onClick={() => this.search()}>
                        <i className={styles.fa + ' ' + styles.fa_search + ' ' + styles.searchlogo}></i>
                    </div>
                    <div className={this.state.keys === '' ? styles.close_none : styles.close} id="searchbtn" title="关闭" onClick={() => this.close()}>
                        <i className={styles.fa + ' ' + styles.fa_close + ' ' + styles.searchlogo}></i>
                    </div>
                </header>
            </section>
        );
    }
}

Search.propTypes = {
    onSearchClick: PropTypes.func.isRequired,
};

export default Search;