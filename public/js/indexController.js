var socket = io();

function GoToRoom() {
  var url = $('#roomId').val() + '/' + $('#userId').val();
  window.location.href = './rooms/' + url;
}

function GoToAdminRoom() {
  var url = $('#createRoomId').val();
  window.location.href = './rooms/' + url;
}
