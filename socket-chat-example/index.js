var app = require('express')();
// `app` is a function handler supplied to an http server
var http = require('http').Server(app);
// var io = require('socket.io')(http);

// route
app.get('/', function(request, result) {
  result.sendFile(__dirname + '/index.html');
});

http.listen(3000, function() {
  console.log('listening on *: 3000');
});
