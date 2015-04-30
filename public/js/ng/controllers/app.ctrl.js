angular
   .module('SubDig')
   .controller('AppCtrl', ['$location', '$anchorScroll', function($location, $anchorScroll){
      var vm = this;
      vm.active = 'default';
      vm.scrollTo = function(){
        $location.hash('here');
         console.log('here');
         $anchorScroll();
      };

}]);

