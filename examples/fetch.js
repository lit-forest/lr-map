//需求的body格式'
//body: "isFirst=true&pageIndex=1&pageSize=10&queryTime=2016%2F10%2F31+16%3A18%3A6"

//初始化URLSearchParams,给fetch的body使用
let uRLSearchParams = new URLSearchParams();
uRLSearchParams.append('isFirst', true);
uRLSearchParams.append('pageIndex', 1);
uRLSearchParams.append('pageSize', 10);
uRLSearchParams.append('queryTime', '2016/10/31 16:18:6');

//fetch示例
fetch('http://10.25.67.109:8080/trafficIndex_web/cross/ydlkMore.json',
    {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: uRLSearchParams
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(e => console.log("Oops, error", e))