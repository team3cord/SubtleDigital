angular
   .module('SubDig')
   .controller('AppCtrl', ['$location', '$anchorScroll', function($location, $anchorScroll){
      var vm = this;
      vm.active = 'default';
      vm.scrollUp = function(){
        vm.here = $location.hash('here');
         console.log('here');
         scrollTo(document.body, 0, 1250);
         //$anchorScroll();
      };

      function scrollTo(element, to, duration) {
         var start = element.scrollTop,
            change = to - start,
            currentTime = 0,
            increment = 20;

         var animateScroll = function(){
            currentTime += increment;
            var val = Math.easeInOutQuad(currentTime, start, change, duration);
            element.scrollTop = val;
            if(currentTime < duration) {
               setTimeout(animateScroll, increment);
            }
         };
         animateScroll();
      }

//t = current time
//b = start value
//c = change in value
//d = duration
      Math.easeInOutQuad = function (t, b, c, d) {
         t /= d/2;
         if (t < 1) return c/2*t*t + b;
         t--;
         return -c/2 * (t*(t-2) - 1) + b;
      };

}]);

