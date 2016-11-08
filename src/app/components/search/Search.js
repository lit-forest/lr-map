import React, { Component, PropTypes } from 'react';
import styles from './search.css';
import logoSrc from '../../../static/img/logo.png';

class Search extends Component {
    render() {
        return (
            <section id="search" className={styles.search}>
                <header className={styles.searchbox}>
                    <img className={styles.logo} src={logoSrc} draggable="false" />
                    <div className={styles.iptbox}>
                        <input type="text" ref="searchVal" id="searchipt" placeholder="搜索位置、公交站、地铁站" className={styles.searchipt} />
                    </div>
                    <span id="separator" className={styles.separator}></span>
                    <div className={styles.direntry} id="searchbtn" title="搜索" onClick={() => this.update()}>
                        <i className={styles.fa + ' ' + styles.fa_search + ' ' + styles.searchlogo}></i>
                        <span id="searchloading" className={styles.ring}></span>
                    </div>
                </header>
            </section>
        );
    }
}

Search.propTypes = {

};

export default Search;