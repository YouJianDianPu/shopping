angular.module('app')
	.controller('myOrderController', ['$rootScope', '$scope', 'API', 'utils', function($rootScope, $scope, API, utils){
		
		$scope.isNotHas = true;
		$scope.isDisc = false;
		$scope.comments = {
			comment: ''
		};

		utils.tips.initPopover($scope);

		utils.tips.showLoadTips();
		API.fetchGet('/myOrder', {email: $rootScope.user.email})
			.then(function(data){
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
		$scope.discussion = function(item, index){
			utils.tips.openPopover($scope);
			$scope.comments.comment = '';
			$scope.datas = {
				index: index,
				cartid: item.cartid,
				pname: item.pname,
				content: '',
				email: $rootScope.user.email,
				nickname: $rootScope.user.nickname,
				commentTime: new Date().format("yyyy-MM-dd hh:mm:ss"),
				did: item.pid
			}
		}

		//用于popover.html
		$scope.closePopover = function(){
			utils.tips.closePopover($scope);
		}

		$scope.confirmDisc = function(){
			utils.tips.showLoadTips();
			$scope.datas.content = $scope.comments.comment;
			API.fetchPost('/updateComment/' + $scope.datas.did, $scope.datas)
				.then(function(data){
					console.log(data);
					API.fetchPost('/updateShopcartComment/' + $scope.datas.cartid, {cartid: $scope.datas.cartid, email: $rootScope.user.email})
						.then(function(d){
							utils.tips.hideLoadTips();
							utils.tips.closePopover($scope);
							// utils.tips.showTips(d.data.msg, $scope);
							$scope.data[$scope.datas.index].commentStatus = 1;
						})
						.catch(function(e){
							console.log(e);
						})

				})
				.catch(function(err){
					console.log(err);
					utils.tips.hideLoadTips();
				})
				
			utils.tips.closePopover($scope);
		}
	}])