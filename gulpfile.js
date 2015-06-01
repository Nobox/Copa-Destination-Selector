var gulp = require('gulp');
var elixir = require('laravel-elixir');
var markdown = require('gulp-markdown');
require('laravel-elixir-browserify').init('bundler');

elixir.extend('markdown', function() {

    gulp.task('markdown', function() {
        return gulp.src('README.md')
            .pipe(markdown())
            .pipe(gulp.dest('dist'));
    });

    return this.queueTask('markdown');

});

elixir(function(mix) {
    mix
        .sass('styles.scss', 'dist/css/copaair-dest-select-styles.css', {
            includePaths: ['./node_modules', elixir.config.bowerDir]
        })

        .bundler('index.js', {
            rename: 'copaair-dest-select.js'
        })

        .markdown()
    ;
});
