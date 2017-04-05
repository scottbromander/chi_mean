var myApp = angular.module('myApp', []);

myApp.controller('BaseController', ['$scope', '$http', function($scope, $http){
    $scope.messageList = [];
    $scope.newMessage = {
      name: '',
      message: ''
    };

    // RESTful Interface Functions
    $scope.getMessages = function(){
      $http.get('/message').then(function(response){
        $scope.messageList = response.data;
        console.log($scope.messageList);
      });
    };

    $scope.postMessage = function(fishstick){
      $http.post('/message', fishstick).then(function(response){
        $scope.getMessages();
      });
    };

    $scope.getMessages();
}]);
