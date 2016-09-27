/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var gulp = require('gulp');
var rename= require('gulp-rename');
var uglify=require('gulp-uglify');

var angularParallax = 'public_html/app/angularParallax.js';



gulp.task('copy', function(){
   gulp.src(angularParallax)
           .pipe(gulp.dest('./public_html/dist'));
});

gulp.task('uglify', function(){
   gulp.src(angularParallax)
           .pipe(uglify())
           .pipe(rename('angularParallax.min.js'))
           .pipe(gulp.dest('./public_html/dist'));
});

gulp.task('dist',['copy','uglify'], function(){
    
});

gulp.task('default', function () {
    // place code for your default task here
});
