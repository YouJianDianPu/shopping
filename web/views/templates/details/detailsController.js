angular.module('app')
	.controller('detailsController', ['$rootScope', '$scope', '$stateParams', 'API', 'utils', function($rootScope, $scope, $stateParams, API, utils){
		//console.log('$stateParams ==> ', $stateParams);

		$scope.count = 1;



		utils.tips.showLoadTips();
		API.fetchGet('/details/' + $stateParams.id, $stateParams)
			.then(function(data){
				console.log('data ==> ', data.data);
				$scope.data = data.data;

				$scope.pdetails = {
					imgUrl: $scope.data[0].imgUrl,
					pname: $scope.data[0].name,
					price: $scope.data[0].price,
					count: 1,
					email: $rootScope.user.email,
					nickname: $rootScope.user.nickname,
					pid: $stateParams.id,
					cartTime: ''
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
					console.log('data ==> ', data);
					utils.tips.hideLoadTips();
				})
				.catch(function(err){
					console.log('err 123==> ', err);
					utils.tips.hideLoadTips();
				})
		}
	}])