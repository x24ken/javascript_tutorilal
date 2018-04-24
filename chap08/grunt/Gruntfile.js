module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      myTask: {
        files: {
          'scripts/app.min.js' : 
          [
            'src/Member.js',
            'src/MyArea.js',
            'src/MyStorage.js'
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', [ 'uglify' ]);
};
