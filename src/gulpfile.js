const gulp = require("gulp");
const less = require("gulp-less");
const webpack = require("webpack-stream");
const config = require("./webpack.config.js");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");

// 源文件夹 --> parser --> 目标文件夹

// 转译js
gulp.task("webpack", () => {
  gulp
    .src("./js/**/*.js")
    .pipe(webpack(config))
    .pipe(gulp.dest("../www/js"));
});

// 转译ts
gulp.task("tsc", () => {
  gulp
    .src(tsProject.config.include)
    .pipe(tsProject())
    .pipe(gulp.dest(tsProject.config.compilerOptions.outDir));
});

// 编译less
gulp.task("less", () => {
  gulp
    .src("./less/*.less")
    .pipe(less())
    .pipe(gulp.dest("../www/css"));
});

// gulp
gulp.task("default", ["webpack", "tsc", "less"]);

// gulp watch
gulp.task("watch", () => {
  gulp.watch("./less/*.less", ["less"]);
  gulp.watch("./ts/*.ts", ["tsc"]);
  gulp.watch("./js/**/*.js", ["webpack"]);
});
