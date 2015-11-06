
(function() {

  var app = angular.module("mainModule", []);

  var MainController = function($scope, $http, $interval) {

    var onSuccess = function(response) {
      $scope.user = response.data;
      $http.get($scope.user.repos_url)
        .then(gotRepos, onError);
    };

    var onError = function(error) {
      $scope.error = "Not able to fetch data";
    };

    var gotRepos = function(response) {
      $scope.repos = response.data;
    };

    $scope.search = function(username) {
      $http.get('https://api.github.com/users/' + username)
        .then(onSuccess, onError);
    };
    
    var decrementCounter = function() {
      $scope.counter -= 1;
      if ($scope.counter < 1) {
        $scope.search($scope.username);
      }
    };
    var startCounter = function() {
      $interval(decrementCounter, 1000, $scope.counter);
    };


    $scope.message = "GitHub Viewer";
    $scope.username = 'angular';
    $scope.repoSortOrder = '-stargazers_count';
    $scope.todaysDate = new Date();
    $scope.counter = 5;
    startCounter();
  };

  app.controller('MainController', ['$scope', '$http','$interval', MainController]);

}());