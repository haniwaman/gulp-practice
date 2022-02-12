// 1、タスクの作成
function defaultTask(cb) {
  // タスクの内容
  console.log('create gulpfile.js');

  // 明示的な終了（関数名はなんでもOK）
  cb();
}

// 2、タスクの登録
exports.taskName = defaultTask // 3、タスクの実行：npx gulp taskNameで実行可能（任意の名前を付けられる）
exports.default = defaultTask // 3、タスクの実行：npx gulpで実行可能
