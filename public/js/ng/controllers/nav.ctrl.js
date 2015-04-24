angular
   .module('SubDig')
   .controller('NavCtrl',  function( $location){
      var vm = this;
      vm.menu = $location;
   });