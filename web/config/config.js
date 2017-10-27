(function () {
var app = angular.module('app');

//配置懒加载信息
app.config(["$provide", "$compileProvider", "$controllerProvider", "$filterProvider", function ($provide, $compileProvider, $controllerProvider, $filterProvider) {
 app.controller = $controllerProvider.register;
 app.directive = $compileProvider.directive;
 app.filter = $filterProvider.register;
 app.factory = $provide.factory;
 app.service = $provide.service;
 app.constant = $provide.constant;
}])
	.config(["$ocLazyLoadProvider", function ($ocLazyLoadProvider) {
		$ocLazyLoadProvider.config({
	 		debug: false,
	 		events: false,
	 		modules: [
		 		{
		 			name: 'register',
		 			files: [
		 				'/templates/register/registerController.js',
		 				'/templates/register/register.css'
		 			]
		 		},
		 		{
		 			name: 'login',
		 			files: [
		 				'/templates/login/loginController.js',
		 				'/templates/login/login.css'
		 			]
		 		},
		 		{
		 			name: 'main.home',
		 			files: [
		 				'/templates/home/homeController.js',
		 				'/templates/home/home.css'
		 			]
		 		},
		 		{
		 			name: 'main.shopcart',
		 			files: [
		 				'/templates/shopcart/shopcartController.js',
		 				'/templates/shopcart/shopcart.css'
		 			]
		 		},
		 		{
		 			name: 'details',
		 			files: [
		 				'/templates/details/detailsController.js',
		 				'/templates/details/details.css'
		 			]
		 		},
		 		{
		 			name: 'comment',
		 			files: [
		 				'/templates/comment/commentController.js',
		 				'/templates/comment/comment.css'
		 			]
		 		}
	 		]
 		});
	}]);
	
})();