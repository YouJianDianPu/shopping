angular.module('app')
	.controller('homeController', ['$scope', '$state', 'API', 'utils', function($scope, $state, API, utils){
		utils.tips.showLoadTips();
		API.fetchGet('/main/home')
			.then(function(data){
				//console.log(data);
				$scope.data = data.data;
				utils.tips.hideLoadTips();
			})
			.catch(function(err){
				console.log(err);
			})

		$scope.getFocus = function(stateName){
			$state.go(stateName);
		}
	}])