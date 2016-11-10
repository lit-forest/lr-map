import React, { Component, PropTypes } from 'react';
import styles from './toolBar.css';

class ToolBar extends Component {
    render() {
        return (
            <div id='toolBar' className={styles.layerbox}>
                <div id="layerbox" className={styles.layerboxIn}>
                </div>
            </div>
        );
    }
}

ToolBar.propTypes = {

};

export default ToolBar;