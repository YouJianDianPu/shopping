angular.module('app')
	.controller('registerController',['$scope', '$timeout', '$state', 'utils', 'API', function($scope, $timeout, $state, utils, API){
		$scope.data={
			email:'',
			phone:'',
			nickname:'',
			pwd:'',
			cpwd:''	
		};

		$scope.register=function(){
			if(!validRegister()){
				return;
			}
			 utils.tips.showLoadTips();
			API.fetchPost('/register',$scope.data)
			//请求王城在执行then 函数
				.then(function(data){
					utils.tips.hideLoadTips();
					utils.tips.showTips(data.data.msg, $scope);
					$timeout(function(){
						$scope.tips.close();
						$state.go('login');
					}, 2000)
				})
				.catch(function(){
					utils.tips.showTips(data.data.msg);
				})
		}

		//与utils.tips.showTips()方法不同
		function showTips(msg){
			utils.tips.showTips(msg, $scope);
		}

		function validRegister(){
			// utils.tips.showTips('用户信息不正确');
			if(!utils.validForm.isNotEmpty($scope.data.email)){
				showTips('邮箱不能为空');
				return false;
			}else if(!utils.validForm.isEmail($scope.data.email)){
				showTips('邮箱格式不正确');
				return false;
			}

			if(utils.validForm.isNotEmpty($scope.data.phone)){
				if(!utils.validForm.isPhone($scope.data.phone)){
					showTips('手机号码不正确');
					return false;
				}
			}
			if(!utils.validForm.isNotEmpty($scope.data.nickname)){
				var time=new Date().getTime().toString();
				$scope.data.nickname=time.slice(time.length-8);
			}else{
				if(!utils.validForm.isLength($scope.data.nickname,3,8)){
					showTips('匿名字符只能3到8位');
					return false;
				}if(utils.validForm.isNotOnlyW($scope.data.nickname)){
					showTips('匿名只能是下划线字母数字组合');
					return false;
				}
			}


			if(!utils.validForm.isNotEmpty($scope.data.pwd)){
				showTips('密码不能为空');
				return false;
			}else if(!utils.validForm.isLength($scope.data.pwd,8,16)){
				showTips('密码字符只能8到16位');
				return false;
			}else if(utils.validForm.isNotOnlyW($scope.data.pwd)){
				showTips('密码只能是下划线字母数字组合');
					return false;
			}


			if(!utils.validForm.isEqual($scope.data.pwd,$scope.data.cpwd)){
				showTips('两次密码不一致');
				return false;
			}

			return true;
		}
	}])