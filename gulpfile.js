var elixir = require('laravel-elixir');
require('laravel-elixir-browserify').init('bundler');

elixir(function(mix) {
    mix
        .sass('styles.scss', 'dist/css/copaair-dest-select-styles.css', {
            includePaths: ['./node_modules', elixir.config.bowerDir]
        })

        .bundler('index.js', {
            rename: 'copaair-dest-select.js'
        })
    ;
});
