angular
   .module('SubDig')
   .controller('NavCtrl', ['$location', function($location){
      var vm = this;
      vm.menu = $location.path();
   }]);