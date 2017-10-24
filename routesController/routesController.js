class RoutesController{
<<<<<<< HEAD
	constructor() {}

	homeController(request, response){
		response.render('index');
	}

	registerController(request, response){
		console.log(request.body);
		response.send('已接收信息');
	}
}

module.exports = new RoutesController();
=======
	constructor(){}

	homeController(req,res){
		res.render('index');
	}
	
	registerController(req,res){
		console.log(req.body);
		res.send('已接受')
	}
}

module.exports=new RoutesController();
>>>>>>> f23bc71e061f094826a17006194afc22e45b0352
