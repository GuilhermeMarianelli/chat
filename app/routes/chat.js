module.exports = function(app){

	app.post('/chat',function(req,res){
		var ChatController = new app.app.controllers.ChatController(app);
		
	})

	app.get('/chat',function(req,res){
		var ChatController = new app.app.controllers.ChatController(app);
		ChatController.renderChat(req,res);
	});
}