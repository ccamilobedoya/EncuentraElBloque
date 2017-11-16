var socket = io();
var room = $.cookie('room');
var players = [];
var actualQuestion = 0;
var actualAnswer = 'B1';
var timePerQuestion = 12;
var t = 0;
var interval;

var questions = [
  b = {
    question: '¿Dónde está el bloque administrativo?',
    answer: 'B16'
  },
  a = {
    question: '¿Cuál es el bloque que solia ser una capilla?',
    answer: 'B17'
  },
  c = {
    question: '¿Dónde está el edificio de extensión?',
    answer: 'BExt'
  },
  d = {
    question: '¿Cuál es el teatro al aire libre?',
    answer: 'Tal'
  },
  e = {
    question: '¿Dónde está la facultad de Química Farmacéutica?',
    answer: 'B2'
  },
  f = {
    question: '¿Cuál es el bloque de Ciencias Economicas?',
    answer: 'B13'
  },
  g = {
    question: '¿Dónde está el Museo Universitario?',
    answer: 'B15'
  },
  h = {
    question: '¿Dónde está la facultad de Educación?',
    answer: 'B9'
  },
  i = {
    question: '¿Cuál es el bloque de Matemáticas?',
    answer: 'B4'
  },
  f = {
    question: '¿Dónde está el Teatro Camilo Torres?',
    answer: 'B23'
  }
];

function startCountdown () {
  t = timePerQuestion;
  showQuestion();
  interval = setInterval(function(){
    t -= 0.1;
    $('#time').text(t.toFixed(1));

    if (t <= 0) {
      clearInterval(interval);
      $('#time').text('Respuesta: ' + actualAnswer);
    }
  }, 100);
}

function showQuestion () {
  // Como solo voy a usar esto como 1 vez, entonces tirare las preguntas en orden
  // pero lo ideal es que sea aleatorio y guardando los resultados en una pila o algo para que no se repita
  if (actualQuestion < questions.length) {
    $('#question').text(questions[actualQuestion].question);
    actualAnswer = questions[actualQuestion].answer;
    actualQuestion++;
  }
  else {
    $('#question').text('Y los ganadores son...');
    clearInterval(interval);
    $('#time').text('');
  }
}

function showChart () {
  var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 2000,
      height:800,
      backgroundColor: "transparent",
      title:{
        text: "Puntajes"
      },
      axisX: {
        labelFontColor: "#fff"
      },
      axisY: {
        title: "Puntaje",
        labelFontColor: "#fff"
      },
      legend: {
       fontColor: "white"
      },
      toolTip: {
        backgroundColor: "#14612c",
  		},
      data:[
      {
        type: "bar",
        color: "#ccf9da",
        dataPoints: players
      }]
    });
  chart.render();
}

$('#start-question-button').click(function(){
  if (actualQuestion < questions.length) {
    var dataToSend = {
      roomId: room,
      message: 'new question'
    };
    socket.emit('to room', dataToSend);
    var dataForAnswerState = {
      roomId: room,
      message: 'answer now'
    }
    socket.emit('to room', dataForAnswerState);
    startCountdown();
  }
});

socket.on('connect', function(){
  socket.emit('room', room);
  console.log('joined room ' + room);
});

socket.on('answer', function(data){
  if (data.value == actualAnswer) {
    var score = 10 * t;
    if (players.length === 0) {
      var player = {
        label: data.userId,
        y: score
      };
      players.push(player);
    } else {
      var founded = false;
      for (var i = 0; i < players.length; i++){
        if (players[i].label === data.userId) {
          players[i].y += score;
          founded = true;
          break;
        }
      }
      if (!founded) {
        var player = {
          label: data.userId,
          y: score
        };
        players.push(player);
      }
    }
    console.log(players);
    showChart();
  }
});
