import React, { Component, PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';

import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';
import ArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import Divider from 'material-ui/Divider';

import styles from './nav.css';

/**
 * @author sylvenas
 * @doc 右侧模块的导航栏
 * @class Nav
 * @extends {Component}
 */
class Nav extends Component {

    /**
     * @parentUrl 要返回的路由地址
     * @parentName 要返回的名称
     * @nowName 现在所处的位置
     * @returns 右侧模块面板上面导航栏
     * @memberOf Nav
     */
    render() {
        const {parentUrl, parentName, nowName} = this.props;
        return (
            <div className={styles.root}>
                <Subheader>
                    <Link to={parentUrl} className={styles.activeStyle} >
                        <IconButton className={styles.arrow_left}><ArrowLeft color={'#252B33'} /></IconButton>
                        <div className={styles.back}>{parentName}</div>
                    </Link>
                    <div className={styles.now}>{nowName}</div>
                </Subheader>
                <Divider />
            </div>
        );
    }
}

Nav.propTypes = {
    parentUrl: PropTypes.string.isRequired,
    parentName: PropTypes.string.isRequired,
    nowName: PropTypes.string.isRequired
};

export default Nav;