var socket = io();
var room = $.cookie('room');

var questions = {
  1 : {
    question: '¿Cual es el bloque que solia ser una capilla?',
    answer: 'B17'
  },
  2 : {
    question: '¿Donde está el bloque administrativo?',
    answer: 'B16'
  }
};

$('#start-question-button').click(function(){
  var dataToSend = {
    roomId: room,
    message: 'new question'
  };
  socket.emit('to room', dataToSend);
});
