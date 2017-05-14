var gulp     	=  require('gulp');
var	sass        =  require('gulp-sass');
var	notify      =  require('gulp-notify');
var	pathSass 	= 'sass/main.scss';
var	pathCss 	= 'css/';


gulp.task('sass', function(){
	gulp.src(pathSass)
	.pipe(sass({}).on('error', sass.logError))
	.pipe(gulp.dest(pathCss))
	.pipe(notify({ title: "SASS", message: "OK: Archivo compilado" }))
})


gulp.task('watch', function() {
	gulp.watch('sass/**/*.scss', ['sass']);
	gulp.watch('./src/js/*.js', ['scripts']);
});


gulp.task('default', ['sass', 'watch']);
