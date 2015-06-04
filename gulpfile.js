var gulp = require('gulp');

gulp.task('usedtobe',function() {
	console.log('This is the usedtobe task');
})

gulp.task('doit',function() {
	console.log('This is the do it task');
})

gulp.task('default',['usedtobe','doit'])
