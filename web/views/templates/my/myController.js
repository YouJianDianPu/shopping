angular.module('app')
	.controller('myController', ['$rootScope', '$scope', 'API', 'utils', function($rootScope, $scope, API, utils){
		utils.tips.showLoadTips();
		API.fetchGet('/my', {email: $rootScope.user.email})
			.then(function(data){
				$scope.data = data.data;
				utils.tips.hideLoadTips();
			})
			.catch(function(err){
				console.log(err);
				utils.tips.hideLoadTips();
			})

	}])