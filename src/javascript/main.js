(function(){
'use strict';

	var DateTimePickerComponent = Em.Component.extend({
		init: function(){
			// initialize pickerValue with bound value property.
			this.set('pickerValue', this.formatTimestamp(this.get('value')));
			this._super();
		},
		dateFormat: 'MM/DD/YYYY hh:mm',
		formatTimestamp: function(timestamp){
			if(timestamp){
				return moment(timestamp).format(this.get('dateFormat'));
			}else{
				return null;
			}
		},
		dateStringToTimestamp: function(dateString){
			if(dateString){
				return moment(dateString, this.get('dateFormat')).unix() * 1000;
			}else{
				return null;
			}
		},
		classNames: ['datepicker-component'],
		$el: null,
		$datepicker: null,
		pickDate: true,
		pickTime: true,
		useMinutes: true,
		useSeconds: false,
		useCurrent: true,
		minuteStepping: 1,
		minDate: null,
		getMinDate: function(){
			if(this.get('minDate') === null){
				return moment().format(this.get('dateFormat'));
			}else{
				return this.get('minDate');
			}
		}.property('minDate'),
		showToday: true,
		language: 'en',
		defaultDate: null,
		disabledDates: [],
		enabledDates: [],
		useStrict: false,
		sideBySide: true,
		daysOfWeekDisabled: [],
		icons: {
			time: 'fa fa-clock-o',
			calendar: 'fa fa-calendar',
			up: 'fa fa-chevron-up',
			down: 'fa fa-chevron-down'
		},
		value: null,
		pickerOpen: false,
		didInsertElement: function(){
			var self = this,
				elmId = this.get('elementId'),
				$dp = $('#'+elmId+' .datepicker-input'),
				$calIcon = $('#'+elmId+' .calendar-button');
			if($dp.length > 0){
				$dp.datetimepicker({
					widgetParent: '#'+elmId,
					pickDate: this.get('pickDate'),
					pickTime: this.get('pickTime'),
					useMinutes: this.get('useMinutes'),
					useSeconds: this.get('useSeconds'),
					useCurrent: this.get('useCurrent'),
					minuteStepping: this.get('minuteStepping'),
					minDate: this.get('getMinDate'),
					showToday: this.get('showToday'),
					language: this.get('language'),
					defaultDate: this.get('defaultDate'),
					disabledDates: this.get('disabledDates'),
					enabledDates: this.get('enabledDates'),
					useStrict: this.get('useStrict'),
					sideBySide: this.get('sideBySide'),
					daysOfWeekDisabled: this.get('daysOfWeekDisabled'),
					icons: this.get('icons')
				});
				$dp.on('dp.change', function(){
					self.set('value', self.dateStringToTimestamp($dp.val()));
				});
				$dp.on('dp.show', function(){
					self.set('pickerOpen', true);
				});
				$dp.on('dp.hide', function(){
					self.set('pickerOpen', false);
				});
				$calIcon.on('click', function(){
					if(self.get('pickerOpen')){
						$dp.data('DateTimePicker').hide();
						self.set('pickerOpen', false);
					}else{
						$dp.data('DateTimePicker').show();
						self.set('pickerOpen', true);
					}
				});
				this.set('$datepicker', $dp);
			}
		}
	});

	Ember.DatetimepickerComponent = DateTimePickerComponent;
    Ember.Handlebars.helper('datetimepicker-component', Ember.DatetimepickerComponent);
}(this));