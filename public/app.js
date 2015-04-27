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
      vm.active = 'default';
}]);


angular
   .module('SubDig')
   .controller('NavCtrl',  ["$location", function( $location){
      var vm = this;
      vm.menu = $location;
      console.log(vm.menu.path());
   }]);
angular
   .module('SubDig')
   .controller('ProjectDir', ['$scope', function(){
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

//angular
//   .directive('showProject', function(){
 //     return {
   //      restrict: 'A',
     //    templateUrl : function(elem, attr){
       //     return 'partials/'+attr.type+'.html';
 //        }
  //    }
  // });


angular
   .module('SubDig')
      .factory('ProjectFct',
         ["$resource", function($resource){
            return $resource('/app/data/projects.json');
   }]);
