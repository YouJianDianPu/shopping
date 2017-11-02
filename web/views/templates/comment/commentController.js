angular.module('app')
	.controller('commentController', ['$scope', '$stateParams', 'API', 'utils', function($scope, $stateParams, API, utils){
		utils.tips.showLoadTips();
		API.fetchGet('/comment/' + $stateParams.id, $stateParams)
			.then(function(data){
				$scope.data = data.data;
				utils.tips.hideLoadTips();
			})
			.catch(function(err){
				console.log(err);
				utils.tips.hideLoadTips();
			})
	}])