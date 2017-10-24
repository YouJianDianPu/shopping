// 后台入口文件 
// 
// 全局变量,获取当前模块文件所在的位置
global.__basename=__dirname;

<<<<<<< HEAD
global.config = require(__basename + '/config/config.js');
=======
global.config=require(__basename + '/config/config.js');
>>>>>>> f23bc71e061f094826a17006194afc22e45b0352

//引入模块
const express=require('express');

const ejs=require('ejs');

<<<<<<< HEAD
const favicon = require('serve-favicon');

//处理POST请求请求体的数据
const bodyparser = require('body-parser');
=======
const favicon=require('serve-favicon');

//专门处理post请求方式
const bodyParser=require('body-parser');
>>>>>>> f23bc71e061f094826a17006194afc22e45b0352

const routes=require(__basename+'/routes/routes.js');

//实例化
const app=express();

//请求.ico文件
<<<<<<< HEAD
app.use(favicon(__basename + '/web/public/images/icons/img_79.ico'));

let port = process.env.PORT || config.server.port;
=======
//
app.use(favicon(__basename+ '/web/public/images/icons/img_79.ico'));


let port =process.env.PORT || config.server.port;//在服务器上是用80端口，否则使用本地开发地址

>>>>>>> f23bc71e061f094826a17006194afc22e45b0352

//设置静态资源路径
//
app.use(express.static(__basename+'/web/public'));
app.use(express.static(__basename+'/web/views'));
app.use(express.static(__basename+'/web'));

//设置视图引擎
app.set('views',__basename+'/web/views');

app.set('view engine','html');

//ejs.__express回调函数
app.engine('.html',ejs.__express);

<<<<<<< HEAD
//json划post请求
app.use(bodyparser.json());
=======
//json化post请求数据
app.use(bodyParser.json());

>>>>>>> f23bc71e061f094826a17006194afc22e45b0352

//加载所有路由
routes(app);

//404处理
app.use((req,res)=>{
	res.status(404);
	res.send('页面不存在');
});



//处理500错误(服务器报错)

app.use((err,req,res)=>{
	res.status(500);
	res.send('服务器报错');
});


<<<<<<< HEAD
//设置监听窗口, (主机: config.server.host), (端口:config.server.port)
app.listen(config.server.port,()=>{
	//添加一个回调函数，可加可不加
	console.log(`服务器运行于${config.server.host}：${config.server.port}端口`)
=======
//设置监听窗口
app.listen(port,()=>{
	//添加一个回调函数，可加可不加
	console.log(`服务器运行于${config.server.host}:${port}`)
>>>>>>> f23bc71e061f094826a17006194afc22e45b0352

});
