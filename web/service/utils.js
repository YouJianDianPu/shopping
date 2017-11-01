angular.module('app')
	.factory('utils',['$ionicPopup','$ionicLoading', '$ionicModal', function($ionicPopup, $ionicLoading, $ionicModal){
		var u={
			//提示信息
			tips:{
				showTips:function(msg,scope){
					scope.tips=$ionicPopup.show({
						template:'<div style="text-algin:center;">' + msg + '</div>',
						title:'提示消息',
						scope:scope,
						buttons:[
							{
								text:'确认',
								type:'button-assertive',
								onTap:function(){
									scope.tips.close();
								}
							}
						]
					});
				},

				showLoadTips: function(msg,scope){
				    $ionicLoading.show({
				      noBackdrop: true,
				      template: '<ion-spinner icon="lines" class="spinner-energized"></ion-spinner>'
				    });
				},

				hideLoadTips: function(){
					
				    $ionicLoading.hide();
					
				},

				initPopover: function(scope){
					$ionicModal.fromTemplateUrl('/templates/popover/popover.html', {animation: 'slide-in-up', scope: scope})
						.then(function(popover){
							scope.popover = popover;
						});
				},

				openPopover: function(scope){
					scope.popover.show();
				},

				closePopover: function(scope){
					scope.popover.hide();
				}
				  
			},	

			//验证表单模块
			//策略者模式
			validForm:{
				//验证不为空
				isNotEmpty:function(msg){
					return msg=='' || msg==undefined ?false:true;
				},
			

				//验证邮箱格式
				isEmail:function(email){
					var reg=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
					return reg.test(email);
				},

				//验证手机号码
				isPhone:function(phone){
					var reg=/^1[358]\d{9}$/;
					return reg.test(phone);
				},


				//验证长度
				isLength:function(msg,min,max){
					return msg.length>=min && msg.length<=max ? true : false;
				},

				//验证只能是下划线，数字，字母
				isNotOnlyW:function(msg){
					return /\W/.test(msg);
				},

				//判断两个值是否相等
				//
				isEqual:function(a,b){
					return a === b ? true : false;
				}
			},
		};
		return u;
	}])