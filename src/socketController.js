var socket = function(io){

//  //  io.on('connection', function(socket){
//  //  	socket.on('disconnect', function(){
//  //    socket.on('chat message', function(msg){
//  //    console.log('message: ' + msg);
//  //  		});
//  //    });
//  //  });  
// 	// }	
		io.on('connection', function(socket){
		  socket.on('chat message', function(msg){
		    io.emit('chat message', msg);
		  });
		});
		}

module.exports = socket;