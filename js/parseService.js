angular.module('chatroom').service('messageService', function($http){

  //postMessage method here
  this.postMessage = function(message) {
    return $http ({
      method: 'POST',
      url: 'http://brackcarmony.com:8092/api/chats',
      data: {"message": message}
    }).then(function(response) {
      return response;
    });
  };

  // this.postCookies = function(cookie) {
  //   return $http ({
  //     method: 'POST',
  //     url: 'http://brackcarmony.com:8092/api/cookies',
  //     data: {"cookie": cookie}
  //   }).then(function(response) {
  //     return response;
  //   });
  // };

  //getMessages method here
  this.getMessages = function() {
    return $http ({
      method: 'GET',
      url: 'http://brackcarmony.com:8092/api/chats'
    }).then(function(response) {
      return response.data.chats;
    });
  };

  // this.getCookies = function() {
  //   return $http ({
  //     method: 'GET',
  //     url: 'http://brackcarmony.com:8092/api/cookies'
  //   }).this(function(response) {
  //     return response.data.cookies;
  //   });
  // };

});//End Service
