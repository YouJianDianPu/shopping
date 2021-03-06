angular.module('app')
	.controller('rootController',['$rootScope','$state',function($rootScope,$state){
		$rootScope.user = {
			uid: '',
			nickname: '',
			email: ''
		}

		$rootScope.goPage=function(stateName,params){
			// console.log(params);
			$state.go(stateName,params);
		}

		$rootScope.goBack = function(){
			history.back(-1);
		}
	}])