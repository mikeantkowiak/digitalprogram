var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

var bs = require("browser-sync").create();

bs.init({
  server: "../digitalprogram"
});

gulp.task('sass', function() {
  return gulp.src('assets/scss/styles.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass().on('error', sass.logError)) // Passes it through a gulp-sass, log errors to console
    .pipe(gulp.dest('../digitalprogram')) // Outputs it in the css folder
  .pipe(bs.reload({ // Reloading with Browser Sync
      stream: true
    })); 
})

// Watchers
gulp.task('watch', function() {
  gulp.watch('assets/scss/**/*.scss', gulp.series('sass'));
  gulp.watch('*.html', bs.reload);
  gulp.watch('assets/js/**/*.js', bs.reload);
})

// // Optimization Tasks 
// // ------------------

// // Optimizing CSS and JavaScript 
// gulp.task('useref', function() {

//   return gulp.src('app/*.html')
//     .pipe(useref())
//     .pipe(gulpIf('*.js', uglify()))
//     .pipe(gulpIf('*.css', cssnano()))
//     .pipe(gulp.dest('dist'));
// });

// // Optimizing Images 
// gulp.task('images', function() {
//   return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
//     // Caching images that ran through imagemin
//     .pipe(cache(imagemin({
//       interlaced: true,
//     })))
//     .pipe(gulp.dest('dist/images'))
// });

// // Copying fonts 
// gulp.task('fonts', function() {
//   return gulp.src('app/fonts/**/*')
//     .pipe(gulp.dest('dist/fonts'))
// })

// // Cleaning 
// gulp.task('clean', function() {
//   return del.sync('dist').then(function(cb) {
//     return cache.clearAll(cb);
//   });
// })

// gulp.task('clean:dist', function() {
//   return del.sync(['dist/**/*', '!dist/images', '!dist/images/**/*']);
// });

// // Build Sequences
// // ---------------

// gulp.task('default', function(callback) {
//   runSequence(['sass', 'browserSync'], 'watch',
//     callback
//   )
// })

// gulp.task('build', function(callback) {
//   runSequence(
//     'clean:dist',
//     'sass',
//     ['useref', 'images', 'fonts'],
//     callback
//   )
// })