const mysql=require(__basename + '/lib/mysql/mysql.js');

class SerVice{
	constructor(){}

	query (sql) {
		return mysql.query(sql);
	}
}

module.exports=new SerVice();