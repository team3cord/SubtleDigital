angular
   .module('SubDig', [
      'ngRoute',
      'ngResource',
      'wu.masonry'
   ]);
angular
   .module('SubDig')
   .controller('AppCtrl', [function(){
      var vm = this;
      vm.projects = [
            {
               "path"  : "fullpixel",
               "src"   : "fullpixel.png",
               "title" : "FullPixel"
            },
            {
               "path"  : "tofurky",
               "src"   : "tofurky.png",
               "title" : "Tofurky"
            },
            {
               "path"  : "thejuniperfund",
               "src"   : "juniperfund.png",
               "title" : "The Juniper Fund"
            },
            {
               "path"  : "intelliskin",
               "src"   : "intelliskin.png",
               "title" : "Intelliskin"
            },
            {
               "path"  : "wellpartner",
               "src"   : "wellpartner.png",
               "title" : "Wellpartner"
            },
            {
               "path"  : "washingtonfederal",
               "src"   : "wafed.png",
               "title" : "Washington Federal"
            },
            {
               "path"  : "skylakesmedicalcenter",
               "src"   : "skylakesc.png",
               "title" : "Sky Lakes Medical Center"
            },
            {
               "path"  : "nedc",
               "src"   : "nedc.png",
               "title" : "New England Design & Construction"
            },
            {
               "path"  : "oreogonbreakers",
               "src"   : "orbreakers.png",
               "title" : "Oregon Breakers"
            },
            {
               "path"  : "calnaturale",
               "src"   : "svelte.png",
               "title" : "CalNaturale Svelte"
            },
            {
               "path"  : "earthwise",
               "src"   : "earthwise.png",
               "title" : "Earthwise Salvage"
            },
            {
               "path"  : "windingwatersrafting",
               "src"   : "windingwaters.png",
               "title" : "Winding Waters Rafting"
            }
         ];
}]);


angular
   .module('SubDig')
   .controller('NavCtrl', ['$location', function($location){
      var vm = this;
      vm.menu = $location.path();
   }]);
angular
   .module('SubDig')
   .controller('ProjectCtl', ['$scope', function(){
      var vm = this;
      vm.test ='Work Please.';
   }]);
angular
   .module('SubDig')
   .config( ["$routeProvider", function($routeProvider){
      $routeProvider
         .when('/', {controller: '', templateUrl: '/partials/home.html'})
         .when('/portfolio', {controller: 'AppCtrl', templateUrl: '/partials/portfolio.html'})
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
   }]);



angular
   .module('SubDig')
      .factory('ProjectFct',
         ["$resource", function($resource){
            return $resource('/app/data/projects.json');
   }]);
