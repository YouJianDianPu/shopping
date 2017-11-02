angular.module('app')
	.controller('shopcartController', ['$rootScope', '$scope', 'API', 'utils', function($rootScope, $scope, API, utils){

		utils.tips.showLoadTips();
		API.fetchGet('/main/shopcart/' + $rootScope.user.uid, $rootScope.user)
			.then(function(data){
				$scope.data = data.data;
				utils.tips.hideLoadTips();
			})
			.catch(function(err){
				console.log(err);
				utils.tips.hideLoadTips();
			})

	}])