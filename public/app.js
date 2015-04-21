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
         .when('/portfolio.html', {controller: 'AppCtr', templateUrl: '/partials/grid.html'});
   }]);



angular
   .module('SubDig')
      .factory('ProjectFct',
         ["$resource", function($resource){
            return $resource('/app/data/projects.json');
   }]);
