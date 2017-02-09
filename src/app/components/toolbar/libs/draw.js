import L from 'leaflet';
import LD from 'leaflet-draw';

var drawControl = null;
var drawnItems = new L.FeatureGroup();
var queryKeys = '美食|娱乐|地铁|公交|';
export const setKeys = (keys) => {
    queryKeys = keys;
}
export const drawEnable = (onDrawEnd) => {
    L.drawLocal = {
        draw: {
            toolbar: {
                // #TODO: this should be reorganized where actions are nested in actions
                // ex: actions.undo  or actions.cancel
                actions: {
                    title: 'Cancel drawing',
                    text: '取消'
                },
                finish: {
                    title: 'Finish drawing',
                    text: '完成'
                },
                undo: {
                    title: 'Delete last point drawn',
                    text: '撤销'
                },
                buttons: {
                    polyline: '',
                    polygon: '',
                    rectangle: '',
                    circle: '',
                    marker: ''
                }
            },
            handlers: {
                circle: {
                    tooltip: {
                        start: 'Click and drag to draw circle.'
                    },
                    radius: 'Radius'
                },
                marker: {
                    tooltip: {
                        start: '点击地图标注一个点'
                    }
                },
                polygon: {
                    tooltip: {
                        start: '点击开始绘制多边形',
                        cont: '继续点击，继续绘制',
                        end: '双击来结束绘制'
                    }
                },
                polyline: {
                    error: '<strong>Error:</strong> 不能重叠，重叠了',
                    tooltip: {
                        start: '点击开始绘制线',
                        cont: '继续点击，继续绘制',
                        end: '双击来结束绘制'
                    }
                },
                rectangle: {
                    tooltip: {
                        start: '长按来绘制一个矩形'
                    }
                },
                simpleshape: {
                    tooltip: {
                        end: '释放鼠标按键来结束绘制'
                    }
                }
            }
        },
        edit: {
            toolbar: {
                actions: {
                    save: {
                        title: 'Save changes.',
                        text: '保存'
                    },
                    cancel: {
                        title: 'Cancel editing, discards all changes.',
                        text: '取消'
                    }
                },
                buttons: {
                    edit: '编辑图形',
                    editDisabled: '没有可编辑的图形',
                    remove: '删除图形',
                    removeDisabled: '没有可删除的图形'
                }
            },
            handlers: {
                edit: {
                    tooltip: {
                        text: '拖拽节点来编辑图形',
                        subtext: '编辑'
                    }
                },
                remove: {
                    tooltip: {
                        text: '选择想要删除的图形'
                    }
                }
            }
        }
    };
    var layer = null,
        shapeOptions = {
            shapeOptions: {
                color: '#eb4f38',
                weight: 2
            }
        };
    drawControl = new L.Control.Draw({
        position: 'topright',
        draw: {
            marker: false,
            polyline: false,
            circle: shapeOptions,
            polygon: shapeOptions,
            rectangle: shapeOptions
        },
    });
    lrmap.addControl(drawControl);
    lrmap.on(L.Draw.Event.DRAWSTART, function (e) {
        lrmap.removeLayer(drawnItems);
        drawnItems = new L.FeatureGroup();
        lrmap.addLayer(drawnItems);
    });
    lrmap.on(L.Draw.Event.CREATED, function (e) {
        let polygon = '';
        let type = e.layerType;
        layer = e.layer;
        layer.bindPopup('正在查询该范围内的设施');
        drawnItems.addLayer(layer);
        for (let i = 0, arr = layer._latlngs[0], len = layer._latlngs[0].length; i < len; i++) {
            polygon += arr[i].lng + ',' + arr[i].lat + '|'
        }
        polygon += layer._latlngs[0][0].lng + ',' + layer._latlngs[0][0].lat
        onDrawEnd(polygon,queryKeys)
    });
}
export const drawDisable = () => {
    lrmap.removeLayer(drawnItems);
    drawnItems = new L.FeatureGroup();
    lrmap.removeControl(drawControl);
}