angular
   .module('SubDig', [
      'ngRoute',
      'wu.masonry'
   ]);
angular
   .module('SubDig')
   .controller('AppCtrl', ['$scope', function($scope){
      $scope.testing = 'Subtle Loves Angular!';
}]);


angular
   .module('SubDig')
   .config(["$routeProvider", function($routeProvider){
      $routeProvider
         .when('/portfolio.html', {controller: 'AppCtr', templateUrl: '/partials/grid.html'});
   }]);


