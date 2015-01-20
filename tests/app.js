
// Make a Sandbox Application to run Unit Tests in:
App = Ember.Application.create();
App.rootElement = '#ember-testing';
App.setupForTesting();
App.injectTestHelpers();
App.reset();
if (Ember.$('#qunit').length === 0) {
	Ember.$('<div id="qunit"/>').appendTo(document.body);
}
if (Ember.$('#qunit-fixture').length === 0) {
	Ember.$('<div id="qunit-fixture"/>').appendTo(document.body);
}
if (Ember.$('#ember-testing').length === 0) {
	Ember.$('<div id="ember-testing"/>').appendTo(document.body);
}

// Globalize the methods from Ember-Qunit (moduleFor, moduleForComponent, etc.):
emq.globalize();
// Set the resolver:
setResolver(Ember.DefaultResolver.create({namespace: App}));