const gulp = require('gulp');
const uglify = require('gulp-uglify');
const pump = require('pump');
const concat = require('gulp-concat');

gulp.task('compress', function (cb) {

    let sources = ['src/*.js', 'node_modules/clipboard/dist/clipboard.js'];

    pump([
            gulp.src(sources),
            uglify(),
            concat('all.min.js'),
            gulp.dest('dist')
        ],
        cb
    );
});

gulp.task('default', ['compress']);