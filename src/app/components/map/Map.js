import React from 'react';
import L from 'leaflet';

class Map extends React.Component {
    
    render() {
        return (
            <div id='map'></div>
        )
    }
    componentDidMount() {
        let lrmap = L.map("map", {
            center: [28.41, 121.355],
            zoom: 5,
            zoomControl: false,
            attributionControl:false
        });
        let basemapLayer = new L.TileLayer('https://b.tiles.mapbox.com/v4/mapbox.run-bike-hike/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpbTgzcHQxMzAxMHp0eWx4bWQ1ZHN2NGcifQ.WVwjmljKYqKciEZIC3NfLA', {
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