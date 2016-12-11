const SEARCH = 'SEARCH';

export const search = (searchResults) => ({
    type: SEARCH,
    searchResults: searchResults
})



export const search_ASYN = key => (dispatch, getState) => {

    var URLSearchParams = require('url-search-params');
    var uRLSearchParams = new URLSearchParams();
    uRLSearchParams.append('keywords', key);
    uRLSearchParams.append('output', 'json');
    uRLSearchParams.append('offset', 20);
    uRLSearchParams.append('page', 1);
    uRLSearchParams.append('key', '5f18940da16191c19251d4bc11b56925');
    uRLSearchParams.append('extensions', 'all');

    if (self.fetch) {
        fetch('https://restapi.amap.com/v3/place/text?', {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: uRLSearchParams
        }).then(response => response.json())
            .then(json => dispatch(search(json)));
    } else {
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            var xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                console.log(JSON.parse(xmlhttp.responseText));
                dispatch(search(JSON.parse(xmlhttp.responseText)))
            }
        };
        xmlhttp.open("POST", 'https://restapi.amap.com/v3/place/text?', true);
        xmlhttp.send(uRLSearchParams);
    }
}