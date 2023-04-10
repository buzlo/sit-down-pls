const { src, dest, series, watch } = require('gulp');

const concat = require('gulp-concat');
const htmlMin = require('gulp-htmlmin');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const svgSprite = require('gulp-svg-sprite');
const image = require('gulp-image');
const uglify = require('gulp-uglify-es').default;
const babel = require('gulp-babel');
const notify = require('gulp-notify');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const gulpif = require('gulp-if');
const browserSync = require('browser-sync').create();

let isProd = false;
let dir = 'dist';

const toProd = (done) => {
  isProd = true;
  dir = 'public'
  done();
}

const resources = () => {
  return src('src/resources/**')
    .pipe(dest(!isProd ? 'dist' : 'public'))
}

const styles = () => {
  return src('src/styles/**/*.css')
    .pipe(gulpif(!isProd, sourcemaps.init()))
    .pipe(concat('main.css'))
    .pipe(autoprefixer({
      cascade: false,
    }))
    .pipe(cleanCSS({
      level: 1,
    }))
    .pipe(gulpif(!isProd, sourcemaps.write()))
    .pipe(dest(!isProd ? 'dist/styles' : 'public/styles'))
    .pipe(browserSync.stream());
}

const htmlMinify = () => {
  return src('src/*.html')
    .pipe(gulpif(
      isProd, htmlMin({
        collapseWhitespace: true,
      })
    ))
    .pipe(dest(!isProd ? 'dist' : 'public'))
    .pipe(browserSync.stream());
}

const svgSprites = () => {
  return src('src/img/svg/**/*.svg')
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: '../sprite.svg'
        }
      }
    }))
    .pipe(dest(!isProd ? 'dist/img/svg' : 'public/img/svg'))
    .pipe(browserSync.stream());
}

const images = () => {
  return src([
    'src/img/**/*.jpg',
    'src/img/**/*.jpeg',
    'src/img/**/*.png',
    'src/img/*.svg',
  ])
    .pipe(image({
      jpegRecompress: false,
      zopflipng: false,
    }))
    .pipe(dest(!isProd ? 'dist/img' : 'public/img'))
    .pipe(browserSync.stream());
}

const scripts = () => {
  return src([
    'src/js/components/**/*.js',
    'src/js/main.js',
  ])
    .pipe(gulpif(!isProd, sourcemaps.init()))
    .pipe(concat('main.js'))
    .pipe(gulpif(isProd, uglify().on('error', notify.onError())))
    .pipe(gulpif(!isProd, sourcemaps.write()))
    .pipe(dest(!isProd ? 'dist/js' : 'public/js'))
    .pipe(browserSync.stream());
}

const fonts = () => {
  return src('src/fonts/*')
    .pipe((dest(!isProd ? 'dist/fonts' : 'public/fonts')))
    .pipe(browserSync.stream());
}

const clean = () => {
  return del([dir]);
}

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: dir,
    },
    online: true,
    open: "external",
    logLevel: "info",
  })
}

watch('src/**/*.html', htmlMinify);
watch('src/styles/**/*.css', styles);
watch('src/img/svg/**/*.svg', svgSprites);
watch('src/img/*', images);
watch('src/js/**/*.js', scripts);
watch('src/resources/**', resources);
watch('src/fonts/*', fonts);

exports.styles = styles;
exports.htmlMinify = htmlMinify;
exports.scripts = scripts;
exports.svgSprites = svgSprites;

exports.default = series(
  clean,
  htmlMinify,
  styles,
  scripts,
  svgSprites,
  images,
  resources,
  fonts,
  watchFiles
);

exports.build = series(
  toProd,
  clean,
  htmlMinify,
  styles,
  scripts,
  svgSprites,
  images,
  resources,
  fonts,
  watchFiles
);


