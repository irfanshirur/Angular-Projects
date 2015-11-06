
(function() {

  var app = angular.module("mainModule", []);

  var MainController = function(
    $scope, github, $interval, $log, $location, $anchorScroll) {

    var onSuccess = function(data) {
      $scope.user = data;
      github.getRepos($scope.user)
        .then(gotRepos, onError);
    };

    var onError = function(error) {
      $scope.error = "Not able to fetch data";
    };

    var gotRepos = function(data) {
      $scope.repos = data;
      $location.hash('userInfo');
      $anchorScroll();
    };

    $scope.search = function(username) {
      $log.info("Searching for " + username);
      github.getUser(username)
        .then(onSuccess, onError);
      if (counterInterval) {
        $interval.cancel(counterInterval);
        $scope.counter = null;
      }
    };
    
    var decrementCounter = function() {
      $scope.counter -= 1;
      if ($scope.counter < 1) {
        $scope.search($scope.username);
      }
    };
    
    var counterInterval = null;
    var startCounter = function() {
      counterInterval = $interval(decrementCounter, 1000, $scope.counter);
    };


    $scope.message = "GitHub Viewer";
    $scope.username = 'angular';
    $scope.repoSortOrder = '-stargazers_count';
    $scope.todaysDate = new Date();
    $scope.counter = 5;
    startCounter();
  };

  app.controller('MainController', 
  ['$scope', 'github','$interval','$log','$location','$anchorScroll', MainController]);

}());