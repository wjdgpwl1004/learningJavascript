const gulp = require('gulp');
const babel = require('gulp-babel');
//걸프 의존성을 여기 씁니다.

gulp.task('default', function(done){
    //걸프 작업을 여기 씁니다.
    //노드소스
    gulp.src("es6/**/*.js")
        .pipe(babel({
            presets: ["babel-preset-env"]
        }))
        .pipe(gulp.dest("dist"));

        //브라우저 소스
        gulp.src("public/es6/**/*.js")
            .pipe(babel({
                presets: ["babel-preset-env"]
            }))
            .pipe(gulp.dest("public/dist"));
    done();        
});