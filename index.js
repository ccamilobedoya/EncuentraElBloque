var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var rooms = require('./routes/rooms');
var route = require('./routes/route');


// Constantes
const PORT = process.env.PORT || 8888;

// Motor de plantillas html
app.set('views', './views');
app.set('view engine', 'pug');

app.use('/rooms', rooms);
// Esta es la ruta por defecto
app.use('/', route);

// Ruta para cargar archivos estaticos
app.use('/static', express.static(__dirname + '/public'));

// Inicio del servidor
http.listen(PORT, function () {
  console.log('Listening on localhost:' + PORT);
});

// Sockets
io.on('connection', function(socket){
  console.log('a user connected');

  // connect willing sockets to a specific room
  socket.on('room', function(room){
    socket.join(room);
    console.log(socket.id + ' joined room ' + room);
  });

  // send a message to all sockets in a specific room
  socket.on('to room', function(data){
    io.to(data.roomId).emit(data.message);
  });
});
