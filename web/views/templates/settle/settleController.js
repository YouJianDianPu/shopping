angular.module('app')
	.controller('settleController', ['$scope', '$stateParams', 'API', 'utils', function($scope, $stateParams, API, utils){

		$scope.total = 0;

		utils.tips.showLoadTips();
		API.fetchGet('/settle/' + $stateParams.id, {id: $stateParams.id})
			.then(function(data){
				console.log(data);
				$scope.data = data.data;

				$scope.data.forEach(function(v){
					$scope.total += v.price * v.count;
				})

				utils.tips.hideLoadTips();
			})
			.catch(function(err){
				console.log(err);
				utils.tips.hideLoadTips();
			})
	}])