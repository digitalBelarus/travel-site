var gulp= require('gulp'),
postcss=require ('gulp-postcss'), 
autoprefixer=require ('autoprefixer'),
postcsssimplevars=require('postcss-simple-vars'), 
postcssnested=require('postcss-nested'),
 postcssimport=require('postcss-import'),
 mixins=require('postcss-mixins'),
 hexrgba=require('postcss-hexrgba');



gulp.task('styles',function(){
return	gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([postcssimport,mixins,postcsssimplevars,postcssnested,hexrgba,autoprefixer]))
	.on('error',function(errorInfo){
		console.log(errorInfo.toString());
this.emit('end');
	})
	.pipe(gulp.dest('./app/temp/styles'))
});