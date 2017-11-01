angular.module('app')
	.controller('settleController', ['$rootScope', '$scope', '$stateParams', '$state', 'API', 'utils', function($rootScope, $scope, $stateParams, $state, API, utils){

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

		$scope.settle = function(){
			utils.tips.showLoadTips();
			API.fetchPost('/settle/' + $stateParams.id, {id: $stateParams.id, email: $rootScope.user.email, buyTime: new Date().format("yyyy-MM-dd hh:mm:ss")})
				.then(function(data){
					console.log(data);
					$state.go('main.shopcart');
					utils.tips.hideLoadTips();
				})
				.catch(function(err){
					console.log(err);
					utils.tips.hideLoadTips();
				})
		}
	}])