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
        fontSize: '14px',
        color: '#565656'
    },
    secondaryText: {
        color: '#999',
        lineHeight: '20px',
        fontFamily: 'inherit',
        fontSize: '10px',
        marginTop: '10px'
    }
}

class SearchResults extends Component {
    constructor(props) {
        super(props);
    }
    over(index){
        console.log(index);
    }
    render() {
        const {data} = this.props;
        console.log(data);
        if (data) {
            const pois = data.searchResults.pois;
            return (
                <div className={style.root}>
                    <MobileTearSheet>
                        <List>
                            {pois.map((poi, index) => (
                                <div key={poi.id} onMouseOver={()=>this.over(index + 1)}>
                                    <ListItem
                                        style={styles.listItem}
                                        primaryText={<span style={styles.primaryText}>{(index + 1) + '.' + poi.name}</span>}
                                        secondaryText={<p style={styles.secondaryText}>{poi.adname + '    ' + poi.address}</p>}
                                        secondaryTextLines={2}
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