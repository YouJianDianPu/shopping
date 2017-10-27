class SQL {
	constructor(){}

	findOneForReg (field) {
		return "SELECT `email` FROM `t_user` WHERE `email`='" + field + "'";
	}

	insertOneForReg(o){
		return "INSERT INTO `t_user`(`email`,`nickname`,`pwd`, `phone`) VALUES('" + o.email + "','" + o.nickname + "','" + o.pwd + "','" + o.phone+ "')";
	}

	findOneForLogin(o){
		return "SELECT `email`, `nickname` FROM `t_user` WHERE `email`='"+ o.email + "' AND `pwd`='" + o.pwd + "'";
	}

	findALLForHome(){
		return "SELECT * FROM `t_product`";
	}

	findOneForDetails(o){
		return "SELECT * FROM `t_details` WHERE `pid`=" + o.id;
	}

	findOneForComment(o){
		return "SELECT * FROM `t_comment` WHERE `did`=" + o.id;
	}

	findAllForShopcart(o){
		return "SELECT * FROM `t_shopcart` WHERE `email`='" + o.email + "'";
	}
}

module.exports=new SQL();