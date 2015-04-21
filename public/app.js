angular
   .module('SubDig', [
      'ngRoute',
      'ngResource',
      'wu.masonry'
   ]);
angular
   .module('SubDig')
   .controller('AppCtrl', ['$scope', function($scope, $resource, ProjectFct){
      $scope.testing = 'Subtle Loves Angular!';
      ProjectFct.get(function(data){
         $scope.projects = data.projects;
         console.log(data.projects);
      });
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
