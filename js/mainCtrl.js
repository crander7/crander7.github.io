angular.module('chatroom').controller('mainCtrl', function($scope, messageService){

  $scope.getMessages = function() {
    messageService.getMessages().then(function(response) {
    $scope.messages = response.reverse();
  });
};

$scope.getMessages();

$scope.postMessage = function(message) {
  $scope.message = "";
  if (message) {
    messageService.postMessage(message).then(function(response) {
    });
  }
  else {
    message = "...";
    messageService.postMessage(message).then(function(response) {
    });
  }
};

setInterval(function(){
  $scope.getMessages();
}, 1000);

});//End Controller
