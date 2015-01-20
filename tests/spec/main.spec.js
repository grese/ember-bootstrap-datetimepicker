
App.DatetimepickerComponentComponent = Em.DatetimepickerComponent.extend({
	layoutName: null,
	layout: Ember.TEMPLATES['ember-bootstrap-datetimepicker-template-main']
});

moduleForComponent('datetimepicker-component', 'Bootstrap DateTimePicker component', {});

test('should render.', function() {
	var component = this.subject();
	this.append();

	var hasClass = component.$().hasClass('datepicker-component');
	ok(hasClass, 'should have the datepicker-component class');
});