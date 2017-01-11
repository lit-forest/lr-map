//由geojson拼接sql,geo 对象为geojson数据
var feas = geo.features;
for (var i = 0, len = feas.length; i < len; i++) {
    var sql = "insert into double_geo (xh,coordinates,STCROSSID,EDCROSSID,RSID,CROSSID,ID,ROADID) values ('xh',"
        + "'"
        + arrToString(feas[i].geometry.coordinates)
        + "',"
        + feas[i].properties.STCROSSID
        + ","
        + feas[i].properties.EDCROSSID
        + ","
        + feas[i].properties.RSID
        + ","
        + feas[i].properties.CROSSID
        + ","
        + feas[i].properties.ID
        + ","
        + feas[i].properties.ROADID
        + ");";
    console.log(sql);
}
function arrToString(arr) {
    var geo = "";
    for (var m = 0, n = arr.length; m < n; m++) {
        if (m == 0) {
            geo = '[[' + arr[m][0] + arr[m][1] + '],'
        } else if (m == n - 1) {
            geo += '[' + arr[m][0] + arr[m][1] + ']]'
        } else {
            geo += '[' + arr[m][0] + arr[m][1] + '],'
        }
    }
    return geo;
}

// 反面示例
setTimeout("myFunc()", 1000);
setTimeout("myFunc(1, 2, 3)", 1000);

// 更好的
function MyConstructor() { }
function myFunction() { }