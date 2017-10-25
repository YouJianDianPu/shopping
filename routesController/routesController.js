const service=require(__basename + '/service/service.js');

const SQL=require(__basename + '/lib/sql/sql.js');

const common=require(__basename + '/common/common.js');

const utils = require(__basename + '/lib/utils/utils.js');

class RoutesController{
	constructor(){}

	homeController(req,res){
		res.render('index');
	}
	
	registerController(req,res){
		// console.log(req.body);
		// res.send('已接受')
		let sql=SQL.findOneForReg(req.body.email);
		
		
		service.query(sql)
			.then((result)=>{

				if(Array.isArray(result) && result.length===0){
					utils.addCrypto(req.body, 'pwd');
					let insertsql=SQL.insertOneForReg(req.body);
					service.query(insertsql)
						.then((result)=>{
							res.send(common.register.success);

						})
						.catch((err)=>{
							res.send(common.register.err);
							
						})
				}else{
					res.send(common.register.warning);

				}

			})
			.catch((err)=>{
				res.send(common.register.err);

			})

	}
}

module.exports=new RoutesController();