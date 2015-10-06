var app = require('express')();
// `app` is a function handler supplied to an http server
var http = require('http').Server(app);
// new instance of socket by passing http server object
var io = require('socket.io')(http);

// route
app.get('/', function(request, result) {
  // TypeError: path must be absolute or specify root to res.sendFile
  result.sendFile(__dirname + '/index.html');
});

// listening for incoming sockets
io.on('connection', function(socket) {
  // prints whenever someone hits localhost:3000
  console.log('a user connected');
  socket.on('disconnect', function(){
    // prints whenever someone closes the tab
    console.log('a user disconnected');
  });

  socket.on('chat message', function(msg) {
    // sends message to everyone including sender
    io.emit('chat message', msg);

    // if you want to send it to everyone except certain sockets, use:
    // socket.broadcast.emit(msg);
  });
});

http.listen(3000, function() {
  console.log('listening on *: 3000');
});
