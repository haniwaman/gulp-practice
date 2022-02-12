const gulp = require('gulp'); // gulpの関数を使えるように

// 1、タスクの作成
function taskA(done) {
  console.log('taskA');
  done();
}

// 1、タスクの作成
function taskB(done) {
  console.log('taskB');
  done();
}

// 1、タスクの作成
function taskC(done) {
  console.log('taskC');
  done();
}

// 2、タスクの登録
exports.seriesDemo = gulp.series(taskA, taskB, taskC); // 3、タスクの実行
exports.parallelDemo = gulp.parallel(taskA, taskB, taskC); // 3、タスクの実行