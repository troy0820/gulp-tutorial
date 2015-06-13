var gulp = require('gulp');
var del = require('del'); 

gulp.task('usedtobe',function() {
	console.log('This is the usedtobe task');
})

gulp.task('doit',function() {
	console.log('This is the do it task');
})

gulp.task('default',['usedtobe','doit','newtask','clean'])

gulp.task('newtask',['doit'], function() {
	console.log('This should print after the do it task');
})


gulp.task('clean',function() {
	del('build/*');

})
