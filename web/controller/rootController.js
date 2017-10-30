angular.module('app')
	.controller('rootController',['$rootScope','$state',function($rootScope,$state){
		$rootScope.user = {
			uid: 6,
			nickname: 'youjian',
			email: '969722998@qq.com'
		}

		$rootScope.goPage=function(stateName,params){
			// console.log(params);
			$state.go(stateName,params);
		}

		$rootScope.goBack = function(){
			history.back(-1);
		}
	}])