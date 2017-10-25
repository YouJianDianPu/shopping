class SQL {
	constructor(){}

	findOneForReg (field) {
		return "SELECT `email` FROM `t_user` WHERE `email`='" + field + "'";
	}

	insertOneForReg(o){
		return "INSERT INTO `t_user`(`email`,`nickname`,`pwd`, `phone`) VALUES('" + o.email + "','" + o.nickname + "','" + o.pwd + "','" + o.phone+ "')";
	}
}

module.exports=new SQL();