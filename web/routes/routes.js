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
			url:'/main/home',
			templateUrl:'/templates/home/home.html',
			controller: 'homeController',
			resolve: {
				des: ['$ocLazyLoad', function ($ocLazyLoad) {
					return $ocLazyLoad.load('main.home');
				}]
			}
		})

		.state('main.find',{
			url:'/main/find',
			templateUrl:'/templates/find/find.html'
		})

		.state('main.shopcart',{
			url:'/main/shopcart',
			templateUrl:'/templates/shopcart/shopcart.html',
			cache: false,
			controller: 'shopcartController',
			resolve: {
				des: ['$ocLazyLoad', function ($ocLazyLoad) {
					return $ocLazyLoad.load('main.shopcart');
				}]
			}
		})

		.state('main.my',{
			url:'/main/my',
			templateUrl:'/templates/my/my.html',
			cache: false,
			controller: 'myController',
			resolve: {
				des: ['$ocLazyLoad', function ($ocLazyLoad) {
					return $ocLazyLoad.load('main.my');
				}]
			}
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

		.state('details',{
			url:'/details/:id',
			templateUrl:'/templates/details/details.html',
			cache: false,
			controller:'detailsController',
			resolve: {
				des: ['$ocLazyLoad', function ($ocLazyLoad) {
					return $ocLazyLoad.load('details');
				}]
			}
		})

		.state('comment',{
			url:'/comment/:id',
			templateUrl:'/templates/comment/comment.html',
			cache: false,
			controller:'commentController',
			resolve: {
				des: ['$ocLazyLoad', function ($ocLazyLoad) {
					return $ocLazyLoad.load('comment');
				}]
			}
		})

		.state('settle',{
			url:'/settle/:id',
			templateUrl:'/templates/settle/settle.html',
			cache: false,
			controller:'settleController',
			resolve: {
				des: ['$ocLazyLoad', function ($ocLazyLoad) {
					return $ocLazyLoad.load('settle');
				}]
			}
		})

		.state('myOrder',{
			url:'/myOrder/:id',
			templateUrl:'/templates/myOrder/myOrder.html',
			cache: false,
			controller:'myOrderController',
			resolve: {
				des: ['$ocLazyLoad', function ($ocLazyLoad) {
					return $ocLazyLoad.load('myOrder');
				}]
			}
		})

		.state('search',{
			url:'/search/:id',
			templateUrl:'/templates/search/search.html',
			cache: false,
			controller:'searchController',
			resolve: {
				des: ['$ocLazyLoad', function ($ocLazyLoad) {
					return $ocLazyLoad.load('search');
				}]
			}
		})
		
		

		$locationProvider.html5Mode(true);//html5标准路径模式
}])