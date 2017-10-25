angular.module('app')
	.	factory('API',['$http',function($http){
		var api = {

			fetchPost:function(url,data){
			return $http({
					url:url,
					method:'POST',
					data:data,

				});
			}

		};
		return api;
	}])