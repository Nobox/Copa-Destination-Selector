var gulp = require('gulp');
var markdown = require('gulp-markdown');
var Elixir = require('laravel-elixir');
var Task = Elixir.Task;
var config = Elixir.config;

// Disable sourcemaps
config.sourcemaps = false;

// Add IE9 support to autoprefixer.
config.css.autoprefix.options = [{
    browsers: ['last 2 versions', 'ie 9'],
    cascade: false
}];

// Enable more experimental Babel features
config.js.browserify.transformers = [
    {
        name: 'babelify',
        options: {
            stage: 0,
            compact: false,
            ignore: config.bowerDir
        }
    }
];

// Enable watchify polling for our NFS-mounted VMs.
config.js.browserify.watchify.options.poll = true;

Elixir.extend('markdown', function() {

    new Task('markdown', function() {
        return gulp.src('README.md')
            .pipe(markdown())
            .pipe(gulp.dest('dist'));
    });

});

Elixir(function(mix) {
    mix
        .sass('styles.scss', 'dist/css/copaair-dest-select-styles.css', {
            includePaths: ['./node_modules', config.bowerDir]
        })

        .browserify('index.js', config.get('public.js.outputFolder') + '/copaair-dest-select.js')

        .markdown()
    ;
});
