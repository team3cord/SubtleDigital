angular
   .directive('showProject', function(){
      return {
         restrict: 'A',
         templateUrl : function(elem, attr){
            return 'partials/'+attr.type+'.html';
         }
      }
   });