import React, { Component, PropTypes } from 'react';
import L from 'leaflet';

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
let markers = new L.FeatureGroup();
let mouseOverMaker = new L.FeatureGroup();
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
    onMouseOver(poi, index) {
        let poiIcon = L.divIcon({
            html: "<span>" + (index + 1) + '</span>',
            className: 'onMouseOverPoiIcon',
            iconSize: [32, 32]
        });
        mouseOverMaker.addLayer(L.marker(poi.location.split(',').reverse(), { icon: poiIcon }));
        lrmap.addLayer(mouseOverMaker);
    }
    onMouseOut(poi) {
        mouseOverMaker.clearLayers();
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
                                <div key={poi.id} onMouseOver={() => this.onMouseOver(poi, index)} onMouseOut={() => this.onMouseOut(poi)}>
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
    componentDidUpdate(prevProps, prevState) {
        markers.clearLayers();
        mouseOverMaker.clearLayers();
        const pois = this.props.data.pois;
        pois.map((poi, index) => {
            let poiIcon = L.divIcon({
                html: "<span>" + (index + 1) + '</span>',
                className: 'poiIcon',
                iconSize: [32, 32]
            });
            markers.addLayer(L.marker(poi.location.split(',').reverse(), { icon: poiIcon, id: index + 1 }).bindPopup(poi.name)).bindTooltip(poi.name).openTooltip();;
        })
        lrmap.addLayer(markers);
    }

}

SearchResults.propTypes = {

};

export default SearchResults;