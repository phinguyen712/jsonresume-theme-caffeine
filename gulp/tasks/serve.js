'use strict';

const
    gulp = require('gulp'),
    nodemon = require('gulp-nodemon');


gulp.task('serve', ['resume','watch'],function () {
  //initiate server files and auto restart server whenever changes are made
  nodemon({
    script: './app/server/index.js',
    ext: 'js html',
    env: { 'NODE_ENV': 'development' }
  });
});
