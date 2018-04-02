module.exports = function(app){
	app.get('/',function(req,res){
		var index_controller = new app.app.controllers.IndexController(app);
		index_controller.renderIndex(req,res);
	});

	app.post('/',function(req,res){
		var index_controller = new app.app.controllers.IndexController(app);
		index_controller.handlerForm(req,res);
	})
}