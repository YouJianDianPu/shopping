module.exports = {
	register: {
		success: {
			code: 100,
			msg: '注册成功'
		},
		warning: {
			code: 101,
			msg: '邮箱已被注册'
		},
		error: {
			code: 102,
			msg: '注册失败'
		}
	},

	login: {
		success: {
			code: 200,
			msg: '登录成功'
		},
		warning: {
			code: 201,
			msg: '邮箱或者密码错误'
		},
		error: {
			code: 202,
			msg: '登录失败'
		}
	},
}