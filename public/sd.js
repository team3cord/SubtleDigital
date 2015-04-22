window.onload = function(){
   //snow init
   var snow = document.getElementById("snow");
   var ctx = snow.getContext("2d");

   //snow dimensions
   var W = window.innerWidth - (window.innerWidth * .15);
   var H = window.innerHeight - (window.innerHeight * .10);
   snow.width = W;
   snow.height = H;

   //snowflake particles
   var mp = 15; //max particles
   var particles = [];
   for(var i = 0; i < mp; i++)
   {
      particles.push({
         x: Math.random()*W, //x-coordinate
         y: Math.random()*H, //y-coordinate
         r: Math.random()*4+1, //radius
         d: Math.random()*mp //density
      })
   }
   console.log(particles);

   var background = new Image();
   background.src = 'assets/icons/html5-org.svg';

   //Lets draw the flakes
   function draw()
   {
      ctx.clearRect(0, 0, W, H);
      //ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      //ctx.beginPath();
      for(var i = 0; i < mp; i++)
      {
         var p = particles[i];
         ctx.drawImage(background, p.x , p.y, 44, 34);
         //ctx.moveTo(p.x, p.y);
         ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
      }
     //  ctx.fill();
      update();
   }

   //Function to move the snowflakes
   //angle will be an ongoing incremental flag. Sin and Cos functions will be applied to it to create vertical and horizontal movements of the flakes
   var angle = 0;
   function update()
   {
      angle += 0.01;
      for(var i = 0; i < mp; i++)
      {
         var p = particles[i];
         //Updating X and Y coordinates
         //We will add 1 to the cos function to prevent negative values which will lead flakes to move upwards
         //Every particle has its own density which can be used to make the downward movement different for each flake
         //Lets make it more random by adding in the radius
         p.y += Math.cos(angle+p.d) + 1 + p.r/2;
         p.x += Math.sin(angle) * 2;

         //Sending flakes back from the top when it exits
         //Lets make it a bit more organic and let flakes enter from the left and right also.
         if(p.x > W || p.x < 0 || p.y > H)
         {
            if(i%3 > 0) //66.67% of the flakes
            {
               particles[i] = {x: Math.random()*W, y: -10, r: p.r, d: p.d};
            }
            else
            {
               //If the flake is exitting from the right
               if(Math.sin(angle) > 0)
               {

                  particles[i] = {x: -5, y: Math.random()*H, r: p.r, d: p.d};
               }
               else
               {
                  //Enter from the right
                  particles[i] = {x: W+5, y: Math.random()*H, r: p.r, d: p.d};
               }
            }
         }
      }
   }

   //animation loop
   background.addEventListener('load', function(){
      setInterval(draw, 33);
   }, false);
   var loadWinWidth  = jQuery(window).width(),
      loadWinHeight = jQuery(window).height(),
      macBook       = jQuery('.mac'),
      subtle      = jQuery('#subtle'),
      portfolio     = jQuery('.port');
   macBook.width(loadWinWidth).height(loadWinHeight);
   subtle.hover(
      function(){
         portfolio.fadeIn('slow');
      },
      function(){
         portfolio.fadeOut('slow');
      }
   );
   jQuery(window).resize(function(){
      var winWidth  = jQuery(window).width(),
         winHeight = jQuery(window).height();
      macBook.width(winWidth).height(winHeight);
      //animation loop
      background.addEventListener('load', function(){
         setInterval(draw, 33);
      },false);
   });
};





