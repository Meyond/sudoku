const gulp = require('gulp')
const less = require('gulp-less')
const webpack = require('webpack-stream')
const config = require('./webpack.config.js')

// 源文件夹 --> parser --> 目标文件夹

// 转译js
gulp.task('webpack', () => {
  gulp
    .src('./js/**/*.js')
    .pipe(webpack(config))
    .pipe(gulp.dest('../www/js'))
})

// 编译less
gulp.task('less', () => {
  gulp
    .src('./less/*.less')
    .pipe(less())
    .pipe(gulp.dest('../www/css'))
})

// gulp
gulp.task('default', ['webpack', 'less'])

// gulp watch
gulp.task('watch', () => {
  gulp.watch('./less/*.less', ['less'])
  gulp.watch('./js/**/*.js', ['webpack'])
})
