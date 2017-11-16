var socket = io();
var room = $.cookie('room');
var user = $.cookie('user');


// Sockets

socket.on('connect', function(){
  socket.emit('room', room);
  console.log('joined room ' + room);
});

socket.on('new question', function(){
  console.log('Nueva pregunta');
});

socket.on('answer now', function(){
  console.log('Contesta ahora');
  $('.fixed-container').css('display', 'none');
  $('#svg').css('display','block');
});

// Answers
function answer(a) {
  console.log(a);
  var answerData = {
    roomId: room,
    userId: user,
    message: 'answer',
    value: a
  };
  $('.fixed-container').css('display', 'flex');
  $('#svg').css('display','none');
  socket.emit('to room', answerData);
}

$('#B1').click(function(){answer('B1');});
$('#B2').click(function(){answer('B2');});
$('#B3').click(function(){answer('B3');});
$('#B4').click(function(){answer('B4');});
$('#B5').click(function(){answer('B5');});
$('#B6').click(function(){answer('B6');});
$('#B7').click(function(){answer('B7');});
$('#B8').click(function(){answer('B8');});
$('#B9').click(function(){answer('B9');});
$('#B10').click(function(){answer('B10');});
$('#B11').click(function(){answer('B11');});
$('#B12').click(function(){answer('B12');});
$('#B13').click(function(){answer('B13');});
$('#B14').click(function(){answer('B14');});
$('#B15').click(function(){answer('B15');});
$('#B16').click(function(){answer('B16');});
$('#B17').click(function(){answer('B17');});
$('#B18').click(function(){answer('B18');});
$('#B19').click(function(){answer('B19');});
$('#B20').click(function(){answer('B20');});
$('#B21').click(function(){answer('B21');});
$('#B22').click(function(){answer('B22');});
$('#B23').click(function(){answer('B23');});
$('#B24').click(function(){answer('B24');});
$('#B25').click(function(){answer('B25');});
$('#B26').click(function(){answer('B26');});
$('#B27').click(function(){answer('B27');});
$('#B28').click(function(){answer('B28');});
$('#B29').click(function(){answer('B29');});
$('#Tal').click(function(){answer('Tal');});
$('#BExt').click(function(){answer('BExt');});
