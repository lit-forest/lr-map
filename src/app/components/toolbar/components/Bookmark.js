import React, { Component, PropTypes } from 'react';

import Dialog from 'material-ui/Dialog';

import MobileTearSheet from '../../mobileTearSheet/MobileTearSheet';

const styles = {
    panel: {
        position: 'absolute',
        top: '58px',
        right: '0px',
        width: '250px',
        background: 'rgb(255, 255, 255)',
        padding: '12px',
        borderRadius: '2px',
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 6px 0px, rgba(0, 0, 0, 0.188235) 0px 2px 6px 0px'
    },
    listRoot: {
        width: '100%',
        maxWidth: 'none',
    }
}

class Bookmark extends Component {
    render() {
        return (
            <div style={styles.panel}>
                <h1>Bookmark</h1>
            </div>
        );
    }
}

Bookmark.propTypes = {

};

export default Bookmark;