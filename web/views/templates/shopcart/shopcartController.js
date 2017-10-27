angular.module('app')
	.controller('shopcartController', ['$scope', 'API', 'utils', function($scope, API, utils){

		utils.tips.showLoadTips();
		API.fetchGet('/main/shopcart/hwf969722998@qq.com', {email: 'hwf969722998@qq.com'})
			.then(function(data){
				console.log('data ==> ', data.data);
				$scope.data = data.data;
				utils.tips.hideLoadTips();
			})
			.catch(function(err){
				console.log(err);
				utils.tips.hideLoadTips();
			})

	}])