var _layer_global = {
    baseLayer:
    [
        {
            id:'streetLayer',
            name: '街道图',
            url: 'http://a.tiles.mapbox.com/v4/mapbox.mapbox-streets-v7/{z}/{x}/{y}.svg?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpbTgzcHQxMzAxMHp0eWx4bWQ1ZHN2NGcifQ.WVwjmljKYqKciEZIC3NfLA',
            show: true,
            img: 'img/streetLayer.svg'
        },
        {
            id:'imageLayer',
            name: '影像图',
            url: 'https://a.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.svg?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpbG10dnA3NzY3OTZ0dmtwejN2ZnUycjYifQ.1W5oTOnWXQ9R1w8u3Oo1yA',
            show: false,
            img: 'img/imageLayer.svg'
        },
        // {
        //     id:'imageLayer2',
        //     name: 'mapbox',
        //     url: 'https://b.tiles.mapbox.com/v4/mapbox.emerald/{z}/{x}/{y}.svg?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpbG10dnA3NzY3OTZ0dmtwejN2ZnUycjYifQ.1W5oTOnWXQ9R1w8u3Oo1yA',
        //     show: false,
        //     img: 'img/imageLayer.jpg'
        // }
    ],
    deviceLayer: [
        {
            id:'signal',
            name: '餐饮',
            url: '1',
            show: true,
            img: 'img/food.svg'
        },
        {
            id:'pass',
            name: '娱乐',
            url: '2',
            show: false,
            img: 'img/entertainment.svg'
        },
        {
            id:'guidingPanel',
            name: '地铁',
            url: '3',
            show: true,
            img: 'img/subway.svg'
        },
        {
            id:'video',
            name: '景点',
            url: '4',
            show: false,
            img: 'img/scene.svg'
        }

    ]

}