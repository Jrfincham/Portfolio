;(function() {
  "use strict";

  angular.module('Portfolio',['ngRoute'])

  .config(['$routeProvider', function($routeProvider){

    $routeProvider

    .when('/', {
      templateUrl: 'scripts/home/home.tpl.html',
      controller: 'HomeController'
    });

  }]);

}());
