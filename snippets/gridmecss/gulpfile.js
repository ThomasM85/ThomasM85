const {
    src,
    dest,
    parallel,
    series,
    watch
} = require('gulp');

// Load plugins

const rename = require('gulp-rename');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const concat = require('gulp-concat');
const clean = require('gulp-clean');
const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');
const browsersync = require('browser-sync').create();

// Clean assets

function clear() {
    return src('./dist/assets/*', {
            read: false
        })
        .pipe(clean());
}

// CSS function

function css() {
    const source = './src/scss/*.scss';

    return src(source)
        .pipe(changed(source))
        .pipe(sass())
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(cssnano())
        .pipe(dest('./dist/assets/css/'))
        .pipe(browsersync.stream());
}

// Optimize images

function img() {
    return src('./src/images/*')
        .pipe(imagemin())
        .pipe(dest('./dist/assets/images/'));
}

// Watch files

function watchFiles() {
    watch('./src/scss/**/*', css);
    watch('./src/images/*', img);
}

// BrowserSync

function browserSync() {
    browsersync.init({
        server: {
            baseDir: './'
        },
        port: 3000
    });
}

// Tasks to define the execution of the functions simultaneously or in series

exports.watch = parallel(watchFiles, browserSync);
exports.default = series(clear, parallel(css, img));
