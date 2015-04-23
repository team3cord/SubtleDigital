angular
   .module('SubDig')
   .config( function($routeProvider){
      $routeProvider
         .when('/test', {controller: 'ProjectCtl', templateUrl: '/partials/skylakes.html'});

   });