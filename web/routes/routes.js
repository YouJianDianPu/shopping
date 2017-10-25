angular.module('app')
.config(['$stateProvider','$urlRouterProvider','$locationProvider',function($stateProvider,$urlRouterProvider,$locationProvider){
	
	$urlRouterProvider.otherwise('/login');

	$stateProvider
		.state('main',{
			url:'',

			abstruct:true,

			templateUrl:'/templates/main/main.html'

		})
		
		.state('main.home',{
			url:'/home',
			templateUrl:'/templates/home/home.html'
		})

		.state('main.find',{
			url:'/find',
			templateUrl:'/templates/find/find.html'
		})

		.state('register',{
			url:'/register',
			templateUrl:'/templates/register/register.html',
			cache: false,
			controller:'registerController',
			resolve: {
				des: ['$ocLazyLoad', function ($ocLazyLoad) {
					return $ocLazyLoad.load('register');
				}]
			}
		})

		.state('login',{
			url:'/login',
			templateUrl:'/templates/login/login.html',
			cache: false,
			controller:'loginController',
			resolve: {
				des: ['$ocLazyLoad', function ($ocLazyLoad) {
					return $ocLazyLoad.load('login');
				}]
			}
		})
		
		

		$locationProvider.html5Mode(true);//html5标准路径模式
}])