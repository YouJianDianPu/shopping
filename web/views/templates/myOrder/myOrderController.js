angular.module('app')
	.controller('myOrderController', ['$rootScope', '$scope', 'API', 'utils', function($rootScope, $scope, API, utils){
		
		$scope.isNotHas = true;
		$scope.isDisc = false;

		utils.tips.initPopover($scope);

		utils.tips.showLoadTips();
		API.fetchGet('/myOrder', {email: $rootScope.user.email})
			.then(function(data){
				console.log(data);
				$scope.data = data.data;
				if($scope.data.length > 0){
					$scope.isNotHas = false;
				}
				utils.tips.hideLoadTips();
			})
			.catch(function(err){
				console.log(err);
				utils.tips.hideLoadTips();
			})
		$scope.discussion = function(e){
			utils.tips.openPopover($scope, e);
		}

		//用于popover.html
		$scope.closePopover = function(){
			utils.tips.closePopover($scope);
		}

		$scope.confirmDisc = function(){
			utils.tips.closePopover($scope);
		}
	}])