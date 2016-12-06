import React, { Component, PropTypes } from 'react';

import MobileTearSheet from '../../mobileTearSheet/MobileTearSheet';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import { grey400, darkBlack, lightBlack } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import style from './SearchResults.css';

const styles = {
    listItem: {
        position: 'relative',
        fontFamily: "Arial,sans-serif",
        marginLeft: '17px',
        height: 70,
        width: '90%'
    },
    primaryText: {
        marginTop: -3,
        fontSize: '14px',
        color: '#565656',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    secondaryText: {
        color: '#999',
        lineHeight: '20px',
        fontFamily: 'inherit',
        fontSize: '10px',
        marginTop: '10px'
    }
}

/**
 * @author sylvenas
 * @doc 查询结果展示组件，一般作为rbox的子组件'
 * @class SearchResults
 * @extends {Component}
 */
class SearchResults extends Component {
    constructor(props) {
        super(props);
    }
    /**
     * @doc 鼠标悬停每一行的事件
     * @param {string} index
     * @memberOf SearchResults
     */
    over(index) {
        console.log(index);
    }
    /**
     * @data 由rbox传入的数据,一般为属性查询结果，或者空间查询结果，前者更过
     * @returns
     * @memberOf SearchResults
     */
    render() {
        const {data} = this.props;
        if (data) {
            const pois = data.pois;
            return (
                <div ref='root' className={style.root}>
                    <MobileTearSheet>
                        <List>
                            {pois.map((poi, index) => (
                                <div key={poi.id} onMouseOver={() => this.over(index + 1)}>
                                    <ListItem
                                        style={styles.listItem}
                                        primaryText={<p style={styles.primaryText} title={poi.name}>{(index + 1) + '.' + poi.name}</p>}
                                        secondaryText={<p style={styles.secondaryText}>{poi.adname + '    ' + poi.address}</p>}
                                        secondaryTextLines={1}
                                        />
                                    <Divider className={style.divider} />
                                </div>
                            ))}
                        </List>
                    </MobileTearSheet>
                </div>
            );
        } else {
            return <div></div>
        }
    }
}

SearchResults.propTypes = {

};

export default SearchResults;