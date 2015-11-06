// Code goes here

(function() {

  var app = angular.module("mainModule", []);

  var MainController = function($scope) {

    var details = {
      firstName: "Angular",
      lastName: "JS",
      src: "https://avatars.githubusercontent.com/u/139426?v=3"
    };
    $scope.details = details;
    $scope.message = "Target!";
  };

  app.controller('MainController', MainController);

}());



// (function(){

  
// }());

// Immediatly invoked function expression 

// IIFE