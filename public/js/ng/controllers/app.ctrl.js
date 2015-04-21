angular
   .module('SubDig')
   .controller('AppCtrl', ['$scope', function($scope, $resource, ProjectFct){
      $scope.testing = 'Subtle Loves Angular!';
      ProjectFct.get(function(data){
         $scope.projects = data.projects;
         console.log(data.projects);
      });
}]);

