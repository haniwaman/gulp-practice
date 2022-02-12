const gulp = require('gulp'); // gulpの関数を使えるように

// 1、タスクの作成
function copyFile() {
  return gulp.src('./src/demo.js') // 元のファイル
    .pipe(gulp.dest('./public/')) // 出力先のファイル
}

// 1、タスクの作成
function fileWatch() {
  gulp.watch('src/demo.js', copyFile); // ファイルの監視
};

// 2、タスクの登録
exports.copyFile = copyFile // 3、タスクの実行
exports.fileWatch = fileWatch // 3、タスクの実行
