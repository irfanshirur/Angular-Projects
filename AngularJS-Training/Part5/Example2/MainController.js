
(function() {

  var app = angular.module("mainModule");

  var MainController = function($scope, $interval, $location) {

    $scope.search = function(username) {
      if (counterInterval) {
        $interval.cancel(counterInterval);
        $scope.counter = null;
      }
      $location.path("/user/"+username);
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

    $scope.username = 'angular';
    $scope.todaysDate = new Date();
    $scope.counter = 5;
    startCounter();
  };

  app.controller('MainController', 
  ['$scope', '$interval', '$location', MainController]);

}());