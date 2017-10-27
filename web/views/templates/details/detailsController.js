angular.module('app')
	.controller('detailsController', ['$scope', '$stateParams', 'API', 'utils', function($scope, $stateParams, API, utils){
		//console.log('$stateParams ==> ', $stateParams);

		$scope.value = 1;

		utils.tips.showLoadTips();
		API.fetchGet('/details/' + $stateParams.id, $stateParams)
			.then(function(data){
				console.log('data ==> ', data.data);
				$scope.data = data.data;
				utils.tips.hideLoadTips();
			})
			.catch(function(err){
				console.log(err);
				utils.tips.hideLoadTips();
			})
		$scope.addShopCart = function(){
			
		}
	}])