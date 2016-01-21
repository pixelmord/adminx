'use strict';

var gulp = require('gulp');
var gulpConfig = require('./gulpconfig');
var path = require('path');

// Gulp tasks
require('gulp-task-lint-browser')(gulp, gulpConfig);
require('gulp-task-css-inject')(gulp, gulpConfig);
require('gulp-task-sass')(gulp, gulpConfig);
require('gulp-task-svg-stack')(gulp, gulpConfig);

gulp.task('default', [
  'build',
  'watch'
]);

gulp.task('build', [
  'sass',
  'lint-browser',
  'css-inject',
  'svg-stack'
]);

gulp.task('build-production', [
  'sass-production',
  'css-inject',
  'svg-stack'
]);

gulp.task('watch', [
  'sass-watch',
  'css-inject-watch',
  'lint-browser-watch',
  'svg-stack-watch'
]);
