
App.DatetimepickerComponentComponent = Em.DatetimepickerComponent.extend({
	layoutName: null,
	layout: Ember.TEMPLATES['ember-bootstrap-datetimepicker-template-main']
});

moduleForComponent('datetimepicker-component', 'Bootstrap DateTimePicker component', {
	teardown: function(){
		if($.fn.datetimepicker.restore){ $.fn.datetimepicker.restore(); }
	}
});

test('should render.', function() {
	var component = this.subject();
	this.append();

	var hasClass = component.$().hasClass('datepicker-component');
	ok(hasClass, 'should have the datepicker-component class');
});

test('should render an input into datepicker container.', function() {
	this.subject();
	var $component = this.append();

	var hasInput = $component.find('.datepicker-input').length > 0;
	ok(hasInput, 'should have found an input.');
});

test('should call $().datepicker after component renders.', function() {
	sinon.spy($.fn, 'datetimepicker');
	this.subject();
	this.append();

	Em.run(function(){
		ok($.fn.datetimepicker.calledOnce, 'should have called datetimepicker function.');
	});
});

test('should call $().datepicker with necessary params.', function() {
	sinon.spy($.fn, 'datetimepicker');

	var expectedParams = {
		pickDate: true,
		pickTime: true,
		useMinutes: true,
		useSeconds: true,
		useCurrent: true,
		minuteStepping: 2,
		minDate: '01/01/2013 11:59',
		showToday: true,
		language: 'en',
		defaultDate: '01/01/2014 11:59',
		disabledDates: [],
		enabledDates: [],
		useStrict: true,
		sideBySide: true,
		daysOfWeekDisabled: false,
		icons: {
			time: 'fa fa-clock-o',
			calendar: 'fa fa-calendar',
			up: 'fa fa-chevron-up',
			down: 'fa fa-chevron-down'
		}
	},
	component = this.subject(expectedParams);
	this.append();

	Em.run(function(){
		var id = component.get('elementId');
		expectedParams.widgetParent = '#'+id;

		var calledWithParams = $.fn.datetimepicker.calledWith(expectedParams);
		ok(calledWithParams, 'should have called $.datetimepicker with correct params.');
	});
});

test('should set pickerOpen to true when dp.show is fired from the input', function(){
	var component = this.subject({
			pickerOpen: false
		}),
		$component = this.append(),
		$input = $component.find('.datepicker-input');

	$input.trigger('dp.show');
	var pickerOpen = component.get('pickerOpen');
	ok(pickerOpen, 'pickerOpen should have been true.');
});

test('should set pickerOpen to false when dp.hide is fired from the input', function(){
	var component = this.subject({
			pickerOpen: true
		}),
		$component = this.append(),
		$input = $component.find('.datepicker-input');

	$input.trigger('dp.hide');
	var notPickerOpen = !component.get('pickerOpen');
	ok(notPickerOpen, 'pickerOpen should have been false.');
});

test('#dateStringToTimestamp should convert a string date to a unix timestamp.', function(){
	var component = this.subject();
	var dateStr = '01-01-2010 00:00-08:00';
	
	//Handles null input
	var noInputResult = !component.dateStringToTimestamp();
	ok(noInputResult, 'with no input, should have returned false.');
	
	var result = component.dateStringToTimestamp(dateStr),
		expectedResult = moment(dateStr, 'MM/DD/YYYY hh:mm').unix()*1000;
	equal(result, expectedResult, 'should have been converted to a timestamp');
});

test('#formatTimestamp should convert unix timestamp to string date.', function(){
	var component = this.subject();
	var timestamp = 946713600000;
	
	//Handles null input
	var noInputResult = !component.formatTimestamp();
	ok(noInputResult, 'with no input, should have returned false.');
	
	var result = component.formatTimestamp(timestamp),
		expectedFormat = /^([0-9]{2}\/[0-9]{2}\/[0-9]{4})\s([0-9]{2}):([0-9]{2})$/,
		matches = expectedFormat.test(result);
	ok(matches, 'should have been a date string.');
});