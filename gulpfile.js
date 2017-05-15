/* jshint node: true */
"use strict";
process.env.DISABLE_NOTIFIER = true;

//noinspection SpellCheckingInspection
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    order = require("gulp-order"),
    livereload = require('gulp-livereload'),
    notify = require('gulp-notify'),
    connect = require('gulp-connect'),
    cleanCSS = require('gulp-clean-css');

//vendor css
gulp.task('vendor-css', function () {
    gulp.src([
        'node_modules/github-fork-ribbon-css/gh-fork-ribbon.css',
        'node_modules/font-awesome/css/font-awesome.css'
    ])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(autoprefixer({
            browsers: ['last 7 versions'],
            cascade: false
        }))
        .pipe(cleanCSS())
        .pipe(concat('vendor.css'))
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('dist/css/'))
        .pipe(connect.reload());
});

//vendor-js
gulp.task('vendor-js', function () {
 gulp.src(['node_modules/jquery/dist/jquery.slim.js'])
 .pipe(plumber())
 .pipe(concat('vendor.js'))
 .pipe(uglify())
 .pipe(gulp.dest('dist/js/'))
 .pipe(connect.reload());
 });

//vendor assets, like fonts and images
gulp.task('vendor-assets', function () {
 gulp.src(['node_modules/font-awesome/fonts/*.*'])
 .pipe(gulp.dest('dist/fonts/'))
 .pipe(connect.reload());
 });

//sass
gulp.task('sass', function () {
    gulp.src('src/scss/*.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer({
            browsers: ['last 7 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('dist/css/'))
        .pipe(connect.reload());
});

//js
gulp.task('js', function () {
    gulp.src('src/js/*.js')
        .pipe(plumber())
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'))
        .pipe(connect.reload());
});

// html
gulp.task('html', function () {
    gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist/'))
        .pipe(connect.reload());
});

//assets, like fonts and images
gulp.task('assets', function () {
    gulp.src('src/img/*.*')
        .pipe(gulp.dest('dist/img/'))
        .pipe(connect.reload());
    gulp.src('src/fonts/*.*')
        .pipe(gulp.dest('dist/fonts/'))
        .pipe(connect.reload());
});

//connect
gulp.task('connect', function () {
    connect.server({
        root: 'dist/',
        port: 8000,
        livereload: true
    });
});


//Watch
gulp.task('watch', function () {
    gulp.watch(['src/scss/*.scss'], ['sass']);
    gulp.watch(['src/js/*.js'], ['js']);
    gulp.watch(['src/img/*.*', 'src/fonts/*.*'], ['assets']);
    gulp.watch(['src/**/*.html'], ['html']);
});

gulp.task('compile', ['vendor-css', 'vendor-js', 'vendor-assets', 'sass', 'js', 'assets', 'html']);

//Default Task
gulp.task('default', ['vendor-css', 'vendor-js', 'vendor-assets', 'connect', 'sass', 'js', 'assets', 'html', 'watch']);