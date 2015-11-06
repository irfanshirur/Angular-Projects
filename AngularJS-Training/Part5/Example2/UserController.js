
(function() {

  var app = angular.module("mainModule");

  var UserController = function($scope, github, $routeParams) {

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
    };

    $scope.username = $routeParams.username;
    $scope.repoSortOrder = '-stargazers_count';
    github.getUser($scope.username).then(onSuccess, onError);
  };

  app.controller('UserController', ['$scope', 'github', '$routeParams', UserController]);

}());