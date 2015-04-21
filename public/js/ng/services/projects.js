angular
   .module('SubDig')
      .factory('ProjectFct',
         function($resource){
            return $resource('/app/data/projects.json');
   });
