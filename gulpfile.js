const gulp = require('gulp'); // gulpの関数を使えるように
const browserSync = require("browser-sync"); //（https://browsersync.io/docs/gulp）

// ブラウザの立ち上げ
function browserInit(done) {
	browserSync.init({
		server: {
			baseDir: './public/' // 表示対象のディレクトリを指定
		}
	});
  done();
}

// ブラウザのリロード
function browserReload(done) {
	browserSync.reload();
	done();
}

// ファイル監視
function watch() {
  // sassファイルが更新されたらブラウザをリロード
	gulp.watch("./src/assets/sass/**/*.scss", browserReload);
}

// 2、タスクの登録
exports.watch = gulp.series(browserInit, watch); // 3、タスクの実行（browserInit実行の後、ファイル監視を実行）
