angular
   .module('SubDig', [
      'ngRoute',
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
         .when('/portfolio.html')
   }]);


