// Code goes here

(function() {

  var app = angular.module("mainModule", []);

  var MainController = function($scope, $http) {
    
    $scope.message = "Hello AngularJS";
    $scope.username = "Angular"

    var onSuccess = function(response) {
      $scope.user = response.data;
    };

    var onError = function(error) {
      $scope.error = "Not able to fetch data";
    };

    $scope.getUser = function() {
      $http.get('https://api.github.com/users/angular')
        .then(onSuccess, onError);
    };
    $scope.getUser();
  };

  app.controller('MainController', ['$scope', '$http', MainController]);

}());

