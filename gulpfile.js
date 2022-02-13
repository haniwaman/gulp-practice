const gulp = require('gulp'); // gulpの関数を使えるように
const sass = require("gulp-sass")(require("sass")); // gulp-sassの読み込み（https://www.npmjs.com/package/gulp-sass）
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer"); // （https://github.com/postcss/autoprefixer）

// 1、タスクの作成
function compileSass() {
	return gulp.src("./src/assets/sass/**/*.scss")
  // srcとdestの間に変換用の処理を書く
	.pipe(sass())
  .pipe(postcss([autoprefixer()]))
	.pipe(gulp.dest("./public/assets/css/"))
}

// 2、タスクの登録
exports.compileSass = compileSass; // 3、タスクの実行
