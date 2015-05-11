var gulp = require("gulp");
var shell = require("gulp-shell");
var htmlreplace = require('gulp-html-replace');
var concat = require('gulp-concat');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var path = require('path');

var destFolder = '../www/';

gulp.task("scripts", function() {
    gulp.src("").pipe(shell("r.js -o app.build.js"));
	gulp.src(['vendor/requirejs/require.js']).pipe(gulp.dest(destFolder + '/statics/js/'));
});

gulp.task('styles', function() {

    gulp.src(['resources/assets/less/application.less'])
        .pipe(less({
        	paths: [ path.join(__dirname, 'less', 'includes', './vendor/**/*') ]
        }))
        .pipe(minifyCSS({processImport: true}))
        .pipe(gulp.dest(destFolder + '/statics/css/'))
})

gulp.task('index', function() {
  gulp.src('index.html')
    .pipe(htmlreplace({
        'requirejs': {
			src: [['statics/js/application.js', 'statics/js/require.js']],
			tpl: '<script data-main="%s" src="%s"></script>'
		},
        'css' : 'statics/css/application.css',
        'cordova' : '<script type="text/javascript" src="cordova.js"></script><script type="text/javascript" src="cordova_plugins.js"></script>'
    }))
    .pipe(gulp.dest(destFolder));
});

gulp.task('views', function() {
    gulp.src(['resources/views/**/*']).pipe(gulp.dest(destFolder + '/views'));
});

gulp.task('images', function() {
    gulp.src(['resources/assets/images/**/*']).pipe(gulp.dest(destFolder + '/statics/images/'));
});

gulp.task('fonts', function() {
	gulp.src(['vendor/ionic/release/fonts/**/*']).pipe(gulp.dest(destFolder + '/statics/fonts/'));
});

gulp.task('watch', function() {
    gulp.run('index', 'styles', 'scripts', 'fonts', 'views', 'images');
 
    gulp.watch('./app/**/*.js', function(event) {
        gulp.run('scripts');
    })
 
    gulp.watch('./resources/assets/less/**', function(event) {
        gulp.run('styles');
    })
 
    gulp.watch('./index.html', function(event) {
        gulp.run('index');
    })

    gulp.watch(['resources/views/**/*'], function(event) {
        gulp.run('views');
    })
        
    gulp.watch(['resources/assets/images/**/*'], function(event) {
        gulp.run('images');
    })



})