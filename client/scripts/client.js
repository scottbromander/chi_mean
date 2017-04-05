var myApp = angular.module('myApp', []);

myApp.controller('BaseController', ['$scope', '$http', function($scope, $http){
    $scope.firstmessage = {
      name : "Scott",
      message : "Just go ahead and type in your first message."
    };

    $http.post('/message', $scope.firstmessage).then(function(response){
      console.log(response.data);
    });


}]);
