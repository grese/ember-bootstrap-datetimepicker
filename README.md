# ember-bootstrap-datetimepicker
A bootstrap datetimepicker component for Ember.

## Dependencies:
* Ember
* Bootstrap v3
* Eonasdan Bootstrap Datetimepicker (https://github.com/Eonasdan/bootstrap-datetimepicker)
* fontawesome (just for icons)

## Installation:
* This component is available as a bower dependency:  `bower install --save ember-bootstrap-datetimepicker`
* Alternatively, you can just download it as a zip file and manually include these files: dist/ember-bootstrap-datetimepicker.min.js, dist/ember-bootstrap-datetimepicker.css, (you'll also need to include bootstrap-datetimepicker.min.js from eonasdan-bootstrap-datetimepicker).

## Usage:
#### Files:
You'll need to include the following files in your project:
* dist/ember-bootstrap-datetimepicker.min.js
* dist/ember-bootstrap-datetimepicker.css
* <path to bower_components>/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js

#### Parameters:
* value: '' *// (the value property to bind to)*
* pickerOpen: (true || false) *// (whether picker is open or closed)*
* dateFormat: 'MM/DD/YYYY hh:mm' *// (format of date strings -- momentjs syntax)*
* pickDate: (true || false) *// (whether or not to show datepicker)*
* pickTime: (true || false) *// (whether or not to show timepicker)*
* useMinutes: (true || false) *// (whether or not to include minutes in time)*
* useSeconds: (true || false) *// (whether or not to include seconds in time)*
* useCurrent: (true || false) *// (defaults picker to current date/time)*
* minuteStepping: int *// (minute intervals)*
* minDate: int *// (minimum enabled date)*
* showToday: (true || false) *// (whether or not to show today as highlighted)*
* language: 'en' *// (datepicker language)*
* defaultDate: moment object *// (default picker value)*
* disabledDates: [] *// (dates that will be disabled)*
* enabledDates: [] *// (dates that will be enabled)*
* useStrict: (true || false) *// (whether or not strict dates are enforced.)*
* sideBySide: (true || false) *// (show the date/time pickers side-by side?)*
* daysOfWeekDisabled: [] *// (certain days of the week that should be disabled)*
* icons: {time: 'fa fa-clock-o', calendar: 'fa fa-calendar', up: 'fa fa-chevron-up', down: 'fa fa-chevron-down'} *// (custom icons to be used)*

#### Example:
```javascript
{{datetimepicker-component
  value=value
  pickerOpen=false
  dateFormat='MM/DD/YYYY'
  pickDate=true
  pickTime=false
  useMinutes=false
  useSeconds=false
  minuteStepping=5
}}
```
