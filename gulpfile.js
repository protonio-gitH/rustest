const {src, dest, watch, parallel} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const maps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');


function style(){
    return src('scss/style.scss')
    .pipe(autoprefixer({overrideBrowserlist:['last 10 version']}))
    .pipe(concat('style.min.css'))
    .pipe(maps.init())
    .pipe(sass({outputStyle:'compressed'}))
    .pipe(maps.write('./maps'))
    .pipe(dest('css/'))
    .pipe(browserSync.stream())
}

function scripts(){
    return src([
        'js/*.js',
        '!js/main.min.js'
    ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('js'))
    .pipe(browserSync.stream())
}

function watcher(){
    browserSync.init({
        server:{
            baseDir:'./'
        }
    });
    watch(['scss/*.scss'],style);
    watch(['js/*.js','!js/main.min.js'],scripts);
    watch('./*.html').on('change',browserSync.reload);
    // watch('./js/**/*.js').on('change',browserSync.reload);
}

function building(){
    return src([
        './css/style.min.css',
        './images/*.*',
        './index.html',
        './js/main.min.js'
    ],{base:'./'})
    .pipe(dest('dist'))
}

exports.style = style;
exports.watch = watcher;
exports.building = building;

exports.default = parallel(style,scripts,watcher)