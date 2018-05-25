var gulp=require('gulp'),
rename=require('gulp-rename'),
svgSprite=require('gulp-svg-sprite'),
del=require('del');
var config={
	mode:{
		css:{
			sprite:'sprite.svg',
			render:{
				css:{
					template:'./gulp/templates/sprite.css'
				}
			}

		}
	}
}

gulp.task('beginClean', function(){
	return del(['./app/temp/sprite', './app/assets/images/sprites']);
});
gulp.task('createSprite',['beginClean'], function (){
return gulp.src('./app/assets/images/icons/**/*.svg')
.pipe(svgSprite(config))
.pipe(gulp.dest('./app/temp/sprite/'));
});

gulp.task('copySpiteGrafic',['createSprite'],function(){
	return gulp.src('./app/temp/sprite/css/**/*.svg')
	.pipe(gulp.dest('./app/assets/images/sprites'));
});

gulp.task('copySpriteCss',['createSprite'],function(){

	return gulp.src('./app/temp/sprite/css/*.css')
	.pipe(rename('_sprite.css'))
	.pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('endClean',['copySpiteGrafic','copySpriteCss'], function(){
	return del('./app/temp/sprite');

});

gulp.task('icon',['beginClean','createSprite','copySpiteGrafic','copySpriteCss','endClean'],function(){

})