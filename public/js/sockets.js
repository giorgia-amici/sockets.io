 var socket = io.connect('/');
		  $('form').submit(function(event){
		  	event.preventDefault()
		    socket.emit('chat message', $('#m').val());
		    $('#m').val('');
		  });
		  socket.on('chat message', function(msg){
        $('#messages').append($('<li>').text(msg));
      });

