function ChatController(app){
	this._app = app;
}

ChatController.prototype.renderChat = function(req,res){
	res.render('chat');
}


module.exports = function(){
	return ChatController;
}