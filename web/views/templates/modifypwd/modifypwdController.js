angular.module('app')
	.controller('modifypwdController', ['$scope', '$state', '$timeout', 'API', 'utils', function($scope, $state, $timeout, API, utils){
		$scope.domStatus = {
			emailStatus: true,
			validCodeStatus: true,
			newpwdStatus: false,
			cnewpwdStatus: false,
			codeBtnStatus: true,
			cBtnStatus: false,
			sBtnStatus: false
		};

		$scope.data = {
			email: '',
			validCode: '',
			newpwd: '',
			cnewpwd: ''
		};

		$scope.getValidCode = function(){
			if(!valid()){
				return;
			}

			utils.tips.showLoadTips();
			API.fetchGet('/modifypwd', {email: $scope.data.email})
				.then(function(data){
					console.log(data);
					utils.tips.hideLoadTips();
					utils.tips.showTips(data.data.msg, $scope);
					if(data.data.code === 1){
						$scope.domStatus.codeBtnStatus = false;
						$scope.domStatus.cBtnStatus = true;
						$scope.validCode = data.data.validCode;
					}
				})
				.catch(function(err){
					console.log(err);
					utils.tips.hideLoadTips();
				})				
				
		}

		$scope.confirmValidCode = function(){
			if($scope.data.validCode == $scope.validCode){
				$scope.domStatus.emailStatus = false;
				$scope.domStatus.validCodeStatus = false;
				$scope.domStatus.cBtnStatus = false;
				$scope.domStatus.sBtnStatus = true;
				$scope.domStatus.newpwdStatus = true;
				$scope.domStatus.cnewpwdStatus = true;
			}else{
				utils.tips.showTips('验证码不正确', $scope);
			}
		}

		$scope.submitPwd = function(){
			if(!validPwd()){
				return;
			}
			API.fetchPost('/modifypwd', {pwd: $scope.data.newpwd, email: $scope.data.email})
				.then(function(data){
					utils.tips.showTips(data.data.msg, $scope);
					$timeout(function(){
						$scope.tips.close();
						$state.go('login');
					}, 2000);
				})
				.catch(function(err){
					console.log(err);
				})
		}	



		function valid(){
			if(!utils.validForm.isNotEmpty($scope.data.email)){
				utils.tips.showTips('邮箱不能为空', $scope);
				return false;
			}else if(!utils.validForm.isEmail($scope.data.email)){
				utils.tips.showTips('邮箱格式不正确', $scope);
				return false;
			}
			return true;
		}

		function validPwd(){
			if(!utils.validForm.isNotEmpty($scope.data.newpwd)){
				utils.tips.showTips('密码不能为空');
				return false;
			}else if(!utils.validForm.isLength($scope.data.newpwd, 8, 16)){
				utils.tips.showTips('密码字符个数8-16位');
				return false;
			}else if(utils.validForm.isNotOnlyW($scope.data.newpwd)){
				utils.tips.showTips('密码只能是字母、数字和下划线');
				return false;
			}

			if(!utils.validForm.isEqual($scope.data.newpwd, $scope.data.cnewpwd)){
				utils.tips.showTips('密码不一致');
			}
			return true;
		}
	}])