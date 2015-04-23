angular
   .module('SubDig')
   .controller('AppCtrl', ['$scope', function(){
      var vm = this;
      vm.testing = 'Subtle Loves Angular!';
      vm.projects = [
            {
               "path"  : "fullpixel",
               "src"   : "fullpixel.png",
               "title" : "FullPixel",
               "desc"  : ""
            },
            {
               "path"  : "tofurky",
               "src"   : "tofurky.png",
               "title" : "Tofurky",
               "desc"  : ""
            },
            {
               "path"  : "thejuniperfund",
               "src"   : "juniperfund.png",
               "title" : "The Juniper Fund",
               "desc"  : ""
            },
            {
               "path"  : "intelliskin",
               "src"   : "intelliskin.png",
               "title" : "Intelliskin",
               "desc"  : ""
            },
            {
               "path"  : "wellpartner",
               "src"   : "wellpartner.png",
               "title" : "Wellpartner",
               "desc"  : ""
            },
            {
               "path"  : "washingtonfederal",
               "src"   : "wafed.png",
               "title" : "Washington Federal",
               "desc"  : ""
            },
            {
               "path"  : "skylakesmedicalcenter",
               "src"   : "skylakesc.png",
               "title" : "Sky Lakes Medical Center",
               "desc"  : ""
            },
            {
               "path"  : "nedc",
               "src"   : "nedc.png",
               "title" : "New England Design & Construction",
               "desc"  : ""
            },
            {
               "path"  : "oreogonbreakers",
               "src"   : "orbreakers.png",
               "title" : "Oregon Breakers",
               "desc"  : ""
            },
            {
               "path"  : "calnaturale",
               "src"   : "svelte.png",
               "title" : "CalNaturale Svelte",
               "desc"  : ""
            },
            {
               "path"  : "earthwise",
               "src"   : "earthwise.png",
               "title" : "Earthwise Salvage",
               "desc"  : ""
            },
            {
               "path"  : "windingwatersrafting",
               "src"   : "windingwaters.png",
               "title" : "Winding Waters Rafting",
               "desc"  : ""
            }
         ];
}]);

