var app = require('express')();
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

// Inicio del servidor
app.listen(PORT, function () {
  console.log('Listening on localhost:' + PORT);
});
