
// class Routes{

// }
// 
//将路由暴露，文件中的所有内容都可以在app.js上面使用

const RoutesController = require(__basename + '/routesController/routesController.js');

module.exports=function(app){
	app.get('/', RoutesController.homeController);

	app.post('/register', RoutesController.registerController);

}