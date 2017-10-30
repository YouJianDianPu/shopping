angular.module('app')
	.	factory('API',['$http',function($http){
		var api = {

			fetchPost:function(url,data){
				return $http({
					url:url,
					method:'POST',
					data:data

				});
			},

			fetchGet: function(url,params){
				return $http({
					url:url,
					method:'GET',
					params:params
				});
			},

			fetchPut: function(url, params){
				return $http({
					url: url,
					method: 'PUT',
					params: params
				});
			}

		};
		return api;
	}])