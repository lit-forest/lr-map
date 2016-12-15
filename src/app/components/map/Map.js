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
            center: _initMap_global.center,
            maxBounds: L.latLngBounds(L.latLng(_initMap_global.bounds.minx, _initMap_global.bounds.miny), L.latLng(_initMap_global.bounds.maxx, _initMap_global.bounds.maxy)),
            zoom: _initMap_global.defaultZoom,
            minZoom: _initMap_global.minZoom,
            maxZoom: _initMap_global.maxZoom,
            zoomControl: false,
            attributionControl: false
        });
        for (let i = 0, len = _layer_global.baseLayer.length; i < len; i++) {
            if (_layer_global.baseLayer[i].show === true) {
                let basemapLayer = new L.TileLayer(_layer_global.baseLayer[i].url, {
                    id: _layer_global.baseLayer[i].id,
                    errorTileUrl: 'img/errorTile.png'
                }).addTo(lrmap);
            }
        }
        
        L.control.scale().addTo(lrmap);
        let zoomControl = L.control.zoom({
            position: 'bottomright'
        });
        lrmap.addControl(zoomControl);

        window.lrmap = lrmap;
    }

}

export default Map