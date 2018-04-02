function IndexController(app){
	this._app = app;
}

IndexController.prototype.renderIndex = function(req,res){
	var erros = false;
	var data = false;
	res.render('index',{erros:erros, data:data});
}

IndexController.prototype.handlerForm = function(req,res){
	var data = req.body;
	req.check('nickname','O campo deve ser preenchido').notEmpty();
	req.check('nickname','O campo deve ter entre 3 e 10 caracteres.').len(3,10);
	var erros = req.validationErrors();
	if(erros){
		res.render('index',{erros:erros,data:data});
	}else{
		res.redirect('/chat');
	}
}

module.exports = function(){
	return IndexController;
}