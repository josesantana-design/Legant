var gulp     	=  require('gulp'),
	sass        =  require('gulp-sass');
	notify      =  require('gulp-notify'),
	browserSync =  require('browser-sync').create();
	pathSass = 'main.scss',
	pathCss = 'css/';


gulp.task('serve', function() {
	browserSync.init({
		injectChanges: true,
		files: ['index.html', 'css/*.css'],
		server: "./"
	});
});


gulp.task('sass', function(){
	gulp.src(pathSass)
	.pipe(sass({}).on('error', sass.logError))
	.pipe(gulp.dest(pathCss))
	.pipe(notify({ title: "SASS", message: "OK: Archivo compilado" }))
	.pipe(browserSync.stream());
})


gulp.task('watch', function() {
		gulp.watch('main.scss', ['sass']); // Vigila cambios en los estilos
		gulp.watch('./src/js/*.js', ['scripts']);
});


gulp.task('default', ['sass','serve', 'watch',]);
