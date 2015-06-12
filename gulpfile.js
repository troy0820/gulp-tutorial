var gulp = require('gulp');
var includesources = require('gulp-include-source');
var del = require('del'); 

gulp.task('usedtobe',function() {
	console.log('This is the usedtobe task');
})

gulp.task('doit',function() {
	console.log('This is the do it task');
})

gulp.task('default',['usedtobe','doit','newtask'])

gulp.task('newtask',['doit'], function() {
	console.log('This should print after the do it task');
})

gulp.task('html',function() {
	return gulp.src('./src/index.html')
		.pipe(includesources())
		.pipe(gulp.dest('./build'));

})

gulp.task('clean',function() {
	del('build/*');

})
