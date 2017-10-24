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
<<<<<<< HEAD
		 		}
=======
		 		},
>>>>>>> f23bc71e061f094826a17006194afc22e45b0352
	 		]
 		});
	}]);
	
})();