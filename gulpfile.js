var gulp = require('gulp');

var paths = {
    configMaster: './config.yaml',
    configOwn: '../customconfig.yaml',
    output: '../output'
};

gulp.task('default', ['build']);

gulp.task('watch', function(){
    gulp.watch(paths.configMaster, ['build']);
});

gulp.task('build', function() {
    var YAML = require('yamljs');
    var replace = require('gulp-replace');
    var configOwnObject = YAML.load(paths.configOwn);

    console.log(configOwnObject);

    return gulp.src(paths.configMaster)
        .pipe(replace(/#@.*@/g, function(match){
            var output = match;
            var cleanMatch = match.replace(/@/g, '').replace('#','');
            // console.log(cleanMatch); // TODO remove
            if(configOwnObject.hasOwnProperty(cleanMatch)){
                output = configOwnObject[cleanMatch];
            }
            // console.log(output); // TODO remove
            return output;
        }))
        .pipe(gulp.dest(paths.output));
});