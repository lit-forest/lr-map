#js代码规范    
---
###1.最小全局变量   
为了避免和第三方的javascript库,别的开发人员代码产生命名冲突，在项目中应当尽量少的使用全局变量,在本项目中，只有三个全局变量可以使用，第一是全局的lrmap对象，由于整个项目中几乎每个方法都会使用到lrmap对象，
所以把lrmap添加位全局对象，第二和第三分别是初始化地图的参数和图层的地址，这样做是为了使运维人员能够在配置文件里面自由的修改地图的配置。在声明变量中应该注意的问题
####1.始终使用var声明变量
bad:
```js
function sum(x, y) {
    result = x + y;
    return result;
}
```
good:
```js
function sum(x, y) {
    var result = x + y;
    return result;
}
```
####2.避免使用任务链声明变量
bad:
```js
function foo() {
   var a = b = 0;
}
```
其中b会成为全局变量，因为从右到左赋值的过程中，首先赋值表达式b=0,此时b是未声明的，则b为全局变量
bad:
```js
function foo() {
    var a = 0,
        b = 0;
}
```
###2.for循环
bad:
for (var i = 0; i < arr.length; i++) {

}
good:
for (var i = 0, len = arr.length; i < len; i++) {

}    

###3.尽量不要扩展内置原型    
增加内置的构造函数原型(如：Object(),Array(),Function()),会让代码变得越来越难维护，会让其他的开发人员不知所措    

###4.避免隐式类型转换    
javascript在变量比较的时候会进行隐式类型转换。例如：false==0,''==0,会返回true,在比较值和表达式类型的时候始终使用===和!==    

###5.避免使用eval()   
eval()方法接受任意的字符串，并当作javascript代码来执行
bad:
```js
var propetry = 'name';
alert(eval('obj.' + propetry))
```
good:
```js
var propetry = 'name';
alert(obj[propetry]);
```
bad:
```js
setTimeout("myFunc()", 1000);
setTimeout("myFunc(1, 2, 3)", 1000);
```
good:
```js
setTimeout(myFunc, 1000);
setTimeout(function () {
    myFunc(1, 2, 3);
}, 1000);
```
###6.花括号{}
在for循环和if else语句中，一定要使用{ }    

###7.以大写字母来命名构造函数
bad:
```js
function myFunction() { }
```
good:
```js
function MyConstructor() { }
```
###8.注释
在写每个类和方法的同时必须写注释.




