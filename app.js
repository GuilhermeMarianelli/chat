var app = require('./config/server')();

var http = require('http').Server(app);

var io = require('socket.io')(http);

io.on('connection',function(client){
	console.log('user connected');
	client.on('chat message',function(msg){
		io.emit('chat message',msg);
	});
	client.on('disconnect',function(){
		console.log('user disconnected');
	});
})

http.listen(80,function(){
	console.log('Servidor ON!');
});

