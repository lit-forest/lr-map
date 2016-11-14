import React, { Component, PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';

import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';
import ArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';

import styles from './nav.css';

class Nav extends Component {

    render() {
        const {parentUrl,parentName} = this.props;
        return (
            <Subheader>
                <Link to={parentUrl} >
                    <IconButton className={styles.arrow_left}><ArrowLeft color={'#551A8B'} /></IconButton>
                    <div className={styles.back}>{parentName}</div>
                </Link>
            </Subheader>
        );
    }
}

Nav.propTypes = {
    parentUrl:PropTypes.string.isRequired,
    parentName: PropTypes.string.isRequired
};

export default Nav;