
// 加载 express
var express = require('express');
var path = require('path');

// 创建 app
var app = express();


var fn = express.static(path.join(__dirname, 'public'));

console.log(fn.toString());

// 把 public 目录作为静态资源托管起来
// app.use('/', fn);


// 参数1： 虚拟路径
// app.use('/xxx', fn);

// app.use('/public', fn);

// 这种写法，等价于  app.use('/', fn);
app.use(fn);







// 启动服务
app.listen(9996, function () {
  console.log('http://localhost:9996');
});






// 1. 请求方法必须一致
// 2. 请求路径必须一致
// // 各种路由操作
// app.get('/', function (req, res) {
  
//   res.send(req.url);
// });


// app.get('/abc', function (req, res) {
  
//   res.send(req.url);
// });

// app.get('/index', function (req, res) {
  
//   res.send(req.url);
// });

// app.get('/details', function (req, res) {
  
//   res.send(req.url);
// });


// // 当用户 post 请求 /add 的时候会匹配到下面的路由
// app.post('/add', function (req, res) {
//   // body...
// });


// // app.put();
// // app.delete


// // 1. 只要请求路径匹配，无论什么请求方法都会匹配到该路由
// app.all('/add', function (req, res) {
//   // body...
// });





// app.use
// 1. 不区分请求方法
// 2. 只要请求的第一段能匹配到那么就可以
// app.use('/abc', function (req, res) {
//   // body...
//   res.send(req.url);
// });

// app.use('/', function (req, res) {
//   // body...
//   res.send(req.url);
// });

