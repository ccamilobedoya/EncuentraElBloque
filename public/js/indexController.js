var socket = io();

function GoToRoom() {
  var url = $('#roomId').val() + '/' + $('#userId').val();
  window.location.href = './rooms/' + url;
}
