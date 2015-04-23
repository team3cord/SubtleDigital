angular
   .module('SubDig')
   .controller('AppCtrl', [function(){
      var vm = this;
      vm.projects = [
            {
               "path"  : "fullpixel",
               "src"   : "fullpixel.png",
               "title" : "FullPixel"
            },
            {
               "path"  : "tofurky",
               "src"   : "tofurky.png",
               "title" : "Tofurky"
            },
            {
               "path"  : "thejuniperfund",
               "src"   : "juniperfund.png",
               "title" : "The Juniper Fund"
            },
            {
               "path"  : "intelliskin",
               "src"   : "intelliskin.png",
               "title" : "Intelliskin"
            },
            {
               "path"  : "wellpartner",
               "src"   : "wellpartner.png",
               "title" : "Wellpartner"
            },
            {
               "path"  : "washingtonfederal",
               "src"   : "wafed.png",
               "title" : "Washington Federal"
            },
            {
               "path"  : "skylakesmedicalcenter",
               "src"   : "skylakesc.png",
               "title" : "Sky Lakes Medical Center"
            },
            {
               "path"  : "nedc",
               "src"   : "nedc.png",
               "title" : "New England Design & Construction"
            },
            {
               "path"  : "oreogonbreakers",
               "src"   : "orbreakers.png",
               "title" : "Oregon Breakers"
            },
            {
               "path"  : "calnaturale",
               "src"   : "svelte.png",
               "title" : "CalNaturale Svelte"
            },
            {
               "path"  : "earthwise",
               "src"   : "earthwise.png",
               "title" : "Earthwise Salvage"
            },
            {
               "path"  : "windingwatersrafting",
               "src"   : "windingwaters.png",
               "title" : "Winding Waters Rafting"
            }
         ];
}]);

