const gulp = require('gulp');
const server = require('gulp-webserver');
const watch = require('gulp-watch');
const sass = require('gulp-sass-china');
const rename = require('gulp-rename');
var webpack = require('webpack-stream');

gulp.task('default',['server','watch'],() => {
    console.log('server and watch is running!');
});

gulp.task('copy-html',() => {
    return gulp.src('./src/*.html')
    .pipe(gulp.dest('./dev'))
})


gulp.task('copy-libs',() => {
    return gulp.src('./src/libs/**/*')
    .pipe(gulp.dest('./dev/libs'))
})

gulp.task('copy-assets',() => {
    return gulp.src('./src/assets/**/*')
    .pipe(gulp.dest('./dev/assets'))
})

gulp.task('sass',function() {
    // 此处只需要移入一个scss 其它sass在这个文件夹中import进去
    return gulp.src('./src/styles/app.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('./dev/styles'))
})

gulp.task('js',() => {
    return gulp.src('./src/scripts/*.js')
    .pipe(
        webpack({
           // webpack v4 要求定义模式 development production
           mode: 'development',
           // 入口
           entry: './src/scripts/app.js',
           // 出口d
           output: {
               filename: 'app.js'
           },
           //loader
           module: {
                rules: [
                    {
                        test:/\.html$/,
                        use:'string-loader'
                    }
                ]
           }
        })
    )
    .pipe(gulp.dest('./dev/scripts'))
})

gulp.task('all',['copy-html','sass','js','copy-libs','copy-assets'])


gulp.task('server',() => {
    return gulp.src('./dev')
    .pipe(server({
        host:'localhost',
        port:'8080',
        livereload: true,
        directoryListing: {
            enable: true,
            path:'./dev'
        }
    }))
})

gulp.task('watch',() => {
    gulp.watch('./src/styles/app.scss',['sass']);
    gulp.watch('./src/*.html',['copy-html']);
    gulp.watch('./src/scripts/**/*',['js']);
    gulp.watch('./src/libs/**/*',['copy-libs']);
    gulp.watch('./src/assets/**/*',['copy-assets']);
})