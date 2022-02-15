const gulp = require('gulp'); // gulpの関数を使えるように
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync"); //（https://browsersync.io/docs/gulp）
const person = require('./demo');

function nodeDemo(done) {
  console.log("Name", person.name());
  console.log("Age", person.age());
  done();
}

function compileSass() {
	return gulp.src("./src/assets/sass/**/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("./public/assets/css/"))
}

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
  // sassファイルが更新されたらSassのコンパイル → ブラウザをリロードの順番で実行
	gulp.watch("./src/assets/sass/**/*.scss", gulp.series(compileSass, browserReload));
}

// 2、タスクの登録
exports.watch = gulp.series(browserInit, watch); // 3、タスクの実行（browserInit実行の後、ファイル監視を実行）
exports.nodeDemo = nodeDemo; // 3、タスクの実行（browserInit実行の後、ファイル監視を実行）
