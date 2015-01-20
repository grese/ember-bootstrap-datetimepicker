(function(){
'use strict';

	var DateTimePickerComponent = Em.Component.extend({
		init: function(){
			// initialize pickerValue with bound value property.
			this.set('pickerValue', this.formatTimestamp(this.get('value')));
			this._super();
		},
		formatTimestamp: function(timestamp){
			if(timestamp){
				return moment(timestamp).format('MM/DD/YYYY hh:mm');
			}else{
				return null;
			}
		},
		dateStringToTimestamp: function(dateString){
			if(dateString){
				return moment(dateString, 'MM/DD/YYYY hh:mm').unix() * 1000;
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
		minDate: moment().format('MM/DD/YYYY hh:mm'),
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
					minDate: this.get('minDate'),
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

Ember.TEMPLATES["ember-bootstrap-datetimepicker-template-main"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class='datepicker-input-group input-group'>\n	");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("datepicker-input form-control"),
    'value': ("pickerValue"),
    'readonly': ("readonly")
  },hashTypes:{'class': "STRING",'value': "ID",'readonly': "STRING"},hashContexts:{'class': depth0,'value': depth0,'readonly': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n	<span class='input-group-addon calendar-button'><span class='fa fa-calendar'></span></span>\n</div>");
  return buffer;
  
});