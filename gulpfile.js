const gulp = require('gulp'); // gulpの関数を使えるように
const browserSync = require("browser-sync"); //（https://browsersync.io/docs/gulp）

// ブラウザの立ち上げ
function browserInit(done) {
	browserSync.init({
		server: {
			baseDir: "./public/" // 表示対象のディレクトリを指定
		}
	});
  done();
}

// 2、タスクの登録
exports.browserInit = browserInit; // 3、タスクの実行
