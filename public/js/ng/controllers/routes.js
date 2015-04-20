angular
   .module('SubDig')
   .config(function($routeProvider){
      $routeProvider
         .when('/portfolio.html', {controller: 'AppCtr', templateUrl: '/partials/grid.html'});
   });