angular
   .module('SubDig', [
      'ngRoute',
      'ngResource',
      'wu.masonry'
   ]);
angular
   .module('SubDig')
   .controller('AppCtrl', ['$scope', function(){
      var vm = this;
      vm.testing = 'Subtle Loves Angular!';
      vm.projects = [
            {
               "src"   : "fullpixel.png",
               "title" : "FullPixel",
               "desc"  : ""
            },
            {
               "src"   : "tofurky.png",
               "title" : "Tofurky",
               "desc"  : ""
            },
            {
               "src"   : "juniperfund.png",
               "title" : "The Juniper Fund",
               "desc"  : ""
            },
            {
               "src"   : "intelliskin.png",
               "title" : "Intelliskin",
               "desc"  : ""
            },
            {
               "src"   : "wellpartner.png",
               "title" : "Wellpartner",
               "desc"  : ""
            },
            {
               "src"   : "wafed.png",
               "title" : "Washington Federal",
               "desc"  : ""
            },
            {
               "src"   : "skylakesc.png",
               "title" : "Sky Lakes Medical Center",
               "desc"  : ""
            },
            {
               "src"   : "nedc.png",
               "title" : "New England Design & Construction",
               "desc"  : ""
            },
            {
               "src"   : "orbreakers.png",
               "title" : "Oregon Breakers",
               "desc"  : ""
            },
            {
               "src"   : "svelte.png",
               "title" : "CalNaturale Svelte",
               "desc"  : ""
            },
            {
               "src"   : "earthwise.png",
               "title" : "Earthwise Salvage",
               "desc"  : ""
            },
            {
               "src"   : "windingwaters.png",
               "title" : "Winding Waters Rafting",
               "desc"  : ""
            }
         ];
}]);


angular
   .module('SubDig')
   .config(["$routeProvider", function($routeProvider){
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
   }]);



angular
   .module('SubDig')
      .factory('ProjectFct',
         ["$resource", function($resource){
            return $resource('/app/data/projects.json');
   }]);
