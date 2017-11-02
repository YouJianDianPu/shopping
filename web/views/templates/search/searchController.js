angular.module('app')
	.controller('searchController', ['$scope', 'API', 'utils', function($scope, API, utils){
		
		$scope.searchWord = '';

		$scope.isHas = false;

		$scope.search = function(){
			utils.tips.showLoadTips();
			API.fetchGet('/search/' + $scope.searchWord, {word: $scope.searchWord})
				.then(function(data){
					$scope.data = data.data;
					if($scope.data.length === 0){
						$scope.isHas = true;
					}else{
						$scope.isHas = false;
					}
					utils.tips.hideLoadTips();
				})
				.catch(function(err){
					console.log(err);
					utils.tips.hideLoadTips();					
				})
		}
	}])