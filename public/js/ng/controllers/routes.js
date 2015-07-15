angular
   .module('SubDig')
   .config( function($routeProvider){
      $routeProvider
         .when('/', {controller: '', templateUrl: '/partials/home.html'})
         .when('/portfolio', {controller: 'AppCtrl', templateUrl: '/partials/portfolio.html'})
         .when('/slideshow', {controller: 'AppCtrl', templateUrl: '/partials/slideshow.html'})
         .when('/sandbox', {controller: 'SandBocCtrl', templateUrl: '/partials/sandbox.html'})
         .when('/earthwise', {controller: 'AppCtrl', templateUrl: '/partials/earthw.html'})
         .when('/fullpixel', {controller: 'AppCtrl', templateUrl: '/partials/fullpix.html'})
         .when('/intelliskin', {controller: 'AppCtrl', templateUrl: '/partials/intelli.html'})
         .when('/thejuniperfund', {controller: 'AppCtrl', templateUrl: '/partials/juniper.html'})
         .when('/nedc', {controller: 'AppCtrl', templateUrl: '/partials/nedc.html'})
         .when('/oregonbreakers', {controller: 'AppCtrl', templateUrl: '/partials/orbr.html'})
         .when('/calnaturale', {controller: 'AppCtrl', templateUrl: '/partials/calnat.html'})
         .when('/skylakesmedicalcenter', {controller: 'AppCtrl', templateUrl: '/partials/skylakes.html'})
         .when('/tofurky', {controller: 'AppCtrl', templateUrl: '/partials/tofurky.html'})
         .when('/washingtonfederal', {controller: 'AppCtrl', templateUrl: '/partials/wafed.html'})
         .when('/wellpartner', {controller: 'AppCtrl', templateUrl: '/partials/wellp.html'})
         .when('/windingwatersrafting', {controller: 'AppCtrl', templateUrl: '/partials/winwat.html'})
   });