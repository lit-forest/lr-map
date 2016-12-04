import React from 'react';
import L from 'leaflet';

/**
 * @author sylvenas
 * @doc 初始化地图组件
 * @class Map
 * @extends {React.Component}
 */
class Map extends React.Component {

    /**
     * @doc 地图容器DOM
     * @returns 地图容器
     * @memberOf Map
     */
    render() {
        return (
            <div id='map'></div>
        )
    }
    /**
     * @doc 初始化地图,使lrmap对象成为全局对象，在整个项目中的任意地方直接使用
     * @memberOf Map
     */
    componentDidMount() {
        let lrmap = L.map("map", {
            center: [37.81, -122.41],
            zoom: 12,
            zoomControl: false,
            attributionControl: false
        });
        let basemapLayer = new L.TileLayer('http://a.tiles.mapbox.com/v4/mapbox.mapbox-streets-v7/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpbTgzcHQxMzAxMHp0eWx4bWQ1ZHN2NGcifQ.WVwjmljKYqKciEZIC3NfLA', {
            id: 'streetLayer'
        }).addTo(lrmap);

        L.control.scale().addTo(lrmap);
        let zoomControl = L.control.zoom({
            position: 'bottomright'
        });
        lrmap.addControl(zoomControl);

        window.lrmap = lrmap;
    }

}

export default Map