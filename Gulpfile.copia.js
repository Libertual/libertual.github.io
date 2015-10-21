
// File: Gulpfile.js
'use strict';
var gulp = require('gulp'),
    del = require('del'),
    inject = require('gulp-inject'),
    angularFilesort = require('gulp-angular-filesort'),
    webserver = require('gulp-webserver'),
    jshint = require('gulp-jshint'),
    minifyCss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    stylish = require('jshint-stylish'),
    gulpif = require('gulp-if'),
    useref = require('gulp-useref'),
    sass = require('gulp-sass'),
    uncss = require('gulp-uncss');
    //wiredep = require('wiredep').stream,

gulp.task('clean', function () {
        return del('./dist');
    });
// Servidor web de desarrollo

gulp.task('server', function() {
  gulp.src('./app')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

// Servidor web para probar el entorno de producción

gulp.task('server-dist', function() {
  gulp.src('./dist/')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

// Busca errores en el JS y nos los muestra en el terminal

gulp.task('jshint', function() {
   return gulp.src('./app/js/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('sass', function() {
    gulp.src('./src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/css/'));
});

// Busca en las carpetas de estilos y javascript los archivos
// para inyectarlos en el index.html

gulp.task('inject', function() {
  gulp.src('./src/js/app.js')
    .pipe(gulp.dest('./app/js'));
  return gulp.src('./src/index.html')
  .pipe(inject(
    gulp.src('./src/js/app.js').pipe(angularFilesort()), {starttag: '<!-- inject:app:{{ext}} -->'}))
  .pipe(inject(
    gulp.src(['./app/**/*.js','!./app/js/app.js']).pipe(angularFilesort(), {
      read: false})))
  .pipe(inject(
    gulp.src(['./app/**/*.css']), {
      read: false,
      ignorePath: '/app'
    }))
  .pipe(gulp.dest('./app'));
});

// Comprime los archivos CSS y JS enlazados en el index.html
// y los minifica.

gulp.task('compress', function() {
  gulp.src('./app/index.html')
    .pipe(useref.assets())
    .pipe(gulpif('*.css', minifyCss()))
    .pipe(gulpif('*.js', uglify({mangle: false })))
    .pipe(gulp.dest('./dist'));
});



// Elimina el CSS que no es utilizado para reducir el pesodel archivo
gulp.task('uncss', function() {
  gulp.src('./dist/css/style.min.css')
    .pipe(uncss({
      html: ['./app/index.html']
    }))
    .pipe(gulp.dest('./dist/css'));
});


// Copia el contenido de los estáticos e index.html al directorio
// de producción sin tags de comentarios
gulp.task('copy', function() {
  gulp.src('./app/index.html')
    .pipe(useref())
    .pipe(gulp.dest('./dist'));
  gulp.src('./app/font/font-awesome/fonts/**')
    .pipe(gulp.dest('./dist/fonts'));
  gulp.src('./src/resume.json')
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['clean','sass','inject']);
gulp.task('build', ['compress', 'copy', 'uncss']);
