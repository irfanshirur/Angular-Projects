// Code goes here

(function() {

  var app = angular.module("mainModule", []);

  var MainController = function($scope, $http) {

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

    $scope.message = "GitHub Viewer";
    $scope.username = 'angular';
    $scope.repoSortOrder = '-stargazers_count';
  };

  app.controller('MainController', ['$scope', '$http', MainController]);

}());