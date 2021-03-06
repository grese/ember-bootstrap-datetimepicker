// Karma configuration
// Generated on Fri Jul 05 2013 01:57:57 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({
    // list of files / patterns to load in the browser
    files: [
      // Load vendor files (dependencies)...
      'vendor/jquery/dist/jquery.js',
      'vendor/handlebars/handlebars.js',
      'vendor/moment/moment.js',
      'vendor/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
      'vendor/ember/ember.js',
      'vendor/ember-qunit-builds/dist/globals/main.js',

      // Load the tests & source files:
      'tests/app.js',
      'build/**/*.js',
      'tests/spec/**/*.spec.js',
    ],
    frameworks: ['qunit', 'sinon'],
    plugins: [
      'karma-qunit',
      'karma-sinon',
      'karma-phantomjs-launcher',
      'karma-junit-reporter',
      'karma-coverage'
    ],
    preprocessors: {
      'src/javascript/**/*.js': ['coverage']
    },
    reporters: ['junit', 'progress', 'dots', 'coverage'],
    coverageReporter: {
      type: 'lcov',
      dir: 'artifacts/coverage/'
    },
    junitReporter: {
      outputFile: 'artifacts/test-results.xml'
    },
    port: parseInt(process.env.PORT, 10) + 1 || 9876,
    runnerPort: 9100,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true
  });
};
