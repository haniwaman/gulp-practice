function defaultTask(cb) {
  console.log('create gulpfile.js');
  cb();
}

exports.taskName = defaultTask // npx taskNameで実行（任意の名前を付けられる）
exports.default = defaultTask // npx gulpで実行