const mysql=require('mysql');

const Q=require('q');

//创建数据库连接
let connect=mysql.createConnection(config.mysqlOptions);

connect.connect();

exports.query=function(sql){
	return Q.ninvoke(connect,'query',sql)
		.then((result)=>{
			console.log('result[0]==>',result[0]);
			return result[0];
		})
		.catch((err)=>{
			return err;
		})
}