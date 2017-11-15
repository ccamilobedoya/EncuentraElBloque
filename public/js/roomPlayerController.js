var socket = io();

socket.on('connect', function(){
  var room = $.cookie('room');
  socket.emit('room', room);
  console.log('joined room ' + room);
});

socket.on('new question', function(){
  console.log('Nueva pregunta');
});
