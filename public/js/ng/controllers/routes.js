angular
   .module('SubDig')
   .config(function($routeProvider){
      $routeProvider
         .when('/portfolio', {controller: 'AppCtr', templateUrl: '/partials/grid.html'})
         .when('/portfolio/earthwise', {controller: 'AppCtr', templateUrl: 'partials/earthw.html'})
         .when('/portfolio/fullpixel', {controller: 'AppCtr', templateUrl: 'partials/fullpix.html'})
         .when('/portfolio/intelliskin', {controller: 'AppCtr', templateUrl: 'partials/intelli.html'})
         .when('/portfolio/juniperfund', {controller: 'AppCtr', templateUrl: 'partials/juniper.html'})
         .when('/portfolio/nedc', {controller: 'AppCtr', templateUrl: 'partials/nedc.html'})
         .when('/portfolio/oregonbreakers', {controller: 'AppCtr', templateUrl: 'partials/orbr.html'})
         .when('/portfolio/skylakes', {controller: 'AppCtr', templateUrl: 'partials/skylakes.html'})
         .when('/portfolio/tofurky', {controller: 'AppCtr', templateUrl: 'partials/tofurky.html'})
         .when('/portfolio/wafed', {controller: 'AppCtr', templateUrl: 'partials/wafed.html'})
         .when('/portfolio/wellpartner', {controller: 'AppCtr', templateUrl: 'partials/wellp.html'})
         .when('/portfolio/windingwaters', {controller: 'AppCtr', templateUrl: 'partials/winwat.html'});
   });