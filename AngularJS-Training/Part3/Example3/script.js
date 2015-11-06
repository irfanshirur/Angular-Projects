// Code goes here

(function() {

  var app = angular.module("mainModule", []);

  var MainController = function($scope, $http) {
    
    $scope.message = "Hello AngularJS";
    $scope.username = "angular";

    var onSuccess = function(response) {
      $scope.user = response.data;
    };

    var onError = function(error) {
      $scope.error = "Not able to fetch data";
    };

    $scope.search = function(username) {
      $http.get('https://api.github.com/users/' + username)
        .then(onSuccess, onError);
    };
  };

  app.controller('MainController', ['$scope', '$http', MainController]);

}());

