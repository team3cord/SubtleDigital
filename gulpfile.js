var gulp           = require('gulp'),
   concat         = require('gulp-concat'),
   uglify         = require('gulp-uglify'),
   ngAnnotate     = require('gulp-ng-annotate'),
   nodemon        = require('gulp-nodemon'),
   sass           = require('gulp-sass'),
   notify         = require('gulp-notify'),
   bower          = require('gulp-bower'),
   livereload     = require('gulp-livereload');

var config = {
   sassPath: 'public/stylesheets/*.scss',
   jsPath: 'public/js/ng/**/*.js',
   bowerPath: 'public/js/lib',
   htmlPath: 'public/partials/*.html'
};

gulp.task('js', function(){
   gulp.src(['public/js/ng/controllers/module.js', config.jsPath])
      .pipe(concat('app.js'))
      .pipe(ngAnnotate())
      // .pipe(uglify())
      .pipe(gulp.dest('public'));
});
gulp.task('watch:js', ['js'], function(){
   gulp.watch(config.jsPath, ['js']);
});
 gulp.task('bower', function(){
   gulp.src([config.bowerPath + '/jquery/dist/jquery.js',
             config.bowerPath + '/get-style-property/get-style-property.js',
             config.bowerPath + '/get-size/get-size.js',
             config.bowerPath + '/eventEmmitter/EventEmmitter.js',
             config.bowerPath + '/eventie/eventie.js',
             config.bowerPath + '/doc-ready/doc-ready.js',
             config.bowerPath + '/matches-selector/matches-selector.js',
             config.bowerPath + '/outlayer/item.js',
             config.bowerPath + '/outlayer/outlayer.js',
             config.bowerPath + '/imagesloaded/imagesloaded.js',
             config.bowerPath + '/angular/angular.js',
             config.bowerPath + '/angular-animate/angular-animate.js',
             config.bowerPath + '/angular-resource/angular-resource.js'
   ])
      .pipe(concat('bower.js'))
      .pipe(uglify())
      .pipe(gulp.dest('public'));
});
gulp.task('css', function(){
   gulp.src(config.sassPath)
      .pipe(sass())
      .pipe(concat('style.css'))
      .pipe(gulp.dest('public'))
      .pipe(livereload());
});
gulp.task('dev:server', function(){
   nodemon({
      script: 'server.js',
      ect:    'js',
      ignore: ['ng*', 'gulp*','assets*']
   });
});
gulp.task('watch:css',['css'], function(){
   livereload.listen();
   gulp.watch(config.sassPath,['css']);
});

gulp.task('default',['bower','watch:js', 'watch:css', 'dev:server'],  function(){
});

