angular
   .module('SubDig')
   .config(function($routeProvider){
      $routeProvider
         .when('/portfolio.html', {controller: 'AppCtr', templateUrl: '/partials/grid.html'})
         .when('/earthwise', {controller: 'AppCtr', templateUrl: 'partials/earthw.html'})
         .when('/fullpixel', {controller: 'AppCtr', templateUrl: 'partials/fullpix.html'})
         .when('/intelliskin', {controller: 'AppCtr', templateUrl: 'partials/intelli.html'})
         .when('/juniperfund', {controller: 'AppCtr', templateUrl: 'partials/juniper.html'})
         .when('/nedc', {controller: 'AppCtr', templateUrl: 'partials/nedc.html'})
         .when('/oregonbreakers', {controller: 'AppCtr', templateUrl: 'partials/orbr.html'})
         .when('/skylakes', {controller: 'AppCtr', templateUrl: 'partials/skylakes.html'})
         .when('/tofurky', {controller: 'AppCtr', templateUrl: 'partials/tofurky.html'})
         .when('/wafed', {controller: 'AppCtr', templateUrl: 'partials/wafed.html'})
         .when('/wellpartner', {controller: 'AppCtr', templateUrl: 'partials/wellp.html'})
         .when('/windingwaters', {controller: 'AppCtr', templateUrl: 'partials/winwat.html'});
   });