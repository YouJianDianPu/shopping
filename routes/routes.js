
// class Routes{

// }
// 
//将路由暴露，文件中的所有内容都可以在app.js上面使用

const RoutesController = require(__basename + '/routesController/routesController.js');

module.exports=function(app){
	app.get('/', RoutesController.rootController);

	app.post('/register', RoutesController.registerController);

	app.post('/login', RoutesController.loginController);

	app.get('/main/home', RoutesController.homeController);

	app.get('/details/:id', RoutesController.detailsController);

	app.get('/comment/:id', RoutesController.commentController);
	
	app.get('/main/shopcart/:id', RoutesController.shopcartController);

	app.put('/shopCart/:id', RoutesController.addShopcartController);

	app.get('/settle/:id', RoutesController.settleController);

	app.post('/settle/:id', RoutesController.postSettleController);

	app.get('/my', RoutesController.myController);

	app.get('/myOrder', RoutesController.myOrderController);
}