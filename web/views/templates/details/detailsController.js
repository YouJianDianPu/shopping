angular.module('app')
	.controller('detailsController', ['$rootScope', '$scope', '$state', '$stateParams', '$timeout', 'API', 'utils', function($rootScope, $scope, $state, $stateParams, $timeout, API, utils){
		//console.log('$stateParams ==> ', $stateParams);

		$scope.count = 1;



		utils.tips.showLoadTips();
		API.fetchGet('/details/' + $stateParams.id, $stateParams)
			.then(function(data){
				$scope.data = data.data;

				$scope.pdetails = {
					imgUrl: $scope.data[0].imgUrl,
					pname: $scope.data[0].name,
					price: $scope.data[0].price,
					count: 1,
					email: $rootScope.user.email,
					nickname: $rootScope.user.nickname,
					pid: $stateParams.id,
					cartTime: '',
					statusCode: 0
				};

				utils.tips.hideLoadTips();
			})
			.catch(function(err){
				console.log(err);
				utils.tips.hideLoadTips();
			})

		// $scope.$watch('count', function(newValue, oldValue){
		// 	$scope.pdetails.count = newValue;
		// })

		$scope.addShopCart = function(){
			$scope.pdetails.cartTime = new Date().format("yyyy-MM-dd hh:mm:ss");
			utils.tips.showLoadTips();
			API.fetchPut('/shopCart/' + $stateParams.id, $scope.pdetails)
				.then(function(data){
					utils.tips.showTips('成功加入购物车', $scope);
					//$rootScope.goPage('main.shopcart');
					utils.tips.hideLoadTips();
					$timeout(function(){
						$scope.tips.close();
						$state.go('main.shopcart');
					}, 2000);
				})
				.catch(function(err){
					console.log('err ==> ', err);
					utils.tips.hideLoadTips();
				})
		}
	}])