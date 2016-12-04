import L from 'leaflet';
import LD from 'leaflet-draw';

export const drawEnable = (a) => {
    var drawnItems = new L.FeatureGroup();
    lrmap.addLayer(drawnItems);
    var drawControl = new L.Control.Draw({
        position: 'topright',
        edit: {
            featureGroup: drawnItems
        }
    });
    lrmap.addControl(drawControl);
    lrmap.on(L.Draw.Event.CREATED, function (e) {
        var type = e.layerType,
            layer = e.layer;

        if (type === 'marker') {
            layer.bindPopup('A popup!');
        }

        drawnItems.addLayer(layer);
    });

    lrmap.on(L.Draw.Event.EDITED, function (e) {
        var layers = e.layers;
        var countOfEditedLayers = 0;
        layers.eachLayer(function (layer) {
            countOfEditedLayers++;
        });
        console.log("Edited " + countOfEditedLayers + " layers");
    });
    var modifiedDraw = L.drawLocal.extend({
         draw: {
             toolbar: {
                 buttons: {
                     polygon: '画个面试试'
                 }
             }
         }
     });
}
export const drawDisable = () => {

}