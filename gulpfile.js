'use strict';

var gulp = require('gulp');
var bitcoreTasks = require('botcore-build');

bitcoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
