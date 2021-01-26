(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ 2816:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = GigsPagesContainer;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TopcoderHeader = __webpack_require__(3119);

var _TopcoderHeader2 = _interopRequireDefault(_TopcoderHeader);

var _TopcoderFooter = __webpack_require__(959);

var _TopcoderFooter2 = _interopRequireDefault(_TopcoderFooter);

var _Viewport = __webpack_require__(177);

var _Viewport2 = _interopRequireDefault(_Viewport);

var _topcoderReactUtils = __webpack_require__(7);

var _RecruitCRMJobDetails = __webpack_require__(4071);

var _RecruitCRMJobDetails2 = _interopRequireDefault(_RecruitCRMJobDetails);

var _reactHelmet = __webpack_require__(147);

var _MetaTags = __webpack_require__(492);

var _MetaTags2 = _interopRequireDefault(_MetaTags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function GigsPagesContainer(props) {
  var match = props.match;
  var id = match.params.id;

  var isApply = _topcoderReactUtils.config.GIGS_PAGES_PATH + '/' + id + '/apply' === match.url;
  var title = 'Gig Work | Topcoder Community | Topcoder';
  var description = 'Compete and build up your profiles and skills! Topcoder members become eligible to work on Gig Work projects by first proving themselves in various skill sets through Topcoder competitions.';
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement(
        'script',
        { type: 'text/javascript' },
        '\nwindow._chatlio = window._chatlio||[];\n!function(){ var t=document.getElementById("chatlio-widget-embed");if(t&&window.ChatlioReact&&_chatlio.init)return void _chatlio.init(t,ChatlioReact);for(var e=function(t){return function(){_chatlio.push([t].concat(arguments)) }},i=["configure","identify","track","show","hide","isShown","isOnline", "page", "open", "showOrHide"],a=0;a<i.length;a++)_chatlio[i[a]]||(_chatlio[i[a]]=e(i[a]));var n=document.createElement("script"),c=document.getElementsByTagName("script")[0];n.id="chatlio-widget-embed",n.src="https://w.chatlio.com/w.chatlio-widget.js",n.async=!0,n.setAttribute("data-embed-version","2.3");\n   n.setAttribute(\'data-widget-id\',\'f6584d97-111b-4fd0-635d-c8afb3fb55bd\');\n   c.parentNode.insertBefore(n,c);\n}();\n        '
      )
    ),
    _react2.default.createElement(_MetaTags2.default, {
      description: description,
      title: title
    }),
    _react2.default.createElement(_TopcoderHeader2.default, null),
    id ? _react2.default.createElement(_RecruitCRMJobDetails2.default, {
      id: id,
      isApply: isApply
    }) : _react2.default.createElement(_Viewport2.default, {
      id: '3X6GfJZl3eDU0m4joSJZpN',
      baseUrl: _topcoderReactUtils.config.GIGS_PAGES_PATH
    }),
    _react2.default.createElement(_TopcoderFooter2.default, null)
  );
} /**
   * Connects the Redux store to the GigsPages component.
   */


GigsPagesContainer.defaultProps = {};

GigsPagesContainer.propTypes = {
  match: _propTypes2.default.shape().isRequired
};

/***/ }),

/***/ 2818:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MODIFIER_KEY_NAMES = exports.DEFAULT_VERTICAL_SPACING = exports.FANG_HEIGHT_PX = exports.FANG_WIDTH_PX = exports.WEEKDAYS = exports.BLOCKED_MODIFIER = exports.DAY_SIZE = exports.OPEN_UP = exports.OPEN_DOWN = exports.ANCHOR_RIGHT = exports.ANCHOR_LEFT = exports.INFO_POSITION_AFTER = exports.INFO_POSITION_BEFORE = exports.INFO_POSITION_BOTTOM = exports.INFO_POSITION_TOP = exports.ICON_AFTER_POSITION = exports.ICON_BEFORE_POSITION = exports.VERTICAL_SCROLLABLE = exports.VERTICAL_ORIENTATION = exports.HORIZONTAL_ORIENTATION = exports.END_DATE = exports.START_DATE = exports.ISO_MONTH_FORMAT = exports.ISO_FORMAT = exports.DISPLAY_FORMAT = void 0;
var DISPLAY_FORMAT = 'L';
exports.DISPLAY_FORMAT = DISPLAY_FORMAT;
var ISO_FORMAT = 'YYYY-MM-DD';
exports.ISO_FORMAT = ISO_FORMAT;
var ISO_MONTH_FORMAT = 'YYYY-MM';
exports.ISO_MONTH_FORMAT = ISO_MONTH_FORMAT;
var START_DATE = 'startDate';
exports.START_DATE = START_DATE;
var END_DATE = 'endDate';
exports.END_DATE = END_DATE;
var HORIZONTAL_ORIENTATION = 'horizontal';
exports.HORIZONTAL_ORIENTATION = HORIZONTAL_ORIENTATION;
var VERTICAL_ORIENTATION = 'vertical';
exports.VERTICAL_ORIENTATION = VERTICAL_ORIENTATION;
var VERTICAL_SCROLLABLE = 'verticalScrollable';
exports.VERTICAL_SCROLLABLE = VERTICAL_SCROLLABLE;
var ICON_BEFORE_POSITION = 'before';
exports.ICON_BEFORE_POSITION = ICON_BEFORE_POSITION;
var ICON_AFTER_POSITION = 'after';
exports.ICON_AFTER_POSITION = ICON_AFTER_POSITION;
var INFO_POSITION_TOP = 'top';
exports.INFO_POSITION_TOP = INFO_POSITION_TOP;
var INFO_POSITION_BOTTOM = 'bottom';
exports.INFO_POSITION_BOTTOM = INFO_POSITION_BOTTOM;
var INFO_POSITION_BEFORE = 'before';
exports.INFO_POSITION_BEFORE = INFO_POSITION_BEFORE;
var INFO_POSITION_AFTER = 'after';
exports.INFO_POSITION_AFTER = INFO_POSITION_AFTER;
var ANCHOR_LEFT = 'left';
exports.ANCHOR_LEFT = ANCHOR_LEFT;
var ANCHOR_RIGHT = 'right';
exports.ANCHOR_RIGHT = ANCHOR_RIGHT;
var OPEN_DOWN = 'down';
exports.OPEN_DOWN = OPEN_DOWN;
var OPEN_UP = 'up';
exports.OPEN_UP = OPEN_UP;
var DAY_SIZE = 39;
exports.DAY_SIZE = DAY_SIZE;
var BLOCKED_MODIFIER = 'blocked';
exports.BLOCKED_MODIFIER = BLOCKED_MODIFIER;
var WEEKDAYS = [0, 1, 2, 3, 4, 5, 6];
exports.WEEKDAYS = WEEKDAYS;
var FANG_WIDTH_PX = 20;
exports.FANG_WIDTH_PX = FANG_WIDTH_PX;
var FANG_HEIGHT_PX = 10;
exports.FANG_HEIGHT_PX = FANG_HEIGHT_PX;
var DEFAULT_VERTICAL_SPACING = 22;
exports.DEFAULT_VERTICAL_SPACING = DEFAULT_VERTICAL_SPACING;
var MODIFIER_KEY_NAMES = new Set(['Shift', 'Control', 'Alt', 'Meta']);
exports.MODIFIER_KEY_NAMES = MODIFIER_KEY_NAMES;

/***/ }),

/***/ 2819:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* globals
	Atomics,
	SharedArrayBuffer,
*/

var undefined;

var $TypeError = TypeError;

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () { throw new $TypeError(); };
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __webpack_require__(2915)();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var generator; // = function * () {};
var generatorFunction = generator ? getProto(generator) : undefined;
var asyncFn; // async function() {};
var asyncFunction = asyncFn ? asyncFn.constructor : undefined;
var asyncGen; // async function * () {};
var asyncGenFunction = asyncGen ? getProto(asyncGen) : undefined;
var asyncGenIterator = asyncGen ? asyncGen() : undefined;

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer.prototype,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%ArrayPrototype%': Array.prototype,
	'%ArrayProto_entries%': Array.prototype.entries,
	'%ArrayProto_forEach%': Array.prototype.forEach,
	'%ArrayProto_keys%': Array.prototype.keys,
	'%ArrayProto_values%': Array.prototype.values,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': asyncFunction,
	'%AsyncFunctionPrototype%': asyncFunction ? asyncFunction.prototype : undefined,
	'%AsyncGenerator%': asyncGen ? getProto(asyncGenIterator) : undefined,
	'%AsyncGeneratorFunction%': asyncGenFunction,
	'%AsyncGeneratorPrototype%': asyncGenFunction ? asyncGenFunction.prototype : undefined,
	'%AsyncIteratorPrototype%': asyncGenIterator && hasSymbols && Symbol.asyncIterator ? asyncGenIterator[Symbol.asyncIterator]() : undefined,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%Boolean%': Boolean,
	'%BooleanPrototype%': Boolean.prototype,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%DataViewPrototype%': typeof DataView === 'undefined' ? undefined : DataView.prototype,
	'%Date%': Date,
	'%DatePrototype%': Date.prototype,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%ErrorPrototype%': Error.prototype,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%EvalErrorPrototype%': EvalError.prototype,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined : Float32Array.prototype,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined : Float64Array.prototype,
	'%Function%': Function,
	'%FunctionPrototype%': Function.prototype,
	'%Generator%': generator ? getProto(generator()) : undefined,
	'%GeneratorFunction%': generatorFunction,
	'%GeneratorPrototype%': generatorFunction ? generatorFunction.prototype : undefined,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined : Int8Array.prototype,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined : Int8Array.prototype,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined : Int32Array.prototype,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%JSONParse%': typeof JSON === 'object' ? JSON.parse : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%MapPrototype%': typeof Map === 'undefined' ? undefined : Map.prototype,
	'%Math%': Math,
	'%Number%': Number,
	'%NumberPrototype%': Number.prototype,
	'%Object%': Object,
	'%ObjectPrototype%': Object.prototype,
	'%ObjProto_toString%': Object.prototype.toString,
	'%ObjProto_valueOf%': Object.prototype.valueOf,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%PromisePrototype%': typeof Promise === 'undefined' ? undefined : Promise.prototype,
	'%PromiseProto_then%': typeof Promise === 'undefined' ? undefined : Promise.prototype.then,
	'%Promise_all%': typeof Promise === 'undefined' ? undefined : Promise.all,
	'%Promise_reject%': typeof Promise === 'undefined' ? undefined : Promise.reject,
	'%Promise_resolve%': typeof Promise === 'undefined' ? undefined : Promise.resolve,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%RangeErrorPrototype%': RangeError.prototype,
	'%ReferenceError%': ReferenceError,
	'%ReferenceErrorPrototype%': ReferenceError.prototype,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%RegExpPrototype%': RegExp.prototype,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SetPrototype%': typeof Set === 'undefined' ? undefined : Set.prototype,
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer.prototype,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%StringPrototype%': String.prototype,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SymbolPrototype%': hasSymbols ? Symbol.prototype : undefined,
	'%SyntaxError%': SyntaxError,
	'%SyntaxErrorPrototype%': SyntaxError.prototype,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined,
	'%TypeError%': $TypeError,
	'%TypeErrorPrototype%': $TypeError.prototype,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array.prototype,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray.prototype,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array.prototype,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array.prototype,
	'%URIError%': URIError,
	'%URIErrorPrototype%': URIError.prototype,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined : WeakMap.prototype,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
	'%WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined : WeakSet.prototype
};

var bind = __webpack_require__(2872);
var $replace = bind.call(Function.call, String.prototype.replace);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : (number || match);
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	if (!(name in INTRINSICS)) {
		throw new SyntaxError('intrinsic ' + name + ' does not exist!');
	}

	// istanbul ignore if // hopefully this is impossible to test :-)
	if (typeof INTRINSICS[name] === 'undefined' && !allowMissing) {
		throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
	}

	return INTRINSICS[name];
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new TypeError('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);

	var value = getBaseIntrinsic('%' + (parts.length > 0 ? parts[0] : '') + '%', allowMissing);
	for (var i = 1; i < parts.length; i += 1) {
		if (value != null) {
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, parts[i]);
				if (!allowMissing && !(parts[i] in value)) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				value = desc ? (desc.get || desc.value) : value[parts[i]];
			} else {
				value = value[parts[i]];
			}
		}
	}
	return value;
};


/***/ }),

/***/ 2820:
/***/ (function(module, exports, __webpack_require__) {

module.exports =  true ? __webpack_require__(3044) : undefined;

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 2821:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CalendarDayPhrases = exports.DayPickerNavigationPhrases = exports.DayPickerKeyboardShortcutsPhrases = exports.DayPickerPhrases = exports.SingleDatePickerInputPhrases = exports.SingleDatePickerPhrases = exports.DateRangePickerInputPhrases = exports.DateRangePickerPhrases = exports["default"] = void 0;
var calendarLabel = 'Calendar';
var closeDatePicker = 'Close';
var focusStartDate = 'Interact with the calendar and add the check-in date for your trip.';
var clearDate = 'Clear Date';
var clearDates = 'Clear Dates';
var jumpToPrevMonth = 'Move backward to switch to the previous month.';
var jumpToNextMonth = 'Move forward to switch to the next month.';
var keyboardShortcuts = 'Keyboard Shortcuts';
var showKeyboardShortcutsPanel = 'Open the keyboard shortcuts panel.';
var hideKeyboardShortcutsPanel = 'Close the shortcuts panel.';
var openThisPanel = 'Open this panel.';
var enterKey = 'Enter key';
var leftArrowRightArrow = 'Right and left arrow keys';
var upArrowDownArrow = 'up and down arrow keys';
var pageUpPageDown = 'page up and page down keys';
var homeEnd = 'Home and end keys';
var escape = 'Escape key';
var questionMark = 'Question mark';
var selectFocusedDate = 'Select the date in focus.';
var moveFocusByOneDay = 'Move backward (left) and forward (right) by one day.';
var moveFocusByOneWeek = 'Move backward (up) and forward (down) by one week.';
var moveFocusByOneMonth = 'Switch months.';
var moveFocustoStartAndEndOfWeek = 'Go to the first or last day of a week.';
var returnFocusToInput = 'Return to the date input field.';
var keyboardNavigationInstructions = "Press the down arrow key to interact with the calendar and\n  select a date. Press the question mark key to get the keyboard shortcuts for changing dates.";

var chooseAvailableStartDate = function chooseAvailableStartDate(_ref) {
  var date = _ref.date;
  return "Choose ".concat(date, " as your check-in date. It\u2019s available.");
};

var chooseAvailableEndDate = function chooseAvailableEndDate(_ref2) {
  var date = _ref2.date;
  return "Choose ".concat(date, " as your check-out date. It\u2019s available.");
};

var chooseAvailableDate = function chooseAvailableDate(_ref3) {
  var date = _ref3.date;
  return date;
};

var dateIsUnavailable = function dateIsUnavailable(_ref4) {
  var date = _ref4.date;
  return "Not available. ".concat(date);
};

var dateIsSelected = function dateIsSelected(_ref5) {
  var date = _ref5.date;
  return "Selected. ".concat(date);
};

var dateIsSelectedAsStartDate = function dateIsSelectedAsStartDate(_ref6) {
  var date = _ref6.date;
  return "Selected as start date. ".concat(date);
};

var dateIsSelectedAsEndDate = function dateIsSelectedAsEndDate(_ref7) {
  var date = _ref7.date;
  return "Selected as end date. ".concat(date);
};

var _default = {
  calendarLabel: calendarLabel,
  closeDatePicker: closeDatePicker,
  focusStartDate: focusStartDate,
  clearDate: clearDate,
  clearDates: clearDates,
  jumpToPrevMonth: jumpToPrevMonth,
  jumpToNextMonth: jumpToNextMonth,
  keyboardShortcuts: keyboardShortcuts,
  showKeyboardShortcutsPanel: showKeyboardShortcutsPanel,
  hideKeyboardShortcutsPanel: hideKeyboardShortcutsPanel,
  openThisPanel: openThisPanel,
  enterKey: enterKey,
  leftArrowRightArrow: leftArrowRightArrow,
  upArrowDownArrow: upArrowDownArrow,
  pageUpPageDown: pageUpPageDown,
  homeEnd: homeEnd,
  escape: escape,
  questionMark: questionMark,
  selectFocusedDate: selectFocusedDate,
  moveFocusByOneDay: moveFocusByOneDay,
  moveFocusByOneWeek: moveFocusByOneWeek,
  moveFocusByOneMonth: moveFocusByOneMonth,
  moveFocustoStartAndEndOfWeek: moveFocustoStartAndEndOfWeek,
  returnFocusToInput: returnFocusToInput,
  keyboardNavigationInstructions: keyboardNavigationInstructions,
  chooseAvailableStartDate: chooseAvailableStartDate,
  chooseAvailableEndDate: chooseAvailableEndDate,
  dateIsUnavailable: dateIsUnavailable,
  dateIsSelected: dateIsSelected,
  dateIsSelectedAsStartDate: dateIsSelectedAsStartDate,
  dateIsSelectedAsEndDate: dateIsSelectedAsEndDate
};
exports["default"] = _default;
var DateRangePickerPhrases = {
  calendarLabel: calendarLabel,
  closeDatePicker: closeDatePicker,
  clearDates: clearDates,
  focusStartDate: focusStartDate,
  jumpToPrevMonth: jumpToPrevMonth,
  jumpToNextMonth: jumpToNextMonth,
  keyboardShortcuts: keyboardShortcuts,
  showKeyboardShortcutsPanel: showKeyboardShortcutsPanel,
  hideKeyboardShortcutsPanel: hideKeyboardShortcutsPanel,
  openThisPanel: openThisPanel,
  enterKey: enterKey,
  leftArrowRightArrow: leftArrowRightArrow,
  upArrowDownArrow: upArrowDownArrow,
  pageUpPageDown: pageUpPageDown,
  homeEnd: homeEnd,
  escape: escape,
  questionMark: questionMark,
  selectFocusedDate: selectFocusedDate,
  moveFocusByOneDay: moveFocusByOneDay,
  moveFocusByOneWeek: moveFocusByOneWeek,
  moveFocusByOneMonth: moveFocusByOneMonth,
  moveFocustoStartAndEndOfWeek: moveFocustoStartAndEndOfWeek,
  returnFocusToInput: returnFocusToInput,
  keyboardNavigationInstructions: keyboardNavigationInstructions,
  chooseAvailableStartDate: chooseAvailableStartDate,
  chooseAvailableEndDate: chooseAvailableEndDate,
  dateIsUnavailable: dateIsUnavailable,
  dateIsSelected: dateIsSelected,
  dateIsSelectedAsStartDate: dateIsSelectedAsStartDate,
  dateIsSelectedAsEndDate: dateIsSelectedAsEndDate
};
exports.DateRangePickerPhrases = DateRangePickerPhrases;
var DateRangePickerInputPhrases = {
  focusStartDate: focusStartDate,
  clearDates: clearDates,
  keyboardNavigationInstructions: keyboardNavigationInstructions
};
exports.DateRangePickerInputPhrases = DateRangePickerInputPhrases;
var SingleDatePickerPhrases = {
  calendarLabel: calendarLabel,
  closeDatePicker: closeDatePicker,
  clearDate: clearDate,
  jumpToPrevMonth: jumpToPrevMonth,
  jumpToNextMonth: jumpToNextMonth,
  keyboardShortcuts: keyboardShortcuts,
  showKeyboardShortcutsPanel: showKeyboardShortcutsPanel,
  hideKeyboardShortcutsPanel: hideKeyboardShortcutsPanel,
  openThisPanel: openThisPanel,
  enterKey: enterKey,
  leftArrowRightArrow: leftArrowRightArrow,
  upArrowDownArrow: upArrowDownArrow,
  pageUpPageDown: pageUpPageDown,
  homeEnd: homeEnd,
  escape: escape,
  questionMark: questionMark,
  selectFocusedDate: selectFocusedDate,
  moveFocusByOneDay: moveFocusByOneDay,
  moveFocusByOneWeek: moveFocusByOneWeek,
  moveFocusByOneMonth: moveFocusByOneMonth,
  moveFocustoStartAndEndOfWeek: moveFocustoStartAndEndOfWeek,
  returnFocusToInput: returnFocusToInput,
  keyboardNavigationInstructions: keyboardNavigationInstructions,
  chooseAvailableDate: chooseAvailableDate,
  dateIsUnavailable: dateIsUnavailable,
  dateIsSelected: dateIsSelected
};
exports.SingleDatePickerPhrases = SingleDatePickerPhrases;
var SingleDatePickerInputPhrases = {
  clearDate: clearDate,
  keyboardNavigationInstructions: keyboardNavigationInstructions
};
exports.SingleDatePickerInputPhrases = SingleDatePickerInputPhrases;
var DayPickerPhrases = {
  calendarLabel: calendarLabel,
  jumpToPrevMonth: jumpToPrevMonth,
  jumpToNextMonth: jumpToNextMonth,
  keyboardShortcuts: keyboardShortcuts,
  showKeyboardShortcutsPanel: showKeyboardShortcutsPanel,
  hideKeyboardShortcutsPanel: hideKeyboardShortcutsPanel,
  openThisPanel: openThisPanel,
  enterKey: enterKey,
  leftArrowRightArrow: leftArrowRightArrow,
  upArrowDownArrow: upArrowDownArrow,
  pageUpPageDown: pageUpPageDown,
  homeEnd: homeEnd,
  escape: escape,
  questionMark: questionMark,
  selectFocusedDate: selectFocusedDate,
  moveFocusByOneDay: moveFocusByOneDay,
  moveFocusByOneWeek: moveFocusByOneWeek,
  moveFocusByOneMonth: moveFocusByOneMonth,
  moveFocustoStartAndEndOfWeek: moveFocustoStartAndEndOfWeek,
  returnFocusToInput: returnFocusToInput,
  chooseAvailableStartDate: chooseAvailableStartDate,
  chooseAvailableEndDate: chooseAvailableEndDate,
  chooseAvailableDate: chooseAvailableDate,
  dateIsUnavailable: dateIsUnavailable,
  dateIsSelected: dateIsSelected,
  dateIsSelectedAsStartDate: dateIsSelectedAsStartDate,
  dateIsSelectedAsEndDate: dateIsSelectedAsEndDate
};
exports.DayPickerPhrases = DayPickerPhrases;
var DayPickerKeyboardShortcutsPhrases = {
  keyboardShortcuts: keyboardShortcuts,
  showKeyboardShortcutsPanel: showKeyboardShortcutsPanel,
  hideKeyboardShortcutsPanel: hideKeyboardShortcutsPanel,
  openThisPanel: openThisPanel,
  enterKey: enterKey,
  leftArrowRightArrow: leftArrowRightArrow,
  upArrowDownArrow: upArrowDownArrow,
  pageUpPageDown: pageUpPageDown,
  homeEnd: homeEnd,
  escape: escape,
  questionMark: questionMark,
  selectFocusedDate: selectFocusedDate,
  moveFocusByOneDay: moveFocusByOneDay,
  moveFocusByOneWeek: moveFocusByOneWeek,
  moveFocusByOneMonth: moveFocusByOneMonth,
  moveFocustoStartAndEndOfWeek: moveFocustoStartAndEndOfWeek,
  returnFocusToInput: returnFocusToInput
};
exports.DayPickerKeyboardShortcutsPhrases = DayPickerKeyboardShortcutsPhrases;
var DayPickerNavigationPhrases = {
  jumpToPrevMonth: jumpToPrevMonth,
  jumpToNextMonth: jumpToNextMonth
};
exports.DayPickerNavigationPhrases = DayPickerNavigationPhrases;
var CalendarDayPhrases = {
  chooseAvailableDate: chooseAvailableDate,
  dateIsUnavailable: dateIsUnavailable,
  dateIsSelected: dateIsSelected,
  dateIsSelectedAsStartDate: dateIsSelectedAsStartDate,
  dateIsSelectedAsEndDate: dateIsSelectedAsEndDate
};
exports.CalendarDayPhrases = CalendarDayPhrases;

/***/ }),

/***/ 2823:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getPhrasePropTypes;

var _propTypes = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getPhrasePropTypes(defaultPhrases) {
  return Object.keys(defaultPhrases).reduce(function (phrases, key) {
    return _objectSpread({}, phrases, _defineProperty({}, key, _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func, _propTypes["default"].node])));
  }, {});
}

/***/ }),

/***/ 2827:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withStylesPropTypes = exports.css = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.withStyles = withStyles;

var _object = __webpack_require__(3045);

var _object2 = _interopRequireDefault(_object);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(3047);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _constants = __webpack_require__(3048);

var _brcast = __webpack_require__(3049);

var _brcast2 = _interopRequireDefault(_brcast);

var _ThemedStyleSheet = __webpack_require__(2931);

var _ThemedStyleSheet2 = _interopRequireDefault(_ThemedStyleSheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /* eslint react/forbid-foreign-prop-types: off */

// Add some named exports to assist in upgrading and for convenience
var css = exports.css = _ThemedStyleSheet2['default'].resolveLTR;
var withStylesPropTypes = exports.withStylesPropTypes = {
  styles: _propTypes2['default'].object.isRequired, // eslint-disable-line react/forbid-prop-types
  theme: _propTypes2['default'].object.isRequired, // eslint-disable-line react/forbid-prop-types
  css: _propTypes2['default'].func.isRequired
};

var EMPTY_STYLES = {};
var EMPTY_STYLES_FN = function EMPTY_STYLES_FN() {
  return EMPTY_STYLES;
};

var START_MARK = 'react-with-styles.createStyles.start';
var END_MARK = 'react-with-styles.createStyles.end';

function baseClass(pureComponent) {
  if (pureComponent) {
    if (!_react2['default'].PureComponent) {
      throw new ReferenceError('withStyles() pureComponent option requires React 15.3.0 or later');
    }

    return _react2['default'].PureComponent;
  }

  return _react2['default'].Component;
}

var contextTypes = _defineProperty({}, _constants.CHANNEL, _brcast2['default']);

var defaultDirection = _constants.DIRECTIONS.LTR;

function withStyles(styleFn) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$stylesPropName = _ref.stylesPropName,
      stylesPropName = _ref$stylesPropName === undefined ? 'styles' : _ref$stylesPropName,
      _ref$themePropName = _ref.themePropName,
      themePropName = _ref$themePropName === undefined ? 'theme' : _ref$themePropName,
      _ref$cssPropName = _ref.cssPropName,
      cssPropName = _ref$cssPropName === undefined ? 'css' : _ref$cssPropName,
      _ref$flushBefore = _ref.flushBefore,
      flushBefore = _ref$flushBefore === undefined ? false : _ref$flushBefore,
      _ref$pureComponent = _ref.pureComponent,
      pureComponent = _ref$pureComponent === undefined ? false : _ref$pureComponent;

  var styleDefLTR = void 0;
  var styleDefRTL = void 0;
  var currentThemeLTR = void 0;
  var currentThemeRTL = void 0;
  var BaseClass = baseClass(pureComponent);

  function getResolveMethod(direction) {
    return direction === _constants.DIRECTIONS.LTR ? _ThemedStyleSheet2['default'].resolveLTR : _ThemedStyleSheet2['default'].resolveRTL;
  }

  function getCurrentTheme(direction) {
    return direction === _constants.DIRECTIONS.LTR ? currentThemeLTR : currentThemeRTL;
  }

  function getStyleDef(direction, wrappedComponentName) {
    var currentTheme = getCurrentTheme(direction);
    var styleDef = direction === _constants.DIRECTIONS.LTR ? styleDefLTR : styleDefRTL;

    var registeredTheme = _ThemedStyleSheet2['default'].get();

    // Return the existing styles if they've already been defined
    // and if the theme used to create them corresponds to the theme
    // registered with ThemedStyleSheet
    if (styleDef && currentTheme === registeredTheme) {
      return styleDef;
    }

    if (false) {}

    var isRTL = direction === _constants.DIRECTIONS.RTL;

    if (isRTL) {
      styleDefRTL = styleFn ? _ThemedStyleSheet2['default'].createRTL(styleFn) : EMPTY_STYLES_FN;

      currentThemeRTL = registeredTheme;
      styleDef = styleDefRTL;
    } else {
      styleDefLTR = styleFn ? _ThemedStyleSheet2['default'].createLTR(styleFn) : EMPTY_STYLES_FN;

      currentThemeLTR = registeredTheme;
      styleDef = styleDefLTR;
    }

    if (false) { var measureName; }

    return styleDef;
  }

  function getState(direction, wrappedComponentName) {
    return {
      resolveMethod: getResolveMethod(direction),
      styleDef: getStyleDef(direction, wrappedComponentName)
    };
  }

  return function () {
    function withStylesHOC(WrappedComponent) {
      var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

      // NOTE: Use a class here so components are ref-able if need be:
      // eslint-disable-next-line react/prefer-stateless-function

      var WithStyles = function (_BaseClass) {
        _inherits(WithStyles, _BaseClass);

        function WithStyles(props, context) {
          _classCallCheck(this, WithStyles);

          var _this = _possibleConstructorReturn(this, (WithStyles.__proto__ || Object.getPrototypeOf(WithStyles)).call(this, props, context));

          var direction = _this.context[_constants.CHANNEL] ? _this.context[_constants.CHANNEL].getState() : defaultDirection;

          _this.state = getState(direction, wrappedComponentName);
          return _this;
        }

        _createClass(WithStyles, [{
          key: 'componentDidMount',
          value: function () {
            function componentDidMount() {
              var _this2 = this;

              if (this.context[_constants.CHANNEL]) {
                // subscribe to future direction changes
                this.channelUnsubscribe = this.context[_constants.CHANNEL].subscribe(function (direction) {
                  _this2.setState(getState(direction, wrappedComponentName));
                });
              }
            }

            return componentDidMount;
          }()
        }, {
          key: 'componentWillUnmount',
          value: function () {
            function componentWillUnmount() {
              if (this.channelUnsubscribe) {
                this.channelUnsubscribe();
              }
            }

            return componentWillUnmount;
          }()
        }, {
          key: 'render',
          value: function () {
            function render() {
              var _ref2;

              // As some components will depend on previous styles in
              // the component tree, we provide the option of flushing the
              // buffered styles (i.e. to a style tag) **before** the rendering
              // cycle begins.
              //
              // The interfaces provide the optional "flush" method which
              // is run in turn by ThemedStyleSheet.flush.
              if (flushBefore) {
                _ThemedStyleSheet2['default'].flush();
              }

              var _state = this.state,
                  resolveMethod = _state.resolveMethod,
                  styleDef = _state.styleDef;


              return _react2['default'].createElement(WrappedComponent, _extends({}, this.props, (_ref2 = {}, _defineProperty(_ref2, themePropName, _ThemedStyleSheet2['default'].get()), _defineProperty(_ref2, stylesPropName, styleDef()), _defineProperty(_ref2, cssPropName, resolveMethod), _ref2)));
            }

            return render;
          }()
        }]);

        return WithStyles;
      }(BaseClass);

      WithStyles.WrappedComponent = WrappedComponent;
      WithStyles.displayName = 'withStyles(' + String(wrappedComponentName) + ')';
      WithStyles.contextTypes = contextTypes;
      if (WrappedComponent.propTypes) {
        WithStyles.propTypes = (0, _object2['default'])({}, WrappedComponent.propTypes);
        delete WithStyles.propTypes[stylesPropName];
        delete WithStyles.propTypes[themePropName];
        delete WithStyles.propTypes[cssPropName];
      }
      if (WrappedComponent.defaultProps) {
        WithStyles.defaultProps = (0, _object2['default'])({}, WrappedComponent.defaultProps);
      }

      return (0, _hoistNonReactStatics2['default'])(WithStyles, WrappedComponent);
    }

    return withStylesHOC;
  }();
}

/***/ }),

/***/ 2837:
/***/ (function(module, exports, __webpack_require__) {

var moment = __webpack_require__(2);
var momentValidationWrapper = __webpack_require__(3042);
var core = __webpack_require__(3043);

module.exports = {

  momentObj : core.createMomentChecker(
    'object',
    function(obj) {
      return typeof obj === 'object';
    },
    function isValid(value) {
      return momentValidationWrapper.isValidMoment(value);
    },
    'Moment'
  ),

  momentString : core.createMomentChecker(
    'string',
    function(str) {
      return typeof str === 'string';
    },
    function isValid(value) {
      return momentValidationWrapper.isValidMoment(moment(value));
    },
    'Moment'
  ),

  momentDurationObj : core.createMomentChecker(
    'object',
    function(obj) {
      return typeof obj === 'object';
    },
    function isValid(value) {
      return moment.isDuration(value);
    },
    'Duration'
  ),

};


/***/ }),

/***/ 2838:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(2913);
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		origDefineProperty(obj, 'x', { enumerable: false, value: obj });
		// eslint-disable-next-line no-unused-vars, no-restricted-syntax
		for (var _ in obj) { // jscs:ignore disallowUnusedVariables
			return false;
		}
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		origDefineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
	}
	for (var i = 0; i < props.length; i += 1) {
		defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
	}
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),

/***/ 2839:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ES5Type = __webpack_require__(3005);

// https://www.ecma-international.org/ecma-262/6.0/#sec-tostring

module.exports = function Type(x) {
	if (typeof x === 'symbol') {
		return 'Symbol';
	}
	return ES5Type(x);
};


/***/ }),

/***/ 2842:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = noflip;
var NOFLIP = '/* @noflip */'; // Appends a noflip comment to a style rule in order to prevent it from being automatically
// flipped in RTL contexts. This should be used only in situations where the style must remain
// unflipped regardless of direction context. See: https://github.com/kentcdodds/rtl-css-js#usage

function noflip(value) {
  if (typeof value === 'number') return "".concat(value, "px ").concat(NOFLIP);
  if (typeof value === 'string') return "".concat(value, " ").concat(NOFLIP);
  throw new TypeError('noflip expects a string or a number');
}

/***/ }),

/***/ 2843:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(0));

var _constants = __webpack_require__(2818);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _propTypes["default"].oneOf(_constants.WEEKDAYS);

exports["default"] = _default;

/***/ }),

/***/ 2844:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(0));

var _constants = __webpack_require__(2818);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _propTypes["default"].oneOf([_constants.OPEN_DOWN, _constants.OPEN_UP]);

exports["default"] = _default;

/***/ }),

/***/ 2848:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(2872);

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ 2849:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isSameDay;

var _moment = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function isSameDay(a, b) {
  if (!_moment["default"].isMoment(a) || !_moment["default"].isMoment(b)) return false; // Compare least significant, most likely to change units first
  // Moment's isSame clones moment inputs and is a tad slow

  return a.date() === b.date() && a.month() === b.month() && a.year() === b.year();
}

/***/ }),

/***/ 2850:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = toMomentObject;

var _moment = _interopRequireDefault(__webpack_require__(2));

var _constants = __webpack_require__(2818);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function toMomentObject(dateString, customFormat) {
  var dateFormats = customFormat ? [customFormat, _constants.DISPLAY_FORMAT, _constants.ISO_FORMAT] : [_constants.DISPLAY_FORMAT, _constants.ISO_FORMAT];
  var date = (0, _moment["default"])(dateString, dateFormats, true);
  return date.isValid() ? date.hour(12) : null;
}

/***/ }),

/***/ 2851:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(0));

var _constants = __webpack_require__(2818);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _propTypes["default"].oneOf([_constants.HORIZONTAL_ORIENTATION, _constants.VERTICAL_ORIENTATION, _constants.VERTICAL_SCROLLABLE]);

exports["default"] = _default;

/***/ }),

/***/ 2852:
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = isTouchDevice;
function isTouchDevice() {
  return !!(typeof window !== 'undefined' && ('ontouchstart' in window || window.DocumentTouch && typeof document !== 'undefined' && document instanceof window.DocumentTouch)) || !!(typeof navigator !== 'undefined' && (navigator.maxTouchPoints || navigator.msMaxTouchPoints));
}
module.exports = exports['default'];

/***/ }),

/***/ 2853:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(0));

var _constants = __webpack_require__(2818);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _propTypes["default"].oneOf([_constants.ICON_BEFORE_POSITION, _constants.ICON_AFTER_POSITION]);

exports["default"] = _default;

/***/ }),

/***/ 2854:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isInclusivelyAfterDay;

var _moment = _interopRequireDefault(__webpack_require__(2));

var _isBeforeDay = _interopRequireDefault(__webpack_require__(2865));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function isInclusivelyAfterDay(a, b) {
  if (!_moment["default"].isMoment(a) || !_moment["default"].isMoment(b)) return false;
  return !(0, _isBeforeDay["default"])(a, b);
}

/***/ }),

/***/ 2861:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://www.ecma-international.org/ecma-262/6.0/#sec-ispropertykey

module.exports = function IsPropertyKey(argument) {
	return typeof argument === 'string' || typeof argument === 'symbol';
};


/***/ }),

/***/ 2862:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(2819);

var callBind = __webpack_require__(2885);

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.')) {
		return callBind(intrinsic);
	}
	return intrinsic;
};


/***/ }),

/***/ 2863:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(0));

var _constants = __webpack_require__(2818);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].oneOf([_constants.START_DATE, _constants.END_DATE])]);

exports["default"] = _default;

/***/ }),

/***/ 2864:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(0));

var _constants = __webpack_require__(2818);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _propTypes["default"].oneOf([_constants.INFO_POSITION_TOP, _constants.INFO_POSITION_BOTTOM, _constants.INFO_POSITION_BEFORE, _constants.INFO_POSITION_AFTER]);

exports["default"] = _default;

/***/ }),

/***/ 2865:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isBeforeDay;

var _moment = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function isBeforeDay(a, b) {
  if (!_moment["default"].isMoment(a) || !_moment["default"].isMoment(b)) return false;
  var aYear = a.year();
  var aMonth = a.month();
  var bYear = b.year();
  var bMonth = b.month();
  var isSameYear = aYear === bYear;
  var isSameMonth = aMonth === bMonth;
  if (isSameYear && isSameMonth) return a.date() < b.date();
  if (isSameYear) return aMonth < bMonth;
  return aYear < bYear;
}

/***/ }),

/***/ 2866:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CloseButton = function () {
  function CloseButton(props) {
    return _react["default"].createElement("svg", props, _react["default"].createElement("path", {
      fillRule: "evenodd",
      d: "M11.53.47a.75.75 0 0 0-1.061 0l-4.47 4.47L1.529.47A.75.75 0 1 0 .468 1.531l4.47 4.47-4.47 4.47a.75.75 0 1 0 1.061 1.061l4.47-4.47 4.47 4.47a.75.75 0 1 0 1.061-1.061l-4.47-4.47 4.47-4.47a.75.75 0 0 0 0-1.061z"
    }));
  }

  return CloseButton;
}();

CloseButton.defaultProps = {
  focusable: "false",
  viewBox: "0 0 12 12"
};
var _default = CloseButton;
exports["default"] = _default;

/***/ }),

/***/ 2872:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(3002);

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ 2873:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(0));

var _airbnbPropTypes = __webpack_require__(2820);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var _default = (0, _airbnbPropTypes.and)([_propTypes["default"].instanceOf(Set), function () {
  function modifiers(props, propName) {
    for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      rest[_key - 2] = arguments[_key];
    }

    var propValue = props[propName];
    var firstError;

    _toConsumableArray(propValue).some(function (v, i) {
      var _PropTypes$string;

      var fakePropName = "".concat(propName, ": index ").concat(i);
      firstError = (_PropTypes$string = _propTypes["default"].string).isRequired.apply(_PropTypes$string, [_defineProperty({}, fakePropName, v), fakePropName].concat(rest));
      return firstError != null;
    });

    return firstError == null ? null : firstError;
  }

  return modifiers;
}()], 'Modifiers (Set of Strings)');

exports["default"] = _default;

/***/ }),

/***/ 2874:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = toISODateString;

var _moment = _interopRequireDefault(__webpack_require__(2));

var _toMomentObject = _interopRequireDefault(__webpack_require__(2850));

var _constants = __webpack_require__(2818);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function toISODateString(date, currentFormat) {
  var dateObj = _moment["default"].isMoment(date) ? date : (0, _toMomentObject["default"])(date, currentFormat);
  if (!dateObj) return null;
  return dateObj.format(_constants.ISO_FORMAT);
}

/***/ }),

/***/ 2875:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEventListener", function() { return addEventListener; });
var CAN_USE_DOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

// Adapted from Modernizr
// https://github.com/Modernizr/Modernizr/blob/acb3f0d9/feature-detects/dom/passiveeventlisteners.js#L26-L37
function testPassiveEventListeners() {
  if (!CAN_USE_DOM) {
    return false;
  }

  if (!window.addEventListener || !window.removeEventListener || !Object.defineProperty) {
    return false;
  }

  var supportsPassiveOption = false;
  try {
    var opts = Object.defineProperty({}, 'passive', {
      // eslint-disable-next-line getter-return
      get: function () {
        function get() {
          supportsPassiveOption = true;
        }

        return get;
      }()
    });
    var noop = function noop() {};
    window.addEventListener('testPassiveEventSupport', noop, opts);
    window.removeEventListener('testPassiveEventSupport', noop, opts);
  } catch (e) {
    // do nothing
  }

  return supportsPassiveOption;
}

var memoized = void 0;

function canUsePassiveEventListeners() {
  if (memoized === undefined) {
    memoized = testPassiveEventListeners();
  }
  return memoized;
}

function normalizeEventOptions(eventOptions) {
  if (!eventOptions) {
    return undefined;
  }

  if (!canUsePassiveEventListeners()) {
    // If the browser does not support the passive option, then it is expecting
    // a boolean for the options argument to specify whether it should use
    // capture or not. In more modern browsers, this is passed via the `capture`
    // option, so let's just hoist that value up.
    return !!eventOptions.capture;
  }

  return eventOptions;
}

/* eslint-disable no-bitwise */

/**
 * Generate a unique key for any set of event options
 */
function eventOptionsKey(normalizedEventOptions) {
  if (!normalizedEventOptions) {
    return 0;
  }

  // If the browser does not support passive event listeners, the normalized
  // event options will be a boolean.
  if (normalizedEventOptions === true) {
    return 100;
  }

  // At this point, the browser supports passive event listeners, so we expect
  // the event options to be an object with possible properties of capture,
  // passive, and once.
  //
  // We want to consistently return the same value, regardless of the order of
  // these properties, so let's use binary maths to assign each property to a
  // bit, and then add those together (with an offset to account for the
  // booleans at the beginning of this function).
  var capture = normalizedEventOptions.capture << 0;
  var passive = normalizedEventOptions.passive << 1;
  var once = normalizedEventOptions.once << 2;
  return capture + passive + once;
}

function ensureCanMutateNextEventHandlers(eventHandlers) {
  if (eventHandlers.handlers === eventHandlers.nextHandlers) {
    // eslint-disable-next-line no-param-reassign
    eventHandlers.nextHandlers = eventHandlers.handlers.slice();
  }
}

function TargetEventHandlers(target) {
  this.target = target;
  this.events = {};
}

TargetEventHandlers.prototype.getEventHandlers = function () {
  function getEventHandlers(eventName, options) {
    var key = String(eventName) + ' ' + String(eventOptionsKey(options));

    if (!this.events[key]) {
      this.events[key] = {
        handlers: [],
        handleEvent: undefined
      };
      this.events[key].nextHandlers = this.events[key].handlers;
    }

    return this.events[key];
  }

  return getEventHandlers;
}();

TargetEventHandlers.prototype.handleEvent = function () {
  function handleEvent(eventName, options, event) {
    var eventHandlers = this.getEventHandlers(eventName, options);
    eventHandlers.handlers = eventHandlers.nextHandlers;
    eventHandlers.handlers.forEach(function (handler) {
      if (handler) {
        // We need to check for presence here because a handler function may
        // cause later handlers to get removed. This can happen if you for
        // instance have a waypoint that unmounts another waypoint as part of an
        // onEnter/onLeave handler.
        handler(event);
      }
    });
  }

  return handleEvent;
}();

TargetEventHandlers.prototype.add = function () {
  function add(eventName, listener, options) {
    var _this = this;

    // options has already been normalized at this point.
    var eventHandlers = this.getEventHandlers(eventName, options);

    ensureCanMutateNextEventHandlers(eventHandlers);

    if (eventHandlers.nextHandlers.length === 0) {
      eventHandlers.handleEvent = this.handleEvent.bind(this, eventName, options);

      this.target.addEventListener(eventName, eventHandlers.handleEvent, options);
    }

    eventHandlers.nextHandlers.push(listener);

    var isSubscribed = true;
    var unsubscribe = function () {
      function unsubscribe() {
        if (!isSubscribed) {
          return;
        }

        isSubscribed = false;

        ensureCanMutateNextEventHandlers(eventHandlers);
        var index = eventHandlers.nextHandlers.indexOf(listener);
        eventHandlers.nextHandlers.splice(index, 1);

        if (eventHandlers.nextHandlers.length === 0) {
          // All event handlers have been removed, so we want to remove the event
          // listener from the target node.

          if (_this.target) {
            // There can be a race condition where the target may no longer exist
            // when this function is called, e.g. when a React component is
            // unmounting. Guarding against this prevents the following error:
            //
            //   Cannot read property 'removeEventListener' of undefined
            _this.target.removeEventListener(eventName, eventHandlers.handleEvent, options);
          }

          eventHandlers.handleEvent = undefined;
        }
      }

      return unsubscribe;
    }();
    return unsubscribe;
  }

  return add;
}();

var EVENT_HANDLERS_KEY = '__consolidated_events_handlers__';

// eslint-disable-next-line import/prefer-default-export
function addEventListener(target, eventName, listener, options) {
  if (!target[EVENT_HANDLERS_KEY]) {
    // eslint-disable-next-line no-param-reassign
    target[EVENT_HANDLERS_KEY] = new TargetEventHandlers(target);
  }
  var normalizedEventOptions = normalizeEventOptions(options);
  return target[EVENT_HANDLERS_KEY].add(eventName, listener, normalizedEventOptions);
}




/***/ }),

/***/ 2876:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = toISOMonthString;

var _moment = _interopRequireDefault(__webpack_require__(2));

var _toMomentObject = _interopRequireDefault(__webpack_require__(2850));

var _constants = __webpack_require__(2818);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function toISOMonthString(date, currentFormat) {
  var dateObj = _moment["default"].isMoment(date) ? date : (0, _toMomentObject["default"])(date, currentFormat);
  if (!dateObj) return null;
  return dateObj.format(_constants.ISO_MONTH_FORMAT);
}

/***/ }),

/***/ 2877:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isAfterDay;

var _moment = _interopRequireDefault(__webpack_require__(2));

var _isBeforeDay = _interopRequireDefault(__webpack_require__(2865));

var _isSameDay = _interopRequireDefault(__webpack_require__(2849));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function isAfterDay(a, b) {
  if (!_moment["default"].isMoment(a) || !_moment["default"].isMoment(b)) return false;
  return !(0, _isBeforeDay["default"])(a, b) && !(0, _isSameDay["default"])(a, b);
}

/***/ }),

/***/ 2885:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(2872);

var GetIntrinsic = __webpack_require__(2819);

var $Function = GetIntrinsic('%Function%');
var $apply = $Function.apply;
var $call = $Function.call;

module.exports = function callBind() {
	return bind.apply($call, arguments);
};

module.exports.apply = function applyBind() {
	return bind.apply($apply, arguments);
};


/***/ }),

/***/ 2886:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(2819);

var $TypeError = GetIntrinsic('%TypeError%');

var inspect = __webpack_require__(2918);

var IsPropertyKey = __webpack_require__(2861);
var Type = __webpack_require__(2839);

/**
 * 7.3.1 Get (O, P) - https://ecma-international.org/ecma-262/6.0/#sec-get-o-p
 * 1. Assert: Type(O) is Object.
 * 2. Assert: IsPropertyKey(P) is true.
 * 3. Return O.[[Get]](P, O).
 */

module.exports = function Get(O, P) {
	// 7.3.1.1
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	// 7.3.1.2
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true, got ' + inspect(P));
	}
	// 7.3.1.3
	return O[P];
};


/***/ }),

/***/ 2887:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(2819);

var $Array = GetIntrinsic('%Array%');

// eslint-disable-next-line global-require
var toStr = !$Array.isArray && __webpack_require__(2862)('Object.prototype.toString');

// https://www.ecma-international.org/ecma-262/6.0/#sec-isarray

module.exports = $Array.isArray || function IsArray(argument) {
	return toStr(argument) === '[object Array]';
};


/***/ }),

/***/ 2888:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Number.isNaN || function isNaN(a) {
	return a !== a;
};


/***/ }),

/***/ 2889:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PureCalendarDay = void 0;

var _reactAddonsShallowCompare = _interopRequireDefault(__webpack_require__(944));

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(0));

var _reactMomentProptypes = _interopRequireDefault(__webpack_require__(2837));

var _airbnbPropTypes = __webpack_require__(2820);

var _reactWithStyles = __webpack_require__(2827);

var _moment = _interopRequireDefault(__webpack_require__(2));

var _defaultPhrases = __webpack_require__(2821);

var _getPhrasePropTypes = _interopRequireDefault(__webpack_require__(2823));

var _getCalendarDaySettings = _interopRequireDefault(__webpack_require__(2935));

var _ModifiersShape = _interopRequireDefault(__webpack_require__(2873));

var _constants = __webpack_require__(2818);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function () { function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); } return _getPrototypeOf; }(); return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function () { function _setPrototypeOf(o, p) { o.__proto__ = p; return o; } return _setPrototypeOf; }(); return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var propTypes =  false ? undefined : {};
var defaultProps = {
  day: (0, _moment["default"])(),
  daySize: _constants.DAY_SIZE,
  isOutsideDay: false,
  modifiers: new Set(),
  isFocused: false,
  tabIndex: -1,
  onDayClick: function () {
    function onDayClick() {}

    return onDayClick;
  }(),
  onDayMouseEnter: function () {
    function onDayMouseEnter() {}

    return onDayMouseEnter;
  }(),
  onDayMouseLeave: function () {
    function onDayMouseLeave() {}

    return onDayMouseLeave;
  }(),
  renderDayContents: null,
  ariaLabelFormat: 'dddd, LL',
  // internationalization
  phrases: _defaultPhrases.CalendarDayPhrases
};

var CalendarDay =
/*#__PURE__*/
function (_ref) {
  _inherits(CalendarDay, _ref);

  _createClass(CalendarDay, [{
    key: !_react["default"].PureComponent && "shouldComponentUpdate",
    value: function () {
      function value(nextProps, nextState) {
        return (0, _reactAddonsShallowCompare["default"])(this, nextProps, nextState);
      }

      return value;
    }()
  }]);

  function CalendarDay() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CalendarDay);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CalendarDay)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.setButtonRef = _this.setButtonRef.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(CalendarDay, [{
    key: "componentDidUpdate",
    value: function () {
      function componentDidUpdate(prevProps) {
        var _this$props = this.props,
            isFocused = _this$props.isFocused,
            tabIndex = _this$props.tabIndex;

        if (tabIndex === 0) {
          if (isFocused || tabIndex !== prevProps.tabIndex) {
            this.buttonRef.focus();
          }
        }
      }

      return componentDidUpdate;
    }()
  }, {
    key: "onDayClick",
    value: function () {
      function onDayClick(day, e) {
        var onDayClick = this.props.onDayClick;
        onDayClick(day, e);
      }

      return onDayClick;
    }()
  }, {
    key: "onDayMouseEnter",
    value: function () {
      function onDayMouseEnter(day, e) {
        var onDayMouseEnter = this.props.onDayMouseEnter;
        onDayMouseEnter(day, e);
      }

      return onDayMouseEnter;
    }()
  }, {
    key: "onDayMouseLeave",
    value: function () {
      function onDayMouseLeave(day, e) {
        var onDayMouseLeave = this.props.onDayMouseLeave;
        onDayMouseLeave(day, e);
      }

      return onDayMouseLeave;
    }()
  }, {
    key: "onKeyDown",
    value: function () {
      function onKeyDown(day, e) {
        var onDayClick = this.props.onDayClick;
        var key = e.key;

        if (key === 'Enter' || key === ' ') {
          onDayClick(day, e);
        }
      }

      return onKeyDown;
    }()
  }, {
    key: "setButtonRef",
    value: function () {
      function setButtonRef(ref) {
        this.buttonRef = ref;
      }

      return setButtonRef;
    }()
  }, {
    key: "render",
    value: function () {
      function render() {
        var _this2 = this;

        var _this$props2 = this.props,
            day = _this$props2.day,
            ariaLabelFormat = _this$props2.ariaLabelFormat,
            daySize = _this$props2.daySize,
            isOutsideDay = _this$props2.isOutsideDay,
            modifiers = _this$props2.modifiers,
            renderDayContents = _this$props2.renderDayContents,
            tabIndex = _this$props2.tabIndex,
            styles = _this$props2.styles,
            phrases = _this$props2.phrases;
        if (!day) return _react["default"].createElement("td", null);

        var _getCalendarDaySettin = (0, _getCalendarDaySettings["default"])(day, ariaLabelFormat, daySize, modifiers, phrases),
            daySizeStyles = _getCalendarDaySettin.daySizeStyles,
            useDefaultCursor = _getCalendarDaySettin.useDefaultCursor,
            selected = _getCalendarDaySettin.selected,
            hoveredSpan = _getCalendarDaySettin.hoveredSpan,
            isOutsideRange = _getCalendarDaySettin.isOutsideRange,
            ariaLabel = _getCalendarDaySettin.ariaLabel;

        return _react["default"].createElement("td", _extends({}, (0, _reactWithStyles.css)(styles.CalendarDay, useDefaultCursor && styles.CalendarDay__defaultCursor, styles.CalendarDay__default, isOutsideDay && styles.CalendarDay__outside, modifiers.has('today') && styles.CalendarDay__today, modifiers.has('first-day-of-week') && styles.CalendarDay__firstDayOfWeek, modifiers.has('last-day-of-week') && styles.CalendarDay__lastDayOfWeek, modifiers.has('hovered-offset') && styles.CalendarDay__hovered_offset, modifiers.has('highlighted-calendar') && styles.CalendarDay__highlighted_calendar, modifiers.has('blocked-minimum-nights') && styles.CalendarDay__blocked_minimum_nights, modifiers.has('blocked-calendar') && styles.CalendarDay__blocked_calendar, hoveredSpan && styles.CalendarDay__hovered_span, modifiers.has('selected-span') && styles.CalendarDay__selected_span, modifiers.has('last-in-range') && styles.CalendarDay__last_in_range, modifiers.has('selected-start') && styles.CalendarDay__selected_start, modifiers.has('selected-end') && styles.CalendarDay__selected_end, selected && styles.CalendarDay__selected, isOutsideRange && styles.CalendarDay__blocked_out_of_range, daySizeStyles), {
          role: "button" // eslint-disable-line jsx-a11y/no-noninteractive-element-to-interactive-role
          ,
          ref: this.setButtonRef,
          "aria-disabled": modifiers.has('blocked'),
          "aria-label": ariaLabel,
          onMouseEnter: function () {
            function onMouseEnter(e) {
              _this2.onDayMouseEnter(day, e);
            }

            return onMouseEnter;
          }(),
          onMouseLeave: function () {
            function onMouseLeave(e) {
              _this2.onDayMouseLeave(day, e);
            }

            return onMouseLeave;
          }(),
          onMouseUp: function () {
            function onMouseUp(e) {
              e.currentTarget.blur();
            }

            return onMouseUp;
          }(),
          onClick: function () {
            function onClick(e) {
              _this2.onDayClick(day, e);
            }

            return onClick;
          }(),
          onKeyDown: function () {
            function onKeyDown(e) {
              _this2.onKeyDown(day, e);
            }

            return onKeyDown;
          }(),
          tabIndex: tabIndex
        }), renderDayContents ? renderDayContents(day, modifiers) : day.format('D'));
      }

      return render;
    }()
  }]);

  return CalendarDay;
}(_react["default"].PureComponent || _react["default"].Component);

exports.PureCalendarDay = CalendarDay;
CalendarDay.propTypes =  false ? undefined : {};
CalendarDay.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref2) {
  var _ref2$reactDates = _ref2.reactDates,
      color = _ref2$reactDates.color,
      font = _ref2$reactDates.font;
  return {
    CalendarDay: {
      boxSizing: 'border-box',
      cursor: 'pointer',
      fontSize: font.size,
      textAlign: 'center',
      ':active': {
        outline: 0
      }
    },
    CalendarDay__defaultCursor: {
      cursor: 'default'
    },
    CalendarDay__default: {
      border: "1px solid ".concat(color.core.borderLight),
      color: color.text,
      background: color.background,
      ':hover': {
        background: color.core.borderLight,
        border: "1px solid ".concat(color.core.borderLight),
        color: 'inherit'
      }
    },
    CalendarDay__hovered_offset: {
      background: color.core.borderBright,
      border: "1px double ".concat(color.core.borderLight),
      color: 'inherit'
    },
    CalendarDay__outside: {
      border: 0,
      background: color.outside.backgroundColor,
      color: color.outside.color,
      ':hover': {
        border: 0
      }
    },
    CalendarDay__blocked_minimum_nights: {
      background: color.minimumNights.backgroundColor,
      border: "1px solid ".concat(color.minimumNights.borderColor),
      color: color.minimumNights.color,
      ':hover': {
        background: color.minimumNights.backgroundColor_hover,
        color: color.minimumNights.color_active
      },
      ':active': {
        background: color.minimumNights.backgroundColor_active,
        color: color.minimumNights.color_active
      }
    },
    CalendarDay__highlighted_calendar: {
      background: color.highlighted.backgroundColor,
      color: color.highlighted.color,
      ':hover': {
        background: color.highlighted.backgroundColor_hover,
        color: color.highlighted.color_active
      },
      ':active': {
        background: color.highlighted.backgroundColor_active,
        color: color.highlighted.color_active
      }
    },
    CalendarDay__selected_span: {
      background: color.selectedSpan.backgroundColor,
      border: "1px double ".concat(color.selectedSpan.borderColor),
      color: color.selectedSpan.color,
      ':hover': {
        background: color.selectedSpan.backgroundColor_hover,
        border: "1px double ".concat(color.selectedSpan.borderColor),
        color: color.selectedSpan.color_active
      },
      ':active': {
        background: color.selectedSpan.backgroundColor_active,
        border: "1px double ".concat(color.selectedSpan.borderColor),
        color: color.selectedSpan.color_active
      }
    },
    CalendarDay__last_in_range: {
      borderStyle: 'solid',
      ':hover': {
        borderStyle: 'solid'
      }
    },
    CalendarDay__selected: {
      background: color.selected.backgroundColor,
      border: "1px double ".concat(color.selected.borderColor),
      color: color.selected.color,
      ':hover': {
        background: color.selected.backgroundColor_hover,
        border: "1px double ".concat(color.selected.borderColor),
        color: color.selected.color_active
      },
      ':active': {
        background: color.selected.backgroundColor_active,
        border: "1px double ".concat(color.selected.borderColor),
        color: color.selected.color_active
      }
    },
    CalendarDay__hovered_span: {
      background: color.hoveredSpan.backgroundColor,
      border: "1px double ".concat(color.hoveredSpan.borderColor),
      color: color.hoveredSpan.color,
      ':hover': {
        background: color.hoveredSpan.backgroundColor_hover,
        border: "1px double ".concat(color.hoveredSpan.borderColor),
        color: color.hoveredSpan.color_active
      },
      ':active': {
        background: color.hoveredSpan.backgroundColor_active,
        border: "1px double ".concat(color.hoveredSpan.borderColor),
        color: color.hoveredSpan.color_active
      }
    },
    CalendarDay__blocked_calendar: {
      background: color.blocked_calendar.backgroundColor,
      border: "1px solid ".concat(color.blocked_calendar.borderColor),
      color: color.blocked_calendar.color,
      ':hover': {
        background: color.blocked_calendar.backgroundColor_hover,
        border: "1px solid ".concat(color.blocked_calendar.borderColor),
        color: color.blocked_calendar.color_active
      },
      ':active': {
        background: color.blocked_calendar.backgroundColor_active,
        border: "1px solid ".concat(color.blocked_calendar.borderColor),
        color: color.blocked_calendar.color_active
      }
    },
    CalendarDay__blocked_out_of_range: {
      background: color.blocked_out_of_range.backgroundColor,
      border: "1px solid ".concat(color.blocked_out_of_range.borderColor),
      color: color.blocked_out_of_range.color,
      ':hover': {
        background: color.blocked_out_of_range.backgroundColor_hover,
        border: "1px solid ".concat(color.blocked_out_of_range.borderColor),
        color: color.blocked_out_of_range.color_active
      },
      ':active': {
        background: color.blocked_out_of_range.backgroundColor_active,
        border: "1px solid ".concat(color.blocked_out_of_range.borderColor),
        color: color.blocked_out_of_range.color_active
      }
    },
    CalendarDay__selected_start: {},
    CalendarDay__selected_end: {},
    CalendarDay__today: {},
    CalendarDay__firstDayOfWeek: {},
    CalendarDay__lastDayOfWeek: {}
  };
}, {
  pureComponent: typeof _react["default"].PureComponent !== 'undefined'
})(CalendarDay);

exports["default"] = _default;

/***/ }),

/***/ 2890:
/***/ (function(module, exports, __webpack_require__) {

// eslint-disable-next-line import/no-unresolved
module.exports = __webpack_require__(3058);


/***/ }),

/***/ 2891:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(2838);

var implementation = __webpack_require__(2941);
var getPolyfill = __webpack_require__(2942);
var shim = __webpack_require__(3059);

var polyfill = getPolyfill();

define(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ 2892:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getInputHeight;

/* eslint-disable camelcase */
function getPadding(vertical, top, bottom) {
  var isTopDefined = typeof top === 'number';
  var isBottomDefined = typeof bottom === 'number';
  var isVerticalDefined = typeof vertical === 'number';

  if (isTopDefined && isBottomDefined) {
    return top + bottom;
  }

  if (isTopDefined && isVerticalDefined) {
    return top + vertical;
  }

  if (isTopDefined) {
    return top;
  }

  if (isBottomDefined && isVerticalDefined) {
    return bottom + vertical;
  }

  if (isBottomDefined) {
    return bottom;
  }

  if (isVerticalDefined) {
    return 2 * vertical;
  }

  return 0;
}

function getInputHeight(_ref, small) {
  var _ref$font$input = _ref.font.input,
      lineHeight = _ref$font$input.lineHeight,
      lineHeight_small = _ref$font$input.lineHeight_small,
      _ref$spacing = _ref.spacing,
      inputPadding = _ref$spacing.inputPadding,
      displayTextPaddingVertical = _ref$spacing.displayTextPaddingVertical,
      displayTextPaddingTop = _ref$spacing.displayTextPaddingTop,
      displayTextPaddingBottom = _ref$spacing.displayTextPaddingBottom,
      displayTextPaddingVertical_small = _ref$spacing.displayTextPaddingVertical_small,
      displayTextPaddingTop_small = _ref$spacing.displayTextPaddingTop_small,
      displayTextPaddingBottom_small = _ref$spacing.displayTextPaddingBottom_small;
  var calcLineHeight = small ? lineHeight_small : lineHeight;
  var padding = small ? getPadding(displayTextPaddingVertical_small, displayTextPaddingTop_small, displayTextPaddingBottom_small) : getPadding(displayTextPaddingVertical, displayTextPaddingTop, displayTextPaddingBottom);
  return parseInt(calcLineHeight, 10) + 2 * inputPadding + padding;
}

/***/ }),

/***/ 2893:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = toLocalizedDateString;

var _moment = _interopRequireDefault(__webpack_require__(2));

var _toMomentObject = _interopRequireDefault(__webpack_require__(2850));

var _constants = __webpack_require__(2818);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function toLocalizedDateString(date, currentFormat) {
  var dateObj = _moment["default"].isMoment(date) ? date : (0, _toMomentObject["default"])(date, currentFormat);
  if (!dateObj) return null;
  return dateObj.format(_constants.DISPLAY_FORMAT);
}

/***/ }),

/***/ 2894:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isDayVisible;

var _moment = _interopRequireDefault(__webpack_require__(2));

var _isBeforeDay = _interopRequireDefault(__webpack_require__(2865));

var _isAfterDay = _interopRequireDefault(__webpack_require__(2877));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function isDayVisible(day, month, numberOfMonths, enableOutsideDays) {
  if (!_moment["default"].isMoment(day)) return false;
  var firstDayOfFirstMonth = month.clone().startOf('month');
  if (enableOutsideDays) firstDayOfFirstMonth = firstDayOfFirstMonth.startOf('week');
  if ((0, _isBeforeDay["default"])(day, firstDayOfFirstMonth)) return false;
  var lastDayOfLastMonth = month.clone().add(numberOfMonths - 1, 'months').endOf('month');
  if (enableOutsideDays) lastDayOfLastMonth = lastDayOfLastMonth.endOf('week');
  return !(0, _isAfterDay["default"])(day, lastDayOfLastMonth);
}

/***/ }),

/***/ 2895:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PureDayPicker = exports.defaultProps = void 0;

var _reactAddonsShallowCompare = _interopRequireDefault(__webpack_require__(944));

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(0));

var _airbnbPropTypes = __webpack_require__(2820);

var _reactWithStyles = __webpack_require__(2827);

var _moment = _interopRequireDefault(__webpack_require__(2));

var _throttle = _interopRequireDefault(__webpack_require__(954));

var _isTouchDevice = _interopRequireDefault(__webpack_require__(2852));

var _reactOutsideClickHandler = _interopRequireDefault(__webpack_require__(2890));

var _defaultPhrases = __webpack_require__(2821);

var _getPhrasePropTypes = _interopRequireDefault(__webpack_require__(2823));

var _noflip = _interopRequireDefault(__webpack_require__(2842));

var _CalendarMonthGrid = _interopRequireDefault(__webpack_require__(2938));

var _DayPickerNavigation = _interopRequireDefault(__webpack_require__(3063));

var _DayPickerKeyboardShortcuts = _interopRequireWildcard(__webpack_require__(3066));

var _getNumberOfCalendarMonthWeeks = _interopRequireDefault(__webpack_require__(3068));

var _getCalendarMonthWidth = _interopRequireDefault(__webpack_require__(2939));

var _calculateDimension = _interopRequireDefault(__webpack_require__(2937));

var _getActiveElement = _interopRequireDefault(__webpack_require__(3069));

var _isDayVisible = _interopRequireDefault(__webpack_require__(2894));

var _ModifiersShape = _interopRequireDefault(__webpack_require__(2873));

var _ScrollableOrientationShape = _interopRequireDefault(__webpack_require__(2851));

var _DayOfWeekShape = _interopRequireDefault(__webpack_require__(2843));

var _CalendarInfoPositionShape = _interopRequireDefault(__webpack_require__(2864));

var _constants = __webpack_require__(2818);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function () { function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); } return _getPrototypeOf; }(); return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function () { function _setPrototypeOf(o, p) { o.__proto__ = p; return o; } return _setPrototypeOf; }(); return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MONTH_PADDING = 23;
var PREV_TRANSITION = 'prev';
var NEXT_TRANSITION = 'next';
var MONTH_SELECTION_TRANSITION = 'month_selection';
var YEAR_SELECTION_TRANSITION = 'year_selection';
var propTypes =  false ? undefined : {};
var defaultProps = {
  // calendar presentation props
  enableOutsideDays: false,
  numberOfMonths: 2,
  orientation: _constants.HORIZONTAL_ORIENTATION,
  withPortal: false,
  onOutsideClick: function () {
    function onOutsideClick() {}

    return onOutsideClick;
  }(),
  hidden: false,
  initialVisibleMonth: function () {
    function initialVisibleMonth() {
      return (0, _moment["default"])();
    }

    return initialVisibleMonth;
  }(),
  firstDayOfWeek: null,
  renderCalendarInfo: null,
  calendarInfoPosition: _constants.INFO_POSITION_BOTTOM,
  hideKeyboardShortcutsPanel: false,
  daySize: _constants.DAY_SIZE,
  isRTL: false,
  verticalHeight: null,
  noBorder: false,
  transitionDuration: undefined,
  verticalBorderSpacing: undefined,
  horizontalMonthPadding: 13,
  // navigation props
  disablePrev: false,
  disableNext: false,
  navPrev: null,
  navNext: null,
  noNavButtons: false,
  onPrevMonthClick: function () {
    function onPrevMonthClick() {}

    return onPrevMonthClick;
  }(),
  onNextMonthClick: function () {
    function onNextMonthClick() {}

    return onNextMonthClick;
  }(),
  onMonthChange: function () {
    function onMonthChange() {}

    return onMonthChange;
  }(),
  onYearChange: function () {
    function onYearChange() {}

    return onYearChange;
  }(),
  onMultiplyScrollableMonths: function () {
    function onMultiplyScrollableMonths() {}

    return onMultiplyScrollableMonths;
  }(),
  // month props
  renderMonthText: null,
  renderMonthElement: null,
  // day props
  modifiers: {},
  renderCalendarDay: undefined,
  renderDayContents: null,
  onDayClick: function () {
    function onDayClick() {}

    return onDayClick;
  }(),
  onDayMouseEnter: function () {
    function onDayMouseEnter() {}

    return onDayMouseEnter;
  }(),
  onDayMouseLeave: function () {
    function onDayMouseLeave() {}

    return onDayMouseLeave;
  }(),
  // accessibility props
  isFocused: false,
  getFirstFocusableDay: null,
  onBlur: function () {
    function onBlur() {}

    return onBlur;
  }(),
  showKeyboardShortcuts: false,
  onTab: function () {
    function onTab() {}

    return onTab;
  }(),
  onShiftTab: function () {
    function onShiftTab() {}

    return onShiftTab;
  }(),
  // internationalization
  monthFormat: 'MMMM YYYY',
  weekDayFormat: 'dd',
  phrases: _defaultPhrases.DayPickerPhrases,
  dayAriaLabelFormat: undefined
};
exports.defaultProps = defaultProps;

var DayPicker =
/*#__PURE__*/
function (_ref) {
  _inherits(DayPicker, _ref);

  _createClass(DayPicker, [{
    key: !_react["default"].PureComponent && "shouldComponentUpdate",
    value: function () {
      function value(nextProps, nextState) {
        return (0, _reactAddonsShallowCompare["default"])(this, nextProps, nextState);
      }

      return value;
    }()
  }]);

  function DayPicker(props) {
    var _this;

    _classCallCheck(this, DayPicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DayPicker).call(this, props));
    var currentMonth = props.hidden ? (0, _moment["default"])() : props.initialVisibleMonth();
    var focusedDate = currentMonth.clone().startOf('month');

    if (props.getFirstFocusableDay) {
      focusedDate = props.getFirstFocusableDay(currentMonth);
    }

    var horizontalMonthPadding = props.horizontalMonthPadding;
    var translationValue = props.isRTL && _this.isHorizontal() ? -(0, _getCalendarMonthWidth["default"])(props.daySize, horizontalMonthPadding) : 0;
    _this.hasSetInitialVisibleMonth = !props.hidden;
    _this.state = {
      currentMonth: currentMonth,
      monthTransition: null,
      translationValue: translationValue,
      scrollableMonthMultiple: 1,
      calendarMonthWidth: (0, _getCalendarMonthWidth["default"])(props.daySize, horizontalMonthPadding),
      focusedDate: !props.hidden || props.isFocused ? focusedDate : null,
      nextFocusedDate: null,
      showKeyboardShortcuts: props.showKeyboardShortcuts,
      onKeyboardShortcutsPanelClose: function () {
        function onKeyboardShortcutsPanelClose() {}

        return onKeyboardShortcutsPanelClose;
      }(),
      isTouchDevice: (0, _isTouchDevice["default"])(),
      withMouseInteractions: true,
      calendarInfoWidth: 0,
      monthTitleHeight: null,
      hasSetHeight: false
    };

    _this.setCalendarMonthWeeks(currentMonth);

    _this.calendarMonthGridHeight = 0;
    _this.setCalendarInfoWidthTimeout = null;
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.throttledKeyDown = (0, _throttle["default"])(_this.onFinalKeyDown, 200, {
      trailing: false
    });
    _this.onPrevMonthClick = _this.onPrevMonthClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onPrevMonthTransition = _this.onPrevMonthTransition.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onNextMonthClick = _this.onNextMonthClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onNextMonthTransition = _this.onNextMonthTransition.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onMonthChange = _this.onMonthChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onYearChange = _this.onYearChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.multiplyScrollableMonths = _this.multiplyScrollableMonths.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.updateStateAfterMonthTransition = _this.updateStateAfterMonthTransition.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.openKeyboardShortcutsPanel = _this.openKeyboardShortcutsPanel.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.closeKeyboardShortcutsPanel = _this.closeKeyboardShortcutsPanel.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setCalendarInfoRef = _this.setCalendarInfoRef.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setContainerRef = _this.setContainerRef.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setTransitionContainerRef = _this.setTransitionContainerRef.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setMonthTitleHeight = _this.setMonthTitleHeight.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(DayPicker, [{
    key: "componentDidMount",
    value: function () {
      function componentDidMount() {
        var currentMonth = this.state.currentMonth;

        if (this.calendarInfo) {
          this.setState({
            isTouchDevice: (0, _isTouchDevice["default"])(),
            calendarInfoWidth: (0, _calculateDimension["default"])(this.calendarInfo, 'width', true, true)
          });
        } else {
          this.setState({
            isTouchDevice: (0, _isTouchDevice["default"])()
          });
        }

        this.setCalendarMonthWeeks(currentMonth);
      }

      return componentDidMount;
    }()
  }, {
    key: "componentWillReceiveProps",
    value: function () {
      function componentWillReceiveProps(nextProps) {
        var hidden = nextProps.hidden,
            isFocused = nextProps.isFocused,
            showKeyboardShortcuts = nextProps.showKeyboardShortcuts,
            onBlur = nextProps.onBlur,
            renderMonthText = nextProps.renderMonthText,
            horizontalMonthPadding = nextProps.horizontalMonthPadding;
        var currentMonth = this.state.currentMonth;

        if (!hidden) {
          if (!this.hasSetInitialVisibleMonth) {
            this.hasSetInitialVisibleMonth = true;
            this.setState({
              currentMonth: nextProps.initialVisibleMonth()
            });
          }
        }

        var _this$props = this.props,
            daySize = _this$props.daySize,
            prevIsFocused = _this$props.isFocused,
            prevRenderMonthText = _this$props.renderMonthText;

        if (nextProps.daySize !== daySize) {
          this.setState({
            calendarMonthWidth: (0, _getCalendarMonthWidth["default"])(nextProps.daySize, horizontalMonthPadding)
          });
        }

        if (isFocused !== prevIsFocused) {
          if (isFocused) {
            var focusedDate = this.getFocusedDay(currentMonth);
            var onKeyboardShortcutsPanelClose = this.state.onKeyboardShortcutsPanelClose;

            if (nextProps.showKeyboardShortcuts) {
              // the ? shortcut came from the input and we should return input there once it is close
              onKeyboardShortcutsPanelClose = onBlur;
            }

            this.setState({
              showKeyboardShortcuts: showKeyboardShortcuts,
              onKeyboardShortcutsPanelClose: onKeyboardShortcutsPanelClose,
              focusedDate: focusedDate,
              withMouseInteractions: false
            });
          } else {
            this.setState({
              focusedDate: null
            });
          }
        }

        if (renderMonthText !== prevRenderMonthText) {
          this.setState({
            monthTitleHeight: null
          });
        }
      }

      return componentWillReceiveProps;
    }()
  }, {
    key: "componentWillUpdate",
    value: function () {
      function componentWillUpdate() {
        var _this2 = this;

        var transitionDuration = this.props.transitionDuration; // Calculating the dimensions trigger a DOM repaint which
        // breaks the CSS transition.
        // The setTimeout will wait until the transition ends.

        if (this.calendarInfo) {
          this.setCalendarInfoWidthTimeout = setTimeout(function () {
            var calendarInfoWidth = _this2.state.calendarInfoWidth;
            var calendarInfoPanelWidth = (0, _calculateDimension["default"])(_this2.calendarInfo, 'width', true, true);

            if (calendarInfoWidth !== calendarInfoPanelWidth) {
              _this2.setState({
                calendarInfoWidth: calendarInfoPanelWidth
              });
            }
          }, transitionDuration);
        }
      }

      return componentWillUpdate;
    }()
  }, {
    key: "componentDidUpdate",
    value: function () {
      function componentDidUpdate(prevProps) {
        var _this$props2 = this.props,
            orientation = _this$props2.orientation,
            daySize = _this$props2.daySize,
            isFocused = _this$props2.isFocused,
            numberOfMonths = _this$props2.numberOfMonths;
        var _this$state = this.state,
            focusedDate = _this$state.focusedDate,
            monthTitleHeight = _this$state.monthTitleHeight;

        if (this.isHorizontal() && (orientation !== prevProps.orientation || daySize !== prevProps.daySize)) {
          var visibleCalendarWeeks = this.calendarMonthWeeks.slice(1, numberOfMonths + 1);
          var calendarMonthWeeksHeight = Math.max.apply(Math, [0].concat(_toConsumableArray(visibleCalendarWeeks))) * (daySize - 1);
          var newMonthHeight = monthTitleHeight + calendarMonthWeeksHeight + 1;
          this.adjustDayPickerHeight(newMonthHeight);
        }

        if (!prevProps.isFocused && isFocused && !focusedDate) {
          this.container.focus();
        }
      }

      return componentDidUpdate;
    }()
  }, {
    key: "componentWillUnmount",
    value: function () {
      function componentWillUnmount() {
        clearTimeout(this.setCalendarInfoWidthTimeout);
      }

      return componentWillUnmount;
    }()
  }, {
    key: "onKeyDown",
    value: function () {
      function onKeyDown(e) {
        e.stopPropagation();

        if (!_constants.MODIFIER_KEY_NAMES.has(e.key)) {
          this.throttledKeyDown(e);
        }
      }

      return onKeyDown;
    }()
  }, {
    key: "onFinalKeyDown",
    value: function () {
      function onFinalKeyDown(e) {
        this.setState({
          withMouseInteractions: false
        });
        var _this$props3 = this.props,
            onBlur = _this$props3.onBlur,
            onTab = _this$props3.onTab,
            onShiftTab = _this$props3.onShiftTab,
            isRTL = _this$props3.isRTL;
        var _this$state2 = this.state,
            focusedDate = _this$state2.focusedDate,
            showKeyboardShortcuts = _this$state2.showKeyboardShortcuts;
        if (!focusedDate) return;
        var newFocusedDate = focusedDate.clone();
        var didTransitionMonth = false; // focus might be anywhere when the keyboard shortcuts panel is opened so we want to
        // return it to wherever it was before when the panel was opened

        var activeElement = (0, _getActiveElement["default"])();

        var onKeyboardShortcutsPanelClose = function () {
          function onKeyboardShortcutsPanelClose() {
            if (activeElement) activeElement.focus();
          }

          return onKeyboardShortcutsPanelClose;
        }();

        switch (e.key) {
          case 'ArrowUp':
            e.preventDefault();
            newFocusedDate.subtract(1, 'week');
            didTransitionMonth = this.maybeTransitionPrevMonth(newFocusedDate);
            break;

          case 'ArrowLeft':
            e.preventDefault();

            if (isRTL) {
              newFocusedDate.add(1, 'day');
            } else {
              newFocusedDate.subtract(1, 'day');
            }

            didTransitionMonth = this.maybeTransitionPrevMonth(newFocusedDate);
            break;

          case 'Home':
            e.preventDefault();
            newFocusedDate.startOf('week');
            didTransitionMonth = this.maybeTransitionPrevMonth(newFocusedDate);
            break;

          case 'PageUp':
            e.preventDefault();
            newFocusedDate.subtract(1, 'month');
            didTransitionMonth = this.maybeTransitionPrevMonth(newFocusedDate);
            break;

          case 'ArrowDown':
            e.preventDefault();
            newFocusedDate.add(1, 'week');
            didTransitionMonth = this.maybeTransitionNextMonth(newFocusedDate);
            break;

          case 'ArrowRight':
            e.preventDefault();

            if (isRTL) {
              newFocusedDate.subtract(1, 'day');
            } else {
              newFocusedDate.add(1, 'day');
            }

            didTransitionMonth = this.maybeTransitionNextMonth(newFocusedDate);
            break;

          case 'End':
            e.preventDefault();
            newFocusedDate.endOf('week');
            didTransitionMonth = this.maybeTransitionNextMonth(newFocusedDate);
            break;

          case 'PageDown':
            e.preventDefault();
            newFocusedDate.add(1, 'month');
            didTransitionMonth = this.maybeTransitionNextMonth(newFocusedDate);
            break;

          case '?':
            this.openKeyboardShortcutsPanel(onKeyboardShortcutsPanelClose);
            break;

          case 'Escape':
            if (showKeyboardShortcuts) {
              this.closeKeyboardShortcutsPanel();
            } else {
              onBlur(e);
            }

            break;

          case 'Tab':
            if (e.shiftKey) {
              onShiftTab();
            } else {
              onTab(e);
            }

            break;

          default:
            break;
        } // If there was a month transition, do not update the focused date until the transition has
        // completed. Otherwise, attempting to focus on a DOM node may interrupt the CSS animation. If
        // didTransitionMonth is true, the focusedDate gets updated in #updateStateAfterMonthTransition


        if (!didTransitionMonth) {
          this.setState({
            focusedDate: newFocusedDate
          });
        }
      }

      return onFinalKeyDown;
    }()
  }, {
    key: "onPrevMonthClick",
    value: function () {
      function onPrevMonthClick(e) {
        if (e) e.preventDefault();
        this.onPrevMonthTransition();
      }

      return onPrevMonthClick;
    }()
  }, {
    key: "onPrevMonthTransition",
    value: function () {
      function onPrevMonthTransition(nextFocusedDate) {
        var _this$props4 = this.props,
            daySize = _this$props4.daySize,
            isRTL = _this$props4.isRTL,
            numberOfMonths = _this$props4.numberOfMonths;
        var _this$state3 = this.state,
            calendarMonthWidth = _this$state3.calendarMonthWidth,
            monthTitleHeight = _this$state3.monthTitleHeight;
        var translationValue;

        if (this.isVertical()) {
          var calendarMonthWeeksHeight = this.calendarMonthWeeks[0] * (daySize - 1);
          translationValue = monthTitleHeight + calendarMonthWeeksHeight + 1;
        } else if (this.isHorizontal()) {
          translationValue = calendarMonthWidth;

          if (isRTL) {
            translationValue = -2 * calendarMonthWidth;
          }

          var visibleCalendarWeeks = this.calendarMonthWeeks.slice(0, numberOfMonths);

          var _calendarMonthWeeksHeight = Math.max.apply(Math, [0].concat(_toConsumableArray(visibleCalendarWeeks))) * (daySize - 1);

          var newMonthHeight = monthTitleHeight + _calendarMonthWeeksHeight + 1;
          this.adjustDayPickerHeight(newMonthHeight);
        }

        this.setState({
          monthTransition: PREV_TRANSITION,
          translationValue: translationValue,
          focusedDate: null,
          nextFocusedDate: nextFocusedDate
        });
      }

      return onPrevMonthTransition;
    }()
  }, {
    key: "onMonthChange",
    value: function () {
      function onMonthChange(currentMonth) {
        this.setCalendarMonthWeeks(currentMonth);
        this.calculateAndSetDayPickerHeight(); // Translation value is a hack to force an invisible transition that
        // properly rerenders the CalendarMonthGrid

        this.setState({
          monthTransition: MONTH_SELECTION_TRANSITION,
          translationValue: 0.00001,
          focusedDate: null,
          nextFocusedDate: currentMonth,
          currentMonth: currentMonth
        });
      }

      return onMonthChange;
    }()
  }, {
    key: "onYearChange",
    value: function () {
      function onYearChange(currentMonth) {
        this.setCalendarMonthWeeks(currentMonth);
        this.calculateAndSetDayPickerHeight(); // Translation value is a hack to force an invisible transition that
        // properly rerenders the CalendarMonthGrid

        this.setState({
          monthTransition: YEAR_SELECTION_TRANSITION,
          translationValue: 0.0001,
          focusedDate: null,
          nextFocusedDate: currentMonth,
          currentMonth: currentMonth
        });
      }

      return onYearChange;
    }()
  }, {
    key: "onNextMonthClick",
    value: function () {
      function onNextMonthClick(e) {
        if (e) e.preventDefault();
        this.onNextMonthTransition();
      }

      return onNextMonthClick;
    }()
  }, {
    key: "onNextMonthTransition",
    value: function () {
      function onNextMonthTransition(nextFocusedDate) {
        var _this$props5 = this.props,
            isRTL = _this$props5.isRTL,
            numberOfMonths = _this$props5.numberOfMonths,
            daySize = _this$props5.daySize;
        var _this$state4 = this.state,
            calendarMonthWidth = _this$state4.calendarMonthWidth,
            monthTitleHeight = _this$state4.monthTitleHeight;
        var translationValue;

        if (this.isVertical()) {
          var firstVisibleMonthWeeks = this.calendarMonthWeeks[1];
          var calendarMonthWeeksHeight = firstVisibleMonthWeeks * (daySize - 1);
          translationValue = -(monthTitleHeight + calendarMonthWeeksHeight + 1);
        }

        if (this.isHorizontal()) {
          translationValue = -calendarMonthWidth;

          if (isRTL) {
            translationValue = 0;
          }

          var visibleCalendarWeeks = this.calendarMonthWeeks.slice(2, numberOfMonths + 2);

          var _calendarMonthWeeksHeight2 = Math.max.apply(Math, [0].concat(_toConsumableArray(visibleCalendarWeeks))) * (daySize - 1);

          var newMonthHeight = monthTitleHeight + _calendarMonthWeeksHeight2 + 1;
          this.adjustDayPickerHeight(newMonthHeight);
        }

        this.setState({
          monthTransition: NEXT_TRANSITION,
          translationValue: translationValue,
          focusedDate: null,
          nextFocusedDate: nextFocusedDate
        });
      }

      return onNextMonthTransition;
    }()
  }, {
    key: "getFirstDayOfWeek",
    value: function () {
      function getFirstDayOfWeek() {
        var firstDayOfWeek = this.props.firstDayOfWeek;

        if (firstDayOfWeek == null) {
          return _moment["default"].localeData().firstDayOfWeek();
        }

        return firstDayOfWeek;
      }

      return getFirstDayOfWeek;
    }()
  }, {
    key: "getFirstVisibleIndex",
    value: function () {
      function getFirstVisibleIndex() {
        var orientation = this.props.orientation;
        var monthTransition = this.state.monthTransition;
        if (orientation === _constants.VERTICAL_SCROLLABLE) return 0;
        var firstVisibleMonthIndex = 1;

        if (monthTransition === PREV_TRANSITION) {
          firstVisibleMonthIndex -= 1;
        } else if (monthTransition === NEXT_TRANSITION) {
          firstVisibleMonthIndex += 1;
        }

        return firstVisibleMonthIndex;
      }

      return getFirstVisibleIndex;
    }()
  }, {
    key: "getFocusedDay",
    value: function () {
      function getFocusedDay(newMonth) {
        var _this$props6 = this.props,
            getFirstFocusableDay = _this$props6.getFirstFocusableDay,
            numberOfMonths = _this$props6.numberOfMonths;
        var focusedDate;

        if (getFirstFocusableDay) {
          focusedDate = getFirstFocusableDay(newMonth);
        }

        if (newMonth && (!focusedDate || !(0, _isDayVisible["default"])(focusedDate, newMonth, numberOfMonths))) {
          focusedDate = newMonth.clone().startOf('month');
        }

        return focusedDate;
      }

      return getFocusedDay;
    }()
  }, {
    key: "setMonthTitleHeight",
    value: function () {
      function setMonthTitleHeight(monthTitleHeight) {
        var _this3 = this;

        this.setState({
          monthTitleHeight: monthTitleHeight
        }, function () {
          _this3.calculateAndSetDayPickerHeight();
        });
      }

      return setMonthTitleHeight;
    }()
  }, {
    key: "setCalendarMonthWeeks",
    value: function () {
      function setCalendarMonthWeeks(currentMonth) {
        var numberOfMonths = this.props.numberOfMonths;
        this.calendarMonthWeeks = [];
        var month = currentMonth.clone().subtract(1, 'months');
        var firstDayOfWeek = this.getFirstDayOfWeek();

        for (var i = 0; i < numberOfMonths + 2; i += 1) {
          var numberOfWeeks = (0, _getNumberOfCalendarMonthWeeks["default"])(month, firstDayOfWeek);
          this.calendarMonthWeeks.push(numberOfWeeks);
          month = month.add(1, 'months');
        }
      }

      return setCalendarMonthWeeks;
    }()
  }, {
    key: "setContainerRef",
    value: function () {
      function setContainerRef(ref) {
        this.container = ref;
      }

      return setContainerRef;
    }()
  }, {
    key: "setCalendarInfoRef",
    value: function () {
      function setCalendarInfoRef(ref) {
        this.calendarInfo = ref;
      }

      return setCalendarInfoRef;
    }()
  }, {
    key: "setTransitionContainerRef",
    value: function () {
      function setTransitionContainerRef(ref) {
        this.transitionContainer = ref;
      }

      return setTransitionContainerRef;
    }()
  }, {
    key: "maybeTransitionNextMonth",
    value: function () {
      function maybeTransitionNextMonth(newFocusedDate) {
        var numberOfMonths = this.props.numberOfMonths;
        var _this$state5 = this.state,
            currentMonth = _this$state5.currentMonth,
            focusedDate = _this$state5.focusedDate;
        var newFocusedDateMonth = newFocusedDate.month();
        var focusedDateMonth = focusedDate.month();
        var isNewFocusedDateVisible = (0, _isDayVisible["default"])(newFocusedDate, currentMonth, numberOfMonths);

        if (newFocusedDateMonth !== focusedDateMonth && !isNewFocusedDateVisible) {
          this.onNextMonthTransition(newFocusedDate);
          return true;
        }

        return false;
      }

      return maybeTransitionNextMonth;
    }()
  }, {
    key: "maybeTransitionPrevMonth",
    value: function () {
      function maybeTransitionPrevMonth(newFocusedDate) {
        var numberOfMonths = this.props.numberOfMonths;
        var _this$state6 = this.state,
            currentMonth = _this$state6.currentMonth,
            focusedDate = _this$state6.focusedDate;
        var newFocusedDateMonth = newFocusedDate.month();
        var focusedDateMonth = focusedDate.month();
        var isNewFocusedDateVisible = (0, _isDayVisible["default"])(newFocusedDate, currentMonth, numberOfMonths);

        if (newFocusedDateMonth !== focusedDateMonth && !isNewFocusedDateVisible) {
          this.onPrevMonthTransition(newFocusedDate);
          return true;
        }

        return false;
      }

      return maybeTransitionPrevMonth;
    }()
  }, {
    key: "multiplyScrollableMonths",
    value: function () {
      function multiplyScrollableMonths(e) {
        var onMultiplyScrollableMonths = this.props.onMultiplyScrollableMonths;
        if (e) e.preventDefault();
        if (onMultiplyScrollableMonths) onMultiplyScrollableMonths(e);
        this.setState(function (_ref2) {
          var scrollableMonthMultiple = _ref2.scrollableMonthMultiple;
          return {
            scrollableMonthMultiple: scrollableMonthMultiple + 1
          };
        });
      }

      return multiplyScrollableMonths;
    }()
  }, {
    key: "isHorizontal",
    value: function () {
      function isHorizontal() {
        var orientation = this.props.orientation;
        return orientation === _constants.HORIZONTAL_ORIENTATION;
      }

      return isHorizontal;
    }()
  }, {
    key: "isVertical",
    value: function () {
      function isVertical() {
        var orientation = this.props.orientation;
        return orientation === _constants.VERTICAL_ORIENTATION || orientation === _constants.VERTICAL_SCROLLABLE;
      }

      return isVertical;
    }()
  }, {
    key: "updateStateAfterMonthTransition",
    value: function () {
      function updateStateAfterMonthTransition() {
        var _this4 = this;

        var _this$props7 = this.props,
            onPrevMonthClick = _this$props7.onPrevMonthClick,
            onNextMonthClick = _this$props7.onNextMonthClick,
            numberOfMonths = _this$props7.numberOfMonths,
            onMonthChange = _this$props7.onMonthChange,
            onYearChange = _this$props7.onYearChange,
            isRTL = _this$props7.isRTL;
        var _this$state7 = this.state,
            currentMonth = _this$state7.currentMonth,
            monthTransition = _this$state7.monthTransition,
            focusedDate = _this$state7.focusedDate,
            nextFocusedDate = _this$state7.nextFocusedDate,
            withMouseInteractions = _this$state7.withMouseInteractions,
            calendarMonthWidth = _this$state7.calendarMonthWidth;
        if (!monthTransition) return;
        var newMonth = currentMonth.clone();
        var firstDayOfWeek = this.getFirstDayOfWeek();

        if (monthTransition === PREV_TRANSITION) {
          newMonth.subtract(1, 'month');
          if (onPrevMonthClick) onPrevMonthClick(newMonth);
          var newInvisibleMonth = newMonth.clone().subtract(1, 'month');
          var numberOfWeeks = (0, _getNumberOfCalendarMonthWeeks["default"])(newInvisibleMonth, firstDayOfWeek);
          this.calendarMonthWeeks = [numberOfWeeks].concat(_toConsumableArray(this.calendarMonthWeeks.slice(0, -1)));
        } else if (monthTransition === NEXT_TRANSITION) {
          newMonth.add(1, 'month');
          if (onNextMonthClick) onNextMonthClick(newMonth);

          var _newInvisibleMonth = newMonth.clone().add(numberOfMonths, 'month');

          var _numberOfWeeks = (0, _getNumberOfCalendarMonthWeeks["default"])(_newInvisibleMonth, firstDayOfWeek);

          this.calendarMonthWeeks = _toConsumableArray(this.calendarMonthWeeks.slice(1)).concat([_numberOfWeeks]);
        } else if (monthTransition === MONTH_SELECTION_TRANSITION) {
          if (onMonthChange) onMonthChange(newMonth);
        } else if (monthTransition === YEAR_SELECTION_TRANSITION) {
          if (onYearChange) onYearChange(newMonth);
        }

        var newFocusedDate = null;

        if (nextFocusedDate) {
          newFocusedDate = nextFocusedDate;
        } else if (!focusedDate && !withMouseInteractions) {
          newFocusedDate = this.getFocusedDay(newMonth);
        }

        this.setState({
          currentMonth: newMonth,
          monthTransition: null,
          translationValue: isRTL && this.isHorizontal() ? -calendarMonthWidth : 0,
          nextFocusedDate: null,
          focusedDate: newFocusedDate
        }, function () {
          // we don't want to focus on the relevant calendar day after a month transition
          // if the user is navigating around using a mouse
          if (withMouseInteractions) {
            var activeElement = (0, _getActiveElement["default"])();

            if (activeElement && activeElement !== document.body && _this4.container.contains(activeElement) && activeElement.blur) {
              activeElement.blur();
            }
          }
        });
      }

      return updateStateAfterMonthTransition;
    }()
  }, {
    key: "adjustDayPickerHeight",
    value: function () {
      function adjustDayPickerHeight(newMonthHeight) {
        var _this5 = this;

        var monthHeight = newMonthHeight + MONTH_PADDING;

        if (monthHeight !== this.calendarMonthGridHeight) {
          this.transitionContainer.style.height = "".concat(monthHeight, "px");

          if (!this.calendarMonthGridHeight) {
            setTimeout(function () {
              _this5.setState({
                hasSetHeight: true
              });
            }, 0);
          }

          this.calendarMonthGridHeight = monthHeight;
        }
      }

      return adjustDayPickerHeight;
    }()
  }, {
    key: "calculateAndSetDayPickerHeight",
    value: function () {
      function calculateAndSetDayPickerHeight() {
        var _this$props8 = this.props,
            daySize = _this$props8.daySize,
            numberOfMonths = _this$props8.numberOfMonths;
        var monthTitleHeight = this.state.monthTitleHeight;
        var visibleCalendarWeeks = this.calendarMonthWeeks.slice(1, numberOfMonths + 1);
        var calendarMonthWeeksHeight = Math.max.apply(Math, [0].concat(_toConsumableArray(visibleCalendarWeeks))) * (daySize - 1);
        var newMonthHeight = monthTitleHeight + calendarMonthWeeksHeight + 1;

        if (this.isHorizontal()) {
          this.adjustDayPickerHeight(newMonthHeight);
        }
      }

      return calculateAndSetDayPickerHeight;
    }()
  }, {
    key: "openKeyboardShortcutsPanel",
    value: function () {
      function openKeyboardShortcutsPanel(onCloseCallBack) {
        this.setState({
          showKeyboardShortcuts: true,
          onKeyboardShortcutsPanelClose: onCloseCallBack
        });
      }

      return openKeyboardShortcutsPanel;
    }()
  }, {
    key: "closeKeyboardShortcutsPanel",
    value: function () {
      function closeKeyboardShortcutsPanel() {
        var onKeyboardShortcutsPanelClose = this.state.onKeyboardShortcutsPanelClose;

        if (onKeyboardShortcutsPanelClose) {
          onKeyboardShortcutsPanelClose();
        }

        this.setState({
          onKeyboardShortcutsPanelClose: null,
          showKeyboardShortcuts: false
        });
      }

      return closeKeyboardShortcutsPanel;
    }()
  }, {
    key: "renderNavigation",
    value: function () {
      function renderNavigation() {
        var _this$props9 = this.props,
            disablePrev = _this$props9.disablePrev,
            disableNext = _this$props9.disableNext,
            navPrev = _this$props9.navPrev,
            navNext = _this$props9.navNext,
            noNavButtons = _this$props9.noNavButtons,
            orientation = _this$props9.orientation,
            phrases = _this$props9.phrases,
            isRTL = _this$props9.isRTL;

        if (noNavButtons) {
          return null;
        }

        var onNextMonthClick = orientation === _constants.VERTICAL_SCROLLABLE ? this.multiplyScrollableMonths : this.onNextMonthClick;
        return _react["default"].createElement(_DayPickerNavigation["default"], {
          disablePrev: disablePrev,
          disableNext: disableNext,
          onPrevMonthClick: this.onPrevMonthClick,
          onNextMonthClick: onNextMonthClick,
          navPrev: navPrev,
          navNext: navNext,
          orientation: orientation,
          phrases: phrases,
          isRTL: isRTL
        });
      }

      return renderNavigation;
    }()
  }, {
    key: "renderWeekHeader",
    value: function () {
      function renderWeekHeader(index) {
        var _this$props10 = this.props,
            daySize = _this$props10.daySize,
            horizontalMonthPadding = _this$props10.horizontalMonthPadding,
            orientation = _this$props10.orientation,
            weekDayFormat = _this$props10.weekDayFormat,
            styles = _this$props10.styles;
        var calendarMonthWidth = this.state.calendarMonthWidth;
        var verticalScrollable = orientation === _constants.VERTICAL_SCROLLABLE;
        var horizontalStyle = {
          left: index * calendarMonthWidth
        };
        var verticalStyle = {
          marginLeft: -calendarMonthWidth / 2
        };
        var weekHeaderStyle = {}; // no styles applied to the vertical-scrollable orientation

        if (this.isHorizontal()) {
          weekHeaderStyle = horizontalStyle;
        } else if (this.isVertical() && !verticalScrollable) {
          weekHeaderStyle = verticalStyle;
        }

        var firstDayOfWeek = this.getFirstDayOfWeek();
        var header = [];

        for (var i = 0; i < 7; i += 1) {
          header.push(_react["default"].createElement("li", _extends({
            key: i
          }, (0, _reactWithStyles.css)(styles.DayPicker_weekHeader_li, {
            width: daySize
          })), _react["default"].createElement("small", null, (0, _moment["default"])().day((i + firstDayOfWeek) % 7).format(weekDayFormat))));
        }

        return _react["default"].createElement("div", _extends({}, (0, _reactWithStyles.css)(styles.DayPicker_weekHeader, this.isVertical() && styles.DayPicker_weekHeader__vertical, verticalScrollable && styles.DayPicker_weekHeader__verticalScrollable, weekHeaderStyle, {
          padding: "0 ".concat(horizontalMonthPadding, "px")
        }), {
          key: "week-".concat(index)
        }), _react["default"].createElement("ul", (0, _reactWithStyles.css)(styles.DayPicker_weekHeader_ul), header));
      }

      return renderWeekHeader;
    }()
  }, {
    key: "render",
    value: function () {
      function render() {
        var _this6 = this;

        var _this$state8 = this.state,
            calendarMonthWidth = _this$state8.calendarMonthWidth,
            currentMonth = _this$state8.currentMonth,
            monthTransition = _this$state8.monthTransition,
            translationValue = _this$state8.translationValue,
            scrollableMonthMultiple = _this$state8.scrollableMonthMultiple,
            focusedDate = _this$state8.focusedDate,
            showKeyboardShortcuts = _this$state8.showKeyboardShortcuts,
            isTouch = _this$state8.isTouchDevice,
            hasSetHeight = _this$state8.hasSetHeight,
            calendarInfoWidth = _this$state8.calendarInfoWidth,
            monthTitleHeight = _this$state8.monthTitleHeight;
        var _this$props11 = this.props,
            enableOutsideDays = _this$props11.enableOutsideDays,
            numberOfMonths = _this$props11.numberOfMonths,
            orientation = _this$props11.orientation,
            modifiers = _this$props11.modifiers,
            withPortal = _this$props11.withPortal,
            onDayClick = _this$props11.onDayClick,
            onDayMouseEnter = _this$props11.onDayMouseEnter,
            onDayMouseLeave = _this$props11.onDayMouseLeave,
            firstDayOfWeek = _this$props11.firstDayOfWeek,
            renderMonthText = _this$props11.renderMonthText,
            renderCalendarDay = _this$props11.renderCalendarDay,
            renderDayContents = _this$props11.renderDayContents,
            renderCalendarInfo = _this$props11.renderCalendarInfo,
            renderMonthElement = _this$props11.renderMonthElement,
            calendarInfoPosition = _this$props11.calendarInfoPosition,
            hideKeyboardShortcutsPanel = _this$props11.hideKeyboardShortcutsPanel,
            onOutsideClick = _this$props11.onOutsideClick,
            monthFormat = _this$props11.monthFormat,
            daySize = _this$props11.daySize,
            isFocused = _this$props11.isFocused,
            isRTL = _this$props11.isRTL,
            styles = _this$props11.styles,
            theme = _this$props11.theme,
            phrases = _this$props11.phrases,
            verticalHeight = _this$props11.verticalHeight,
            dayAriaLabelFormat = _this$props11.dayAriaLabelFormat,
            noBorder = _this$props11.noBorder,
            transitionDuration = _this$props11.transitionDuration,
            verticalBorderSpacing = _this$props11.verticalBorderSpacing,
            horizontalMonthPadding = _this$props11.horizontalMonthPadding;
        var dayPickerHorizontalPadding = theme.reactDates.spacing.dayPickerHorizontalPadding;
        var isHorizontal = this.isHorizontal();
        var numOfWeekHeaders = this.isVertical() ? 1 : numberOfMonths;
        var weekHeaders = [];

        for (var i = 0; i < numOfWeekHeaders; i += 1) {
          weekHeaders.push(this.renderWeekHeader(i));
        }

        var verticalScrollable = orientation === _constants.VERTICAL_SCROLLABLE;
        var height;

        if (isHorizontal) {
          height = this.calendarMonthGridHeight;
        } else if (this.isVertical() && !verticalScrollable && !withPortal) {
          // If the user doesn't set a desired height,
          // we default back to this kind of made-up value that generally looks good
          height = verticalHeight || 1.75 * calendarMonthWidth;
        }

        var isCalendarMonthGridAnimating = monthTransition !== null;
        var shouldFocusDate = !isCalendarMonthGridAnimating && isFocused;
        var keyboardShortcutButtonLocation = _DayPickerKeyboardShortcuts.BOTTOM_RIGHT;

        if (this.isVertical()) {
          keyboardShortcutButtonLocation = withPortal ? _DayPickerKeyboardShortcuts.TOP_LEFT : _DayPickerKeyboardShortcuts.TOP_RIGHT;
        }

        var shouldAnimateHeight = isHorizontal && hasSetHeight;
        var calendarInfoPositionTop = calendarInfoPosition === _constants.INFO_POSITION_TOP;
        var calendarInfoPositionBottom = calendarInfoPosition === _constants.INFO_POSITION_BOTTOM;
        var calendarInfoPositionBefore = calendarInfoPosition === _constants.INFO_POSITION_BEFORE;
        var calendarInfoPositionAfter = calendarInfoPosition === _constants.INFO_POSITION_AFTER;
        var calendarInfoIsInline = calendarInfoPositionBefore || calendarInfoPositionAfter;

        var calendarInfo = renderCalendarInfo && _react["default"].createElement("div", _extends({
          ref: this.setCalendarInfoRef
        }, (0, _reactWithStyles.css)(calendarInfoIsInline && styles.DayPicker_calendarInfo__horizontal)), renderCalendarInfo());

        var calendarInfoPanelWidth = renderCalendarInfo && calendarInfoIsInline ? calendarInfoWidth : 0;
        var firstVisibleMonthIndex = this.getFirstVisibleIndex();
        var wrapperHorizontalWidth = calendarMonthWidth * numberOfMonths + 2 * dayPickerHorizontalPadding; // Adding `1px` because of whitespace between 2 inline-block

        var fullHorizontalWidth = wrapperHorizontalWidth + calendarInfoPanelWidth + 1;
        var transitionContainerStyle = {
          width: isHorizontal && wrapperHorizontalWidth,
          height: height
        };
        var dayPickerWrapperStyle = {
          width: isHorizontal && wrapperHorizontalWidth
        };
        var dayPickerStyle = {
          width: isHorizontal && fullHorizontalWidth,
          // These values are to center the datepicker (approximately) on the page
          marginLeft: isHorizontal && withPortal ? -fullHorizontalWidth / 2 : null,
          marginTop: isHorizontal && withPortal ? -calendarMonthWidth / 2 : null
        };
        return _react["default"].createElement("div", _extends({
          role: "application",
          "aria-label": phrases.calendarLabel
        }, (0, _reactWithStyles.css)(styles.DayPicker, isHorizontal && styles.DayPicker__horizontal, verticalScrollable && styles.DayPicker__verticalScrollable, isHorizontal && withPortal && styles.DayPicker_portal__horizontal, this.isVertical() && withPortal && styles.DayPicker_portal__vertical, dayPickerStyle, !monthTitleHeight && styles.DayPicker__hidden, !noBorder && styles.DayPicker__withBorder)), _react["default"].createElement(_reactOutsideClickHandler["default"], {
          onOutsideClick: onOutsideClick
        }, (calendarInfoPositionTop || calendarInfoPositionBefore) && calendarInfo, _react["default"].createElement("div", (0, _reactWithStyles.css)(dayPickerWrapperStyle, calendarInfoIsInline && isHorizontal && styles.DayPicker_wrapper__horizontal), _react["default"].createElement("div", _extends({}, (0, _reactWithStyles.css)(styles.DayPicker_weekHeaders, isHorizontal && styles.DayPicker_weekHeaders__horizontal), {
          "aria-hidden": "true",
          role: "presentation"
        }), weekHeaders), _react["default"].createElement("div", _extends({}, (0, _reactWithStyles.css)(styles.DayPicker_focusRegion), {
          ref: this.setContainerRef,
          onClick: function () {
            function onClick(e) {
              e.stopPropagation();
            }

            return onClick;
          }(),
          onKeyDown: this.onKeyDown,
          onMouseUp: function () {
            function onMouseUp() {
              _this6.setState({
                withMouseInteractions: true
              });
            }

            return onMouseUp;
          }(),
          role: "region",
          tabIndex: -1
        }), !verticalScrollable && this.renderNavigation(), _react["default"].createElement("div", _extends({}, (0, _reactWithStyles.css)(styles.DayPicker_transitionContainer, shouldAnimateHeight && styles.DayPicker_transitionContainer__horizontal, this.isVertical() && styles.DayPicker_transitionContainer__vertical, verticalScrollable && styles.DayPicker_transitionContainer__verticalScrollable, transitionContainerStyle), {
          ref: this.setTransitionContainerRef
        }), _react["default"].createElement(_CalendarMonthGrid["default"], {
          setMonthTitleHeight: !monthTitleHeight ? this.setMonthTitleHeight : undefined,
          translationValue: translationValue,
          enableOutsideDays: enableOutsideDays,
          firstVisibleMonthIndex: firstVisibleMonthIndex,
          initialMonth: currentMonth,
          isAnimating: isCalendarMonthGridAnimating,
          modifiers: modifiers,
          orientation: orientation,
          numberOfMonths: numberOfMonths * scrollableMonthMultiple,
          onDayClick: onDayClick,
          onDayMouseEnter: onDayMouseEnter,
          onDayMouseLeave: onDayMouseLeave,
          onMonthChange: this.onMonthChange,
          onYearChange: this.onYearChange,
          renderMonthText: renderMonthText,
          renderCalendarDay: renderCalendarDay,
          renderDayContents: renderDayContents,
          renderMonthElement: renderMonthElement,
          onMonthTransitionEnd: this.updateStateAfterMonthTransition,
          monthFormat: monthFormat,
          daySize: daySize,
          firstDayOfWeek: firstDayOfWeek,
          isFocused: shouldFocusDate,
          focusedDate: focusedDate,
          phrases: phrases,
          isRTL: isRTL,
          dayAriaLabelFormat: dayAriaLabelFormat,
          transitionDuration: transitionDuration,
          verticalBorderSpacing: verticalBorderSpacing,
          horizontalMonthPadding: horizontalMonthPadding
        }), verticalScrollable && this.renderNavigation()), !isTouch && !hideKeyboardShortcutsPanel && _react["default"].createElement(_DayPickerKeyboardShortcuts["default"], {
          block: this.isVertical() && !withPortal,
          buttonLocation: keyboardShortcutButtonLocation,
          showKeyboardShortcutsPanel: showKeyboardShortcuts,
          openKeyboardShortcutsPanel: this.openKeyboardShortcutsPanel,
          closeKeyboardShortcutsPanel: this.closeKeyboardShortcutsPanel,
          phrases: phrases
        }))), (calendarInfoPositionBottom || calendarInfoPositionAfter) && calendarInfo));
      }

      return render;
    }()
  }]);

  return DayPicker;
}(_react["default"].PureComponent || _react["default"].Component);

exports.PureDayPicker = DayPicker;
DayPicker.propTypes =  false ? undefined : {};
DayPicker.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref3) {
  var _ref3$reactDates = _ref3.reactDates,
      color = _ref3$reactDates.color,
      font = _ref3$reactDates.font,
      noScrollBarOnVerticalScrollable = _ref3$reactDates.noScrollBarOnVerticalScrollable,
      spacing = _ref3$reactDates.spacing,
      zIndex = _ref3$reactDates.zIndex;
  return {
    DayPicker: {
      background: color.background,
      position: 'relative',
      textAlign: (0, _noflip["default"])('left')
    },
    DayPicker__horizontal: {
      background: color.background
    },
    DayPicker__verticalScrollable: {
      height: '100%'
    },
    DayPicker__hidden: {
      visibility: 'hidden'
    },
    DayPicker__withBorder: {
      boxShadow: (0, _noflip["default"])('0 2px 6px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.07)'),
      borderRadius: 3
    },
    DayPicker_portal__horizontal: {
      boxShadow: 'none',
      position: 'absolute',
      left: (0, _noflip["default"])('50%'),
      top: '50%'
    },
    DayPicker_portal__vertical: {
      position: 'initial'
    },
    DayPicker_focusRegion: {
      outline: 'none'
    },
    DayPicker_calendarInfo__horizontal: {
      display: 'inline-block',
      verticalAlign: 'top'
    },
    DayPicker_wrapper__horizontal: {
      display: 'inline-block',
      verticalAlign: 'top'
    },
    DayPicker_weekHeaders: {
      position: 'relative'
    },
    DayPicker_weekHeaders__horizontal: {
      marginLeft: (0, _noflip["default"])(spacing.dayPickerHorizontalPadding)
    },
    DayPicker_weekHeader: {
      color: color.placeholderText,
      position: 'absolute',
      top: 62,
      zIndex: zIndex + 2,
      textAlign: (0, _noflip["default"])('left')
    },
    DayPicker_weekHeader__vertical: {
      left: (0, _noflip["default"])('50%')
    },
    DayPicker_weekHeader__verticalScrollable: {
      top: 0,
      display: 'table-row',
      borderBottom: "1px solid ".concat(color.core.border),
      background: color.background,
      marginLeft: (0, _noflip["default"])(0),
      left: (0, _noflip["default"])(0),
      width: '100%',
      textAlign: 'center'
    },
    DayPicker_weekHeader_ul: {
      listStyle: 'none',
      margin: '1px 0',
      paddingLeft: (0, _noflip["default"])(0),
      paddingRight: (0, _noflip["default"])(0),
      fontSize: font.size
    },
    DayPicker_weekHeader_li: {
      display: 'inline-block',
      textAlign: 'center'
    },
    DayPicker_transitionContainer: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 3
    },
    DayPicker_transitionContainer__horizontal: {
      transition: 'height 0.2s ease-in-out'
    },
    DayPicker_transitionContainer__vertical: {
      width: '100%'
    },
    DayPicker_transitionContainer__verticalScrollable: _objectSpread({
      paddingTop: 20,
      height: '100%',
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: (0, _noflip["default"])(0),
      left: (0, _noflip["default"])(0),
      overflowY: 'scroll'
    }, noScrollBarOnVerticalScrollable && {
      '-webkitOverflowScrolling': 'touch',
      '::-webkit-scrollbar': {
        '-webkit-appearance': 'none',
        display: 'none'
      }
    })
  };
}, {
  pureComponent: typeof _react["default"].PureComponent !== 'undefined'
})(DayPicker);

exports["default"] = _default;

/***/ }),

/***/ 2904:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CalendarWeek;

var _react = _interopRequireDefault(__webpack_require__(1));

var _airbnbPropTypes = __webpack_require__(2820);

var _CalendarDay = _interopRequireDefault(__webpack_require__(2889));

var _CustomizableCalendarDay = _interopRequireDefault(__webpack_require__(3051));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var propTypes =  false ? undefined : {};

function CalendarWeek(_ref) {
  var children = _ref.children;
  return _react["default"].createElement("tr", null, children);
}

CalendarWeek.propTypes =  false ? undefined : {};

/***/ }),

/***/ 2913:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var slice = Array.prototype.slice;
var isArgs = __webpack_require__(2914);

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__(3001);

var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),

/***/ 2914:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),

/***/ 2915:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var origSymbol = global.Symbol;
var hasSymbolSham = __webpack_require__(2916);

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(20)))

/***/ }),

/***/ 2916:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ 2917:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ArraySpeciesCreate = __webpack_require__(3003);
var FlattenIntoArray = __webpack_require__(3008);
var Get = __webpack_require__(2886);
var ToInteger = __webpack_require__(2927);
var ToLength = __webpack_require__(2926);
var ToObject = __webpack_require__(3033);

module.exports = function flat() {
	var O = ToObject(this);
	var sourceLen = ToLength(Get(O, 'length'));

	var depthNum = 1;
	if (arguments.length > 0 && typeof arguments[0] !== 'undefined') {
		depthNum = ToInteger(arguments[0]);
	}

	var A = ArraySpeciesCreate(O, 0);
	FlattenIntoArray(A, O, sourceLen, 0, depthNum);
	return A;
};


/***/ }),

/***/ 2918:
/***/ (function(module, exports, __webpack_require__) {

var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var match = String.prototype.match;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;

var inspectCustom = __webpack_require__(3004).custom;
var inspectSymbol = inspectCustom && isSymbol(inspectCustom) ? inspectCustom : null;

module.exports = function inspect_(obj, options, depth, seen) {
    var opts = options || {};

    if (has(opts, 'quoteStyle') && (opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double')) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }

    if (typeof obj === 'undefined') {
        return 'undefined';
    }
    if (obj === null) {
        return 'null';
    }
    if (typeof obj === 'boolean') {
        return obj ? 'true' : 'false';
    }

    if (typeof obj === 'string') {
        return inspectString(obj, opts);
    }
    if (typeof obj === 'number') {
        if (obj === 0) {
            return Infinity / obj > 0 ? '0' : '-0';
        }
        return String(obj);
    }
    if (typeof obj === 'bigint') { // eslint-disable-line valid-typeof
        return String(obj) + 'n';
    }

    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') { depth = 0; }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
        return '[Object]';
    }

    if (typeof seen === 'undefined') {
        seen = [];
    } else if (indexOf(seen, obj) >= 0) {
        return '[Circular]';
    }

    function inspect(value, from) {
        if (from) {
            seen = seen.slice();
            seen.push(from);
        }
        return inspect_(value, opts, depth + 1, seen);
    }

    if (typeof obj === 'function') {
        var name = nameOf(obj);
        return '[Function' + (name ? ': ' + name : '') + ']';
    }
    if (isSymbol(obj)) {
        var symString = Symbol.prototype.toString.call(obj);
        return typeof obj === 'object' ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + String(obj.nodeName).toLowerCase();
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
        }
        s += '>';
        if (obj.childNodes && obj.childNodes.length) { s += '...'; }
        s += '</' + String(obj.nodeName).toLowerCase() + '>';
        return s;
    }
    if (isArray(obj)) {
        if (obj.length === 0) { return '[]'; }
        return '[ ' + arrObjKeys(obj, inspect).join(', ') + ' ]';
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (parts.length === 0) { return '[' + String(obj) + ']'; }
        return '{ [' + String(obj) + '] ' + parts.join(', ') + ' }';
    }
    if (typeof obj === 'object') {
        if (inspectSymbol && typeof obj[inspectSymbol] === 'function') {
            return obj[inspectSymbol]();
        } else if (typeof obj.inspect === 'function') {
            return obj.inspect();
        }
    }
    if (isMap(obj)) {
        var mapParts = [];
        mapForEach.call(obj, function (value, key) {
            mapParts.push(inspect(key, obj) + ' => ' + inspect(value, obj));
        });
        return collectionOf('Map', mapSize.call(obj), mapParts);
    }
    if (isSet(obj)) {
        var setParts = [];
        setForEach.call(obj, function (value) {
            setParts.push(inspect(value, obj));
        });
        return collectionOf('Set', setSize.call(obj), setParts);
    }
    if (isWeakMap(obj)) {
        return weakCollectionOf('WeakMap');
    }
    if (isWeakSet(obj)) {
        return weakCollectionOf('WeakSet');
    }
    if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
    }
    if (!isDate(obj) && !isRegExp(obj)) {
        var xs = arrObjKeys(obj, inspect);
        if (xs.length === 0) { return '{}'; }
        return '{ ' + xs.join(', ') + ' }';
    }
    return String(obj);
};

function wrapQuotes(s, defaultStyle, opts) {
    var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '"' : "'";
    return quoteChar + s + quoteChar;
}

function quote(s) {
    return String(s).replace(/"/g, '&quot;');
}

function isArray(obj) { return toStr(obj) === '[object Array]'; }
function isDate(obj) { return toStr(obj) === '[object Date]'; }
function isRegExp(obj) { return toStr(obj) === '[object RegExp]'; }
function isError(obj) { return toStr(obj) === '[object Error]'; }
function isSymbol(obj) { return toStr(obj) === '[object Symbol]'; }
function isString(obj) { return toStr(obj) === '[object String]'; }
function isNumber(obj) { return toStr(obj) === '[object Number]'; }
function isBigInt(obj) { return toStr(obj) === '[object BigInt]'; }
function isBoolean(obj) { return toStr(obj) === '[object Boolean]'; }

var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
function has(obj, key) {
    return hasOwn.call(obj, key);
}

function toStr(obj) {
    return objectToString.call(obj);
}

function nameOf(f) {
    if (f.name) { return f.name; }
    var m = match.call(f, /^function\s*([\w$]+)/);
    if (m) { return m[1]; }
    return null;
}

function indexOf(xs, x) {
    if (xs.indexOf) { return xs.indexOf(x); }
    for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) { return i; }
    }
    return -1;
}

function isMap(x) {
    if (!mapSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isSet(x) {
    if (!setSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isElement(x) {
    if (!x || typeof x !== 'object') { return false; }
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
        return true;
    }
    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
}

function inspectString(str, opts) {
    // eslint-disable-next-line no-control-regex
    var s = str.replace(/(['\\])/g, '\\$1').replace(/[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, 'single', opts);
}

function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r'
    }[n];
    if (x) { return '\\' + x; }
    return '\\x' + (n < 0x10 ? '0' : '') + n.toString(16);
}

function markBoxed(str) {
    return 'Object(' + str + ')';
}

function weakCollectionOf(type) {
    return type + ' { ? }';
}

function collectionOf(type, size, entries) {
    return type + ' (' + size + ') {' + entries.join(', ') + '}';
}

function arrObjKeys(obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
        }
    }
    for (var key in obj) { // eslint-disable-line no-restricted-syntax
        if (!has(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if ((/[^\w$]/).test(key)) {
            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
        } else {
            xs.push(key + ': ' + inspect(obj[key], obj));
        }
    }
    return xs;
}


/***/ }),

/***/ 2919:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $isNaN = Number.isNaN || function (a) { return a !== a; };

module.exports = Number.isFinite || function (x) { return typeof x === 'number' && !$isNaN(x) && x !== Infinity && x !== -Infinity; };


/***/ }),

/***/ 2920:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(2819);

var $Math = GetIntrinsic('%Math%');
var $Number = GetIntrinsic('%Number%');

module.exports = $Number.MAX_SAFE_INTEGER || $Math.pow(2, 53) - 1;


/***/ }),

/***/ 2921:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// http://www.ecma-international.org/ecma-262/5.1/#sec-9.11

module.exports = __webpack_require__(2922);


/***/ }),

/***/ 2922:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fnToStr = Function.prototype.toString;

var constructorRegex = /^\s*class\b/;
var isES6ClassFn = function isES6ClassFunction(value) {
	try {
		var fnStr = fnToStr.call(value);
		return constructorRegex.test(fnStr);
	} catch (e) {
		return false; // not a function
	}
};

var tryFunctionObject = function tryFunctionToStr(value) {
	try {
		if (isES6ClassFn(value)) { return false; }
		fnToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var fnClass = '[object Function]';
var genClass = '[object GeneratorFunction]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isCallable(value) {
	if (!value) { return false; }
	if (typeof value !== 'function' && typeof value !== 'object') { return false; }
	if (typeof value === 'function' && !value.prototype) { return true; }
	if (hasToStringTag) { return tryFunctionObject(value); }
	if (isES6ClassFn(value)) { return false; }
	var strClass = toStr.call(value);
	return strClass === fnClass || strClass === genClass;
};


/***/ }),

/***/ 2923:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(2819);

var $TypeError = GetIntrinsic('%TypeError%');
var $SyntaxError = GetIntrinsic('%SyntaxError%');

var has = __webpack_require__(2848);

var predicates = {
	// https://ecma-international.org/ecma-262/6.0/#sec-property-descriptor-specification-type
	'Property Descriptor': function isPropertyDescriptor(Type, Desc) {
		if (Type(Desc) !== 'Object') {
			return false;
		}
		var allowed = {
			'[[Configurable]]': true,
			'[[Enumerable]]': true,
			'[[Get]]': true,
			'[[Set]]': true,
			'[[Value]]': true,
			'[[Writable]]': true
		};

		for (var key in Desc) { // eslint-disable-line
			if (has(Desc, key) && !allowed[key]) {
				return false;
			}
		}

		var isData = has(Desc, '[[Value]]');
		var IsAccessor = has(Desc, '[[Get]]') || has(Desc, '[[Set]]');
		if (isData && IsAccessor) {
			throw new $TypeError('Property Descriptors may not be both accessor and data descriptors');
		}
		return true;
	}
};

module.exports = function assertRecord(Type, recordType, argumentName, value) {
	var predicate = predicates[recordType];
	if (typeof predicate !== 'function') {
		throw new $SyntaxError('unknown record type: ' + recordType);
	}
	if (!predicate(Type, value)) {
		throw new $TypeError(argumentName + ' must be a ' + recordType);
	}
};


/***/ }),

/***/ 2924:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// http://www.ecma-international.org/ecma-262/5.1/#sec-9.2

module.exports = function ToBoolean(value) { return !!value; };


/***/ }),

/***/ 2925:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isPrimitive(value) {
	return value === null || (typeof value !== 'function' && typeof value !== 'object');
};


/***/ }),

/***/ 2926:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var MAX_SAFE_INTEGER = __webpack_require__(2920);

var ToInteger = __webpack_require__(2927);

module.exports = function ToLength(argument) {
	var len = ToInteger(argument);
	if (len <= 0) { return 0; } // includes converting -0 to +0
	if (len > MAX_SAFE_INTEGER) { return MAX_SAFE_INTEGER; }
	return len;
};


/***/ }),

/***/ 2927:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ES5ToInteger = __webpack_require__(3023);

var ToNumber = __webpack_require__(3026);

// https://www.ecma-international.org/ecma-262/6.0/#sec-tointeger

module.exports = function ToInteger(value) {
	var number = ToNumber(value);
	return ES5ToInteger(number);
};


/***/ }),

/***/ 2928:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;
var hasSymbols = __webpack_require__(2915)();

if (hasSymbols) {
	var symToStr = Symbol.prototype.toString;
	var symStringRegex = /^Symbol\(.*\)$/;
	var isSymbolObject = function isRealSymbolObject(value) {
		if (typeof value.valueOf() !== 'symbol') {
			return false;
		}
		return symStringRegex.test(symToStr.call(value));
	};

	module.exports = function isSymbol(value) {
		if (typeof value === 'symbol') {
			return true;
		}
		if (toStr.call(value) !== '[object Symbol]') {
			return false;
		}
		try {
			return isSymbolObject(value);
		} catch (e) {
			return false;
		}
	};
} else {

	module.exports = function isSymbol(value) {
		// this environment does not support Symbols.
		return  false && false;
	};
}


/***/ }),

/***/ 2929:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(3034);


/***/ }),

/***/ 2930:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(2917);

module.exports = function getPolyfill() {
	return Array.prototype.flat || implementation;
};


/***/ }),

/***/ 2931:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var styleInterface = void 0;
var styleTheme = void 0;

var START_MARK = 'react-with-styles.resolve.start';
var END_MARK = 'react-with-styles.resolve.end';
var MEASURE_MARK = '\uD83D\uDC69\u200D\uD83C\uDFA8 [resolve]';

function registerTheme(theme) {
  styleTheme = theme;
}

function registerInterface(interfaceToRegister) {
  styleInterface = interfaceToRegister;
}

function create(makeFromTheme, createWithDirection) {
  var styles = createWithDirection(makeFromTheme(styleTheme));
  return function () {
    return styles;
  };
}

function createLTR(makeFromTheme) {
  return create(makeFromTheme, styleInterface.createLTR || styleInterface.create);
}

function createRTL(makeFromTheme) {
  return create(makeFromTheme, styleInterface.createRTL || styleInterface.create);
}

function get() {
  return styleTheme;
}

function resolve() {
  if (false) {}

  for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
    styles[_key] = arguments[_key];
  }

  var result = styleInterface.resolve(styles);

  if (false) {}

  return result;
}

function resolveLTR() {
  for (var _len2 = arguments.length, styles = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    styles[_key2] = arguments[_key2];
  }

  if (styleInterface.resolveLTR) {
    return styleInterface.resolveLTR(styles);
  }

  return resolve(styles);
}

function resolveRTL() {
  for (var _len3 = arguments.length, styles = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    styles[_key3] = arguments[_key3];
  }

  if (styleInterface.resolveRTL) {
    return styleInterface.resolveRTL(styles);
  }

  return resolve(styles);
}

function flush() {
  if (styleInterface.flush) {
    styleInterface.flush();
  }
}

exports['default'] = {
  registerTheme: registerTheme,
  registerInterface: registerInterface,
  create: createLTR,
  createLTR: createLTR,
  createRTL: createRTL,
  get: get,
  resolve: resolveLTR,
  resolveLTR: resolveLTR,
  resolveRTL: resolveRTL,
  flush: flush
};

/***/ }),

/***/ 2932:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var core = {
  white: '#fff',
  gray: '#484848',
  grayLight: '#82888a',
  grayLighter: '#cacccd',
  grayLightest: '#f2f2f2',
  borderMedium: '#c4c4c4',
  border: '#dbdbdb',
  borderLight: '#e4e7e7',
  borderLighter: '#eceeee',
  borderBright: '#f4f5f5',
  primary: '#00a699',
  primaryShade_1: '#33dacd',
  primaryShade_2: '#66e2da',
  primaryShade_3: '#80e8e0',
  primaryShade_4: '#b2f1ec',
  primary_dark: '#008489',
  secondary: '#007a87',
  yellow: '#ffe8bc',
  yellow_dark: '#ffce71'
};
var _default = {
  reactDates: {
    zIndex: 0,
    border: {
      input: {
        border: 0,
        borderTop: 0,
        borderRight: 0,
        borderBottom: '2px solid transparent',
        borderLeft: 0,
        outlineFocused: 0,
        borderFocused: 0,
        borderTopFocused: 0,
        borderLeftFocused: 0,
        borderBottomFocused: "2px solid ".concat(core.primary_dark),
        borderRightFocused: 0,
        borderRadius: 0
      },
      pickerInput: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 2
      }
    },
    color: {
      core: core,
      disabled: core.grayLightest,
      background: core.white,
      backgroundDark: '#f2f2f2',
      backgroundFocused: core.white,
      border: 'rgb(219, 219, 219)',
      text: core.gray,
      textDisabled: core.border,
      textFocused: '#007a87',
      placeholderText: '#757575',
      outside: {
        backgroundColor: core.white,
        backgroundColor_active: core.white,
        backgroundColor_hover: core.white,
        color: core.gray,
        color_active: core.gray,
        color_hover: core.gray
      },
      highlighted: {
        backgroundColor: core.yellow,
        backgroundColor_active: core.yellow_dark,
        backgroundColor_hover: core.yellow_dark,
        color: core.gray,
        color_active: core.gray,
        color_hover: core.gray
      },
      minimumNights: {
        backgroundColor: core.white,
        backgroundColor_active: core.white,
        backgroundColor_hover: core.white,
        borderColor: core.borderLighter,
        color: core.grayLighter,
        color_active: core.grayLighter,
        color_hover: core.grayLighter
      },
      hoveredSpan: {
        backgroundColor: core.primaryShade_4,
        backgroundColor_active: core.primaryShade_3,
        backgroundColor_hover: core.primaryShade_4,
        borderColor: core.primaryShade_3,
        borderColor_active: core.primaryShade_3,
        borderColor_hover: core.primaryShade_3,
        color: core.secondary,
        color_active: core.secondary,
        color_hover: core.secondary
      },
      selectedSpan: {
        backgroundColor: core.primaryShade_2,
        backgroundColor_active: core.primaryShade_1,
        backgroundColor_hover: core.primaryShade_1,
        borderColor: core.primaryShade_1,
        borderColor_active: core.primary,
        borderColor_hover: core.primary,
        color: core.white,
        color_active: core.white,
        color_hover: core.white
      },
      selected: {
        backgroundColor: core.primary,
        backgroundColor_active: core.primary,
        backgroundColor_hover: core.primary,
        borderColor: core.primary,
        borderColor_active: core.primary,
        borderColor_hover: core.primary,
        color: core.white,
        color_active: core.white,
        color_hover: core.white
      },
      blocked_calendar: {
        backgroundColor: core.grayLighter,
        backgroundColor_active: core.grayLighter,
        backgroundColor_hover: core.grayLighter,
        borderColor: core.grayLighter,
        borderColor_active: core.grayLighter,
        borderColor_hover: core.grayLighter,
        color: core.grayLight,
        color_active: core.grayLight,
        color_hover: core.grayLight
      },
      blocked_out_of_range: {
        backgroundColor: core.white,
        backgroundColor_active: core.white,
        backgroundColor_hover: core.white,
        borderColor: core.borderLight,
        borderColor_active: core.borderLight,
        borderColor_hover: core.borderLight,
        color: core.grayLighter,
        color_active: core.grayLighter,
        color_hover: core.grayLighter
      }
    },
    spacing: {
      dayPickerHorizontalPadding: 9,
      captionPaddingTop: 22,
      captionPaddingBottom: 37,
      inputPadding: 0,
      displayTextPaddingVertical: undefined,
      displayTextPaddingTop: 11,
      displayTextPaddingBottom: 9,
      displayTextPaddingHorizontal: undefined,
      displayTextPaddingLeft: 11,
      displayTextPaddingRight: 11,
      displayTextPaddingVertical_small: undefined,
      displayTextPaddingTop_small: 7,
      displayTextPaddingBottom_small: 5,
      displayTextPaddingHorizontal_small: undefined,
      displayTextPaddingLeft_small: 7,
      displayTextPaddingRight_small: 7
    },
    sizing: {
      inputWidth: 130,
      inputWidth_small: 97,
      arrowWidth: 24
    },
    noScrollBarOnVerticalScrollable: false,
    font: {
      size: 14,
      captionSize: 18,
      input: {
        size: 19,
        lineHeight: '24px',
        size_small: 15,
        lineHeight_small: '18px',
        letterSpacing_small: '0.2px',
        styleDisabled: 'italic'
      }
    }
  }
};
exports["default"] = _default;

/***/ }),

/***/ 2933:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es6-shim
var keys = __webpack_require__(2913);
var bind = __webpack_require__(2872);
var canBeObject = function (obj) {
	return typeof obj !== 'undefined' && obj !== null;
};
var hasSymbols = __webpack_require__(2916)();
var toObject = Object;
var push = bind.call(Function.call, Array.prototype.push);
var propIsEnumerable = bind.call(Function.call, Object.prototype.propertyIsEnumerable);
var originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;

module.exports = function assign(target, source1) {
	if (!canBeObject(target)) { throw new TypeError('target must be an object'); }
	var objTarget = toObject(target);
	var s, source, i, props, syms, value, key;
	for (s = 1; s < arguments.length; ++s) {
		source = toObject(arguments[s]);
		props = keys(source);
		var getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);
		if (getSymbols) {
			syms = getSymbols(source);
			for (i = 0; i < syms.length; ++i) {
				key = syms[i];
				if (propIsEnumerable(source, key)) {
					push(props, key);
				}
			}
		}
		for (i = 0; i < props.length; ++i) {
			key = props[i];
			value = source[key];
			if (propIsEnumerable(source, key)) {
				objTarget[key] = value;
			}
		}
	}
	return objTarget;
};


/***/ }),

/***/ 2934:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(2933);

var lacksProperEnumerationOrder = function () {
	if (!Object.assign) {
		return false;
	}
	// v8, specifically in node 4.x, has a bug with incorrect property enumeration order
	// note: this does not detect the bug unless there's 20 characters
	var str = 'abcdefghijklmnopqrst';
	var letters = str.split('');
	var map = {};
	for (var i = 0; i < letters.length; ++i) {
		map[letters[i]] = letters[i];
	}
	var obj = Object.assign({}, map);
	var actual = '';
	for (var k in obj) {
		actual += k;
	}
	return str !== actual;
};

var assignHasPendingExceptions = function () {
	if (!Object.assign || !Object.preventExtensions) {
		return false;
	}
	// Firefox 37 still has "pending exception" logic in its Object.assign implementation,
	// which is 72% slower than our shim, and Firefox 40's native implementation.
	var thrower = Object.preventExtensions({ 1: 2 });
	try {
		Object.assign(thrower, 'xy');
	} catch (e) {
		return thrower[1] === 'y';
	}
	return false;
};

module.exports = function getPolyfill() {
	if (!Object.assign) {
		return implementation;
	}
	if (lacksProperEnumerationOrder()) {
		return implementation;
	}
	if (assignHasPendingExceptions()) {
		return implementation;
	}
	return Object.assign;
};


/***/ }),

/***/ 2935:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getCalendarDaySettings;

var _getPhrase = _interopRequireDefault(__webpack_require__(3050));

var _constants = __webpack_require__(2818);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getCalendarDaySettings(day, ariaLabelFormat, daySize, modifiers, phrases) {
  var chooseAvailableDate = phrases.chooseAvailableDate,
      dateIsUnavailable = phrases.dateIsUnavailable,
      dateIsSelected = phrases.dateIsSelected,
      dateIsSelectedAsStartDate = phrases.dateIsSelectedAsStartDate,
      dateIsSelectedAsEndDate = phrases.dateIsSelectedAsEndDate;
  var daySizeStyles = {
    width: daySize,
    height: daySize - 1
  };
  var useDefaultCursor = modifiers.has('blocked-minimum-nights') || modifiers.has('blocked-calendar') || modifiers.has('blocked-out-of-range');
  var selected = modifiers.has('selected') || modifiers.has('selected-start') || modifiers.has('selected-end');
  var hoveredSpan = !selected && (modifiers.has('hovered-span') || modifiers.has('after-hovered-start'));
  var isOutsideRange = modifiers.has('blocked-out-of-range');
  var formattedDate = {
    date: day.format(ariaLabelFormat)
  };
  var ariaLabel = (0, _getPhrase["default"])(chooseAvailableDate, formattedDate);

  if (selected) {
    if (modifiers.has('selected-start') && dateIsSelectedAsStartDate) {
      ariaLabel = (0, _getPhrase["default"])(dateIsSelectedAsStartDate, formattedDate);
    } else if (modifiers.has('selected-end') && dateIsSelectedAsEndDate) {
      ariaLabel = (0, _getPhrase["default"])(dateIsSelectedAsEndDate, formattedDate);
    } else {
      ariaLabel = (0, _getPhrase["default"])(dateIsSelected, formattedDate);
    }
  } else if (modifiers.has(_constants.BLOCKED_MODIFIER)) {
    ariaLabel = (0, _getPhrase["default"])(dateIsUnavailable, formattedDate);
  }

  return {
    daySizeStyles: daySizeStyles,
    useDefaultCursor: useDefaultCursor,
    selected: selected,
    hoveredSpan: hoveredSpan,
    isOutsideRange: isOutsideRange,
    ariaLabel: ariaLabel
  };
}

/***/ }),

/***/ 2936:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactAddonsShallowCompare = _interopRequireDefault(__webpack_require__(944));

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(0));

var _reactMomentProptypes = _interopRequireDefault(__webpack_require__(2837));

var _airbnbPropTypes = __webpack_require__(2820);

var _reactWithStyles = __webpack_require__(2827);

var _moment = _interopRequireDefault(__webpack_require__(2));

var _defaultPhrases = __webpack_require__(2821);

var _getPhrasePropTypes = _interopRequireDefault(__webpack_require__(2823));

var _CalendarWeek = _interopRequireDefault(__webpack_require__(2904));

var _CalendarDay = _interopRequireDefault(__webpack_require__(2889));

var _calculateDimension = _interopRequireDefault(__webpack_require__(2937));

var _getCalendarMonthWeeks = _interopRequireDefault(__webpack_require__(3052));

var _isSameDay = _interopRequireDefault(__webpack_require__(2849));

var _toISODateString = _interopRequireDefault(__webpack_require__(2874));

var _ModifiersShape = _interopRequireDefault(__webpack_require__(2873));

var _ScrollableOrientationShape = _interopRequireDefault(__webpack_require__(2851));

var _DayOfWeekShape = _interopRequireDefault(__webpack_require__(2843));

var _constants = __webpack_require__(2818);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function () { function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); } return _getPrototypeOf; }(); return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function () { function _setPrototypeOf(o, p) { o.__proto__ = p; return o; } return _setPrototypeOf; }(); return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var propTypes =  false ? undefined : {};
var defaultProps = {
  month: (0, _moment["default"])(),
  horizontalMonthPadding: 13,
  isVisible: true,
  enableOutsideDays: false,
  modifiers: {},
  orientation: _constants.HORIZONTAL_ORIENTATION,
  daySize: _constants.DAY_SIZE,
  onDayClick: function () {
    function onDayClick() {}

    return onDayClick;
  }(),
  onDayMouseEnter: function () {
    function onDayMouseEnter() {}

    return onDayMouseEnter;
  }(),
  onDayMouseLeave: function () {
    function onDayMouseLeave() {}

    return onDayMouseLeave;
  }(),
  onMonthSelect: function () {
    function onMonthSelect() {}

    return onMonthSelect;
  }(),
  onYearSelect: function () {
    function onYearSelect() {}

    return onYearSelect;
  }(),
  renderMonthText: null,
  renderCalendarDay: function () {
    function renderCalendarDay(props) {
      return _react["default"].createElement(_CalendarDay["default"], props);
    }

    return renderCalendarDay;
  }(),
  renderDayContents: null,
  renderMonthElement: null,
  firstDayOfWeek: null,
  setMonthTitleHeight: null,
  focusedDate: null,
  isFocused: false,
  // i18n
  monthFormat: 'MMMM YYYY',
  // english locale
  phrases: _defaultPhrases.CalendarDayPhrases,
  dayAriaLabelFormat: undefined,
  verticalBorderSpacing: undefined
};

var CalendarMonth =
/*#__PURE__*/
function (_ref) {
  _inherits(CalendarMonth, _ref);

  _createClass(CalendarMonth, [{
    key: !_react["default"].PureComponent && "shouldComponentUpdate",
    value: function () {
      function value(nextProps, nextState) {
        return (0, _reactAddonsShallowCompare["default"])(this, nextProps, nextState);
      }

      return value;
    }()
  }]);

  function CalendarMonth(props) {
    var _this;

    _classCallCheck(this, CalendarMonth);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CalendarMonth).call(this, props));
    _this.state = {
      weeks: (0, _getCalendarMonthWeeks["default"])(props.month, props.enableOutsideDays, props.firstDayOfWeek == null ? _moment["default"].localeData().firstDayOfWeek() : props.firstDayOfWeek)
    };
    _this.setCaptionRef = _this.setCaptionRef.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setMonthTitleHeight = _this.setMonthTitleHeight.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(CalendarMonth, [{
    key: "componentDidMount",
    value: function () {
      function componentDidMount() {
        this.setMonthTitleHeightTimeout = setTimeout(this.setMonthTitleHeight, 0);
      }

      return componentDidMount;
    }()
  }, {
    key: "componentWillReceiveProps",
    value: function () {
      function componentWillReceiveProps(nextProps) {
        var month = nextProps.month,
            enableOutsideDays = nextProps.enableOutsideDays,
            firstDayOfWeek = nextProps.firstDayOfWeek;
        var _this$props = this.props,
            prevMonth = _this$props.month,
            prevEnableOutsideDays = _this$props.enableOutsideDays,
            prevFirstDayOfWeek = _this$props.firstDayOfWeek;

        if (!month.isSame(prevMonth) || enableOutsideDays !== prevEnableOutsideDays || firstDayOfWeek !== prevFirstDayOfWeek) {
          this.setState({
            weeks: (0, _getCalendarMonthWeeks["default"])(month, enableOutsideDays, firstDayOfWeek == null ? _moment["default"].localeData().firstDayOfWeek() : firstDayOfWeek)
          });
        }
      }

      return componentWillReceiveProps;
    }()
  }, {
    key: "componentWillUnmount",
    value: function () {
      function componentWillUnmount() {
        if (this.setMonthTitleHeightTimeout) {
          clearTimeout(this.setMonthTitleHeightTimeout);
        }
      }

      return componentWillUnmount;
    }()
  }, {
    key: "setMonthTitleHeight",
    value: function () {
      function setMonthTitleHeight() {
        var setMonthTitleHeight = this.props.setMonthTitleHeight;

        if (setMonthTitleHeight) {
          var captionHeight = (0, _calculateDimension["default"])(this.captionRef, 'height', true, true);
          setMonthTitleHeight(captionHeight);
        }
      }

      return setMonthTitleHeight;
    }()
  }, {
    key: "setCaptionRef",
    value: function () {
      function setCaptionRef(ref) {
        this.captionRef = ref;
      }

      return setCaptionRef;
    }()
  }, {
    key: "render",
    value: function () {
      function render() {
        var _this$props2 = this.props,
            dayAriaLabelFormat = _this$props2.dayAriaLabelFormat,
            daySize = _this$props2.daySize,
            focusedDate = _this$props2.focusedDate,
            horizontalMonthPadding = _this$props2.horizontalMonthPadding,
            isFocused = _this$props2.isFocused,
            isVisible = _this$props2.isVisible,
            modifiers = _this$props2.modifiers,
            month = _this$props2.month,
            monthFormat = _this$props2.monthFormat,
            onDayClick = _this$props2.onDayClick,
            onDayMouseEnter = _this$props2.onDayMouseEnter,
            onDayMouseLeave = _this$props2.onDayMouseLeave,
            onMonthSelect = _this$props2.onMonthSelect,
            onYearSelect = _this$props2.onYearSelect,
            orientation = _this$props2.orientation,
            phrases = _this$props2.phrases,
            renderCalendarDay = _this$props2.renderCalendarDay,
            renderDayContents = _this$props2.renderDayContents,
            renderMonthElement = _this$props2.renderMonthElement,
            renderMonthText = _this$props2.renderMonthText,
            styles = _this$props2.styles,
            verticalBorderSpacing = _this$props2.verticalBorderSpacing;
        var weeks = this.state.weeks;
        var monthTitle = renderMonthText ? renderMonthText(month) : month.format(monthFormat);
        var verticalScrollable = orientation === _constants.VERTICAL_SCROLLABLE;
        return _react["default"].createElement("div", _extends({}, (0, _reactWithStyles.css)(styles.CalendarMonth, {
          padding: "0 ".concat(horizontalMonthPadding, "px")
        }), {
          "data-visible": isVisible
        }), _react["default"].createElement("div", _extends({
          ref: this.setCaptionRef
        }, (0, _reactWithStyles.css)(styles.CalendarMonth_caption, verticalScrollable && styles.CalendarMonth_caption__verticalScrollable)), renderMonthElement ? renderMonthElement({
          month: month,
          onMonthSelect: onMonthSelect,
          onYearSelect: onYearSelect
        }) : _react["default"].createElement("strong", null, monthTitle)), _react["default"].createElement("table", _extends({}, (0, _reactWithStyles.css)(!verticalBorderSpacing && styles.CalendarMonth_table, verticalBorderSpacing && styles.CalendarMonth_verticalSpacing, verticalBorderSpacing && {
          borderSpacing: "0px ".concat(verticalBorderSpacing, "px")
        }), {
          role: "presentation"
        }), _react["default"].createElement("tbody", null, weeks.map(function (week, i) {
          return _react["default"].createElement(_CalendarWeek["default"], {
            key: i
          }, week.map(function (day, dayOfWeek) {
            return renderCalendarDay({
              key: dayOfWeek,
              day: day,
              daySize: daySize,
              isOutsideDay: !day || day.month() !== month.month(),
              tabIndex: isVisible && (0, _isSameDay["default"])(day, focusedDate) ? 0 : -1,
              isFocused: isFocused,
              onDayMouseEnter: onDayMouseEnter,
              onDayMouseLeave: onDayMouseLeave,
              onDayClick: onDayClick,
              renderDayContents: renderDayContents,
              phrases: phrases,
              modifiers: modifiers[(0, _toISODateString["default"])(day)],
              ariaLabelFormat: dayAriaLabelFormat
            });
          }));
        }))));
      }

      return render;
    }()
  }]);

  return CalendarMonth;
}(_react["default"].PureComponent || _react["default"].Component);

CalendarMonth.propTypes =  false ? undefined : {};
CalendarMonth.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref2) {
  var _ref2$reactDates = _ref2.reactDates,
      color = _ref2$reactDates.color,
      font = _ref2$reactDates.font,
      spacing = _ref2$reactDates.spacing;
  return {
    CalendarMonth: {
      background: color.background,
      textAlign: 'center',
      verticalAlign: 'top',
      userSelect: 'none'
    },
    CalendarMonth_table: {
      borderCollapse: 'collapse',
      borderSpacing: 0
    },
    CalendarMonth_verticalSpacing: {
      borderCollapse: 'separate'
    },
    CalendarMonth_caption: {
      color: color.text,
      fontSize: font.captionSize,
      textAlign: 'center',
      paddingTop: spacing.captionPaddingTop,
      paddingBottom: spacing.captionPaddingBottom,
      captionSide: 'initial'
    },
    CalendarMonth_caption__verticalScrollable: {
      paddingTop: 12,
      paddingBottom: 7
    }
  };
}, {
  pureComponent: typeof _react["default"].PureComponent !== 'undefined'
})(CalendarMonth);

exports["default"] = _default;

/***/ }),

/***/ 2937:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = calculateDimension;

function calculateDimension(el, axis) {
  var borderBox = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var withMargin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (!el) {
    return 0;
  }

  var axisStart = axis === 'width' ? 'Left' : 'Top';
  var axisEnd = axis === 'width' ? 'Right' : 'Bottom'; // Only read styles if we need to

  var style = !borderBox || withMargin ? window.getComputedStyle(el) : null; // Offset includes border and padding

  var offsetWidth = el.offsetWidth,
      offsetHeight = el.offsetHeight;
  var size = axis === 'width' ? offsetWidth : offsetHeight; // Get the inner size

  if (!borderBox) {
    size -= parseFloat(style["padding".concat(axisStart)]) + parseFloat(style["padding".concat(axisEnd)]) + parseFloat(style["border".concat(axisStart, "Width")]) + parseFloat(style["border".concat(axisEnd, "Width")]);
  } // Apply margin


  if (withMargin) {
    size += parseFloat(style["margin".concat(axisStart)]) + parseFloat(style["margin".concat(axisEnd)]);
  }

  return size;
}

/***/ }),

/***/ 2938:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactAddonsShallowCompare = _interopRequireDefault(__webpack_require__(944));

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(0));

var _reactMomentProptypes = _interopRequireDefault(__webpack_require__(2837));

var _airbnbPropTypes = __webpack_require__(2820);

var _reactWithStyles = __webpack_require__(2827);

var _moment = _interopRequireDefault(__webpack_require__(2));

var _consolidatedEvents = __webpack_require__(2875);

var _defaultPhrases = __webpack_require__(2821);

var _getPhrasePropTypes = _interopRequireDefault(__webpack_require__(2823));

var _noflip = _interopRequireDefault(__webpack_require__(2842));

var _CalendarMonth = _interopRequireDefault(__webpack_require__(2936));

var _isTransitionEndSupported = _interopRequireDefault(__webpack_require__(3053));

var _getTransformStyles = _interopRequireDefault(__webpack_require__(3054));

var _getCalendarMonthWidth = _interopRequireDefault(__webpack_require__(2939));

var _toISOMonthString = _interopRequireDefault(__webpack_require__(2876));

var _isPrevMonth = _interopRequireDefault(__webpack_require__(3055));

var _isNextMonth = _interopRequireDefault(__webpack_require__(3056));

var _ModifiersShape = _interopRequireDefault(__webpack_require__(2873));

var _ScrollableOrientationShape = _interopRequireDefault(__webpack_require__(2851));

var _DayOfWeekShape = _interopRequireDefault(__webpack_require__(2843));

var _constants = __webpack_require__(2818);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function () { function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); } return _getPrototypeOf; }(); return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function () { function _setPrototypeOf(o, p) { o.__proto__ = p; return o; } return _setPrototypeOf; }(); return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var propTypes =  false ? undefined : {};
var defaultProps = {
  enableOutsideDays: false,
  firstVisibleMonthIndex: 0,
  horizontalMonthPadding: 13,
  initialMonth: (0, _moment["default"])(),
  isAnimating: false,
  numberOfMonths: 1,
  modifiers: {},
  orientation: _constants.HORIZONTAL_ORIENTATION,
  onDayClick: function () {
    function onDayClick() {}

    return onDayClick;
  }(),
  onDayMouseEnter: function () {
    function onDayMouseEnter() {}

    return onDayMouseEnter;
  }(),
  onDayMouseLeave: function () {
    function onDayMouseLeave() {}

    return onDayMouseLeave;
  }(),
  onMonthChange: function () {
    function onMonthChange() {}

    return onMonthChange;
  }(),
  onYearChange: function () {
    function onYearChange() {}

    return onYearChange;
  }(),
  onMonthTransitionEnd: function () {
    function onMonthTransitionEnd() {}

    return onMonthTransitionEnd;
  }(),
  renderMonthText: null,
  renderCalendarDay: undefined,
  renderDayContents: null,
  translationValue: null,
  renderMonthElement: null,
  daySize: _constants.DAY_SIZE,
  focusedDate: null,
  isFocused: false,
  firstDayOfWeek: null,
  setMonthTitleHeight: null,
  isRTL: false,
  transitionDuration: 200,
  verticalBorderSpacing: undefined,
  // i18n
  monthFormat: 'MMMM YYYY',
  // english locale
  phrases: _defaultPhrases.CalendarDayPhrases,
  dayAriaLabelFormat: undefined
};

function getMonths(initialMonth, numberOfMonths, withoutTransitionMonths) {
  var month = initialMonth.clone();
  if (!withoutTransitionMonths) month = month.subtract(1, 'month');
  var months = [];

  for (var i = 0; i < (withoutTransitionMonths ? numberOfMonths : numberOfMonths + 2); i += 1) {
    months.push(month);
    month = month.clone().add(1, 'month');
  }

  return months;
}

var CalendarMonthGrid =
/*#__PURE__*/
function (_ref) {
  _inherits(CalendarMonthGrid, _ref);

  _createClass(CalendarMonthGrid, [{
    key: !_react["default"].PureComponent && "shouldComponentUpdate",
    value: function () {
      function value(nextProps, nextState) {
        return (0, _reactAddonsShallowCompare["default"])(this, nextProps, nextState);
      }

      return value;
    }()
  }]);

  function CalendarMonthGrid(props) {
    var _this;

    _classCallCheck(this, CalendarMonthGrid);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CalendarMonthGrid).call(this, props));
    var withoutTransitionMonths = props.orientation === _constants.VERTICAL_SCROLLABLE;
    _this.state = {
      months: getMonths(props.initialMonth, props.numberOfMonths, withoutTransitionMonths)
    };
    _this.isTransitionEndSupported = (0, _isTransitionEndSupported["default"])();
    _this.onTransitionEnd = _this.onTransitionEnd.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setContainerRef = _this.setContainerRef.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.locale = _moment["default"].locale();
    _this.onMonthSelect = _this.onMonthSelect.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onYearSelect = _this.onYearSelect.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(CalendarMonthGrid, [{
    key: "componentDidMount",
    value: function () {
      function componentDidMount() {
        this.removeEventListener = (0, _consolidatedEvents.addEventListener)(this.container, 'transitionend', this.onTransitionEnd);
      }

      return componentDidMount;
    }()
  }, {
    key: "componentWillReceiveProps",
    value: function () {
      function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        var initialMonth = nextProps.initialMonth,
            numberOfMonths = nextProps.numberOfMonths,
            orientation = nextProps.orientation;
        var months = this.state.months;
        var _this$props = this.props,
            prevInitialMonth = _this$props.initialMonth,
            prevNumberOfMonths = _this$props.numberOfMonths;
        var hasMonthChanged = !prevInitialMonth.isSame(initialMonth, 'month');
        var hasNumberOfMonthsChanged = prevNumberOfMonths !== numberOfMonths;
        var newMonths = months;

        if (hasMonthChanged && !hasNumberOfMonthsChanged) {
          if ((0, _isNextMonth["default"])(prevInitialMonth, initialMonth)) {
            newMonths = months.slice(1);
            newMonths.push(months[months.length - 1].clone().add(1, 'month'));
          } else if ((0, _isPrevMonth["default"])(prevInitialMonth, initialMonth)) {
            newMonths = months.slice(0, months.length - 1);
            newMonths.unshift(months[0].clone().subtract(1, 'month'));
          } else {
            var withoutTransitionMonths = orientation === _constants.VERTICAL_SCROLLABLE;
            newMonths = getMonths(initialMonth, numberOfMonths, withoutTransitionMonths);
          }
        }

        if (hasNumberOfMonthsChanged) {
          var _withoutTransitionMonths = orientation === _constants.VERTICAL_SCROLLABLE;

          newMonths = getMonths(initialMonth, numberOfMonths, _withoutTransitionMonths);
        }

        var momentLocale = _moment["default"].locale();

        if (this.locale !== momentLocale) {
          this.locale = momentLocale;
          newMonths = newMonths.map(function (m) {
            return m.locale(_this2.locale);
          });
        }

        this.setState({
          months: newMonths
        });
      }

      return componentWillReceiveProps;
    }()
  }, {
    key: "componentDidUpdate",
    value: function () {
      function componentDidUpdate() {
        var _this$props2 = this.props,
            isAnimating = _this$props2.isAnimating,
            transitionDuration = _this$props2.transitionDuration,
            onMonthTransitionEnd = _this$props2.onMonthTransitionEnd; // For IE9, immediately call onMonthTransitionEnd instead of
        // waiting for the animation to complete. Similarly, if transitionDuration
        // is set to 0, also immediately invoke the onMonthTransitionEnd callback

        if ((!this.isTransitionEndSupported || !transitionDuration) && isAnimating) {
          onMonthTransitionEnd();
        }
      }

      return componentDidUpdate;
    }()
  }, {
    key: "componentWillUnmount",
    value: function () {
      function componentWillUnmount() {
        if (this.removeEventListener) this.removeEventListener();
      }

      return componentWillUnmount;
    }()
  }, {
    key: "onTransitionEnd",
    value: function () {
      function onTransitionEnd() {
        var onMonthTransitionEnd = this.props.onMonthTransitionEnd;
        onMonthTransitionEnd();
      }

      return onTransitionEnd;
    }()
  }, {
    key: "onMonthSelect",
    value: function () {
      function onMonthSelect(currentMonth, newMonthVal) {
        var newMonth = currentMonth.clone();
        var _this$props3 = this.props,
            onMonthChange = _this$props3.onMonthChange,
            orientation = _this$props3.orientation;
        var months = this.state.months;
        var withoutTransitionMonths = orientation === _constants.VERTICAL_SCROLLABLE;
        var initialMonthSubtraction = months.indexOf(currentMonth);

        if (!withoutTransitionMonths) {
          initialMonthSubtraction -= 1;
        }

        newMonth.set('month', newMonthVal).subtract(initialMonthSubtraction, 'months');
        onMonthChange(newMonth);
      }

      return onMonthSelect;
    }()
  }, {
    key: "onYearSelect",
    value: function () {
      function onYearSelect(currentMonth, newYearVal) {
        var newMonth = currentMonth.clone();
        var _this$props4 = this.props,
            onYearChange = _this$props4.onYearChange,
            orientation = _this$props4.orientation;
        var months = this.state.months;
        var withoutTransitionMonths = orientation === _constants.VERTICAL_SCROLLABLE;
        var initialMonthSubtraction = months.indexOf(currentMonth);

        if (!withoutTransitionMonths) {
          initialMonthSubtraction -= 1;
        }

        newMonth.set('year', newYearVal).subtract(initialMonthSubtraction, 'months');
        onYearChange(newMonth);
      }

      return onYearSelect;
    }()
  }, {
    key: "setContainerRef",
    value: function () {
      function setContainerRef(ref) {
        this.container = ref;
      }

      return setContainerRef;
    }()
  }, {
    key: "render",
    value: function () {
      function render() {
        var _this3 = this;

        var _this$props5 = this.props,
            enableOutsideDays = _this$props5.enableOutsideDays,
            firstVisibleMonthIndex = _this$props5.firstVisibleMonthIndex,
            horizontalMonthPadding = _this$props5.horizontalMonthPadding,
            isAnimating = _this$props5.isAnimating,
            modifiers = _this$props5.modifiers,
            numberOfMonths = _this$props5.numberOfMonths,
            monthFormat = _this$props5.monthFormat,
            orientation = _this$props5.orientation,
            translationValue = _this$props5.translationValue,
            daySize = _this$props5.daySize,
            onDayMouseEnter = _this$props5.onDayMouseEnter,
            onDayMouseLeave = _this$props5.onDayMouseLeave,
            onDayClick = _this$props5.onDayClick,
            renderMonthText = _this$props5.renderMonthText,
            renderCalendarDay = _this$props5.renderCalendarDay,
            renderDayContents = _this$props5.renderDayContents,
            renderMonthElement = _this$props5.renderMonthElement,
            onMonthTransitionEnd = _this$props5.onMonthTransitionEnd,
            firstDayOfWeek = _this$props5.firstDayOfWeek,
            focusedDate = _this$props5.focusedDate,
            isFocused = _this$props5.isFocused,
            isRTL = _this$props5.isRTL,
            styles = _this$props5.styles,
            phrases = _this$props5.phrases,
            dayAriaLabelFormat = _this$props5.dayAriaLabelFormat,
            transitionDuration = _this$props5.transitionDuration,
            verticalBorderSpacing = _this$props5.verticalBorderSpacing,
            setMonthTitleHeight = _this$props5.setMonthTitleHeight;
        var months = this.state.months;
        var isVertical = orientation === _constants.VERTICAL_ORIENTATION;
        var isVerticalScrollable = orientation === _constants.VERTICAL_SCROLLABLE;
        var isHorizontal = orientation === _constants.HORIZONTAL_ORIENTATION;
        var calendarMonthWidth = (0, _getCalendarMonthWidth["default"])(daySize, horizontalMonthPadding);
        var width = isVertical || isVerticalScrollable ? calendarMonthWidth : (numberOfMonths + 2) * calendarMonthWidth;
        var transformType = isVertical || isVerticalScrollable ? 'translateY' : 'translateX';
        var transformValue = "".concat(transformType, "(").concat(translationValue, "px)");
        return _react["default"].createElement("div", _extends({}, (0, _reactWithStyles.css)(styles.CalendarMonthGrid, isHorizontal && styles.CalendarMonthGrid__horizontal, isVertical && styles.CalendarMonthGrid__vertical, isVerticalScrollable && styles.CalendarMonthGrid__vertical_scrollable, isAnimating && styles.CalendarMonthGrid__animating, isAnimating && transitionDuration && {
          transition: "transform ".concat(transitionDuration, "ms ease-in-out")
        }, _objectSpread({}, (0, _getTransformStyles["default"])(transformValue), {
          width: width
        })), {
          ref: this.setContainerRef,
          onTransitionEnd: onMonthTransitionEnd
        }), months.map(function (month, i) {
          var isVisible = i >= firstVisibleMonthIndex && i < firstVisibleMonthIndex + numberOfMonths;
          var hideForAnimation = i === 0 && !isVisible;
          var showForAnimation = i === 0 && isAnimating && isVisible;
          var monthString = (0, _toISOMonthString["default"])(month);
          return _react["default"].createElement("div", _extends({
            key: monthString
          }, (0, _reactWithStyles.css)(isHorizontal && styles.CalendarMonthGrid_month__horizontal, hideForAnimation && styles.CalendarMonthGrid_month__hideForAnimation, showForAnimation && !isVertical && !isRTL && {
            position: 'absolute',
            left: -calendarMonthWidth
          }, showForAnimation && !isVertical && isRTL && {
            position: 'absolute',
            right: 0
          }, showForAnimation && isVertical && {
            position: 'absolute',
            top: -translationValue
          }, !isVisible && !isAnimating && styles.CalendarMonthGrid_month__hidden)), _react["default"].createElement(_CalendarMonth["default"], {
            month: month,
            isVisible: isVisible,
            enableOutsideDays: enableOutsideDays,
            modifiers: modifiers[monthString],
            monthFormat: monthFormat,
            orientation: orientation,
            onDayMouseEnter: onDayMouseEnter,
            onDayMouseLeave: onDayMouseLeave,
            onDayClick: onDayClick,
            onMonthSelect: _this3.onMonthSelect,
            onYearSelect: _this3.onYearSelect,
            renderMonthText: renderMonthText,
            renderCalendarDay: renderCalendarDay,
            renderDayContents: renderDayContents,
            renderMonthElement: renderMonthElement,
            firstDayOfWeek: firstDayOfWeek,
            daySize: daySize,
            focusedDate: isVisible ? focusedDate : null,
            isFocused: isFocused,
            phrases: phrases,
            setMonthTitleHeight: setMonthTitleHeight,
            dayAriaLabelFormat: dayAriaLabelFormat,
            verticalBorderSpacing: verticalBorderSpacing,
            horizontalMonthPadding: horizontalMonthPadding
          }));
        }));
      }

      return render;
    }()
  }]);

  return CalendarMonthGrid;
}(_react["default"].PureComponent || _react["default"].Component);

CalendarMonthGrid.propTypes =  false ? undefined : {};
CalendarMonthGrid.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref2) {
  var _ref2$reactDates = _ref2.reactDates,
      color = _ref2$reactDates.color,
      noScrollBarOnVerticalScrollable = _ref2$reactDates.noScrollBarOnVerticalScrollable,
      spacing = _ref2$reactDates.spacing,
      zIndex = _ref2$reactDates.zIndex;
  return {
    CalendarMonthGrid: {
      background: color.background,
      textAlign: (0, _noflip["default"])('left'),
      zIndex: zIndex
    },
    CalendarMonthGrid__animating: {
      zIndex: zIndex + 1
    },
    CalendarMonthGrid__horizontal: {
      position: 'absolute',
      left: (0, _noflip["default"])(spacing.dayPickerHorizontalPadding)
    },
    CalendarMonthGrid__vertical: {
      margin: '0 auto'
    },
    CalendarMonthGrid__vertical_scrollable: _objectSpread({
      margin: '0 auto',
      overflowY: 'scroll'
    }, noScrollBarOnVerticalScrollable && {
      '-webkitOverflowScrolling': 'touch',
      '::-webkit-scrollbar': {
        '-webkit-appearance': 'none',
        display: 'none'
      }
    }),
    CalendarMonthGrid_month__horizontal: {
      display: 'inline-block',
      verticalAlign: 'top',
      minHeight: '100%'
    },
    CalendarMonthGrid_month__hideForAnimation: {
      position: 'absolute',
      zIndex: zIndex - 1,
      opacity: 0,
      pointerEvents: 'none'
    },
    CalendarMonthGrid_month__hidden: {
      visibility: 'hidden'
    }
  };
}, {
  pureComponent: typeof _react["default"].PureComponent !== 'undefined'
})(CalendarMonthGrid);

exports["default"] = _default;

/***/ }),

/***/ 2939:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getCalendarMonthWidth;

function getCalendarMonthWidth(daySize) {
  var calendarMonthPadding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return 7 * daySize + 2 * calendarMonthPadding + 1;
}

/***/ }),

/***/ 2940:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isSameMonth;

var _moment = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function isSameMonth(a, b) {
  if (!_moment["default"].isMoment(a) || !_moment["default"].isMoment(b)) return false; // Compare least significant, most likely to change units first
  // Moment's isSame clones moment inputs and is a tad slow

  return a.month() === b.month() && a.year() === b.year();
}

/***/ }),

/***/ 2941:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__(2848);
var RequireObjectCoercible = __webpack_require__(2929);
var callBound = __webpack_require__(2862);

var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');

module.exports = function values(O) {
	var obj = RequireObjectCoercible(O);
	var vals = [];
	for (var key in obj) {
		if (has(obj, key) && $isEnumerable(obj, key)) {
			vals.push(obj[key]);
		}
	}
	return vals;
};


/***/ }),

/***/ 2942:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(2941);

module.exports = function getPolyfill() {
	return typeof Object.values === 'function' ? Object.values : implementation;
};


/***/ }),

/***/ 2943:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function contains(other) {
	if (arguments.length < 1) {
		throw new TypeError('1 argument is required');
	}
	if (typeof other !== 'object') {
		throw new TypeError('Argument 1 (”other“) to Node.contains must be an instance of Node');
	}

	var node = other;
	do {
		if (this === node) {
			return true;
		}
		if (node) {
			node = node.parentNode;
		}
	} while (node);

	return false;
};


/***/ }),

/***/ 2944:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(2943);

module.exports = function getPolyfill() {
	if (typeof document !== 'undefined') {
		if (document.contains) {
			return document.contains;
		}
		if (document.body && document.body.contains) {
			return document.body.contains;
		}
	}
	return implementation;
};


/***/ }),

/***/ 2945:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(0));

var _reactMomentProptypes = _interopRequireDefault(__webpack_require__(2837));

var _airbnbPropTypes = __webpack_require__(2820);

var _defaultPhrases = __webpack_require__(2821);

var _getPhrasePropTypes = _interopRequireDefault(__webpack_require__(2823));

var _FocusedInputShape = _interopRequireDefault(__webpack_require__(2946));

var _IconPositionShape = _interopRequireDefault(__webpack_require__(2853));

var _OrientationShape = _interopRequireDefault(__webpack_require__(2947));

var _DisabledShape = _interopRequireDefault(__webpack_require__(2863));

var _AnchorDirectionShape = _interopRequireDefault(__webpack_require__(2948));

var _OpenDirectionShape = _interopRequireDefault(__webpack_require__(2844));

var _DayOfWeekShape = _interopRequireDefault(__webpack_require__(2843));

var _CalendarInfoPositionShape = _interopRequireDefault(__webpack_require__(2864));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  // required props for a functional interactive DateRangePicker
  startDate: _reactMomentProptypes["default"].momentObj,
  endDate: _reactMomentProptypes["default"].momentObj,
  onDatesChange: _propTypes["default"].func.isRequired,
  focusedInput: _FocusedInputShape["default"],
  onFocusChange: _propTypes["default"].func.isRequired,
  onClose: _propTypes["default"].func,
  // input related props
  startDateId: _propTypes["default"].string.isRequired,
  startDatePlaceholderText: _propTypes["default"].string,
  startDateOffset: _propTypes["default"].func,
  endDateOffset: _propTypes["default"].func,
  endDateId: _propTypes["default"].string.isRequired,
  endDatePlaceholderText: _propTypes["default"].string,
  disabled: _DisabledShape["default"],
  required: _propTypes["default"].bool,
  readOnly: _propTypes["default"].bool,
  screenReaderInputMessage: _propTypes["default"].string,
  showClearDates: _propTypes["default"].bool,
  showDefaultInputIcon: _propTypes["default"].bool,
  inputIconPosition: _IconPositionShape["default"],
  customInputIcon: _propTypes["default"].node,
  customArrowIcon: _propTypes["default"].node,
  customCloseIcon: _propTypes["default"].node,
  noBorder: _propTypes["default"].bool,
  block: _propTypes["default"].bool,
  small: _propTypes["default"].bool,
  regular: _propTypes["default"].bool,
  keepFocusOnInput: _propTypes["default"].bool,
  // calendar presentation and interaction related props
  renderMonthText: (0, _airbnbPropTypes.mutuallyExclusiveProps)(_propTypes["default"].func, 'renderMonthText', 'renderMonthElement'),
  renderMonthElement: (0, _airbnbPropTypes.mutuallyExclusiveProps)(_propTypes["default"].func, 'renderMonthText', 'renderMonthElement'),
  orientation: _OrientationShape["default"],
  anchorDirection: _AnchorDirectionShape["default"],
  openDirection: _OpenDirectionShape["default"],
  horizontalMargin: _propTypes["default"].number,
  withPortal: _propTypes["default"].bool,
  withFullScreenPortal: _propTypes["default"].bool,
  appendToBody: _propTypes["default"].bool,
  disableScroll: _propTypes["default"].bool,
  daySize: _airbnbPropTypes.nonNegativeInteger,
  isRTL: _propTypes["default"].bool,
  firstDayOfWeek: _DayOfWeekShape["default"],
  initialVisibleMonth: _propTypes["default"].func,
  numberOfMonths: _propTypes["default"].number,
  keepOpenOnDateSelect: _propTypes["default"].bool,
  reopenPickerOnClearDates: _propTypes["default"].bool,
  renderCalendarInfo: _propTypes["default"].func,
  calendarInfoPosition: _CalendarInfoPositionShape["default"],
  hideKeyboardShortcutsPanel: _propTypes["default"].bool,
  verticalHeight: _airbnbPropTypes.nonNegativeInteger,
  transitionDuration: _airbnbPropTypes.nonNegativeInteger,
  verticalSpacing: _airbnbPropTypes.nonNegativeInteger,
  horizontalMonthPadding: _airbnbPropTypes.nonNegativeInteger,
  // navigation related props
  navPrev: _propTypes["default"].node,
  navNext: _propTypes["default"].node,
  onPrevMonthClick: _propTypes["default"].func,
  onNextMonthClick: _propTypes["default"].func,
  // day presentation and interaction related props
  renderCalendarDay: _propTypes["default"].func,
  renderDayContents: _propTypes["default"].func,
  minimumNights: _propTypes["default"].number,
  enableOutsideDays: _propTypes["default"].bool,
  isDayBlocked: _propTypes["default"].func,
  isOutsideRange: _propTypes["default"].func,
  isDayHighlighted: _propTypes["default"].func,
  // internationalization props
  displayFormat: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  monthFormat: _propTypes["default"].string,
  weekDayFormat: _propTypes["default"].string,
  phrases: _propTypes["default"].shape((0, _getPhrasePropTypes["default"])(_defaultPhrases.DateRangePickerPhrases)),
  dayAriaLabelFormat: _propTypes["default"].string
};
exports["default"] = _default;

/***/ }),

/***/ 2946:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(0));

var _constants = __webpack_require__(2818);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _propTypes["default"].oneOf([_constants.START_DATE, _constants.END_DATE]);

exports["default"] = _default;

/***/ }),

/***/ 2947:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(0));

var _constants = __webpack_require__(2818);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _propTypes["default"].oneOf([_constants.HORIZONTAL_ORIENTATION, _constants.VERTICAL_ORIENTATION]);

exports["default"] = _default;

/***/ }),

/***/ 2948:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(0));

var _constants = __webpack_require__(2818);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _propTypes["default"].oneOf([_constants.ANCHOR_LEFT, _constants.ANCHOR_RIGHT]);

exports["default"] = _default;

/***/ }),

/***/ 2949:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getResponsiveContainerStyles;

var _constants = __webpack_require__(2818);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getResponsiveContainerStyles(anchorDirection, currentOffset, containerEdge, margin) {
  var windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
  var calculatedOffset = anchorDirection === _constants.ANCHOR_LEFT ? windowWidth - containerEdge : containerEdge;
  var calculatedMargin = margin || 0;
  return _defineProperty({}, anchorDirection, Math.min(currentOffset + calculatedOffset - calculatedMargin, 0));
}

/***/ }),

/***/ 2950:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getDetachedContainerStyles;

var _constants = __webpack_require__(2818);

/**
 * Calculate and return a CSS transform style to position a detached element
 * next to a reference element. The open and anchor direction indicate wether
 * it should be positioned above/below and/or to the left/right of the
 * reference element.
 *
 * Assuming r(0,0), r(1,1), d(0,0), d(1,1) for the bottom-left and top-right
 * corners of the reference and detached elements, respectively:
 *  - openDirection = DOWN, anchorDirection = LEFT => d(0,1) == r(0,1)
 *  - openDirection = UP, anchorDirection = LEFT => d(0,0) == r(0,0)
 *  - openDirection = DOWN, anchorDirection = RIGHT => d(1,1) == r(1,1)
 *  - openDirection = UP, anchorDirection = RIGHT => d(1,0) == r(1,0)
 *
 * By using a CSS transform, we allow to further position it using
 * top/bottom CSS properties for the anchor gutter.
 *
 * @param {string} openDirection The vertical positioning of the popup
 * @param {string} anchorDirection The horizontal position of the popup
 * @param {HTMLElement} referenceEl The reference element
 */
function getDetachedContainerStyles(openDirection, anchorDirection, referenceEl) {
  var referenceRect = referenceEl.getBoundingClientRect();
  var offsetX = referenceRect.left;
  var offsetY = referenceRect.top;

  if (openDirection === _constants.OPEN_UP) {
    offsetY = -(window.innerHeight - referenceRect.bottom);
  }

  if (anchorDirection === _constants.ANCHOR_RIGHT) {
    offsetX = -(window.innerWidth - referenceRect.right);
  }

  return {
    transform: "translate3d(".concat(Math.round(offsetX), "px, ").concat(Math.round(offsetY), "px, 0)")
  };
}

/***/ }),

/***/ 2951:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getScrollParent = getScrollParent;
exports.getScrollAncestorsOverflowY = getScrollAncestorsOverflowY;
exports["default"] = disableScroll;

var getScrollingRoot = function getScrollingRoot() {
  return document.scrollingElement || document.documentElement;
};
/**
 * Recursively finds the scroll parent of a node. The scroll parrent of a node
 * is the closest node that is scrollable. A node is scrollable if:
 *  - it is allowed to scroll via CSS ('overflow-y' not visible or hidden);
 *  - and its children/content are "bigger" than the node's box height.
 *
 * The root of the document always scrolls by default.
 *
 * @param {HTMLElement} node Any DOM element.
 * @return {HTMLElement} The scroll parent element.
 */


function getScrollParent(node) {
  var parent = node.parentElement;
  if (parent == null) return getScrollingRoot();

  var _window$getComputedSt = window.getComputedStyle(parent),
      overflowY = _window$getComputedSt.overflowY;

  var canScroll = overflowY !== 'visible' && overflowY !== 'hidden';

  if (canScroll && parent.scrollHeight > parent.clientHeight) {
    return parent;
  }

  return getScrollParent(parent);
}
/**
 * Recursively traverses the tree upwards from the given node, capturing all
 * ancestor nodes that scroll along with their current 'overflow-y' CSS
 * property.
 *
 * @param {HTMLElement} node Any DOM element.
 * @param {Map<HTMLElement,string>} [acc] Accumulator map.
 * @return {Map<HTMLElement,string>} Map of ancestors with their 'overflow-y' value.
 */


function getScrollAncestorsOverflowY(node) {
  var acc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Map();
  var scrollingRoot = getScrollingRoot();
  var scrollParent = getScrollParent(node);
  acc.set(scrollParent, scrollParent.style.overflowY);
  if (scrollParent === scrollingRoot) return acc;
  return getScrollAncestorsOverflowY(scrollParent, acc);
}
/**
 * Disabling the scroll on a node involves finding all the scrollable ancestors
 * and set their 'overflow-y' CSS property to 'hidden'. When all ancestors have
 * 'overflow-y: hidden' (up to the document element) there is no scroll
 * container, thus all the scroll outside of the node is disabled. In order to
 * enable scroll again, we store the previous value of the 'overflow-y' for
 * every ancestor in a closure and reset it back.
 *
 * @param {HTMLElement} node Any DOM element.
 */


function disableScroll(node) {
  var scrollAncestorsOverflowY = getScrollAncestorsOverflowY(node);

  var toggle = function toggle(on) {
    return scrollAncestorsOverflowY.forEach(function (overflowY, ancestor) {
      ancestor.style.setProperty('overflow-y', on ? 'hidden' : overflowY);
    });
  };

  toggle(true);
  return function () {
    return toggle(false);
  };
}

/***/ }),

/***/ 2952:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactAddonsShallowCompare = _interopRequireDefault(__webpack_require__(944));

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(0));

var _moment = _interopRequireDefault(__webpack_require__(2));

var _reactMomentProptypes = _interopRequireDefault(__webpack_require__(2837));

var _airbnbPropTypes = __webpack_require__(2820);

var _OpenDirectionShape = _interopRequireDefault(__webpack_require__(2844));

var _defaultPhrases = __webpack_require__(2821);

var _getPhrasePropTypes = _interopRequireDefault(__webpack_require__(2823));

var _DateRangePickerInput = _interopRequireDefault(__webpack_require__(2953));

var _IconPositionShape = _interopRequireDefault(__webpack_require__(2853));

var _DisabledShape = _interopRequireDefault(__webpack_require__(2863));

var _toMomentObject = _interopRequireDefault(__webpack_require__(2850));

var _toLocalizedDateString = _interopRequireDefault(__webpack_require__(2893));

var _isInclusivelyAfterDay = _interopRequireDefault(__webpack_require__(2854));

var _isBeforeDay = _interopRequireDefault(__webpack_require__(2865));

var _constants = __webpack_require__(2818);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function () { function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); } return _getPrototypeOf; }(); return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function () { function _setPrototypeOf(o, p) { o.__proto__ = p; return o; } return _setPrototypeOf; }(); return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var propTypes =  false ? undefined : {};
var defaultProps = {
  children: null,
  startDate: null,
  startDateId: _constants.START_DATE,
  startDatePlaceholderText: 'Start Date',
  isStartDateFocused: false,
  endDate: null,
  endDateId: _constants.END_DATE,
  endDatePlaceholderText: 'End Date',
  isEndDateFocused: false,
  screenReaderMessage: '',
  showClearDates: false,
  showCaret: false,
  showDefaultInputIcon: false,
  inputIconPosition: _constants.ICON_BEFORE_POSITION,
  disabled: false,
  required: false,
  readOnly: false,
  openDirection: _constants.OPEN_DOWN,
  noBorder: false,
  block: false,
  small: false,
  regular: false,
  verticalSpacing: undefined,
  keepOpenOnDateSelect: false,
  reopenPickerOnClearDates: false,
  withFullScreenPortal: false,
  minimumNights: 1,
  isOutsideRange: function () {
    function isOutsideRange(day) {
      return !(0, _isInclusivelyAfterDay["default"])(day, (0, _moment["default"])());
    }

    return isOutsideRange;
  }(),
  displayFormat: function () {
    function displayFormat() {
      return _moment["default"].localeData().longDateFormat('L');
    }

    return displayFormat;
  }(),
  onFocusChange: function () {
    function onFocusChange() {}

    return onFocusChange;
  }(),
  onClose: function () {
    function onClose() {}

    return onClose;
  }(),
  onDatesChange: function () {
    function onDatesChange() {}

    return onDatesChange;
  }(),
  onKeyDownArrowDown: function () {
    function onKeyDownArrowDown() {}

    return onKeyDownArrowDown;
  }(),
  onKeyDownQuestionMark: function () {
    function onKeyDownQuestionMark() {}

    return onKeyDownQuestionMark;
  }(),
  customInputIcon: null,
  customArrowIcon: null,
  customCloseIcon: null,
  // accessibility
  isFocused: false,
  // i18n
  phrases: _defaultPhrases.DateRangePickerInputPhrases,
  isRTL: false
};

var DateRangePickerInputController =
/*#__PURE__*/
function (_ref) {
  _inherits(DateRangePickerInputController, _ref);

  _createClass(DateRangePickerInputController, [{
    key: !_react["default"].PureComponent && "shouldComponentUpdate",
    value: function () {
      function value(nextProps, nextState) {
        return (0, _reactAddonsShallowCompare["default"])(this, nextProps, nextState);
      }

      return value;
    }()
  }]);

  function DateRangePickerInputController(props) {
    var _this;

    _classCallCheck(this, DateRangePickerInputController);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DateRangePickerInputController).call(this, props));
    _this.onClearFocus = _this.onClearFocus.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onStartDateChange = _this.onStartDateChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onStartDateFocus = _this.onStartDateFocus.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onEndDateChange = _this.onEndDateChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onEndDateFocus = _this.onEndDateFocus.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.clearDates = _this.clearDates.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(DateRangePickerInputController, [{
    key: "onClearFocus",
    value: function () {
      function onClearFocus() {
        var _this$props = this.props,
            onFocusChange = _this$props.onFocusChange,
            onClose = _this$props.onClose,
            startDate = _this$props.startDate,
            endDate = _this$props.endDate;
        onFocusChange(null);
        onClose({
          startDate: startDate,
          endDate: endDate
        });
      }

      return onClearFocus;
    }()
  }, {
    key: "onEndDateChange",
    value: function () {
      function onEndDateChange(endDateString) {
        var _this$props2 = this.props,
            startDate = _this$props2.startDate,
            isOutsideRange = _this$props2.isOutsideRange,
            minimumNights = _this$props2.minimumNights,
            keepOpenOnDateSelect = _this$props2.keepOpenOnDateSelect,
            onDatesChange = _this$props2.onDatesChange;
        var endDate = (0, _toMomentObject["default"])(endDateString, this.getDisplayFormat());
        var isEndDateValid = endDate && !isOutsideRange(endDate) && !(startDate && (0, _isBeforeDay["default"])(endDate, startDate.clone().add(minimumNights, 'days')));

        if (isEndDateValid) {
          onDatesChange({
            startDate: startDate,
            endDate: endDate
          });
          if (!keepOpenOnDateSelect) this.onClearFocus();
        } else {
          onDatesChange({
            startDate: startDate,
            endDate: null
          });
        }
      }

      return onEndDateChange;
    }()
  }, {
    key: "onEndDateFocus",
    value: function () {
      function onEndDateFocus() {
        var _this$props3 = this.props,
            startDate = _this$props3.startDate,
            onFocusChange = _this$props3.onFocusChange,
            withFullScreenPortal = _this$props3.withFullScreenPortal,
            disabled = _this$props3.disabled;

        if (!startDate && withFullScreenPortal && (!disabled || disabled === _constants.END_DATE)) {
          // When the datepicker is full screen, we never want to focus the end date first
          // because there's no indication that that is the case once the datepicker is open and it
          // might confuse the user
          onFocusChange(_constants.START_DATE);
        } else if (!disabled || disabled === _constants.START_DATE) {
          onFocusChange(_constants.END_DATE);
        }
      }

      return onEndDateFocus;
    }()
  }, {
    key: "onStartDateChange",
    value: function () {
      function onStartDateChange(startDateString) {
        var endDate = this.props.endDate;
        var _this$props4 = this.props,
            isOutsideRange = _this$props4.isOutsideRange,
            minimumNights = _this$props4.minimumNights,
            onDatesChange = _this$props4.onDatesChange,
            onFocusChange = _this$props4.onFocusChange,
            disabled = _this$props4.disabled;
        var startDate = (0, _toMomentObject["default"])(startDateString, this.getDisplayFormat());
        var isEndDateBeforeStartDate = startDate && (0, _isBeforeDay["default"])(endDate, startDate.clone().add(minimumNights, 'days'));
        var isStartDateValid = startDate && !isOutsideRange(startDate) && !(disabled === _constants.END_DATE && isEndDateBeforeStartDate);

        if (isStartDateValid) {
          if (isEndDateBeforeStartDate) {
            endDate = null;
          }

          onDatesChange({
            startDate: startDate,
            endDate: endDate
          });
          onFocusChange(_constants.END_DATE);
        } else {
          onDatesChange({
            startDate: null,
            endDate: endDate
          });
        }
      }

      return onStartDateChange;
    }()
  }, {
    key: "onStartDateFocus",
    value: function () {
      function onStartDateFocus() {
        var _this$props5 = this.props,
            disabled = _this$props5.disabled,
            onFocusChange = _this$props5.onFocusChange;

        if (!disabled || disabled === _constants.END_DATE) {
          onFocusChange(_constants.START_DATE);
        }
      }

      return onStartDateFocus;
    }()
  }, {
    key: "getDisplayFormat",
    value: function () {
      function getDisplayFormat() {
        var displayFormat = this.props.displayFormat;
        return typeof displayFormat === 'string' ? displayFormat : displayFormat();
      }

      return getDisplayFormat;
    }()
  }, {
    key: "getDateString",
    value: function () {
      function getDateString(date) {
        var displayFormat = this.getDisplayFormat();

        if (date && displayFormat) {
          return date && date.format(displayFormat);
        }

        return (0, _toLocalizedDateString["default"])(date);
      }

      return getDateString;
    }()
  }, {
    key: "clearDates",
    value: function () {
      function clearDates() {
        var _this$props6 = this.props,
            onDatesChange = _this$props6.onDatesChange,
            reopenPickerOnClearDates = _this$props6.reopenPickerOnClearDates,
            onFocusChange = _this$props6.onFocusChange;
        onDatesChange({
          startDate: null,
          endDate: null
        });

        if (reopenPickerOnClearDates) {
          onFocusChange(_constants.START_DATE);
        }
      }

      return clearDates;
    }()
  }, {
    key: "render",
    value: function () {
      function render() {
        var _this$props7 = this.props,
            children = _this$props7.children,
            startDate = _this$props7.startDate,
            startDateId = _this$props7.startDateId,
            startDatePlaceholderText = _this$props7.startDatePlaceholderText,
            isStartDateFocused = _this$props7.isStartDateFocused,
            endDate = _this$props7.endDate,
            endDateId = _this$props7.endDateId,
            endDatePlaceholderText = _this$props7.endDatePlaceholderText,
            isEndDateFocused = _this$props7.isEndDateFocused,
            screenReaderMessage = _this$props7.screenReaderMessage,
            showClearDates = _this$props7.showClearDates,
            showCaret = _this$props7.showCaret,
            showDefaultInputIcon = _this$props7.showDefaultInputIcon,
            inputIconPosition = _this$props7.inputIconPosition,
            customInputIcon = _this$props7.customInputIcon,
            customArrowIcon = _this$props7.customArrowIcon,
            customCloseIcon = _this$props7.customCloseIcon,
            disabled = _this$props7.disabled,
            required = _this$props7.required,
            readOnly = _this$props7.readOnly,
            openDirection = _this$props7.openDirection,
            isFocused = _this$props7.isFocused,
            phrases = _this$props7.phrases,
            onKeyDownArrowDown = _this$props7.onKeyDownArrowDown,
            onKeyDownQuestionMark = _this$props7.onKeyDownQuestionMark,
            isRTL = _this$props7.isRTL,
            noBorder = _this$props7.noBorder,
            block = _this$props7.block,
            small = _this$props7.small,
            regular = _this$props7.regular,
            verticalSpacing = _this$props7.verticalSpacing;
        var startDateString = this.getDateString(startDate);
        var endDateString = this.getDateString(endDate);
        return _react["default"].createElement(_DateRangePickerInput["default"], {
          startDate: startDateString,
          startDateId: startDateId,
          startDatePlaceholderText: startDatePlaceholderText,
          isStartDateFocused: isStartDateFocused,
          endDate: endDateString,
          endDateId: endDateId,
          endDatePlaceholderText: endDatePlaceholderText,
          isEndDateFocused: isEndDateFocused,
          isFocused: isFocused,
          disabled: disabled,
          required: required,
          readOnly: readOnly,
          openDirection: openDirection,
          showCaret: showCaret,
          showDefaultInputIcon: showDefaultInputIcon,
          inputIconPosition: inputIconPosition,
          customInputIcon: customInputIcon,
          customArrowIcon: customArrowIcon,
          customCloseIcon: customCloseIcon,
          phrases: phrases,
          onStartDateChange: this.onStartDateChange,
          onStartDateFocus: this.onStartDateFocus,
          onStartDateShiftTab: this.onClearFocus,
          onEndDateChange: this.onEndDateChange,
          onEndDateFocus: this.onEndDateFocus,
          showClearDates: showClearDates,
          onClearDates: this.clearDates,
          screenReaderMessage: screenReaderMessage,
          onKeyDownArrowDown: onKeyDownArrowDown,
          onKeyDownQuestionMark: onKeyDownQuestionMark,
          isRTL: isRTL,
          noBorder: noBorder,
          block: block,
          small: small,
          regular: regular,
          verticalSpacing: verticalSpacing
        }, children);
      }

      return render;
    }()
  }]);

  return DateRangePickerInputController;
}(_react["default"].PureComponent || _react["default"].Component);

exports["default"] = DateRangePickerInputController;
DateRangePickerInputController.propTypes =  false ? undefined : {};
DateRangePickerInputController.defaultProps = defaultProps;

/***/ }),

/***/ 2953:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(0));

var _airbnbPropTypes = __webpack_require__(2820);

var _reactWithStyles = __webpack_require__(2827);

var _defaultPhrases = __webpack_require__(2821);

var _getPhrasePropTypes = _interopRequireDefault(__webpack_require__(2823));

var _noflip = _interopRequireDefault(__webpack_require__(2842));

var _OpenDirectionShape = _interopRequireDefault(__webpack_require__(2844));

var _DateInput = _interopRequireDefault(__webpack_require__(2954));

var _IconPositionShape = _interopRequireDefault(__webpack_require__(2853));

var _DisabledShape = _interopRequireDefault(__webpack_require__(2863));

var _RightArrow = _interopRequireDefault(__webpack_require__(2955));

var _LeftArrow = _interopRequireDefault(__webpack_require__(2956));

var _CloseButton = _interopRequireDefault(__webpack_require__(2866));

var _CalendarIcon = _interopRequireDefault(__webpack_require__(2957));

var _constants = __webpack_require__(2818);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var propTypes =  false ? undefined : {};
var defaultProps = {
  children: null,
  startDateId: _constants.START_DATE,
  endDateId: _constants.END_DATE,
  startDatePlaceholderText: 'Start Date',
  endDatePlaceholderText: 'End Date',
  screenReaderMessage: '',
  onStartDateFocus: function () {
    function onStartDateFocus() {}

    return onStartDateFocus;
  }(),
  onEndDateFocus: function () {
    function onEndDateFocus() {}

    return onEndDateFocus;
  }(),
  onStartDateChange: function () {
    function onStartDateChange() {}

    return onStartDateChange;
  }(),
  onEndDateChange: function () {
    function onEndDateChange() {}

    return onEndDateChange;
  }(),
  onStartDateShiftTab: function () {
    function onStartDateShiftTab() {}

    return onStartDateShiftTab;
  }(),
  onEndDateTab: function () {
    function onEndDateTab() {}

    return onEndDateTab;
  }(),
  onClearDates: function () {
    function onClearDates() {}

    return onClearDates;
  }(),
  onKeyDownArrowDown: function () {
    function onKeyDownArrowDown() {}

    return onKeyDownArrowDown;
  }(),
  onKeyDownQuestionMark: function () {
    function onKeyDownQuestionMark() {}

    return onKeyDownQuestionMark;
  }(),
  startDate: '',
  endDate: '',
  isStartDateFocused: false,
  isEndDateFocused: false,
  showClearDates: false,
  disabled: false,
  required: false,
  readOnly: false,
  openDirection: _constants.OPEN_DOWN,
  showCaret: false,
  showDefaultInputIcon: false,
  inputIconPosition: _constants.ICON_BEFORE_POSITION,
  customInputIcon: null,
  customArrowIcon: null,
  customCloseIcon: null,
  noBorder: false,
  block: false,
  small: false,
  regular: false,
  verticalSpacing: undefined,
  // accessibility
  isFocused: false,
  // i18n
  phrases: _defaultPhrases.DateRangePickerInputPhrases,
  isRTL: false
};

function DateRangePickerInput(_ref) {
  var children = _ref.children,
      startDate = _ref.startDate,
      startDateId = _ref.startDateId,
      startDatePlaceholderText = _ref.startDatePlaceholderText,
      screenReaderMessage = _ref.screenReaderMessage,
      isStartDateFocused = _ref.isStartDateFocused,
      onStartDateChange = _ref.onStartDateChange,
      onStartDateFocus = _ref.onStartDateFocus,
      onStartDateShiftTab = _ref.onStartDateShiftTab,
      endDate = _ref.endDate,
      endDateId = _ref.endDateId,
      endDatePlaceholderText = _ref.endDatePlaceholderText,
      isEndDateFocused = _ref.isEndDateFocused,
      onEndDateChange = _ref.onEndDateChange,
      onEndDateFocus = _ref.onEndDateFocus,
      onEndDateTab = _ref.onEndDateTab,
      onKeyDownArrowDown = _ref.onKeyDownArrowDown,
      onKeyDownQuestionMark = _ref.onKeyDownQuestionMark,
      onClearDates = _ref.onClearDates,
      showClearDates = _ref.showClearDates,
      disabled = _ref.disabled,
      required = _ref.required,
      readOnly = _ref.readOnly,
      showCaret = _ref.showCaret,
      openDirection = _ref.openDirection,
      showDefaultInputIcon = _ref.showDefaultInputIcon,
      inputIconPosition = _ref.inputIconPosition,
      customInputIcon = _ref.customInputIcon,
      customArrowIcon = _ref.customArrowIcon,
      customCloseIcon = _ref.customCloseIcon,
      isFocused = _ref.isFocused,
      phrases = _ref.phrases,
      isRTL = _ref.isRTL,
      noBorder = _ref.noBorder,
      block = _ref.block,
      verticalSpacing = _ref.verticalSpacing,
      small = _ref.small,
      regular = _ref.regular,
      styles = _ref.styles;

  var calendarIcon = customInputIcon || _react["default"].createElement(_CalendarIcon["default"], (0, _reactWithStyles.css)(styles.DateRangePickerInput_calendarIcon_svg));

  var arrowIcon = customArrowIcon || _react["default"].createElement(_RightArrow["default"], (0, _reactWithStyles.css)(styles.DateRangePickerInput_arrow_svg));

  if (isRTL) arrowIcon = _react["default"].createElement(_LeftArrow["default"], (0, _reactWithStyles.css)(styles.DateRangePickerInput_arrow_svg));
  if (small) arrowIcon = '-';

  var closeIcon = customCloseIcon || _react["default"].createElement(_CloseButton["default"], (0, _reactWithStyles.css)(styles.DateRangePickerInput_clearDates_svg, small && styles.DateRangePickerInput_clearDates_svg__small));

  var screenReaderText = screenReaderMessage || phrases.keyboardNavigationInstructions;

  var inputIcon = (showDefaultInputIcon || customInputIcon !== null) && _react["default"].createElement("button", _extends({}, (0, _reactWithStyles.css)(styles.DateRangePickerInput_calendarIcon), {
    type: "button",
    disabled: disabled,
    "aria-label": phrases.focusStartDate,
    onClick: onKeyDownArrowDown
  }), calendarIcon);

  var startDateDisabled = disabled === _constants.START_DATE || disabled === true;
  var endDateDisabled = disabled === _constants.END_DATE || disabled === true;
  return _react["default"].createElement("div", (0, _reactWithStyles.css)(styles.DateRangePickerInput, disabled && styles.DateRangePickerInput__disabled, isRTL && styles.DateRangePickerInput__rtl, !noBorder && styles.DateRangePickerInput__withBorder, block && styles.DateRangePickerInput__block, showClearDates && styles.DateRangePickerInput__showClearDates), inputIconPosition === _constants.ICON_BEFORE_POSITION && inputIcon, _react["default"].createElement(_DateInput["default"], {
    id: startDateId,
    placeholder: startDatePlaceholderText,
    displayValue: startDate,
    screenReaderMessage: screenReaderText,
    focused: isStartDateFocused,
    isFocused: isFocused,
    disabled: startDateDisabled,
    required: required,
    readOnly: readOnly,
    showCaret: showCaret,
    openDirection: openDirection,
    onChange: onStartDateChange,
    onFocus: onStartDateFocus,
    onKeyDownShiftTab: onStartDateShiftTab,
    onKeyDownArrowDown: onKeyDownArrowDown,
    onKeyDownQuestionMark: onKeyDownQuestionMark,
    verticalSpacing: verticalSpacing,
    small: small,
    regular: regular
  }), _react["default"].createElement("div", _extends({}, (0, _reactWithStyles.css)(styles.DateRangePickerInput_arrow), {
    "aria-hidden": "true",
    role: "presentation"
  }), arrowIcon), isStartDateFocused && children, _react["default"].createElement(_DateInput["default"], {
    id: endDateId,
    placeholder: endDatePlaceholderText,
    displayValue: endDate,
    screenReaderMessage: screenReaderText,
    focused: isEndDateFocused,
    isFocused: isFocused,
    disabled: endDateDisabled,
    required: required,
    readOnly: readOnly,
    showCaret: showCaret,
    openDirection: openDirection,
    onChange: onEndDateChange,
    onFocus: onEndDateFocus,
    onKeyDownArrowDown: onKeyDownArrowDown,
    onKeyDownQuestionMark: onKeyDownQuestionMark,
    onKeyDownTab: onEndDateTab,
    verticalSpacing: verticalSpacing,
    small: small,
    regular: regular
  }), isEndDateFocused && children, showClearDates && _react["default"].createElement("button", _extends({
    type: "button",
    "aria-label": phrases.clearDates
  }, (0, _reactWithStyles.css)(styles.DateRangePickerInput_clearDates, small && styles.DateRangePickerInput_clearDates__small, !customCloseIcon && styles.DateRangePickerInput_clearDates_default, !(startDate || endDate) && styles.DateRangePickerInput_clearDates__hide), {
    onClick: onClearDates,
    disabled: disabled
  }), closeIcon), inputIconPosition === _constants.ICON_AFTER_POSITION && inputIcon);
}

DateRangePickerInput.propTypes =  false ? undefined : {};
DateRangePickerInput.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref2) {
  var _ref2$reactDates = _ref2.reactDates,
      border = _ref2$reactDates.border,
      color = _ref2$reactDates.color,
      sizing = _ref2$reactDates.sizing;
  return {
    DateRangePickerInput: {
      backgroundColor: color.background,
      display: 'inline-block'
    },
    DateRangePickerInput__disabled: {
      background: color.disabled
    },
    DateRangePickerInput__withBorder: {
      borderColor: color.border,
      borderWidth: border.pickerInput.borderWidth,
      borderStyle: border.pickerInput.borderStyle,
      borderRadius: border.pickerInput.borderRadius
    },
    DateRangePickerInput__rtl: {
      direction: (0, _noflip["default"])('rtl')
    },
    DateRangePickerInput__block: {
      display: 'block'
    },
    DateRangePickerInput__showClearDates: {
      paddingRight: 30 // TODO: should be noflip wrapped and handled by an isRTL prop

    },
    DateRangePickerInput_arrow: {
      display: 'inline-block',
      verticalAlign: 'middle',
      color: color.text
    },
    DateRangePickerInput_arrow_svg: {
      verticalAlign: 'middle',
      fill: color.text,
      height: sizing.arrowWidth,
      width: sizing.arrowWidth
    },
    DateRangePickerInput_clearDates: {
      background: 'none',
      border: 0,
      color: 'inherit',
      font: 'inherit',
      lineHeight: 'normal',
      overflow: 'visible',
      cursor: 'pointer',
      padding: 10,
      margin: '0 10px 0 5px',
      // TODO: should be noflip wrapped and handled by an isRTL prop
      position: 'absolute',
      right: 0,
      // TODO: should be noflip wrapped and handled by an isRTL prop
      top: '50%',
      transform: 'translateY(-50%)'
    },
    DateRangePickerInput_clearDates__small: {
      padding: 6
    },
    DateRangePickerInput_clearDates_default: {
      ':focus': {
        background: color.core.border,
        borderRadius: '50%'
      },
      ':hover': {
        background: color.core.border,
        borderRadius: '50%'
      }
    },
    DateRangePickerInput_clearDates__hide: {
      visibility: 'hidden'
    },
    DateRangePickerInput_clearDates_svg: {
      fill: color.core.grayLight,
      height: 12,
      width: 15,
      verticalAlign: 'middle'
    },
    DateRangePickerInput_clearDates_svg__small: {
      height: 9
    },
    DateRangePickerInput_calendarIcon: {
      background: 'none',
      border: 0,
      color: 'inherit',
      font: 'inherit',
      lineHeight: 'normal',
      overflow: 'visible',
      cursor: 'pointer',
      display: 'inline-block',
      verticalAlign: 'middle',
      padding: 10,
      margin: '0 5px 0 10px' // TODO: should be noflip wrapped and handled by an isRTL prop

    },
    DateRangePickerInput_calendarIcon_svg: {
      fill: color.core.grayLight,
      height: 15,
      width: 14,
      verticalAlign: 'middle'
    }
  };
}, {
  pureComponent: typeof _react["default"].PureComponent !== 'undefined'
})(DateRangePickerInput);

exports["default"] = _default;

/***/ }),

/***/ 2954:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactAddonsShallowCompare = _interopRequireDefault(__webpack_require__(944));

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(0));

var _airbnbPropTypes = __webpack_require__(2820);

var _reactWithStyles = __webpack_require__(2827);

var _throttle = _interopRequireDefault(__webpack_require__(954));

var _isTouchDevice = _interopRequireDefault(__webpack_require__(2852));

var _noflip = _interopRequireDefault(__webpack_require__(2842));

var _getInputHeight = _interopRequireDefault(__webpack_require__(2892));

var _OpenDirectionShape = _interopRequireDefault(__webpack_require__(2844));

var _constants = __webpack_require__(2818);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function () { function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); } return _getPrototypeOf; }(); return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function () { function _setPrototypeOf(o, p) { o.__proto__ = p; return o; } return _setPrototypeOf; }(); return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FANG_PATH_TOP = "M0,".concat(_constants.FANG_HEIGHT_PX, " ").concat(_constants.FANG_WIDTH_PX, ",").concat(_constants.FANG_HEIGHT_PX, " ").concat(_constants.FANG_WIDTH_PX / 2, ",0z");
var FANG_STROKE_TOP = "M0,".concat(_constants.FANG_HEIGHT_PX, " ").concat(_constants.FANG_WIDTH_PX / 2, ",0 ").concat(_constants.FANG_WIDTH_PX, ",").concat(_constants.FANG_HEIGHT_PX);
var FANG_PATH_BOTTOM = "M0,0 ".concat(_constants.FANG_WIDTH_PX, ",0 ").concat(_constants.FANG_WIDTH_PX / 2, ",").concat(_constants.FANG_HEIGHT_PX, "z");
var FANG_STROKE_BOTTOM = "M0,0 ".concat(_constants.FANG_WIDTH_PX / 2, ",").concat(_constants.FANG_HEIGHT_PX, " ").concat(_constants.FANG_WIDTH_PX, ",0");
var propTypes =  false ? undefined : {};
var defaultProps = {
  placeholder: 'Select Date',
  displayValue: '',
  screenReaderMessage: '',
  focused: false,
  disabled: false,
  required: false,
  readOnly: null,
  openDirection: _constants.OPEN_DOWN,
  showCaret: false,
  verticalSpacing: _constants.DEFAULT_VERTICAL_SPACING,
  small: false,
  block: false,
  regular: false,
  onChange: function () {
    function onChange() {}

    return onChange;
  }(),
  onFocus: function () {
    function onFocus() {}

    return onFocus;
  }(),
  onKeyDownShiftTab: function () {
    function onKeyDownShiftTab() {}

    return onKeyDownShiftTab;
  }(),
  onKeyDownTab: function () {
    function onKeyDownTab() {}

    return onKeyDownTab;
  }(),
  onKeyDownArrowDown: function () {
    function onKeyDownArrowDown() {}

    return onKeyDownArrowDown;
  }(),
  onKeyDownQuestionMark: function () {
    function onKeyDownQuestionMark() {}

    return onKeyDownQuestionMark;
  }(),
  // accessibility
  isFocused: false
};

var DateInput =
/*#__PURE__*/
function (_ref) {
  _inherits(DateInput, _ref);

  _createClass(DateInput, [{
    key: !_react["default"].PureComponent && "shouldComponentUpdate",
    value: function () {
      function value(nextProps, nextState) {
        return (0, _reactAddonsShallowCompare["default"])(this, nextProps, nextState);
      }

      return value;
    }()
  }]);

  function DateInput(props) {
    var _this;

    _classCallCheck(this, DateInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DateInput).call(this, props));
    _this.state = {
      dateString: '',
      isTouchDevice: false
    };
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setInputRef = _this.setInputRef.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.throttledKeyDown = (0, _throttle["default"])(_this.onFinalKeyDown, 300, {
      trailing: false
    });
    return _this;
  }

  _createClass(DateInput, [{
    key: "componentDidMount",
    value: function () {
      function componentDidMount() {
        this.setState({
          isTouchDevice: (0, _isTouchDevice["default"])()
        });
      }

      return componentDidMount;
    }()
  }, {
    key: "componentWillReceiveProps",
    value: function () {
      function componentWillReceiveProps(nextProps) {
        var dateString = this.state.dateString;

        if (dateString && nextProps.displayValue) {
          this.setState({
            dateString: ''
          });
        }
      }

      return componentWillReceiveProps;
    }()
  }, {
    key: "componentDidUpdate",
    value: function () {
      function componentDidUpdate(prevProps) {
        var _this$props = this.props,
            focused = _this$props.focused,
            isFocused = _this$props.isFocused;
        if (prevProps.focused === focused && prevProps.isFocused === isFocused) return;

        if (focused && isFocused) {
          this.inputRef.focus();
        }
      }

      return componentDidUpdate;
    }()
  }, {
    key: "onChange",
    value: function () {
      function onChange(e) {
        var _this$props2 = this.props,
            onChange = _this$props2.onChange,
            onKeyDownQuestionMark = _this$props2.onKeyDownQuestionMark;
        var dateString = e.target.value; // In Safari, onKeyDown does not consistently fire ahead of onChange. As a result, we need to
        // special case the `?` key so that it always triggers the appropriate callback, instead of
        // modifying the input value

        if (dateString[dateString.length - 1] === '?') {
          onKeyDownQuestionMark(e);
        } else {
          this.setState({
            dateString: dateString
          }, function () {
            return onChange(dateString);
          });
        }
      }

      return onChange;
    }()
  }, {
    key: "onKeyDown",
    value: function () {
      function onKeyDown(e) {
        e.stopPropagation();

        if (!_constants.MODIFIER_KEY_NAMES.has(e.key)) {
          this.throttledKeyDown(e);
        }
      }

      return onKeyDown;
    }()
  }, {
    key: "onFinalKeyDown",
    value: function () {
      function onFinalKeyDown(e) {
        var _this$props3 = this.props,
            onKeyDownShiftTab = _this$props3.onKeyDownShiftTab,
            onKeyDownTab = _this$props3.onKeyDownTab,
            onKeyDownArrowDown = _this$props3.onKeyDownArrowDown,
            onKeyDownQuestionMark = _this$props3.onKeyDownQuestionMark;
        var key = e.key;

        if (key === 'Tab') {
          if (e.shiftKey) {
            onKeyDownShiftTab(e);
          } else {
            onKeyDownTab(e);
          }
        } else if (key === 'ArrowDown') {
          onKeyDownArrowDown(e);
        } else if (key === '?') {
          e.preventDefault();
          onKeyDownQuestionMark(e);
        }
      }

      return onFinalKeyDown;
    }()
  }, {
    key: "setInputRef",
    value: function () {
      function setInputRef(ref) {
        this.inputRef = ref;
      }

      return setInputRef;
    }()
  }, {
    key: "render",
    value: function () {
      function render() {
        var _this$state = this.state,
            dateString = _this$state.dateString,
            isTouch = _this$state.isTouchDevice;
        var _this$props4 = this.props,
            id = _this$props4.id,
            placeholder = _this$props4.placeholder,
            displayValue = _this$props4.displayValue,
            screenReaderMessage = _this$props4.screenReaderMessage,
            focused = _this$props4.focused,
            showCaret = _this$props4.showCaret,
            onFocus = _this$props4.onFocus,
            disabled = _this$props4.disabled,
            required = _this$props4.required,
            readOnly = _this$props4.readOnly,
            openDirection = _this$props4.openDirection,
            verticalSpacing = _this$props4.verticalSpacing,
            small = _this$props4.small,
            regular = _this$props4.regular,
            block = _this$props4.block,
            styles = _this$props4.styles,
            reactDates = _this$props4.theme.reactDates;
        var value = dateString || displayValue || '';
        var screenReaderMessageId = "DateInput__screen-reader-message-".concat(id);
        var withFang = showCaret && focused;
        var inputHeight = (0, _getInputHeight["default"])(reactDates, small);
        return _react["default"].createElement("div", (0, _reactWithStyles.css)(styles.DateInput, small && styles.DateInput__small, block && styles.DateInput__block, withFang && styles.DateInput__withFang, disabled && styles.DateInput__disabled, withFang && openDirection === _constants.OPEN_DOWN && styles.DateInput__openDown, withFang && openDirection === _constants.OPEN_UP && styles.DateInput__openUp), _react["default"].createElement("input", _extends({}, (0, _reactWithStyles.css)(styles.DateInput_input, small && styles.DateInput_input__small, regular && styles.DateInput_input__regular, readOnly && styles.DateInput_input__readOnly, focused && styles.DateInput_input__focused, disabled && styles.DateInput_input__disabled), {
          "aria-label": placeholder,
          type: "text",
          id: id,
          name: id,
          ref: this.setInputRef,
          value: value,
          onChange: this.onChange,
          onKeyDown: this.onKeyDown,
          onFocus: onFocus,
          placeholder: placeholder,
          autoComplete: "off",
          disabled: disabled,
          readOnly: typeof readOnly === 'boolean' ? readOnly : isTouch,
          required: required,
          "aria-describedby": screenReaderMessage && screenReaderMessageId
        })), withFang && _react["default"].createElement("svg", _extends({
          role: "presentation",
          focusable: "false"
        }, (0, _reactWithStyles.css)(styles.DateInput_fang, openDirection === _constants.OPEN_DOWN && {
          top: inputHeight + verticalSpacing - _constants.FANG_HEIGHT_PX - 1
        }, openDirection === _constants.OPEN_UP && {
          bottom: inputHeight + verticalSpacing - _constants.FANG_HEIGHT_PX - 1
        })), _react["default"].createElement("path", _extends({}, (0, _reactWithStyles.css)(styles.DateInput_fangShape), {
          d: openDirection === _constants.OPEN_DOWN ? FANG_PATH_TOP : FANG_PATH_BOTTOM
        })), _react["default"].createElement("path", _extends({}, (0, _reactWithStyles.css)(styles.DateInput_fangStroke), {
          d: openDirection === _constants.OPEN_DOWN ? FANG_STROKE_TOP : FANG_STROKE_BOTTOM
        }))), screenReaderMessage && _react["default"].createElement("p", _extends({}, (0, _reactWithStyles.css)(styles.DateInput_screenReaderMessage), {
          id: screenReaderMessageId
        }), screenReaderMessage));
      }

      return render;
    }()
  }]);

  return DateInput;
}(_react["default"].PureComponent || _react["default"].Component);

DateInput.propTypes =  false ? undefined : {};
DateInput.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref2) {
  var _ref2$reactDates = _ref2.reactDates,
      border = _ref2$reactDates.border,
      color = _ref2$reactDates.color,
      sizing = _ref2$reactDates.sizing,
      spacing = _ref2$reactDates.spacing,
      font = _ref2$reactDates.font,
      zIndex = _ref2$reactDates.zIndex;
  return {
    DateInput: {
      margin: 0,
      padding: spacing.inputPadding,
      background: color.background,
      position: 'relative',
      display: 'inline-block',
      width: sizing.inputWidth,
      verticalAlign: 'middle'
    },
    DateInput__small: {
      width: sizing.inputWidth_small
    },
    DateInput__block: {
      width: '100%'
    },
    DateInput__disabled: {
      background: color.disabled,
      color: color.textDisabled
    },
    DateInput_input: {
      fontWeight: 200,
      fontSize: font.input.size,
      lineHeight: font.input.lineHeight,
      color: color.text,
      backgroundColor: color.background,
      width: '100%',
      padding: "".concat(spacing.displayTextPaddingVertical, "px ").concat(spacing.displayTextPaddingHorizontal, "px"),
      paddingTop: spacing.displayTextPaddingTop,
      paddingBottom: spacing.displayTextPaddingBottom,
      paddingLeft: (0, _noflip["default"])(spacing.displayTextPaddingLeft),
      paddingRight: (0, _noflip["default"])(spacing.displayTextPaddingRight),
      border: border.input.border,
      borderTop: border.input.borderTop,
      borderRight: (0, _noflip["default"])(border.input.borderRight),
      borderBottom: border.input.borderBottom,
      borderLeft: (0, _noflip["default"])(border.input.borderLeft),
      borderRadius: border.input.borderRadius
    },
    DateInput_input__small: {
      fontSize: font.input.size_small,
      lineHeight: font.input.lineHeight_small,
      letterSpacing: font.input.letterSpacing_small,
      padding: "".concat(spacing.displayTextPaddingVertical_small, "px ").concat(spacing.displayTextPaddingHorizontal_small, "px"),
      paddingTop: spacing.displayTextPaddingTop_small,
      paddingBottom: spacing.displayTextPaddingBottom_small,
      paddingLeft: (0, _noflip["default"])(spacing.displayTextPaddingLeft_small),
      paddingRight: (0, _noflip["default"])(spacing.displayTextPaddingRight_small)
    },
    DateInput_input__regular: {
      fontWeight: 'auto'
    },
    DateInput_input__readOnly: {
      userSelect: 'none'
    },
    DateInput_input__focused: {
      outline: border.input.outlineFocused,
      background: color.backgroundFocused,
      border: border.input.borderFocused,
      borderTop: border.input.borderTopFocused,
      borderRight: (0, _noflip["default"])(border.input.borderRightFocused),
      borderBottom: border.input.borderBottomFocused,
      borderLeft: (0, _noflip["default"])(border.input.borderLeftFocused)
    },
    DateInput_input__disabled: {
      background: color.disabled,
      fontStyle: font.input.styleDisabled
    },
    DateInput_screenReaderMessage: {
      border: 0,
      clip: 'rect(0, 0, 0, 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      width: 1
    },
    DateInput_fang: {
      position: 'absolute',
      width: _constants.FANG_WIDTH_PX,
      height: _constants.FANG_HEIGHT_PX,
      left: 22,
      // TODO: should be noflip wrapped and handled by an isRTL prop
      zIndex: zIndex + 2
    },
    DateInput_fangShape: {
      fill: color.background
    },
    DateInput_fangStroke: {
      stroke: color.core.border,
      fill: 'transparent'
    }
  };
}, {
  pureComponent: typeof _react["default"].PureComponent !== 'undefined'
})(DateInput);

exports["default"] = _default;

/***/ }),

/***/ 2955:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RightArrow = function () {
  function RightArrow(props) {
    return _react["default"].createElement("svg", props, _react["default"].createElement("path", {
      d: "M694.4 242.4l249.1 249.1c11 11 11 21 0 32L694.4 772.7c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210.1-210.1H67.1c-13 0-23-10-23-23s10-23 23-23h805.4L662.4 274.5c-21-21.1 11-53.1 32-32.1z"
    }));
  }

  return RightArrow;
}();

RightArrow.defaultProps = {
  focusable: "false",
  viewBox: "0 0 1000 1000"
};
var _default = RightArrow;
exports["default"] = _default;

/***/ }),

/***/ 2956:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LeftArrow = function () {
  function LeftArrow(props) {
    return _react["default"].createElement("svg", props, _react["default"].createElement("path", {
      d: "M336.2 274.5l-210.1 210h805.4c13 0 23 10 23 23s-10 23-23 23H126.1l210.1 210.1c11 11 11 21 0 32-5 5-10 7-16 7s-11-2-16-7l-249.1-249c-11-11-11-21 0-32l249.1-249.1c21-21.1 53 10.9 32 32z"
    }));
  }

  return LeftArrow;
}();

LeftArrow.defaultProps = {
  focusable: "false",
  viewBox: "0 0 1000 1000"
};
var _default = LeftArrow;
exports["default"] = _default;

/***/ }),

/***/ 2957:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CalendarIcon = function () {
  function CalendarIcon(props) {
    return _react["default"].createElement("svg", props, _react["default"].createElement("path", {
      d: "M107.2 1392.9h241.1v-241.1H107.2v241.1zm294.7 0h267.9v-241.1H401.9v241.1zm-294.7-294.7h241.1V830.4H107.2v267.8zm294.7 0h267.9V830.4H401.9v267.8zM107.2 776.8h241.1V535.7H107.2v241.1zm616.2 616.1h267.9v-241.1H723.4v241.1zM401.9 776.8h267.9V535.7H401.9v241.1zm642.9 616.1H1286v-241.1h-241.1v241.1zm-321.4-294.7h267.9V830.4H723.4v267.8zM428.7 375V133.9c0-7.3-2.7-13.5-8-18.8-5.3-5.3-11.6-8-18.8-8h-53.6c-7.3 0-13.5 2.7-18.8 8-5.3 5.3-8 11.6-8 18.8V375c0 7.3 2.7 13.5 8 18.8 5.3 5.3 11.6 8 18.8 8h53.6c7.3 0 13.5-2.7 18.8-8 5.3-5.3 8-11.5 8-18.8zm616.1 723.2H1286V830.4h-241.1v267.8zM723.4 776.8h267.9V535.7H723.4v241.1zm321.4 0H1286V535.7h-241.1v241.1zm26.8-401.8V133.9c0-7.3-2.7-13.5-8-18.8-5.3-5.3-11.6-8-18.8-8h-53.6c-7.3 0-13.5 2.7-18.8 8-5.3 5.3-8 11.6-8 18.8V375c0 7.3 2.7 13.5 8 18.8 5.3 5.3 11.6 8 18.8 8h53.6c7.3 0 13.5-2.7 18.8-8 5.4-5.3 8-11.5 8-18.8zm321.5-53.6v1071.4c0 29-10.6 54.1-31.8 75.3-21.2 21.2-46.3 31.8-75.3 31.8H107.2c-29 0-54.1-10.6-75.3-31.8C10.6 1447 0 1421.9 0 1392.9V321.4c0-29 10.6-54.1 31.8-75.3s46.3-31.8 75.3-31.8h107.2v-80.4c0-36.8 13.1-68.4 39.3-94.6S311.4 0 348.3 0h53.6c36.8 0 68.4 13.1 94.6 39.3 26.2 26.2 39.3 57.8 39.3 94.6v80.4h321.5v-80.4c0-36.8 13.1-68.4 39.3-94.6C922.9 13.1 954.4 0 991.3 0h53.6c36.8 0 68.4 13.1 94.6 39.3s39.3 57.8 39.3 94.6v80.4H1286c29 0 54.1 10.6 75.3 31.8 21.2 21.2 31.8 46.3 31.8 75.3z"
    }));
  }

  return CalendarIcon;
}();

CalendarIcon.defaultProps = {
  focusable: "false",
  viewBox: "0 0 1393.1 1500"
};
var _default = CalendarIcon;
exports["default"] = _default;

/***/ }),

/***/ 2958:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactAddonsShallowCompare = _interopRequireDefault(__webpack_require__(944));

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(0));

var _reactMomentProptypes = _interopRequireDefault(__webpack_require__(2837));

var _airbnbPropTypes = __webpack_require__(2820);

var _moment = _interopRequireDefault(__webpack_require__(2));

var _object = _interopRequireDefault(__webpack_require__(2891));

var _isTouchDevice = _interopRequireDefault(__webpack_require__(2852));

var _defaultPhrases = __webpack_require__(2821);

var _getPhrasePropTypes = _interopRequireDefault(__webpack_require__(2823));

var _isInclusivelyAfterDay = _interopRequireDefault(__webpack_require__(2854));

var _isNextDay = _interopRequireDefault(__webpack_require__(2959));

var _isSameDay = _interopRequireDefault(__webpack_require__(2849));

var _isAfterDay = _interopRequireDefault(__webpack_require__(2877));

var _isBeforeDay = _interopRequireDefault(__webpack_require__(2865));

var _getVisibleDays = _interopRequireDefault(__webpack_require__(2960));

var _isDayVisible = _interopRequireDefault(__webpack_require__(2894));

var _getSelectedDateOffset = _interopRequireDefault(__webpack_require__(3062));

var _toISODateString = _interopRequireDefault(__webpack_require__(2874));

var _toISOMonthString = _interopRequireDefault(__webpack_require__(2876));

var _DisabledShape = _interopRequireDefault(__webpack_require__(2863));

var _FocusedInputShape = _interopRequireDefault(__webpack_require__(2946));

var _ScrollableOrientationShape = _interopRequireDefault(__webpack_require__(2851));

var _DayOfWeekShape = _interopRequireDefault(__webpack_require__(2843));

var _CalendarInfoPositionShape = _interopRequireDefault(__webpack_require__(2864));

var _constants = __webpack_require__(2818);

var _DayPicker = _interopRequireDefault(__webpack_require__(2895));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function () { function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); } return _getPrototypeOf; }(); return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function () { function _setPrototypeOf(o, p) { o.__proto__ = p; return o; } return _setPrototypeOf; }(); return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var propTypes =  false ? undefined : {};
var defaultProps = {
  startDate: undefined,
  // TODO: use null
  endDate: undefined,
  // TODO: use null
  minDate: null,
  maxDate: null,
  onDatesChange: function () {
    function onDatesChange() {}

    return onDatesChange;
  }(),
  startDateOffset: undefined,
  endDateOffset: undefined,
  focusedInput: null,
  onFocusChange: function () {
    function onFocusChange() {}

    return onFocusChange;
  }(),
  onClose: function () {
    function onClose() {}

    return onClose;
  }(),
  keepOpenOnDateSelect: false,
  minimumNights: 1,
  disabled: false,
  isOutsideRange: function () {
    function isOutsideRange() {}

    return isOutsideRange;
  }(),
  isDayBlocked: function () {
    function isDayBlocked() {}

    return isDayBlocked;
  }(),
  isDayHighlighted: function () {
    function isDayHighlighted() {}

    return isDayHighlighted;
  }(),
  // DayPicker props
  renderMonthText: null,
  enableOutsideDays: false,
  numberOfMonths: 1,
  orientation: _constants.HORIZONTAL_ORIENTATION,
  withPortal: false,
  hideKeyboardShortcutsPanel: false,
  initialVisibleMonth: null,
  daySize: _constants.DAY_SIZE,
  navPrev: null,
  navNext: null,
  noNavButtons: false,
  onPrevMonthClick: function () {
    function onPrevMonthClick() {}

    return onPrevMonthClick;
  }(),
  onNextMonthClick: function () {
    function onNextMonthClick() {}

    return onNextMonthClick;
  }(),
  onOutsideClick: function () {
    function onOutsideClick() {}

    return onOutsideClick;
  }(),
  renderCalendarDay: undefined,
  renderDayContents: null,
  renderCalendarInfo: null,
  renderMonthElement: null,
  calendarInfoPosition: _constants.INFO_POSITION_BOTTOM,
  firstDayOfWeek: null,
  verticalHeight: null,
  noBorder: false,
  transitionDuration: undefined,
  verticalBorderSpacing: undefined,
  horizontalMonthPadding: 13,
  // accessibility
  onBlur: function () {
    function onBlur() {}

    return onBlur;
  }(),
  isFocused: false,
  showKeyboardShortcuts: false,
  onTab: function () {
    function onTab() {}

    return onTab;
  }(),
  onShiftTab: function () {
    function onShiftTab() {}

    return onShiftTab;
  }(),
  // i18n
  monthFormat: 'MMMM YYYY',
  weekDayFormat: 'dd',
  phrases: _defaultPhrases.DayPickerPhrases,
  dayAriaLabelFormat: undefined,
  isRTL: false
};

var getChooseAvailableDatePhrase = function getChooseAvailableDatePhrase(phrases, focusedInput) {
  if (focusedInput === _constants.START_DATE) {
    return phrases.chooseAvailableStartDate;
  }

  if (focusedInput === _constants.END_DATE) {
    return phrases.chooseAvailableEndDate;
  }

  return phrases.chooseAvailableDate;
};

var DayPickerRangeController =
/*#__PURE__*/
function (_ref) {
  _inherits(DayPickerRangeController, _ref);

  _createClass(DayPickerRangeController, [{
    key: !_react["default"].PureComponent && "shouldComponentUpdate",
    value: function () {
      function value(nextProps, nextState) {
        return (0, _reactAddonsShallowCompare["default"])(this, nextProps, nextState);
      }

      return value;
    }()
  }]);

  function DayPickerRangeController(props) {
    var _this;

    _classCallCheck(this, DayPickerRangeController);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DayPickerRangeController).call(this, props));
    _this.isTouchDevice = (0, _isTouchDevice["default"])();
    _this.today = (0, _moment["default"])();
    _this.modifiers = {
      today: function () {
        function today(day) {
          return _this.isToday(day);
        }

        return today;
      }(),
      blocked: function () {
        function blocked(day) {
          return _this.isBlocked(day);
        }

        return blocked;
      }(),
      'blocked-calendar': function () {
        function blockedCalendar(day) {
          return props.isDayBlocked(day);
        }

        return blockedCalendar;
      }(),
      'blocked-out-of-range': function () {
        function blockedOutOfRange(day) {
          return props.isOutsideRange(day);
        }

        return blockedOutOfRange;
      }(),
      'highlighted-calendar': function () {
        function highlightedCalendar(day) {
          return props.isDayHighlighted(day);
        }

        return highlightedCalendar;
      }(),
      valid: function () {
        function valid(day) {
          return !_this.isBlocked(day);
        }

        return valid;
      }(),
      'selected-start': function () {
        function selectedStart(day) {
          return _this.isStartDate(day);
        }

        return selectedStart;
      }(),
      'selected-end': function () {
        function selectedEnd(day) {
          return _this.isEndDate(day);
        }

        return selectedEnd;
      }(),
      'blocked-minimum-nights': function () {
        function blockedMinimumNights(day) {
          return _this.doesNotMeetMinimumNights(day);
        }

        return blockedMinimumNights;
      }(),
      'selected-span': function () {
        function selectedSpan(day) {
          return _this.isInSelectedSpan(day);
        }

        return selectedSpan;
      }(),
      'last-in-range': function () {
        function lastInRange(day) {
          return _this.isLastInRange(day);
        }

        return lastInRange;
      }(),
      hovered: function () {
        function hovered(day) {
          return _this.isHovered(day);
        }

        return hovered;
      }(),
      'hovered-span': function () {
        function hoveredSpan(day) {
          return _this.isInHoveredSpan(day);
        }

        return hoveredSpan;
      }(),
      'hovered-offset': function () {
        function hoveredOffset(day) {
          return _this.isInHoveredSpan(day);
        }

        return hoveredOffset;
      }(),
      'after-hovered-start': function () {
        function afterHoveredStart(day) {
          return _this.isDayAfterHoveredStartDate(day);
        }

        return afterHoveredStart;
      }(),
      'first-day-of-week': function () {
        function firstDayOfWeek(day) {
          return _this.isFirstDayOfWeek(day);
        }

        return firstDayOfWeek;
      }(),
      'last-day-of-week': function () {
        function lastDayOfWeek(day) {
          return _this.isLastDayOfWeek(day);
        }

        return lastDayOfWeek;
      }()
    };

    var _this$getStateForNewM = _this.getStateForNewMonth(props),
        currentMonth = _this$getStateForNewM.currentMonth,
        visibleDays = _this$getStateForNewM.visibleDays; // initialize phrases
    // set the appropriate CalendarDay phrase based on focusedInput


    var chooseAvailableDate = getChooseAvailableDatePhrase(props.phrases, props.focusedInput);
    _this.state = {
      hoverDate: null,
      currentMonth: currentMonth,
      phrases: _objectSpread({}, props.phrases, {
        chooseAvailableDate: chooseAvailableDate
      }),
      visibleDays: visibleDays,
      disablePrev: _this.shouldDisableMonthNavigation(props.minDate, currentMonth),
      disableNext: _this.shouldDisableMonthNavigation(props.maxDate, currentMonth)
    };
    _this.onDayClick = _this.onDayClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onDayMouseEnter = _this.onDayMouseEnter.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onDayMouseLeave = _this.onDayMouseLeave.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onPrevMonthClick = _this.onPrevMonthClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onNextMonthClick = _this.onNextMonthClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onMonthChange = _this.onMonthChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onYearChange = _this.onYearChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onMultiplyScrollableMonths = _this.onMultiplyScrollableMonths.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.getFirstFocusableDay = _this.getFirstFocusableDay.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(DayPickerRangeController, [{
    key: "componentWillReceiveProps",
    value: function () {
      function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        var startDate = nextProps.startDate,
            endDate = nextProps.endDate,
            focusedInput = nextProps.focusedInput,
            minimumNights = nextProps.minimumNights,
            isOutsideRange = nextProps.isOutsideRange,
            isDayBlocked = nextProps.isDayBlocked,
            isDayHighlighted = nextProps.isDayHighlighted,
            phrases = nextProps.phrases,
            initialVisibleMonth = nextProps.initialVisibleMonth,
            numberOfMonths = nextProps.numberOfMonths,
            enableOutsideDays = nextProps.enableOutsideDays;
        var _this$props = this.props,
            prevStartDate = _this$props.startDate,
            prevEndDate = _this$props.endDate,
            prevFocusedInput = _this$props.focusedInput,
            prevMinimumNights = _this$props.minimumNights,
            prevIsOutsideRange = _this$props.isOutsideRange,
            prevIsDayBlocked = _this$props.isDayBlocked,
            prevIsDayHighlighted = _this$props.isDayHighlighted,
            prevPhrases = _this$props.phrases,
            prevInitialVisibleMonth = _this$props.initialVisibleMonth,
            prevNumberOfMonths = _this$props.numberOfMonths,
            prevEnableOutsideDays = _this$props.enableOutsideDays;
        var visibleDays = this.state.visibleDays;
        var recomputeOutsideRange = false;
        var recomputeDayBlocked = false;
        var recomputeDayHighlighted = false;

        if (isOutsideRange !== prevIsOutsideRange) {
          this.modifiers['blocked-out-of-range'] = function (day) {
            return isOutsideRange(day);
          };

          recomputeOutsideRange = true;
        }

        if (isDayBlocked !== prevIsDayBlocked) {
          this.modifiers['blocked-calendar'] = function (day) {
            return isDayBlocked(day);
          };

          recomputeDayBlocked = true;
        }

        if (isDayHighlighted !== prevIsDayHighlighted) {
          this.modifiers['highlighted-calendar'] = function (day) {
            return isDayHighlighted(day);
          };

          recomputeDayHighlighted = true;
        }

        var recomputePropModifiers = recomputeOutsideRange || recomputeDayBlocked || recomputeDayHighlighted;
        var didStartDateChange = startDate !== prevStartDate;
        var didEndDateChange = endDate !== prevEndDate;
        var didFocusChange = focusedInput !== prevFocusedInput;

        if (numberOfMonths !== prevNumberOfMonths || enableOutsideDays !== prevEnableOutsideDays || initialVisibleMonth !== prevInitialVisibleMonth && !prevFocusedInput && didFocusChange) {
          var newMonthState = this.getStateForNewMonth(nextProps);
          var currentMonth = newMonthState.currentMonth;
          visibleDays = newMonthState.visibleDays;
          this.setState({
            currentMonth: currentMonth,
            visibleDays: visibleDays
          });
        }

        var modifiers = {};

        if (didStartDateChange) {
          modifiers = this.deleteModifier(modifiers, prevStartDate, 'selected-start');
          modifiers = this.addModifier(modifiers, startDate, 'selected-start');

          if (prevStartDate) {
            var startSpan = prevStartDate.clone().add(1, 'day');
            var endSpan = prevStartDate.clone().add(prevMinimumNights + 1, 'days');
            modifiers = this.deleteModifierFromRange(modifiers, startSpan, endSpan, 'after-hovered-start');
          }
        }

        if (didEndDateChange) {
          modifiers = this.deleteModifier(modifiers, prevEndDate, 'selected-end');
          modifiers = this.addModifier(modifiers, endDate, 'selected-end');
        }

        if (didStartDateChange || didEndDateChange) {
          if (prevStartDate && prevEndDate) {
            modifiers = this.deleteModifierFromRange(modifiers, prevStartDate, prevEndDate.clone().add(1, 'day'), 'selected-span');
          }

          if (startDate && endDate) {
            modifiers = this.deleteModifierFromRange(modifiers, startDate, endDate.clone().add(1, 'day'), 'hovered-span');
            modifiers = this.addModifierToRange(modifiers, startDate.clone().add(1, 'day'), endDate, 'selected-span');
          }
        }

        if (!this.isTouchDevice && didStartDateChange && startDate && !endDate) {
          var _startSpan = startDate.clone().add(1, 'day');

          var _endSpan = startDate.clone().add(minimumNights + 1, 'days');

          modifiers = this.addModifierToRange(modifiers, _startSpan, _endSpan, 'after-hovered-start');
        }

        if (prevMinimumNights > 0) {
          if (didFocusChange || didStartDateChange || minimumNights !== prevMinimumNights) {
            var _startSpan2 = prevStartDate || this.today;

            modifiers = this.deleteModifierFromRange(modifiers, _startSpan2, _startSpan2.clone().add(prevMinimumNights, 'days'), 'blocked-minimum-nights');
            modifiers = this.deleteModifierFromRange(modifiers, _startSpan2, _startSpan2.clone().add(prevMinimumNights, 'days'), 'blocked');
          }
        }

        if (didFocusChange || recomputePropModifiers) {
          (0, _object["default"])(visibleDays).forEach(function (days) {
            Object.keys(days).forEach(function (day) {
              var momentObj = (0, _moment["default"])(day);
              var isBlocked = false;

              if (didFocusChange || recomputeOutsideRange) {
                if (isOutsideRange(momentObj)) {
                  modifiers = _this2.addModifier(modifiers, momentObj, 'blocked-out-of-range');
                  isBlocked = true;
                } else {
                  modifiers = _this2.deleteModifier(modifiers, momentObj, 'blocked-out-of-range');
                }
              }

              if (didFocusChange || recomputeDayBlocked) {
                if (isDayBlocked(momentObj)) {
                  modifiers = _this2.addModifier(modifiers, momentObj, 'blocked-calendar');
                  isBlocked = true;
                } else {
                  modifiers = _this2.deleteModifier(modifiers, momentObj, 'blocked-calendar');
                }
              }

              if (isBlocked) {
                modifiers = _this2.addModifier(modifiers, momentObj, 'blocked');
              } else {
                modifiers = _this2.deleteModifier(modifiers, momentObj, 'blocked');
              }

              if (didFocusChange || recomputeDayHighlighted) {
                if (isDayHighlighted(momentObj)) {
                  modifiers = _this2.addModifier(modifiers, momentObj, 'highlighted-calendar');
                } else {
                  modifiers = _this2.deleteModifier(modifiers, momentObj, 'highlighted-calendar');
                }
              }
            });
          });
        }

        if (minimumNights > 0 && startDate && focusedInput === _constants.END_DATE) {
          modifiers = this.addModifierToRange(modifiers, startDate, startDate.clone().add(minimumNights, 'days'), 'blocked-minimum-nights');
          modifiers = this.addModifierToRange(modifiers, startDate, startDate.clone().add(minimumNights, 'days'), 'blocked');
        }

        var today = (0, _moment["default"])();

        if (!(0, _isSameDay["default"])(this.today, today)) {
          modifiers = this.deleteModifier(modifiers, this.today, 'today');
          modifiers = this.addModifier(modifiers, today, 'today');
          this.today = today;
        }

        if (Object.keys(modifiers).length > 0) {
          this.setState({
            visibleDays: _objectSpread({}, visibleDays, modifiers)
          });
        }

        if (didFocusChange || phrases !== prevPhrases) {
          // set the appropriate CalendarDay phrase based on focusedInput
          var chooseAvailableDate = getChooseAvailableDatePhrase(phrases, focusedInput);
          this.setState({
            phrases: _objectSpread({}, phrases, {
              chooseAvailableDate: chooseAvailableDate
            })
          });
        }
      }

      return componentWillReceiveProps;
    }()
  }, {
    key: "onDayClick",
    value: function () {
      function onDayClick(day, e) {
        var _this$props2 = this.props,
            keepOpenOnDateSelect = _this$props2.keepOpenOnDateSelect,
            minimumNights = _this$props2.minimumNights,
            onBlur = _this$props2.onBlur,
            focusedInput = _this$props2.focusedInput,
            onFocusChange = _this$props2.onFocusChange,
            onClose = _this$props2.onClose,
            onDatesChange = _this$props2.onDatesChange,
            startDateOffset = _this$props2.startDateOffset,
            endDateOffset = _this$props2.endDateOffset,
            disabled = _this$props2.disabled;
        if (e) e.preventDefault();
        if (this.isBlocked(day)) return;
        var _this$props3 = this.props,
            startDate = _this$props3.startDate,
            endDate = _this$props3.endDate;

        if (startDateOffset || endDateOffset) {
          startDate = (0, _getSelectedDateOffset["default"])(startDateOffset, day);
          endDate = (0, _getSelectedDateOffset["default"])(endDateOffset, day);

          if (this.isBlocked(startDate) || this.isBlocked(endDate)) {
            return;
          }

          if (!keepOpenOnDateSelect) {
            onFocusChange(null);
            onClose({
              startDate: startDate,
              endDate: endDate
            });
          }
        } else if (focusedInput === _constants.START_DATE) {
          var lastAllowedStartDate = endDate && endDate.clone().subtract(minimumNights, 'days');
          var isStartDateAfterEndDate = (0, _isBeforeDay["default"])(lastAllowedStartDate, day) || (0, _isAfterDay["default"])(startDate, endDate);
          var isEndDateDisabled = disabled === _constants.END_DATE;

          if (!isEndDateDisabled || !isStartDateAfterEndDate) {
            startDate = day;

            if (isStartDateAfterEndDate) {
              endDate = null;
            }
          }

          if (isEndDateDisabled && !isStartDateAfterEndDate) {
            onFocusChange(null);
            onClose({
              startDate: startDate,
              endDate: endDate
            });
          } else if (!isEndDateDisabled) {
            onFocusChange(_constants.END_DATE);
          }
        } else if (focusedInput === _constants.END_DATE) {
          var firstAllowedEndDate = startDate && startDate.clone().add(minimumNights, 'days');

          if (!startDate) {
            endDate = day;
            onFocusChange(_constants.START_DATE);
          } else if ((0, _isInclusivelyAfterDay["default"])(day, firstAllowedEndDate)) {
            endDate = day;

            if (!keepOpenOnDateSelect) {
              onFocusChange(null);
              onClose({
                startDate: startDate,
                endDate: endDate
              });
            }
          } else if (disabled !== _constants.START_DATE) {
            startDate = day;
            endDate = null;
          }
        }

        onDatesChange({
          startDate: startDate,
          endDate: endDate
        });
        onBlur();
      }

      return onDayClick;
    }()
  }, {
    key: "onDayMouseEnter",
    value: function () {
      function onDayMouseEnter(day) {
        /* eslint react/destructuring-assignment: 1 */
        if (this.isTouchDevice) return;
        var _this$props4 = this.props,
            startDate = _this$props4.startDate,
            endDate = _this$props4.endDate,
            focusedInput = _this$props4.focusedInput,
            minimumNights = _this$props4.minimumNights,
            startDateOffset = _this$props4.startDateOffset,
            endDateOffset = _this$props4.endDateOffset;
        var _this$state = this.state,
            hoverDate = _this$state.hoverDate,
            visibleDays = _this$state.visibleDays,
            dateOffset = _this$state.dateOffset;
        var nextDateOffset = null;

        if (focusedInput) {
          var hasOffset = startDateOffset || endDateOffset;
          var modifiers = {};

          if (hasOffset) {
            var start = (0, _getSelectedDateOffset["default"])(startDateOffset, day);
            var end = (0, _getSelectedDateOffset["default"])(endDateOffset, day, function (rangeDay) {
              return rangeDay.add(1, 'day');
            });
            nextDateOffset = {
              start: start,
              end: end
            }; // eslint-disable-next-line react/destructuring-assignment

            if (dateOffset && dateOffset.start && dateOffset.end) {
              modifiers = this.deleteModifierFromRange(modifiers, dateOffset.start, dateOffset.end, 'hovered-offset');
            }

            modifiers = this.addModifierToRange(modifiers, start, end, 'hovered-offset');
          }

          if (!hasOffset) {
            modifiers = this.deleteModifier(modifiers, hoverDate, 'hovered');
            modifiers = this.addModifier(modifiers, day, 'hovered');

            if (startDate && !endDate && focusedInput === _constants.END_DATE) {
              if ((0, _isAfterDay["default"])(hoverDate, startDate)) {
                var endSpan = hoverDate.clone().add(1, 'day');
                modifiers = this.deleteModifierFromRange(modifiers, startDate, endSpan, 'hovered-span');
              }

              if (!this.isBlocked(day) && (0, _isAfterDay["default"])(day, startDate)) {
                var _endSpan2 = day.clone().add(1, 'day');

                modifiers = this.addModifierToRange(modifiers, startDate, _endSpan2, 'hovered-span');
              }
            }

            if (!startDate && endDate && focusedInput === _constants.START_DATE) {
              if ((0, _isBeforeDay["default"])(hoverDate, endDate)) {
                modifiers = this.deleteModifierFromRange(modifiers, hoverDate, endDate, 'hovered-span');
              }

              if (!this.isBlocked(day) && (0, _isBeforeDay["default"])(day, endDate)) {
                modifiers = this.addModifierToRange(modifiers, day, endDate, 'hovered-span');
              }
            }

            if (startDate) {
              var startSpan = startDate.clone().add(1, 'day');

              var _endSpan3 = startDate.clone().add(minimumNights + 1, 'days');

              modifiers = this.deleteModifierFromRange(modifiers, startSpan, _endSpan3, 'after-hovered-start');

              if ((0, _isSameDay["default"])(day, startDate)) {
                var newStartSpan = startDate.clone().add(1, 'day');
                var newEndSpan = startDate.clone().add(minimumNights + 1, 'days');
                modifiers = this.addModifierToRange(modifiers, newStartSpan, newEndSpan, 'after-hovered-start');
              }
            }
          }

          this.setState({
            hoverDate: day,
            dateOffset: nextDateOffset,
            visibleDays: _objectSpread({}, visibleDays, modifiers)
          });
        }
      }

      return onDayMouseEnter;
    }()
  }, {
    key: "onDayMouseLeave",
    value: function () {
      function onDayMouseLeave(day) {
        var _this$props5 = this.props,
            startDate = _this$props5.startDate,
            endDate = _this$props5.endDate,
            minimumNights = _this$props5.minimumNights;
        var _this$state2 = this.state,
            hoverDate = _this$state2.hoverDate,
            visibleDays = _this$state2.visibleDays,
            dateOffset = _this$state2.dateOffset;
        if (this.isTouchDevice || !hoverDate) return;
        var modifiers = {};
        modifiers = this.deleteModifier(modifiers, hoverDate, 'hovered');

        if (dateOffset) {
          modifiers = this.deleteModifierFromRange(modifiers, dateOffset.start, dateOffset.end, 'hovered-offset');
        }

        if (startDate && !endDate && (0, _isAfterDay["default"])(hoverDate, startDate)) {
          var endSpan = hoverDate.clone().add(1, 'day');
          modifiers = this.deleteModifierFromRange(modifiers, startDate, endSpan, 'hovered-span');
        }

        if (!startDate && endDate && (0, _isAfterDay["default"])(endDate, hoverDate)) {
          modifiers = this.deleteModifierFromRange(modifiers, hoverDate, endDate, 'hovered-span');
        }

        if (startDate && (0, _isSameDay["default"])(day, startDate)) {
          var startSpan = startDate.clone().add(1, 'day');

          var _endSpan4 = startDate.clone().add(minimumNights + 1, 'days');

          modifiers = this.deleteModifierFromRange(modifiers, startSpan, _endSpan4, 'after-hovered-start');
        }

        this.setState({
          hoverDate: null,
          visibleDays: _objectSpread({}, visibleDays, modifiers)
        });
      }

      return onDayMouseLeave;
    }()
  }, {
    key: "onPrevMonthClick",
    value: function () {
      function onPrevMonthClick() {
        var _this$props6 = this.props,
            enableOutsideDays = _this$props6.enableOutsideDays,
            maxDate = _this$props6.maxDate,
            minDate = _this$props6.minDate,
            numberOfMonths = _this$props6.numberOfMonths,
            onPrevMonthClick = _this$props6.onPrevMonthClick;
        var _this$state3 = this.state,
            currentMonth = _this$state3.currentMonth,
            visibleDays = _this$state3.visibleDays;
        var newVisibleDays = {};
        Object.keys(visibleDays).sort().slice(0, numberOfMonths + 1).forEach(function (month) {
          newVisibleDays[month] = visibleDays[month];
        });
        var prevMonth = currentMonth.clone().subtract(2, 'months');
        var prevMonthVisibleDays = (0, _getVisibleDays["default"])(prevMonth, 1, enableOutsideDays, true);
        var newCurrentMonth = currentMonth.clone().subtract(1, 'month');
        this.setState({
          currentMonth: newCurrentMonth,
          disablePrev: this.shouldDisableMonthNavigation(minDate, newCurrentMonth),
          disableNext: this.shouldDisableMonthNavigation(maxDate, newCurrentMonth),
          visibleDays: _objectSpread({}, newVisibleDays, this.getModifiers(prevMonthVisibleDays))
        }, function () {
          onPrevMonthClick(newCurrentMonth.clone());
        });
      }

      return onPrevMonthClick;
    }()
  }, {
    key: "onNextMonthClick",
    value: function () {
      function onNextMonthClick() {
        var _this$props7 = this.props,
            enableOutsideDays = _this$props7.enableOutsideDays,
            maxDate = _this$props7.maxDate,
            minDate = _this$props7.minDate,
            numberOfMonths = _this$props7.numberOfMonths,
            onNextMonthClick = _this$props7.onNextMonthClick;
        var _this$state4 = this.state,
            currentMonth = _this$state4.currentMonth,
            visibleDays = _this$state4.visibleDays;
        var newVisibleDays = {};
        Object.keys(visibleDays).sort().slice(1).forEach(function (month) {
          newVisibleDays[month] = visibleDays[month];
        });
        var nextMonth = currentMonth.clone().add(numberOfMonths + 1, 'month');
        var nextMonthVisibleDays = (0, _getVisibleDays["default"])(nextMonth, 1, enableOutsideDays, true);
        var newCurrentMonth = currentMonth.clone().add(1, 'month');
        this.setState({
          currentMonth: newCurrentMonth,
          disablePrev: this.shouldDisableMonthNavigation(minDate, newCurrentMonth),
          disableNext: this.shouldDisableMonthNavigation(maxDate, newCurrentMonth),
          visibleDays: _objectSpread({}, newVisibleDays, this.getModifiers(nextMonthVisibleDays))
        }, function () {
          onNextMonthClick(newCurrentMonth.clone());
        });
      }

      return onNextMonthClick;
    }()
  }, {
    key: "onMonthChange",
    value: function () {
      function onMonthChange(newMonth) {
        var _this$props8 = this.props,
            numberOfMonths = _this$props8.numberOfMonths,
            enableOutsideDays = _this$props8.enableOutsideDays,
            orientation = _this$props8.orientation;
        var withoutTransitionMonths = orientation === _constants.VERTICAL_SCROLLABLE;
        var newVisibleDays = (0, _getVisibleDays["default"])(newMonth, numberOfMonths, enableOutsideDays, withoutTransitionMonths);
        this.setState({
          currentMonth: newMonth.clone(),
          visibleDays: this.getModifiers(newVisibleDays)
        });
      }

      return onMonthChange;
    }()
  }, {
    key: "onYearChange",
    value: function () {
      function onYearChange(newMonth) {
        var _this$props9 = this.props,
            numberOfMonths = _this$props9.numberOfMonths,
            enableOutsideDays = _this$props9.enableOutsideDays,
            orientation = _this$props9.orientation;
        var withoutTransitionMonths = orientation === _constants.VERTICAL_SCROLLABLE;
        var newVisibleDays = (0, _getVisibleDays["default"])(newMonth, numberOfMonths, enableOutsideDays, withoutTransitionMonths);
        this.setState({
          currentMonth: newMonth.clone(),
          visibleDays: this.getModifiers(newVisibleDays)
        });
      }

      return onYearChange;
    }()
  }, {
    key: "onMultiplyScrollableMonths",
    value: function () {
      function onMultiplyScrollableMonths() {
        var _this$props10 = this.props,
            numberOfMonths = _this$props10.numberOfMonths,
            enableOutsideDays = _this$props10.enableOutsideDays;
        var _this$state5 = this.state,
            currentMonth = _this$state5.currentMonth,
            visibleDays = _this$state5.visibleDays;
        var numberOfVisibleMonths = Object.keys(visibleDays).length;
        var nextMonth = currentMonth.clone().add(numberOfVisibleMonths, 'month');
        var newVisibleDays = (0, _getVisibleDays["default"])(nextMonth, numberOfMonths, enableOutsideDays, true);
        this.setState({
          visibleDays: _objectSpread({}, visibleDays, this.getModifiers(newVisibleDays))
        });
      }

      return onMultiplyScrollableMonths;
    }()
  }, {
    key: "getFirstFocusableDay",
    value: function () {
      function getFirstFocusableDay(newMonth) {
        var _this3 = this;

        var _this$props11 = this.props,
            startDate = _this$props11.startDate,
            endDate = _this$props11.endDate,
            focusedInput = _this$props11.focusedInput,
            minimumNights = _this$props11.minimumNights,
            numberOfMonths = _this$props11.numberOfMonths;
        var focusedDate = newMonth.clone().startOf('month');

        if (focusedInput === _constants.START_DATE && startDate) {
          focusedDate = startDate.clone();
        } else if (focusedInput === _constants.END_DATE && !endDate && startDate) {
          focusedDate = startDate.clone().add(minimumNights, 'days');
        } else if (focusedInput === _constants.END_DATE && endDate) {
          focusedDate = endDate.clone();
        }

        if (this.isBlocked(focusedDate)) {
          var days = [];
          var lastVisibleDay = newMonth.clone().add(numberOfMonths - 1, 'months').endOf('month');
          var currentDay = focusedDate.clone();

          while (!(0, _isAfterDay["default"])(currentDay, lastVisibleDay)) {
            currentDay = currentDay.clone().add(1, 'day');
            days.push(currentDay);
          }

          var viableDays = days.filter(function (day) {
            return !_this3.isBlocked(day);
          });

          if (viableDays.length > 0) {
            var _viableDays = _slicedToArray(viableDays, 1);

            focusedDate = _viableDays[0];
          }
        }

        return focusedDate;
      }

      return getFirstFocusableDay;
    }()
  }, {
    key: "getModifiers",
    value: function () {
      function getModifiers(visibleDays) {
        var _this4 = this;

        var modifiers = {};
        Object.keys(visibleDays).forEach(function (month) {
          modifiers[month] = {};
          visibleDays[month].forEach(function (day) {
            modifiers[month][(0, _toISODateString["default"])(day)] = _this4.getModifiersForDay(day);
          });
        });
        return modifiers;
      }

      return getModifiers;
    }()
  }, {
    key: "getModifiersForDay",
    value: function () {
      function getModifiersForDay(day) {
        var _this5 = this;

        return new Set(Object.keys(this.modifiers).filter(function (modifier) {
          return _this5.modifiers[modifier](day);
        }));
      }

      return getModifiersForDay;
    }()
  }, {
    key: "getStateForNewMonth",
    value: function () {
      function getStateForNewMonth(nextProps) {
        var _this6 = this;

        var initialVisibleMonth = nextProps.initialVisibleMonth,
            numberOfMonths = nextProps.numberOfMonths,
            enableOutsideDays = nextProps.enableOutsideDays,
            orientation = nextProps.orientation,
            startDate = nextProps.startDate;
        var initialVisibleMonthThunk = initialVisibleMonth || (startDate ? function () {
          return startDate;
        } : function () {
          return _this6.today;
        });
        var currentMonth = initialVisibleMonthThunk();
        var withoutTransitionMonths = orientation === _constants.VERTICAL_SCROLLABLE;
        var visibleDays = this.getModifiers((0, _getVisibleDays["default"])(currentMonth, numberOfMonths, enableOutsideDays, withoutTransitionMonths));
        return {
          currentMonth: currentMonth,
          visibleDays: visibleDays
        };
      }

      return getStateForNewMonth;
    }()
  }, {
    key: "shouldDisableMonthNavigation",
    value: function () {
      function shouldDisableMonthNavigation(date, visibleMonth) {
        if (!date) return false;
        var _this$props12 = this.props,
            numberOfMonths = _this$props12.numberOfMonths,
            enableOutsideDays = _this$props12.enableOutsideDays;
        return (0, _isDayVisible["default"])(date, visibleMonth, numberOfMonths, enableOutsideDays);
      }

      return shouldDisableMonthNavigation;
    }()
  }, {
    key: "addModifier",
    value: function () {
      function addModifier(updatedDays, day, modifier) {
        var _this$props13 = this.props,
            numberOfVisibleMonths = _this$props13.numberOfMonths,
            enableOutsideDays = _this$props13.enableOutsideDays,
            orientation = _this$props13.orientation;
        var _this$state6 = this.state,
            firstVisibleMonth = _this$state6.currentMonth,
            visibleDays = _this$state6.visibleDays;
        var currentMonth = firstVisibleMonth;
        var numberOfMonths = numberOfVisibleMonths;

        if (orientation === _constants.VERTICAL_SCROLLABLE) {
          numberOfMonths = Object.keys(visibleDays).length;
        } else {
          currentMonth = currentMonth.clone().subtract(1, 'month');
          numberOfMonths += 2;
        }

        if (!day || !(0, _isDayVisible["default"])(day, currentMonth, numberOfMonths, enableOutsideDays)) {
          return updatedDays;
        }

        var iso = (0, _toISODateString["default"])(day);

        var updatedDaysAfterAddition = _objectSpread({}, updatedDays);

        if (enableOutsideDays) {
          var monthsToUpdate = Object.keys(visibleDays).filter(function (monthKey) {
            return Object.keys(visibleDays[monthKey]).indexOf(iso) > -1;
          });
          updatedDaysAfterAddition = monthsToUpdate.reduce(function (days, monthIso) {
            var month = updatedDays[monthIso] || visibleDays[monthIso];
            var modifiers = new Set(month[iso]);
            modifiers.add(modifier);
            return _objectSpread({}, days, _defineProperty({}, monthIso, _objectSpread({}, month, _defineProperty({}, iso, modifiers))));
          }, updatedDaysAfterAddition);
        } else {
          var monthIso = (0, _toISOMonthString["default"])(day);
          var month = updatedDays[monthIso] || visibleDays[monthIso];
          var modifiers = new Set(month[iso]);
          modifiers.add(modifier);
          updatedDaysAfterAddition = _objectSpread({}, updatedDaysAfterAddition, _defineProperty({}, monthIso, _objectSpread({}, month, _defineProperty({}, iso, modifiers))));
        }

        return updatedDaysAfterAddition;
      }

      return addModifier;
    }()
  }, {
    key: "addModifierToRange",
    value: function () {
      function addModifierToRange(updatedDays, start, end, modifier) {
        var days = updatedDays;
        var spanStart = start.clone();

        while ((0, _isBeforeDay["default"])(spanStart, end)) {
          days = this.addModifier(days, spanStart, modifier);
          spanStart = spanStart.clone().add(1, 'day');
        }

        return days;
      }

      return addModifierToRange;
    }()
  }, {
    key: "deleteModifier",
    value: function () {
      function deleteModifier(updatedDays, day, modifier) {
        var _this$props14 = this.props,
            numberOfVisibleMonths = _this$props14.numberOfMonths,
            enableOutsideDays = _this$props14.enableOutsideDays,
            orientation = _this$props14.orientation;
        var _this$state7 = this.state,
            firstVisibleMonth = _this$state7.currentMonth,
            visibleDays = _this$state7.visibleDays;
        var currentMonth = firstVisibleMonth;
        var numberOfMonths = numberOfVisibleMonths;

        if (orientation === _constants.VERTICAL_SCROLLABLE) {
          numberOfMonths = Object.keys(visibleDays).length;
        } else {
          currentMonth = currentMonth.clone().subtract(1, 'month');
          numberOfMonths += 2;
        }

        if (!day || !(0, _isDayVisible["default"])(day, currentMonth, numberOfMonths, enableOutsideDays)) {
          return updatedDays;
        }

        var iso = (0, _toISODateString["default"])(day);

        var updatedDaysAfterDeletion = _objectSpread({}, updatedDays);

        if (enableOutsideDays) {
          var monthsToUpdate = Object.keys(visibleDays).filter(function (monthKey) {
            return Object.keys(visibleDays[monthKey]).indexOf(iso) > -1;
          });
          updatedDaysAfterDeletion = monthsToUpdate.reduce(function (days, monthIso) {
            var month = updatedDays[monthIso] || visibleDays[monthIso];
            var modifiers = new Set(month[iso]);
            modifiers["delete"](modifier);
            return _objectSpread({}, days, _defineProperty({}, monthIso, _objectSpread({}, month, _defineProperty({}, iso, modifiers))));
          }, updatedDaysAfterDeletion);
        } else {
          var monthIso = (0, _toISOMonthString["default"])(day);
          var month = updatedDays[monthIso] || visibleDays[monthIso];
          var modifiers = new Set(month[iso]);
          modifiers["delete"](modifier);
          updatedDaysAfterDeletion = _objectSpread({}, updatedDaysAfterDeletion, _defineProperty({}, monthIso, _objectSpread({}, month, _defineProperty({}, iso, modifiers))));
        }

        return updatedDaysAfterDeletion;
      }

      return deleteModifier;
    }()
  }, {
    key: "deleteModifierFromRange",
    value: function () {
      function deleteModifierFromRange(updatedDays, start, end, modifier) {
        var days = updatedDays;
        var spanStart = start.clone();

        while ((0, _isBeforeDay["default"])(spanStart, end)) {
          days = this.deleteModifier(days, spanStart, modifier);
          spanStart = spanStart.clone().add(1, 'day');
        }

        return days;
      }

      return deleteModifierFromRange;
    }()
  }, {
    key: "doesNotMeetMinimumNights",
    value: function () {
      function doesNotMeetMinimumNights(day) {
        var _this$props15 = this.props,
            startDate = _this$props15.startDate,
            isOutsideRange = _this$props15.isOutsideRange,
            focusedInput = _this$props15.focusedInput,
            minimumNights = _this$props15.minimumNights;
        if (focusedInput !== _constants.END_DATE) return false;

        if (startDate) {
          var dayDiff = day.diff(startDate.clone().startOf('day').hour(12), 'days');
          return dayDiff < minimumNights && dayDiff >= 0;
        }

        return isOutsideRange((0, _moment["default"])(day).subtract(minimumNights, 'days'));
      }

      return doesNotMeetMinimumNights;
    }()
  }, {
    key: "isDayAfterHoveredStartDate",
    value: function () {
      function isDayAfterHoveredStartDate(day) {
        var _this$props16 = this.props,
            startDate = _this$props16.startDate,
            endDate = _this$props16.endDate,
            minimumNights = _this$props16.minimumNights;

        var _ref2 = this.state || {},
            hoverDate = _ref2.hoverDate;

        return !!startDate && !endDate && !this.isBlocked(day) && (0, _isNextDay["default"])(hoverDate, day) && minimumNights > 0 && (0, _isSameDay["default"])(hoverDate, startDate);
      }

      return isDayAfterHoveredStartDate;
    }()
  }, {
    key: "isEndDate",
    value: function () {
      function isEndDate(day) {
        var endDate = this.props.endDate;
        return (0, _isSameDay["default"])(day, endDate);
      }

      return isEndDate;
    }()
  }, {
    key: "isHovered",
    value: function () {
      function isHovered(day) {
        var _ref3 = this.state || {},
            hoverDate = _ref3.hoverDate;

        var focusedInput = this.props.focusedInput;
        return !!focusedInput && (0, _isSameDay["default"])(day, hoverDate);
      }

      return isHovered;
    }()
  }, {
    key: "isInHoveredSpan",
    value: function () {
      function isInHoveredSpan(day) {
        var _this$props17 = this.props,
            startDate = _this$props17.startDate,
            endDate = _this$props17.endDate;

        var _ref4 = this.state || {},
            hoverDate = _ref4.hoverDate;

        var isForwardRange = !!startDate && !endDate && (day.isBetween(startDate, hoverDate) || (0, _isSameDay["default"])(hoverDate, day));
        var isBackwardRange = !!endDate && !startDate && (day.isBetween(hoverDate, endDate) || (0, _isSameDay["default"])(hoverDate, day));
        var isValidDayHovered = hoverDate && !this.isBlocked(hoverDate);
        return (isForwardRange || isBackwardRange) && isValidDayHovered;
      }

      return isInHoveredSpan;
    }()
  }, {
    key: "isInSelectedSpan",
    value: function () {
      function isInSelectedSpan(day) {
        var _this$props18 = this.props,
            startDate = _this$props18.startDate,
            endDate = _this$props18.endDate;
        return day.isBetween(startDate, endDate);
      }

      return isInSelectedSpan;
    }()
  }, {
    key: "isLastInRange",
    value: function () {
      function isLastInRange(day) {
        var endDate = this.props.endDate;
        return this.isInSelectedSpan(day) && (0, _isNextDay["default"])(day, endDate);
      }

      return isLastInRange;
    }()
  }, {
    key: "isStartDate",
    value: function () {
      function isStartDate(day) {
        var startDate = this.props.startDate;
        return (0, _isSameDay["default"])(day, startDate);
      }

      return isStartDate;
    }()
  }, {
    key: "isBlocked",
    value: function () {
      function isBlocked(day) {
        var _this$props19 = this.props,
            isDayBlocked = _this$props19.isDayBlocked,
            isOutsideRange = _this$props19.isOutsideRange;
        return isDayBlocked(day) || isOutsideRange(day) || this.doesNotMeetMinimumNights(day);
      }

      return isBlocked;
    }()
  }, {
    key: "isToday",
    value: function () {
      function isToday(day) {
        return (0, _isSameDay["default"])(day, this.today);
      }

      return isToday;
    }()
  }, {
    key: "isFirstDayOfWeek",
    value: function () {
      function isFirstDayOfWeek(day) {
        var firstDayOfWeek = this.props.firstDayOfWeek;
        return day.day() === (firstDayOfWeek || _moment["default"].localeData().firstDayOfWeek());
      }

      return isFirstDayOfWeek;
    }()
  }, {
    key: "isLastDayOfWeek",
    value: function () {
      function isLastDayOfWeek(day) {
        var firstDayOfWeek = this.props.firstDayOfWeek;
        return day.day() === ((firstDayOfWeek || _moment["default"].localeData().firstDayOfWeek()) + 6) % 7;
      }

      return isLastDayOfWeek;
    }()
  }, {
    key: "render",
    value: function () {
      function render() {
        var _this$props20 = this.props,
            numberOfMonths = _this$props20.numberOfMonths,
            orientation = _this$props20.orientation,
            monthFormat = _this$props20.monthFormat,
            renderMonthText = _this$props20.renderMonthText,
            navPrev = _this$props20.navPrev,
            navNext = _this$props20.navNext,
            noNavButtons = _this$props20.noNavButtons,
            onOutsideClick = _this$props20.onOutsideClick,
            withPortal = _this$props20.withPortal,
            enableOutsideDays = _this$props20.enableOutsideDays,
            firstDayOfWeek = _this$props20.firstDayOfWeek,
            hideKeyboardShortcutsPanel = _this$props20.hideKeyboardShortcutsPanel,
            daySize = _this$props20.daySize,
            focusedInput = _this$props20.focusedInput,
            renderCalendarDay = _this$props20.renderCalendarDay,
            renderDayContents = _this$props20.renderDayContents,
            renderCalendarInfo = _this$props20.renderCalendarInfo,
            renderMonthElement = _this$props20.renderMonthElement,
            calendarInfoPosition = _this$props20.calendarInfoPosition,
            onBlur = _this$props20.onBlur,
            onShiftTab = _this$props20.onShiftTab,
            onTab = _this$props20.onTab,
            isFocused = _this$props20.isFocused,
            showKeyboardShortcuts = _this$props20.showKeyboardShortcuts,
            isRTL = _this$props20.isRTL,
            weekDayFormat = _this$props20.weekDayFormat,
            dayAriaLabelFormat = _this$props20.dayAriaLabelFormat,
            verticalHeight = _this$props20.verticalHeight,
            noBorder = _this$props20.noBorder,
            transitionDuration = _this$props20.transitionDuration,
            verticalBorderSpacing = _this$props20.verticalBorderSpacing,
            horizontalMonthPadding = _this$props20.horizontalMonthPadding;
        var _this$state8 = this.state,
            currentMonth = _this$state8.currentMonth,
            phrases = _this$state8.phrases,
            visibleDays = _this$state8.visibleDays,
            disablePrev = _this$state8.disablePrev,
            disableNext = _this$state8.disableNext;
        return _react["default"].createElement(_DayPicker["default"], {
          orientation: orientation,
          enableOutsideDays: enableOutsideDays,
          modifiers: visibleDays,
          numberOfMonths: numberOfMonths,
          onDayClick: this.onDayClick,
          onDayMouseEnter: this.onDayMouseEnter,
          onDayMouseLeave: this.onDayMouseLeave,
          onPrevMonthClick: this.onPrevMonthClick,
          onNextMonthClick: this.onNextMonthClick,
          onMonthChange: this.onMonthChange,
          onTab: onTab,
          onShiftTab: onShiftTab,
          onYearChange: this.onYearChange,
          onMultiplyScrollableMonths: this.onMultiplyScrollableMonths,
          monthFormat: monthFormat,
          renderMonthText: renderMonthText,
          withPortal: withPortal,
          hidden: !focusedInput,
          initialVisibleMonth: function () {
            function initialVisibleMonth() {
              return currentMonth;
            }

            return initialVisibleMonth;
          }(),
          daySize: daySize,
          onOutsideClick: onOutsideClick,
          disablePrev: disablePrev,
          disableNext: disableNext,
          navPrev: navPrev,
          navNext: navNext,
          noNavButtons: noNavButtons,
          renderCalendarDay: renderCalendarDay,
          renderDayContents: renderDayContents,
          renderCalendarInfo: renderCalendarInfo,
          renderMonthElement: renderMonthElement,
          calendarInfoPosition: calendarInfoPosition,
          firstDayOfWeek: firstDayOfWeek,
          hideKeyboardShortcutsPanel: hideKeyboardShortcutsPanel,
          isFocused: isFocused,
          getFirstFocusableDay: this.getFirstFocusableDay,
          onBlur: onBlur,
          showKeyboardShortcuts: showKeyboardShortcuts,
          phrases: phrases,
          isRTL: isRTL,
          weekDayFormat: weekDayFormat,
          dayAriaLabelFormat: dayAriaLabelFormat,
          verticalHeight: verticalHeight,
          verticalBorderSpacing: verticalBorderSpacing,
          noBorder: noBorder,
          transitionDuration: transitionDuration,
          horizontalMonthPadding: horizontalMonthPadding
        });
      }

      return render;
    }()
  }]);

  return DayPickerRangeController;
}(_react["default"].PureComponent || _react["default"].Component);

exports["default"] = DayPickerRangeController;
DayPickerRangeController.propTypes =  false ? undefined : {};
DayPickerRangeController.defaultProps = defaultProps;

/***/ }),

/***/ 2959:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isNextDay;

var _moment = _interopRequireDefault(__webpack_require__(2));

var _isSameDay = _interopRequireDefault(__webpack_require__(2849));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function isNextDay(a, b) {
  if (!_moment["default"].isMoment(a) || !_moment["default"].isMoment(b)) return false;
  var nextDay = (0, _moment["default"])(a).add(1, 'day');
  return (0, _isSameDay["default"])(nextDay, b);
}

/***/ }),

/***/ 2960:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getVisibleDays;

var _moment = _interopRequireDefault(__webpack_require__(2));

var _toISOMonthString = _interopRequireDefault(__webpack_require__(2876));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getVisibleDays(month, numberOfMonths, enableOutsideDays, withoutTransitionMonths) {
  if (!_moment["default"].isMoment(month)) return {};
  var visibleDaysByMonth = {};
  var currentMonth = withoutTransitionMonths ? month.clone() : month.clone().subtract(1, 'month');

  for (var i = 0; i < (withoutTransitionMonths ? numberOfMonths : numberOfMonths + 2); i += 1) {
    var visibleDays = []; // set utc offset to get correct dates in future (when timezone changes)

    var baseDate = currentMonth.clone();
    var firstOfMonth = baseDate.clone().startOf('month').hour(12);
    var lastOfMonth = baseDate.clone().endOf('month').hour(12);
    var currentDay = firstOfMonth.clone(); // days belonging to the previous month

    if (enableOutsideDays) {
      for (var j = 0; j < currentDay.weekday(); j += 1) {
        var prevDay = currentDay.clone().subtract(j + 1, 'day');
        visibleDays.unshift(prevDay);
      }
    }

    while (currentDay < lastOfMonth) {
      visibleDays.push(currentDay.clone());
      currentDay.add(1, 'day');
    }

    if (enableOutsideDays) {
      // weekday() returns the index of the day of the week according to the locale
      // this means if the week starts on Monday, weekday() will return 0 for a Monday date, not 1
      if (currentDay.weekday() !== 0) {
        // days belonging to the next month
        for (var k = currentDay.weekday(), count = 0; k < 7; k += 1, count += 1) {
          var nextDay = currentDay.clone().add(count, 'day');
          visibleDays.push(nextDay);
        }
      }
    }

    visibleDaysByMonth[(0, _toISOMonthString["default"])(currentMonth)] = visibleDays;
    currentMonth = currentMonth.clone().add(1, 'month');
  }

  return visibleDaysByMonth;
}

/***/ }),

/***/ 2961:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactAddonsShallowCompare = _interopRequireDefault(__webpack_require__(944));

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(0));

var _reactMomentProptypes = _interopRequireDefault(__webpack_require__(2837));

var _airbnbPropTypes = __webpack_require__(2820);

var _moment = _interopRequireDefault(__webpack_require__(2));

var _object = _interopRequireDefault(__webpack_require__(2891));

var _isTouchDevice = _interopRequireDefault(__webpack_require__(2852));

var _defaultPhrases = __webpack_require__(2821);

var _getPhrasePropTypes = _interopRequireDefault(__webpack_require__(2823));

var _isSameDay = _interopRequireDefault(__webpack_require__(2849));

var _isAfterDay = _interopRequireDefault(__webpack_require__(2877));

var _getVisibleDays = _interopRequireDefault(__webpack_require__(2960));

var _isDayVisible = _interopRequireDefault(__webpack_require__(2894));

var _toISODateString = _interopRequireDefault(__webpack_require__(2874));

var _toISOMonthString = _interopRequireDefault(__webpack_require__(2876));

var _ScrollableOrientationShape = _interopRequireDefault(__webpack_require__(2851));

var _DayOfWeekShape = _interopRequireDefault(__webpack_require__(2843));

var _CalendarInfoPositionShape = _interopRequireDefault(__webpack_require__(2864));

var _constants = __webpack_require__(2818);

var _DayPicker = _interopRequireDefault(__webpack_require__(2895));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function () { function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); } return _getPrototypeOf; }(); return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function () { function _setPrototypeOf(o, p) { o.__proto__ = p; return o; } return _setPrototypeOf; }(); return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var propTypes =  false ? undefined : {};
var defaultProps = {
  date: undefined,
  // TODO: use null
  onDateChange: function () {
    function onDateChange() {}

    return onDateChange;
  }(),
  focused: false,
  onFocusChange: function () {
    function onFocusChange() {}

    return onFocusChange;
  }(),
  onClose: function () {
    function onClose() {}

    return onClose;
  }(),
  keepOpenOnDateSelect: false,
  isOutsideRange: function () {
    function isOutsideRange() {}

    return isOutsideRange;
  }(),
  isDayBlocked: function () {
    function isDayBlocked() {}

    return isDayBlocked;
  }(),
  isDayHighlighted: function () {
    function isDayHighlighted() {}

    return isDayHighlighted;
  }(),
  // DayPicker props
  renderMonthText: null,
  enableOutsideDays: false,
  numberOfMonths: 1,
  orientation: _constants.HORIZONTAL_ORIENTATION,
  withPortal: false,
  hideKeyboardShortcutsPanel: false,
  initialVisibleMonth: null,
  firstDayOfWeek: null,
  daySize: _constants.DAY_SIZE,
  verticalHeight: null,
  noBorder: false,
  verticalBorderSpacing: undefined,
  transitionDuration: undefined,
  horizontalMonthPadding: 13,
  navPrev: null,
  navNext: null,
  onPrevMonthClick: function () {
    function onPrevMonthClick() {}

    return onPrevMonthClick;
  }(),
  onNextMonthClick: function () {
    function onNextMonthClick() {}

    return onNextMonthClick;
  }(),
  onOutsideClick: function () {
    function onOutsideClick() {}

    return onOutsideClick;
  }(),
  renderCalendarDay: undefined,
  renderDayContents: null,
  renderCalendarInfo: null,
  renderMonthElement: null,
  calendarInfoPosition: _constants.INFO_POSITION_BOTTOM,
  // accessibility
  onBlur: function () {
    function onBlur() {}

    return onBlur;
  }(),
  isFocused: false,
  showKeyboardShortcuts: false,
  onTab: function () {
    function onTab() {}

    return onTab;
  }(),
  onShiftTab: function () {
    function onShiftTab() {}

    return onShiftTab;
  }(),
  // i18n
  monthFormat: 'MMMM YYYY',
  weekDayFormat: 'dd',
  phrases: _defaultPhrases.DayPickerPhrases,
  dayAriaLabelFormat: undefined,
  isRTL: false
};

var DayPickerSingleDateController =
/*#__PURE__*/
function (_ref) {
  _inherits(DayPickerSingleDateController, _ref);

  _createClass(DayPickerSingleDateController, [{
    key: !_react["default"].PureComponent && "shouldComponentUpdate",
    value: function () {
      function value(nextProps, nextState) {
        return (0, _reactAddonsShallowCompare["default"])(this, nextProps, nextState);
      }

      return value;
    }()
  }]);

  function DayPickerSingleDateController(props) {
    var _this;

    _classCallCheck(this, DayPickerSingleDateController);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DayPickerSingleDateController).call(this, props));
    _this.isTouchDevice = false;
    _this.today = (0, _moment["default"])();
    _this.modifiers = {
      today: function () {
        function today(day) {
          return _this.isToday(day);
        }

        return today;
      }(),
      blocked: function () {
        function blocked(day) {
          return _this.isBlocked(day);
        }

        return blocked;
      }(),
      'blocked-calendar': function () {
        function blockedCalendar(day) {
          return props.isDayBlocked(day);
        }

        return blockedCalendar;
      }(),
      'blocked-out-of-range': function () {
        function blockedOutOfRange(day) {
          return props.isOutsideRange(day);
        }

        return blockedOutOfRange;
      }(),
      'highlighted-calendar': function () {
        function highlightedCalendar(day) {
          return props.isDayHighlighted(day);
        }

        return highlightedCalendar;
      }(),
      valid: function () {
        function valid(day) {
          return !_this.isBlocked(day);
        }

        return valid;
      }(),
      hovered: function () {
        function hovered(day) {
          return _this.isHovered(day);
        }

        return hovered;
      }(),
      selected: function () {
        function selected(day) {
          return _this.isSelected(day);
        }

        return selected;
      }(),
      'first-day-of-week': function () {
        function firstDayOfWeek(day) {
          return _this.isFirstDayOfWeek(day);
        }

        return firstDayOfWeek;
      }(),
      'last-day-of-week': function () {
        function lastDayOfWeek(day) {
          return _this.isLastDayOfWeek(day);
        }

        return lastDayOfWeek;
      }()
    };

    var _this$getStateForNewM = _this.getStateForNewMonth(props),
        currentMonth = _this$getStateForNewM.currentMonth,
        visibleDays = _this$getStateForNewM.visibleDays;

    _this.state = {
      hoverDate: null,
      currentMonth: currentMonth,
      visibleDays: visibleDays
    };
    _this.onDayMouseEnter = _this.onDayMouseEnter.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onDayMouseLeave = _this.onDayMouseLeave.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onDayClick = _this.onDayClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onPrevMonthClick = _this.onPrevMonthClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onNextMonthClick = _this.onNextMonthClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onMonthChange = _this.onMonthChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onYearChange = _this.onYearChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.getFirstFocusableDay = _this.getFirstFocusableDay.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(DayPickerSingleDateController, [{
    key: "componentDidMount",
    value: function () {
      function componentDidMount() {
        this.isTouchDevice = (0, _isTouchDevice["default"])();
      }

      return componentDidMount;
    }()
  }, {
    key: "componentWillReceiveProps",
    value: function () {
      function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        var date = nextProps.date,
            focused = nextProps.focused,
            isOutsideRange = nextProps.isOutsideRange,
            isDayBlocked = nextProps.isDayBlocked,
            isDayHighlighted = nextProps.isDayHighlighted,
            initialVisibleMonth = nextProps.initialVisibleMonth,
            numberOfMonths = nextProps.numberOfMonths,
            enableOutsideDays = nextProps.enableOutsideDays;
        var _this$props = this.props,
            prevIsOutsideRange = _this$props.isOutsideRange,
            prevIsDayBlocked = _this$props.isDayBlocked,
            prevIsDayHighlighted = _this$props.isDayHighlighted,
            prevNumberOfMonths = _this$props.numberOfMonths,
            prevEnableOutsideDays = _this$props.enableOutsideDays,
            prevInitialVisibleMonth = _this$props.initialVisibleMonth,
            prevFocused = _this$props.focused,
            prevDate = _this$props.date;
        var visibleDays = this.state.visibleDays;
        var recomputeOutsideRange = false;
        var recomputeDayBlocked = false;
        var recomputeDayHighlighted = false;

        if (isOutsideRange !== prevIsOutsideRange) {
          this.modifiers['blocked-out-of-range'] = function (day) {
            return isOutsideRange(day);
          };

          recomputeOutsideRange = true;
        }

        if (isDayBlocked !== prevIsDayBlocked) {
          this.modifiers['blocked-calendar'] = function (day) {
            return isDayBlocked(day);
          };

          recomputeDayBlocked = true;
        }

        if (isDayHighlighted !== prevIsDayHighlighted) {
          this.modifiers['highlighted-calendar'] = function (day) {
            return isDayHighlighted(day);
          };

          recomputeDayHighlighted = true;
        }

        var recomputePropModifiers = recomputeOutsideRange || recomputeDayBlocked || recomputeDayHighlighted;

        if (numberOfMonths !== prevNumberOfMonths || enableOutsideDays !== prevEnableOutsideDays || initialVisibleMonth !== prevInitialVisibleMonth && !prevFocused && focused) {
          var newMonthState = this.getStateForNewMonth(nextProps);
          var currentMonth = newMonthState.currentMonth;
          visibleDays = newMonthState.visibleDays;
          this.setState({
            currentMonth: currentMonth,
            visibleDays: visibleDays
          });
        }

        var didDateChange = date !== prevDate;
        var didFocusChange = focused !== prevFocused;
        var modifiers = {};

        if (didDateChange) {
          modifiers = this.deleteModifier(modifiers, prevDate, 'selected');
          modifiers = this.addModifier(modifiers, date, 'selected');
        }

        if (didFocusChange || recomputePropModifiers) {
          (0, _object["default"])(visibleDays).forEach(function (days) {
            Object.keys(days).forEach(function (day) {
              var momentObj = (0, _moment["default"])(day);

              if (_this2.isBlocked(momentObj)) {
                modifiers = _this2.addModifier(modifiers, momentObj, 'blocked');
              } else {
                modifiers = _this2.deleteModifier(modifiers, momentObj, 'blocked');
              }

              if (didFocusChange || recomputeOutsideRange) {
                if (isOutsideRange(momentObj)) {
                  modifiers = _this2.addModifier(modifiers, momentObj, 'blocked-out-of-range');
                } else {
                  modifiers = _this2.deleteModifier(modifiers, momentObj, 'blocked-out-of-range');
                }
              }

              if (didFocusChange || recomputeDayBlocked) {
                if (isDayBlocked(momentObj)) {
                  modifiers = _this2.addModifier(modifiers, momentObj, 'blocked-calendar');
                } else {
                  modifiers = _this2.deleteModifier(modifiers, momentObj, 'blocked-calendar');
                }
              }

              if (didFocusChange || recomputeDayHighlighted) {
                if (isDayHighlighted(momentObj)) {
                  modifiers = _this2.addModifier(modifiers, momentObj, 'highlighted-calendar');
                } else {
                  modifiers = _this2.deleteModifier(modifiers, momentObj, 'highlighted-calendar');
                }
              }
            });
          });
        }

        var today = (0, _moment["default"])();

        if (!(0, _isSameDay["default"])(this.today, today)) {
          modifiers = this.deleteModifier(modifiers, this.today, 'today');
          modifiers = this.addModifier(modifiers, today, 'today');
          this.today = today;
        }

        if (Object.keys(modifiers).length > 0) {
          this.setState({
            visibleDays: _objectSpread({}, visibleDays, modifiers)
          });
        }
      }

      return componentWillReceiveProps;
    }()
  }, {
    key: "componentWillUpdate",
    value: function () {
      function componentWillUpdate() {
        this.today = (0, _moment["default"])();
      }

      return componentWillUpdate;
    }()
  }, {
    key: "onDayClick",
    value: function () {
      function onDayClick(day, e) {
        if (e) e.preventDefault();
        if (this.isBlocked(day)) return;
        var _this$props2 = this.props,
            onDateChange = _this$props2.onDateChange,
            keepOpenOnDateSelect = _this$props2.keepOpenOnDateSelect,
            onFocusChange = _this$props2.onFocusChange,
            onClose = _this$props2.onClose;
        onDateChange(day);

        if (!keepOpenOnDateSelect) {
          onFocusChange({
            focused: false
          });
          onClose({
            date: day
          });
        }
      }

      return onDayClick;
    }()
  }, {
    key: "onDayMouseEnter",
    value: function () {
      function onDayMouseEnter(day) {
        if (this.isTouchDevice) return;
        var _this$state = this.state,
            hoverDate = _this$state.hoverDate,
            visibleDays = _this$state.visibleDays;
        var modifiers = this.deleteModifier({}, hoverDate, 'hovered');
        modifiers = this.addModifier(modifiers, day, 'hovered');
        this.setState({
          hoverDate: day,
          visibleDays: _objectSpread({}, visibleDays, modifiers)
        });
      }

      return onDayMouseEnter;
    }()
  }, {
    key: "onDayMouseLeave",
    value: function () {
      function onDayMouseLeave() {
        var _this$state2 = this.state,
            hoverDate = _this$state2.hoverDate,
            visibleDays = _this$state2.visibleDays;
        if (this.isTouchDevice || !hoverDate) return;
        var modifiers = this.deleteModifier({}, hoverDate, 'hovered');
        this.setState({
          hoverDate: null,
          visibleDays: _objectSpread({}, visibleDays, modifiers)
        });
      }

      return onDayMouseLeave;
    }()
  }, {
    key: "onPrevMonthClick",
    value: function () {
      function onPrevMonthClick() {
        var _this$props3 = this.props,
            onPrevMonthClick = _this$props3.onPrevMonthClick,
            numberOfMonths = _this$props3.numberOfMonths,
            enableOutsideDays = _this$props3.enableOutsideDays;
        var _this$state3 = this.state,
            currentMonth = _this$state3.currentMonth,
            visibleDays = _this$state3.visibleDays;
        var newVisibleDays = {};
        Object.keys(visibleDays).sort().slice(0, numberOfMonths + 1).forEach(function (month) {
          newVisibleDays[month] = visibleDays[month];
        });
        var prevMonth = currentMonth.clone().subtract(1, 'month');
        var prevMonthVisibleDays = (0, _getVisibleDays["default"])(prevMonth, 1, enableOutsideDays);
        this.setState({
          currentMonth: prevMonth,
          visibleDays: _objectSpread({}, newVisibleDays, this.getModifiers(prevMonthVisibleDays))
        }, function () {
          onPrevMonthClick(prevMonth.clone());
        });
      }

      return onPrevMonthClick;
    }()
  }, {
    key: "onNextMonthClick",
    value: function () {
      function onNextMonthClick() {
        var _this$props4 = this.props,
            onNextMonthClick = _this$props4.onNextMonthClick,
            numberOfMonths = _this$props4.numberOfMonths,
            enableOutsideDays = _this$props4.enableOutsideDays;
        var _this$state4 = this.state,
            currentMonth = _this$state4.currentMonth,
            visibleDays = _this$state4.visibleDays;
        var newVisibleDays = {};
        Object.keys(visibleDays).sort().slice(1).forEach(function (month) {
          newVisibleDays[month] = visibleDays[month];
        });
        var nextMonth = currentMonth.clone().add(numberOfMonths, 'month');
        var nextMonthVisibleDays = (0, _getVisibleDays["default"])(nextMonth, 1, enableOutsideDays);
        var newCurrentMonth = currentMonth.clone().add(1, 'month');
        this.setState({
          currentMonth: newCurrentMonth,
          visibleDays: _objectSpread({}, newVisibleDays, this.getModifiers(nextMonthVisibleDays))
        }, function () {
          onNextMonthClick(newCurrentMonth.clone());
        });
      }

      return onNextMonthClick;
    }()
  }, {
    key: "onMonthChange",
    value: function () {
      function onMonthChange(newMonth) {
        var _this$props5 = this.props,
            numberOfMonths = _this$props5.numberOfMonths,
            enableOutsideDays = _this$props5.enableOutsideDays,
            orientation = _this$props5.orientation;
        var withoutTransitionMonths = orientation === _constants.VERTICAL_SCROLLABLE;
        var newVisibleDays = (0, _getVisibleDays["default"])(newMonth, numberOfMonths, enableOutsideDays, withoutTransitionMonths);
        this.setState({
          currentMonth: newMonth.clone(),
          visibleDays: this.getModifiers(newVisibleDays)
        });
      }

      return onMonthChange;
    }()
  }, {
    key: "onYearChange",
    value: function () {
      function onYearChange(newMonth) {
        var _this$props6 = this.props,
            numberOfMonths = _this$props6.numberOfMonths,
            enableOutsideDays = _this$props6.enableOutsideDays,
            orientation = _this$props6.orientation;
        var withoutTransitionMonths = orientation === _constants.VERTICAL_SCROLLABLE;
        var newVisibleDays = (0, _getVisibleDays["default"])(newMonth, numberOfMonths, enableOutsideDays, withoutTransitionMonths);
        this.setState({
          currentMonth: newMonth.clone(),
          visibleDays: this.getModifiers(newVisibleDays)
        });
      }

      return onYearChange;
    }()
  }, {
    key: "getFirstFocusableDay",
    value: function () {
      function getFirstFocusableDay(newMonth) {
        var _this3 = this;

        var _this$props7 = this.props,
            date = _this$props7.date,
            numberOfMonths = _this$props7.numberOfMonths;
        var focusedDate = newMonth.clone().startOf('month');

        if (date) {
          focusedDate = date.clone();
        }

        if (this.isBlocked(focusedDate)) {
          var days = [];
          var lastVisibleDay = newMonth.clone().add(numberOfMonths - 1, 'months').endOf('month');
          var currentDay = focusedDate.clone();

          while (!(0, _isAfterDay["default"])(currentDay, lastVisibleDay)) {
            currentDay = currentDay.clone().add(1, 'day');
            days.push(currentDay);
          }

          var viableDays = days.filter(function (day) {
            return !_this3.isBlocked(day) && (0, _isAfterDay["default"])(day, focusedDate);
          });

          if (viableDays.length > 0) {
            var _viableDays = _slicedToArray(viableDays, 1);

            focusedDate = _viableDays[0];
          }
        }

        return focusedDate;
      }

      return getFirstFocusableDay;
    }()
  }, {
    key: "getModifiers",
    value: function () {
      function getModifiers(visibleDays) {
        var _this4 = this;

        var modifiers = {};
        Object.keys(visibleDays).forEach(function (month) {
          modifiers[month] = {};
          visibleDays[month].forEach(function (day) {
            modifiers[month][(0, _toISODateString["default"])(day)] = _this4.getModifiersForDay(day);
          });
        });
        return modifiers;
      }

      return getModifiers;
    }()
  }, {
    key: "getModifiersForDay",
    value: function () {
      function getModifiersForDay(day) {
        var _this5 = this;

        return new Set(Object.keys(this.modifiers).filter(function (modifier) {
          return _this5.modifiers[modifier](day);
        }));
      }

      return getModifiersForDay;
    }()
  }, {
    key: "getStateForNewMonth",
    value: function () {
      function getStateForNewMonth(nextProps) {
        var _this6 = this;

        var initialVisibleMonth = nextProps.initialVisibleMonth,
            date = nextProps.date,
            numberOfMonths = nextProps.numberOfMonths,
            enableOutsideDays = nextProps.enableOutsideDays;
        var initialVisibleMonthThunk = initialVisibleMonth || (date ? function () {
          return date;
        } : function () {
          return _this6.today;
        });
        var currentMonth = initialVisibleMonthThunk();
        var visibleDays = this.getModifiers((0, _getVisibleDays["default"])(currentMonth, numberOfMonths, enableOutsideDays));
        return {
          currentMonth: currentMonth,
          visibleDays: visibleDays
        };
      }

      return getStateForNewMonth;
    }()
  }, {
    key: "addModifier",
    value: function () {
      function addModifier(updatedDays, day, modifier) {
        var _this$props8 = this.props,
            numberOfVisibleMonths = _this$props8.numberOfMonths,
            enableOutsideDays = _this$props8.enableOutsideDays,
            orientation = _this$props8.orientation;
        var _this$state5 = this.state,
            firstVisibleMonth = _this$state5.currentMonth,
            visibleDays = _this$state5.visibleDays;
        var currentMonth = firstVisibleMonth;
        var numberOfMonths = numberOfVisibleMonths;

        if (orientation === _constants.VERTICAL_SCROLLABLE) {
          numberOfMonths = Object.keys(visibleDays).length;
        } else {
          currentMonth = currentMonth.clone().subtract(1, 'month');
          numberOfMonths += 2;
        }

        if (!day || !(0, _isDayVisible["default"])(day, currentMonth, numberOfMonths, enableOutsideDays)) {
          return updatedDays;
        }

        var iso = (0, _toISODateString["default"])(day);

        var updatedDaysAfterAddition = _objectSpread({}, updatedDays);

        if (enableOutsideDays) {
          var monthsToUpdate = Object.keys(visibleDays).filter(function (monthKey) {
            return Object.keys(visibleDays[monthKey]).indexOf(iso) > -1;
          });
          updatedDaysAfterAddition = monthsToUpdate.reduce(function (days, monthIso) {
            var month = updatedDays[monthIso] || visibleDays[monthIso];
            var modifiers = new Set(month[iso]);
            modifiers.add(modifier);
            return _objectSpread({}, days, _defineProperty({}, monthIso, _objectSpread({}, month, _defineProperty({}, iso, modifiers))));
          }, updatedDaysAfterAddition);
        } else {
          var monthIso = (0, _toISOMonthString["default"])(day);
          var month = updatedDays[monthIso] || visibleDays[monthIso];
          var modifiers = new Set(month[iso]);
          modifiers.add(modifier);
          updatedDaysAfterAddition = _objectSpread({}, updatedDaysAfterAddition, _defineProperty({}, monthIso, _objectSpread({}, month, _defineProperty({}, iso, modifiers))));
        }

        return updatedDaysAfterAddition;
      }

      return addModifier;
    }()
  }, {
    key: "deleteModifier",
    value: function () {
      function deleteModifier(updatedDays, day, modifier) {
        var _this$props9 = this.props,
            numberOfVisibleMonths = _this$props9.numberOfMonths,
            enableOutsideDays = _this$props9.enableOutsideDays,
            orientation = _this$props9.orientation;
        var _this$state6 = this.state,
            firstVisibleMonth = _this$state6.currentMonth,
            visibleDays = _this$state6.visibleDays;
        var currentMonth = firstVisibleMonth;
        var numberOfMonths = numberOfVisibleMonths;

        if (orientation === _constants.VERTICAL_SCROLLABLE) {
          numberOfMonths = Object.keys(visibleDays).length;
        } else {
          currentMonth = currentMonth.clone().subtract(1, 'month');
          numberOfMonths += 2;
        }

        if (!day || !(0, _isDayVisible["default"])(day, currentMonth, numberOfMonths, enableOutsideDays)) {
          return updatedDays;
        }

        var iso = (0, _toISODateString["default"])(day);

        var updatedDaysAfterDeletion = _objectSpread({}, updatedDays);

        if (enableOutsideDays) {
          var monthsToUpdate = Object.keys(visibleDays).filter(function (monthKey) {
            return Object.keys(visibleDays[monthKey]).indexOf(iso) > -1;
          });
          updatedDaysAfterDeletion = monthsToUpdate.reduce(function (days, monthIso) {
            var month = updatedDays[monthIso] || visibleDays[monthIso];
            var modifiers = new Set(month[iso]);
            modifiers["delete"](modifier);
            return _objectSpread({}, days, _defineProperty({}, monthIso, _objectSpread({}, month, _defineProperty({}, iso, modifiers))));
          }, updatedDaysAfterDeletion);
        } else {
          var monthIso = (0, _toISOMonthString["default"])(day);
          var month = updatedDays[monthIso] || visibleDays[monthIso];
          var modifiers = new Set(month[iso]);
          modifiers["delete"](modifier);
          updatedDaysAfterDeletion = _objectSpread({}, updatedDaysAfterDeletion, _defineProperty({}, monthIso, _objectSpread({}, month, _defineProperty({}, iso, modifiers))));
        }

        return updatedDaysAfterDeletion;
      }

      return deleteModifier;
    }()
  }, {
    key: "isBlocked",
    value: function () {
      function isBlocked(day) {
        var _this$props10 = this.props,
            isDayBlocked = _this$props10.isDayBlocked,
            isOutsideRange = _this$props10.isOutsideRange;
        return isDayBlocked(day) || isOutsideRange(day);
      }

      return isBlocked;
    }()
  }, {
    key: "isHovered",
    value: function () {
      function isHovered(day) {
        var _ref2 = this.state || {},
            hoverDate = _ref2.hoverDate;

        return (0, _isSameDay["default"])(day, hoverDate);
      }

      return isHovered;
    }()
  }, {
    key: "isSelected",
    value: function () {
      function isSelected(day) {
        var date = this.props.date;
        return (0, _isSameDay["default"])(day, date);
      }

      return isSelected;
    }()
  }, {
    key: "isToday",
    value: function () {
      function isToday(day) {
        return (0, _isSameDay["default"])(day, this.today);
      }

      return isToday;
    }()
  }, {
    key: "isFirstDayOfWeek",
    value: function () {
      function isFirstDayOfWeek(day) {
        var firstDayOfWeek = this.props.firstDayOfWeek;
        return day.day() === (firstDayOfWeek || _moment["default"].localeData().firstDayOfWeek());
      }

      return isFirstDayOfWeek;
    }()
  }, {
    key: "isLastDayOfWeek",
    value: function () {
      function isLastDayOfWeek(day) {
        var firstDayOfWeek = this.props.firstDayOfWeek;
        return day.day() === ((firstDayOfWeek || _moment["default"].localeData().firstDayOfWeek()) + 6) % 7;
      }

      return isLastDayOfWeek;
    }()
  }, {
    key: "render",
    value: function () {
      function render() {
        var _this$props11 = this.props,
            numberOfMonths = _this$props11.numberOfMonths,
            orientation = _this$props11.orientation,
            monthFormat = _this$props11.monthFormat,
            renderMonthText = _this$props11.renderMonthText,
            navPrev = _this$props11.navPrev,
            navNext = _this$props11.navNext,
            onOutsideClick = _this$props11.onOutsideClick,
            onShiftTab = _this$props11.onShiftTab,
            onTab = _this$props11.onTab,
            withPortal = _this$props11.withPortal,
            focused = _this$props11.focused,
            enableOutsideDays = _this$props11.enableOutsideDays,
            hideKeyboardShortcutsPanel = _this$props11.hideKeyboardShortcutsPanel,
            daySize = _this$props11.daySize,
            firstDayOfWeek = _this$props11.firstDayOfWeek,
            renderCalendarDay = _this$props11.renderCalendarDay,
            renderDayContents = _this$props11.renderDayContents,
            renderCalendarInfo = _this$props11.renderCalendarInfo,
            renderMonthElement = _this$props11.renderMonthElement,
            calendarInfoPosition = _this$props11.calendarInfoPosition,
            isFocused = _this$props11.isFocused,
            isRTL = _this$props11.isRTL,
            phrases = _this$props11.phrases,
            dayAriaLabelFormat = _this$props11.dayAriaLabelFormat,
            onBlur = _this$props11.onBlur,
            showKeyboardShortcuts = _this$props11.showKeyboardShortcuts,
            weekDayFormat = _this$props11.weekDayFormat,
            verticalHeight = _this$props11.verticalHeight,
            noBorder = _this$props11.noBorder,
            transitionDuration = _this$props11.transitionDuration,
            verticalBorderSpacing = _this$props11.verticalBorderSpacing,
            horizontalMonthPadding = _this$props11.horizontalMonthPadding;
        var _this$state7 = this.state,
            currentMonth = _this$state7.currentMonth,
            visibleDays = _this$state7.visibleDays;
        return _react["default"].createElement(_DayPicker["default"], {
          orientation: orientation,
          enableOutsideDays: enableOutsideDays,
          modifiers: visibleDays,
          numberOfMonths: numberOfMonths,
          onDayClick: this.onDayClick,
          onDayMouseEnter: this.onDayMouseEnter,
          onDayMouseLeave: this.onDayMouseLeave,
          onPrevMonthClick: this.onPrevMonthClick,
          onNextMonthClick: this.onNextMonthClick,
          onMonthChange: this.onMonthChange,
          onYearChange: this.onYearChange,
          monthFormat: monthFormat,
          withPortal: withPortal,
          hidden: !focused,
          hideKeyboardShortcutsPanel: hideKeyboardShortcutsPanel,
          initialVisibleMonth: function () {
            function initialVisibleMonth() {
              return currentMonth;
            }

            return initialVisibleMonth;
          }(),
          firstDayOfWeek: firstDayOfWeek,
          onOutsideClick: onOutsideClick,
          navPrev: navPrev,
          navNext: navNext,
          renderMonthText: renderMonthText,
          renderCalendarDay: renderCalendarDay,
          renderDayContents: renderDayContents,
          renderCalendarInfo: renderCalendarInfo,
          renderMonthElement: renderMonthElement,
          calendarInfoPosition: calendarInfoPosition,
          isFocused: isFocused,
          getFirstFocusableDay: this.getFirstFocusableDay,
          onBlur: onBlur,
          onTab: onTab,
          onShiftTab: onShiftTab,
          phrases: phrases,
          daySize: daySize,
          isRTL: isRTL,
          showKeyboardShortcuts: showKeyboardShortcuts,
          weekDayFormat: weekDayFormat,
          dayAriaLabelFormat: dayAriaLabelFormat,
          verticalHeight: verticalHeight,
          noBorder: noBorder,
          transitionDuration: transitionDuration,
          verticalBorderSpacing: verticalBorderSpacing,
          horizontalMonthPadding: horizontalMonthPadding
        });
      }

      return render;
    }()
  }]);

  return DayPickerSingleDateController;
}(_react["default"].PureComponent || _react["default"].Component);

exports["default"] = DayPickerSingleDateController;
DayPickerSingleDateController.propTypes =  false ? undefined : {};
DayPickerSingleDateController.defaultProps = defaultProps;

/***/ }),

/***/ 2962:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(0));

var _reactMomentProptypes = _interopRequireDefault(__webpack_require__(2837));

var _airbnbPropTypes = __webpack_require__(2820);

var _defaultPhrases = __webpack_require__(2821);

var _getPhrasePropTypes = _interopRequireDefault(__webpack_require__(2823));

var _IconPositionShape = _interopRequireDefault(__webpack_require__(2853));

var _OrientationShape = _interopRequireDefault(__webpack_require__(2947));

var _AnchorDirectionShape = _interopRequireDefault(__webpack_require__(2948));

var _OpenDirectionShape = _interopRequireDefault(__webpack_require__(2844));

var _DayOfWeekShape = _interopRequireDefault(__webpack_require__(2843));

var _CalendarInfoPositionShape = _interopRequireDefault(__webpack_require__(2864));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  // required props for a functional interactive SingleDatePicker
  date: _reactMomentProptypes["default"].momentObj,
  onDateChange: _propTypes["default"].func.isRequired,
  focused: _propTypes["default"].bool,
  onFocusChange: _propTypes["default"].func.isRequired,
  // input related props
  id: _propTypes["default"].string.isRequired,
  placeholder: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  readOnly: _propTypes["default"].bool,
  screenReaderInputMessage: _propTypes["default"].string,
  showClearDate: _propTypes["default"].bool,
  customCloseIcon: _propTypes["default"].node,
  showDefaultInputIcon: _propTypes["default"].bool,
  inputIconPosition: _IconPositionShape["default"],
  customInputIcon: _propTypes["default"].node,
  noBorder: _propTypes["default"].bool,
  block: _propTypes["default"].bool,
  small: _propTypes["default"].bool,
  regular: _propTypes["default"].bool,
  verticalSpacing: _airbnbPropTypes.nonNegativeInteger,
  keepFocusOnInput: _propTypes["default"].bool,
  // calendar presentation and interaction related props
  renderMonthText: (0, _airbnbPropTypes.mutuallyExclusiveProps)(_propTypes["default"].func, 'renderMonthText', 'renderMonthElement'),
  renderMonthElement: (0, _airbnbPropTypes.mutuallyExclusiveProps)(_propTypes["default"].func, 'renderMonthText', 'renderMonthElement'),
  orientation: _OrientationShape["default"],
  anchorDirection: _AnchorDirectionShape["default"],
  openDirection: _OpenDirectionShape["default"],
  horizontalMargin: _propTypes["default"].number,
  withPortal: _propTypes["default"].bool,
  withFullScreenPortal: _propTypes["default"].bool,
  appendToBody: _propTypes["default"].bool,
  disableScroll: _propTypes["default"].bool,
  initialVisibleMonth: _propTypes["default"].func,
  firstDayOfWeek: _DayOfWeekShape["default"],
  numberOfMonths: _propTypes["default"].number,
  keepOpenOnDateSelect: _propTypes["default"].bool,
  reopenPickerOnClearDate: _propTypes["default"].bool,
  renderCalendarInfo: _propTypes["default"].func,
  calendarInfoPosition: _CalendarInfoPositionShape["default"],
  hideKeyboardShortcutsPanel: _propTypes["default"].bool,
  daySize: _airbnbPropTypes.nonNegativeInteger,
  isRTL: _propTypes["default"].bool,
  verticalHeight: _airbnbPropTypes.nonNegativeInteger,
  transitionDuration: _airbnbPropTypes.nonNegativeInteger,
  horizontalMonthPadding: _airbnbPropTypes.nonNegativeInteger,
  // navigation related props
  navPrev: _propTypes["default"].node,
  navNext: _propTypes["default"].node,
  onPrevMonthClick: _propTypes["default"].func,
  onNextMonthClick: _propTypes["default"].func,
  onClose: _propTypes["default"].func,
  // day presentation and interaction related props
  renderCalendarDay: _propTypes["default"].func,
  renderDayContents: _propTypes["default"].func,
  enableOutsideDays: _propTypes["default"].bool,
  isDayBlocked: _propTypes["default"].func,
  isOutsideRange: _propTypes["default"].func,
  isDayHighlighted: _propTypes["default"].func,
  // internationalization props
  displayFormat: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  monthFormat: _propTypes["default"].string,
  weekDayFormat: _propTypes["default"].string,
  phrases: _propTypes["default"].shape((0, _getPhrasePropTypes["default"])(_defaultPhrases.SingleDatePickerPhrases)),
  dayAriaLabelFormat: _propTypes["default"].string
};
exports["default"] = _default;

/***/ }),

/***/ 2963:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(0));

var _airbnbPropTypes = __webpack_require__(2820);

var _reactWithStyles = __webpack_require__(2827);

var _defaultPhrases = __webpack_require__(2821);

var _getPhrasePropTypes = _interopRequireDefault(__webpack_require__(2823));

var _noflip = _interopRequireDefault(__webpack_require__(2842));

var _DateInput = _interopRequireDefault(__webpack_require__(2954));

var _IconPositionShape = _interopRequireDefault(__webpack_require__(2853));

var _CloseButton = _interopRequireDefault(__webpack_require__(2866));

var _CalendarIcon = _interopRequireDefault(__webpack_require__(2957));

var _OpenDirectionShape = _interopRequireDefault(__webpack_require__(2844));

var _constants = __webpack_require__(2818);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var propTypes =  false ? undefined : {};
var defaultProps = {
  children: null,
  placeholder: 'Select Date',
  displayValue: '',
  screenReaderMessage: '',
  focused: false,
  isFocused: false,
  disabled: false,
  required: false,
  readOnly: false,
  openDirection: _constants.OPEN_DOWN,
  showCaret: false,
  showClearDate: false,
  showDefaultInputIcon: false,
  inputIconPosition: _constants.ICON_BEFORE_POSITION,
  customCloseIcon: null,
  customInputIcon: null,
  isRTL: false,
  noBorder: false,
  block: false,
  small: false,
  regular: false,
  verticalSpacing: undefined,
  onChange: function () {
    function onChange() {}

    return onChange;
  }(),
  onClearDate: function () {
    function onClearDate() {}

    return onClearDate;
  }(),
  onFocus: function () {
    function onFocus() {}

    return onFocus;
  }(),
  onKeyDownShiftTab: function () {
    function onKeyDownShiftTab() {}

    return onKeyDownShiftTab;
  }(),
  onKeyDownTab: function () {
    function onKeyDownTab() {}

    return onKeyDownTab;
  }(),
  onKeyDownArrowDown: function () {
    function onKeyDownArrowDown() {}

    return onKeyDownArrowDown;
  }(),
  onKeyDownQuestionMark: function () {
    function onKeyDownQuestionMark() {}

    return onKeyDownQuestionMark;
  }(),
  // i18n
  phrases: _defaultPhrases.SingleDatePickerInputPhrases
};

function SingleDatePickerInput(_ref) {
  var id = _ref.id,
      children = _ref.children,
      placeholder = _ref.placeholder,
      displayValue = _ref.displayValue,
      focused = _ref.focused,
      isFocused = _ref.isFocused,
      disabled = _ref.disabled,
      required = _ref.required,
      readOnly = _ref.readOnly,
      showCaret = _ref.showCaret,
      showClearDate = _ref.showClearDate,
      showDefaultInputIcon = _ref.showDefaultInputIcon,
      inputIconPosition = _ref.inputIconPosition,
      phrases = _ref.phrases,
      onClearDate = _ref.onClearDate,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      onKeyDownShiftTab = _ref.onKeyDownShiftTab,
      onKeyDownTab = _ref.onKeyDownTab,
      onKeyDownArrowDown = _ref.onKeyDownArrowDown,
      onKeyDownQuestionMark = _ref.onKeyDownQuestionMark,
      screenReaderMessage = _ref.screenReaderMessage,
      customCloseIcon = _ref.customCloseIcon,
      customInputIcon = _ref.customInputIcon,
      openDirection = _ref.openDirection,
      isRTL = _ref.isRTL,
      noBorder = _ref.noBorder,
      block = _ref.block,
      small = _ref.small,
      regular = _ref.regular,
      verticalSpacing = _ref.verticalSpacing,
      styles = _ref.styles;

  var calendarIcon = customInputIcon || _react["default"].createElement(_CalendarIcon["default"], (0, _reactWithStyles.css)(styles.SingleDatePickerInput_calendarIcon_svg));

  var closeIcon = customCloseIcon || _react["default"].createElement(_CloseButton["default"], (0, _reactWithStyles.css)(styles.SingleDatePickerInput_clearDate_svg, small && styles.SingleDatePickerInput_clearDate_svg__small));

  var screenReaderText = screenReaderMessage || phrases.keyboardNavigationInstructions;

  var inputIcon = (showDefaultInputIcon || customInputIcon !== null) && _react["default"].createElement("button", _extends({}, (0, _reactWithStyles.css)(styles.SingleDatePickerInput_calendarIcon), {
    type: "button",
    disabled: disabled,
    "aria-label": phrases.focusStartDate,
    onClick: onFocus
  }), calendarIcon);

  return _react["default"].createElement("div", (0, _reactWithStyles.css)(styles.SingleDatePickerInput, disabled && styles.SingleDatePickerInput__disabled, isRTL && styles.SingleDatePickerInput__rtl, !noBorder && styles.SingleDatePickerInput__withBorder, block && styles.SingleDatePickerInput__block, showClearDate && styles.SingleDatePickerInput__showClearDate), inputIconPosition === _constants.ICON_BEFORE_POSITION && inputIcon, _react["default"].createElement(_DateInput["default"], {
    id: id,
    placeholder: placeholder // also used as label
    ,
    displayValue: displayValue,
    screenReaderMessage: screenReaderText,
    focused: focused,
    isFocused: isFocused,
    disabled: disabled,
    required: required,
    readOnly: readOnly,
    showCaret: showCaret,
    onChange: onChange,
    onFocus: onFocus,
    onKeyDownShiftTab: onKeyDownShiftTab,
    onKeyDownTab: onKeyDownTab,
    onKeyDownArrowDown: onKeyDownArrowDown,
    onKeyDownQuestionMark: onKeyDownQuestionMark,
    openDirection: openDirection,
    verticalSpacing: verticalSpacing,
    small: small,
    regular: regular,
    block: block
  }), children, showClearDate && _react["default"].createElement("button", _extends({}, (0, _reactWithStyles.css)(styles.SingleDatePickerInput_clearDate, small && styles.SingleDatePickerInput_clearDate__small, !customCloseIcon && styles.SingleDatePickerInput_clearDate__default, !displayValue && styles.SingleDatePickerInput_clearDate__hide), {
    type: "button",
    "aria-label": phrases.clearDate,
    disabled: disabled,
    onClick: onClearDate
  }), closeIcon), inputIconPosition === _constants.ICON_AFTER_POSITION && inputIcon);
}

SingleDatePickerInput.propTypes =  false ? undefined : {};
SingleDatePickerInput.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref2) {
  var _ref2$reactDates = _ref2.reactDates,
      border = _ref2$reactDates.border,
      color = _ref2$reactDates.color;
  return {
    SingleDatePickerInput: {
      display: 'inline-block',
      backgroundColor: color.background
    },
    SingleDatePickerInput__withBorder: {
      borderColor: color.border,
      borderWidth: border.pickerInput.borderWidth,
      borderStyle: border.pickerInput.borderStyle,
      borderRadius: border.pickerInput.borderRadius
    },
    SingleDatePickerInput__rtl: {
      direction: (0, _noflip["default"])('rtl')
    },
    SingleDatePickerInput__disabled: {
      backgroundColor: color.disabled
    },
    SingleDatePickerInput__block: {
      display: 'block'
    },
    SingleDatePickerInput__showClearDate: {
      paddingRight: 30 // TODO: should be noflip wrapped and handled by an isRTL prop

    },
    SingleDatePickerInput_clearDate: {
      background: 'none',
      border: 0,
      color: 'inherit',
      font: 'inherit',
      lineHeight: 'normal',
      overflow: 'visible',
      cursor: 'pointer',
      padding: 10,
      margin: '0 10px 0 5px',
      // TODO: should be noflip wrapped and handled by an isRTL prop
      position: 'absolute',
      right: 0,
      // TODO: should be noflip wrapped and handled by an isRTL prop
      top: '50%',
      transform: 'translateY(-50%)'
    },
    SingleDatePickerInput_clearDate__default: {
      ':focus': {
        background: color.core.border,
        borderRadius: '50%'
      },
      ':hover': {
        background: color.core.border,
        borderRadius: '50%'
      }
    },
    SingleDatePickerInput_clearDate__small: {
      padding: 6
    },
    SingleDatePickerInput_clearDate__hide: {
      visibility: 'hidden'
    },
    SingleDatePickerInput_clearDate_svg: {
      fill: color.core.grayLight,
      height: 12,
      width: 15,
      verticalAlign: 'middle'
    },
    SingleDatePickerInput_clearDate_svg__small: {
      height: 9
    },
    SingleDatePickerInput_calendarIcon: {
      background: 'none',
      border: 0,
      color: 'inherit',
      font: 'inherit',
      lineHeight: 'normal',
      overflow: 'visible',
      cursor: 'pointer',
      display: 'inline-block',
      verticalAlign: 'middle',
      padding: 10,
      margin: '0 5px 0 10px' // TODO: should be noflip wrapped and handled by an isRTL prop

    },
    SingleDatePickerInput_calendarIcon_svg: {
      fill: color.core.grayLight,
      height: 15,
      width: 14,
      verticalAlign: 'middle'
    }
  };
}, {
  pureComponent: typeof _react["default"].PureComponent !== 'undefined'
})(SingleDatePickerInput);

exports["default"] = _default;

/***/ }),

/***/ 2966:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(26);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(0);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./node_modules/react-portal/es/utils.js
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
// CONCATENATED MODULE: ./node_modules/react-portal/es/Portal.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Portal_Portal = function (_React$Component) {
  _inherits(Portal, _React$Component);

  function Portal() {
    _classCallCheck(this, Portal);

    return _possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
  }

  _createClass(Portal, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.defaultNode) {
        document.body.removeChild(this.defaultNode);
      }
      this.defaultNode = null;
    }
  }, {
    key: 'render',
    value: function render() {
      if (!canUseDOM) {
        return null;
      }
      if (!this.props.node && !this.defaultNode) {
        this.defaultNode = document.createElement('div');
        document.body.appendChild(this.defaultNode);
      }
      return react_dom_default.a.createPortal(this.props.children, this.props.node || this.defaultNode);
    }
  }]);

  return Portal;
}(react_default.a.Component);

Portal_Portal.propTypes = {
  children: prop_types_default.a.node.isRequired,
  node: prop_types_default.a.any
};

/* harmony default export */ var es_Portal = (Portal_Portal);
// CONCATENATED MODULE: ./node_modules/react-portal/es/LegacyPortal.js
var LegacyPortal_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function LegacyPortal_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function LegacyPortal_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function LegacyPortal_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This file is a fallback for a consumer who is not yet on React 16
// as createPortal was introduced in React 16





var LegacyPortal_Portal = function (_React$Component) {
  LegacyPortal_inherits(Portal, _React$Component);

  function Portal() {
    LegacyPortal_classCallCheck(this, Portal);

    return LegacyPortal_possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
  }

  LegacyPortal_createClass(Portal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.renderPortal();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(props) {
      this.renderPortal();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      react_dom_default.a.unmountComponentAtNode(this.defaultNode || this.props.node);
      if (this.defaultNode) {
        document.body.removeChild(this.defaultNode);
      }
      this.defaultNode = null;
      this.portal = null;
    }
  }, {
    key: 'renderPortal',
    value: function renderPortal(props) {
      if (!this.props.node && !this.defaultNode) {
        this.defaultNode = document.createElement('div');
        document.body.appendChild(this.defaultNode);
      }

      var children = this.props.children;
      // https://gist.github.com/jimfb/d99e0678e9da715ccf6454961ef04d1b
      if (typeof this.props.children.type === 'function') {
        children = react_default.a.cloneElement(this.props.children);
      }

      this.portal = react_dom_default.a.unstable_renderSubtreeIntoContainer(this, children, this.props.node || this.defaultNode);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Portal;
}(react_default.a.Component);

/* harmony default export */ var LegacyPortal = (LegacyPortal_Portal);


LegacyPortal_Portal.propTypes = {
  children: prop_types_default.a.node.isRequired,
  node: prop_types_default.a.any
};
// CONCATENATED MODULE: ./node_modules/react-portal/es/PortalCompat.js





var PortalCompat_Portal = void 0;

if (react_dom_default.a.createPortal) {
  PortalCompat_Portal = es_Portal;
} else {
  PortalCompat_Portal = LegacyPortal;
}

/* harmony default export */ var PortalCompat = (PortalCompat_Portal);
// CONCATENATED MODULE: ./node_modules/react-portal/es/PortalWithState.js
var PortalWithState_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function PortalWithState_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PortalWithState_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function PortalWithState_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var KEYCODES = {
  ESCAPE: 27
};

var PortalWithState_PortalWithState = function (_React$Component) {
  PortalWithState_inherits(PortalWithState, _React$Component);

  function PortalWithState(props) {
    PortalWithState_classCallCheck(this, PortalWithState);

    var _this = PortalWithState_possibleConstructorReturn(this, (PortalWithState.__proto__ || Object.getPrototypeOf(PortalWithState)).call(this, props));

    _this.portalNode = null;
    _this.state = { active: !!props.defaultOpen };
    _this.openPortal = _this.openPortal.bind(_this);
    _this.closePortal = _this.closePortal.bind(_this);
    _this.wrapWithPortal = _this.wrapWithPortal.bind(_this);
    _this.handleOutsideMouseClick = _this.handleOutsideMouseClick.bind(_this);
    _this.handleKeydown = _this.handleKeydown.bind(_this);
    return _this;
  }

  PortalWithState_createClass(PortalWithState, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.closeOnEsc) {
        document.addEventListener('keydown', this.handleKeydown);
      }
      if (this.props.closeOnOutsideClick) {
        document.addEventListener('click', this.handleOutsideMouseClick);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.closeOnEsc) {
        document.removeEventListener('keydown', this.handleKeydown);
      }
      if (this.props.closeOnOutsideClick) {
        document.removeEventListener('click', this.handleOutsideMouseClick);
      }
    }
  }, {
    key: 'openPortal',
    value: function openPortal(e) {
      if (this.state.active) {
        return;
      }
      if (e && e.nativeEvent) {
        e.nativeEvent.stopImmediatePropagation();
      }
      this.setState({ active: true }, this.props.onOpen);
    }
  }, {
    key: 'closePortal',
    value: function closePortal() {
      if (!this.state.active) {
        return;
      }
      this.setState({ active: false }, this.props.onClose);
    }
  }, {
    key: 'wrapWithPortal',
    value: function wrapWithPortal(children) {
      var _this2 = this;

      if (!this.state.active) {
        return null;
      }
      return react_default.a.createElement(
        PortalCompat,
        {
          node: this.props.node,
          key: 'react-portal',
          ref: function ref(portalNode) {
            return _this2.portalNode = portalNode;
          }
        },
        children
      );
    }
  }, {
    key: 'handleOutsideMouseClick',
    value: function handleOutsideMouseClick(e) {
      if (!this.state.active) {
        return;
      }
      var root = this.portalNode && (this.portalNode.props.node || this.portalNode.defaultNode);
      if (!root || root.contains(e.target) || e.button && e.button !== 0) {
        return;
      }
      this.closePortal();
    }
  }, {
    key: 'handleKeydown',
    value: function handleKeydown(e) {
      if (e.keyCode === KEYCODES.ESCAPE && this.state.active) {
        this.closePortal();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children({
        openPortal: this.openPortal,
        closePortal: this.closePortal,
        portal: this.wrapWithPortal,
        isOpen: this.state.active
      });
    }
  }]);

  return PortalWithState;
}(react_default.a.Component);

PortalWithState_PortalWithState.propTypes = {
  children: prop_types_default.a.func.isRequired,
  defaultOpen: prop_types_default.a.bool,
  node: prop_types_default.a.any,
  closeOnEsc: prop_types_default.a.bool,
  closeOnOutsideClick: prop_types_default.a.bool,
  onOpen: prop_types_default.a.func,
  onClose: prop_types_default.a.func
};

PortalWithState_PortalWithState.defaultProps = {
  onOpen: function onOpen() {},
  onClose: function onClose() {}
};

/* harmony default export */ var es_PortalWithState = (PortalWithState_PortalWithState);
// CONCATENATED MODULE: ./node_modules/react-portal/es/index.js
/* concated harmony reexport Portal */__webpack_require__.d(__webpack_exports__, "Portal", function() { return PortalCompat; });
/* concated harmony reexport PortalWithState */__webpack_require__.d(__webpack_exports__, "PortalWithState", function() { return es_PortalWithState; });





/***/ }),

/***/ 2988:
/***/ (function(module, exports, __webpack_require__) {

// eslint-disable-next-line import/no-unresolved
__webpack_require__(2996);


/***/ }),

/***/ 2989:
/***/ (function(module, exports, __webpack_require__) {

// eslint-disable-next-line import/no-unresolved
module.exports = __webpack_require__(3041);


/***/ }),

/***/ 2996:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _registerCSSInterfaceWithDefaultTheme = _interopRequireDefault(__webpack_require__(2997));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _registerCSSInterfaceWithDefaultTheme["default"])();

/***/ }),

/***/ 2997:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = registerCSSInterfaceWithDefaultTheme;

var _reactWithStylesInterfaceCss = _interopRequireDefault(__webpack_require__(2998));

var _registerInterfaceWithDefaultTheme = _interopRequireDefault(__webpack_require__(3040));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function registerCSSInterfaceWithDefaultTheme() {
  (0, _registerInterfaceWithDefaultTheme["default"])(_reactWithStylesInterfaceCss["default"]);
}

/***/ }),

/***/ 2998:
/***/ (function(module, exports, __webpack_require__) {

// eslint-disable-next-line import/no-unresolved
module.exports = __webpack_require__(2999).default;


/***/ }),

/***/ 2999:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrayPrototype = __webpack_require__(3000);

var _arrayPrototype2 = _interopRequireDefault(_arrayPrototype);

var _globalCache = __webpack_require__(3036);

var _globalCache2 = _interopRequireDefault(_globalCache);

var _constants = __webpack_require__(3037);

var _getClassName = __webpack_require__(3038);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _separateStyles2 = __webpack_require__(3039);

var _separateStyles3 = _interopRequireDefault(_separateStyles2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Function required as part of the react-with-styles interface. Parses the styles provided by
 * react-with-styles to produce class names based on the style name and optionally the namespace if
 * available.
 *
 * stylesObject {Object} The styles object passed to withStyles.
 *
 * Return an object mapping style names to class names.
 */
function create(stylesObject) {
  var stylesToClasses = {};
  var styleNames = Object.keys(stylesObject);
  var sharedState = _globalCache2['default'].get(_constants.GLOBAL_CACHE_KEY) || {};
  var _sharedState$namespac = sharedState.namespace,
      namespace = _sharedState$namespac === undefined ? '' : _sharedState$namespac;

  styleNames.forEach(function (styleName) {
    var className = (0, _getClassName2['default'])(namespace, styleName);
    stylesToClasses[styleName] = className;
  });
  return stylesToClasses;
}

/**
 * Process styles to be consumed by a component.
 *
 * stylesArray {Array} Array of the following: values returned by create, plain JavaScript objects
 * representing inline styles, or arrays thereof.
 *
 * Return an object with optional className and style properties to be spread on a component.
 */
function resolve(stylesArray) {
  var flattenedStyles = (0, _arrayPrototype2['default'])(stylesArray, Infinity);

  var _separateStyles = (0, _separateStyles3['default'])(flattenedStyles),
      classNames = _separateStyles.classNames,
      hasInlineStyles = _separateStyles.hasInlineStyles,
      inlineStyles = _separateStyles.inlineStyles;

  var specificClassNames = classNames.map(function (name, index) {
    return String(name) + ' ' + String(name) + '_' + String(index + 1);
  });
  var className = specificClassNames.join(' ');

  var result = { className: className };
  if (hasInlineStyles) result.style = inlineStyles;
  return result;
}

exports['default'] = { create: create, resolve: resolve };

/***/ }),

/***/ 3000:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(2838);
var callBind = __webpack_require__(2885);

var implementation = __webpack_require__(2917);
var getPolyfill = __webpack_require__(2930);
var polyfill = getPolyfill();
var shim = __webpack_require__(3035);

var boundFlat = callBind(polyfill);

define(boundFlat, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = boundFlat;


/***/ }),

/***/ 3001:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = __webpack_require__(2914); // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$applicationCache: true,
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$onmozfullscreenchange: true,
		$onmozfullscreenerror: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}
module.exports = keysShim;


/***/ }),

/***/ 3002:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ 3003:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(2819);

var $Array = GetIntrinsic('%Array%');
var $species = GetIntrinsic('%Symbol.species%', true);
var $TypeError = GetIntrinsic('%TypeError%');

var Get = __webpack_require__(2886);
var IsArray = __webpack_require__(2887);
var IsConstructor = __webpack_require__(3006);
var IsInteger = __webpack_require__(3007);
var Type = __webpack_require__(2839);

// https://ecma-international.org/ecma-262/6.0/#sec-arrayspeciescreate

module.exports = function ArraySpeciesCreate(originalArray, length) {
	if (!IsInteger(length) || length < 0) {
		throw new $TypeError('Assertion failed: length must be an integer >= 0');
	}
	var len = length === 0 ? 0 : length;
	var C;
	var isArray = IsArray(originalArray);
	if (isArray) {
		C = Get(originalArray, 'constructor');
		// TODO: figure out how to make a cross-realm normal Array, a same-realm Array
		// if (IsConstructor(C)) {
		// 	if C is another realm's Array, C = undefined
		// 	Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Array))) === null ?
		// }
		if ($species && Type(C) === 'Object') {
			C = Get(C, $species);
			if (C === null) {
				C = void 0;
			}
		}
	}
	if (typeof C === 'undefined') {
		return $Array(len);
	}
	if (!IsConstructor(C)) {
		throw new $TypeError('C must be a constructor');
	}
	return new C(len); // Construct(C, len);
};



/***/ }),

/***/ 3004:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3005:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://www.ecma-international.org/ecma-262/5.1/#sec-8

module.exports = function Type(x) {
	if (x === null) {
		return 'Null';
	}
	if (typeof x === 'undefined') {
		return 'Undefined';
	}
	if (typeof x === 'function' || typeof x === 'object') {
		return 'Object';
	}
	if (typeof x === 'number') {
		return 'Number';
	}
	if (typeof x === 'boolean') {
		return 'Boolean';
	}
	if (typeof x === 'string') {
		return 'String';
	}
};


/***/ }),

/***/ 3006:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://www.ecma-international.org/ecma-262/6.0/#sec-isconstructor

module.exports = function IsConstructor(argument) {
	return typeof argument === 'function' && !!argument.prototype; // unfortunately there's no way to truly check this without try/catch `new argument`
};


/***/ }),

/***/ 3007:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(2819);

var $Math = GetIntrinsic('%Math%');

var $floor = $Math.floor;
var $abs = $Math.abs;

var $isNaN = __webpack_require__(2888);
var $isFinite = __webpack_require__(2919);

// https://www.ecma-international.org/ecma-262/6.0/#sec-isinteger

module.exports = function IsInteger(argument) {
	if (typeof argument !== 'number' || $isNaN(argument) || !$isFinite(argument)) {
		return false;
	}
	var abs = $abs(argument);
	return $floor(abs) === abs;
};


/***/ }),

/***/ 3008:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(2819);

var $TypeError = GetIntrinsic('%TypeError%');

var MAX_SAFE_INTEGER = __webpack_require__(2920);

var Call = __webpack_require__(3009);
var CreateDataPropertyOrThrow = __webpack_require__(3010);
var Get = __webpack_require__(2886);
var HasProperty = __webpack_require__(3022);
var IsArray = __webpack_require__(2887);
var ToLength = __webpack_require__(2926);
var ToString = __webpack_require__(3032);

// https://ecma-international.org/ecma-262/10.0/#sec-flattenintoarray

// eslint-disable-next-line max-params, max-statements
module.exports = function FlattenIntoArray(target, source, sourceLen, start, depth) {
	var mapperFunction;
	if (arguments.length > 5) {
		mapperFunction = arguments[5];
	}

	var targetIndex = start;
	var sourceIndex = 0;
	while (sourceIndex < sourceLen) {
		var P = ToString(sourceIndex);
		var exists = HasProperty(source, P);
		if (exists === true) {
			var element = Get(source, P);
			if (typeof mapperFunction !== 'undefined') {
				if (arguments.length <= 6) {
					throw new $TypeError('Assertion failed: thisArg is required when mapperFunction is provided');
				}
				element = Call(mapperFunction, arguments[6], [element, sourceIndex, source]);
			}
			var shouldFlatten = false;
			if (depth > 0) {
				shouldFlatten = IsArray(element);
			}
			if (shouldFlatten) {
				var elementLen = ToLength(Get(element, 'length'));
				targetIndex = FlattenIntoArray(target, element, elementLen, targetIndex, depth - 1);
			} else {
				if (targetIndex >= MAX_SAFE_INTEGER) {
					throw new $TypeError('index too large');
				}
				CreateDataPropertyOrThrow(target, ToString(targetIndex), element);
				targetIndex += 1;
			}
		}
		sourceIndex += 1;
	}

	return targetIndex;
};


/***/ }),

/***/ 3009:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(2819);

var $TypeError = GetIntrinsic('%TypeError%');

var inspect = __webpack_require__(2918);

var IsCallable = __webpack_require__(2921);

// https://www.ecma-international.org/ecma-262/6.0/#sec-call

module.exports = function Call(F, V) {
	var args = arguments.length > 2 ? arguments[2] : [];
	if (!IsCallable(F)) {
		throw new $TypeError(inspect(F) + ' is not a function');
	}
	return F.apply(V, args);
};


/***/ }),

/***/ 3010:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(2819);

var $TypeError = GetIntrinsic('%TypeError%');

var CreateDataProperty = __webpack_require__(3011);
var IsPropertyKey = __webpack_require__(2861);
var Type = __webpack_require__(2839);

// // https://ecma-international.org/ecma-262/6.0/#sec-createdatapropertyorthrow

module.exports = function CreateDataPropertyOrThrow(O, P, V) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}
	var success = CreateDataProperty(O, P, V);
	if (!success) {
		throw new $TypeError('unable to create data property');
	}
	return success;
};


/***/ }),

/***/ 3011:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(2819);

var $TypeError = GetIntrinsic('%TypeError%');

var DefineOwnProperty = __webpack_require__(3012);

var FromPropertyDescriptor = __webpack_require__(3013);
var OrdinaryGetOwnProperty = __webpack_require__(3014);
var IsDataDescriptor = __webpack_require__(3019);
var IsExtensible = __webpack_require__(3020);
var IsPropertyKey = __webpack_require__(2861);
var SameValue = __webpack_require__(3021);
var Type = __webpack_require__(2839);

// https://www.ecma-international.org/ecma-262/6.0/#sec-createdataproperty

module.exports = function CreateDataProperty(O, P, V) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}
	var oldDesc = OrdinaryGetOwnProperty(O, P);
	var extensible = !oldDesc || IsExtensible(O);
	var immutable = oldDesc && (!oldDesc['[[Writable]]'] || !oldDesc['[[Configurable]]']);
	if (immutable || !extensible) {
		return false;
	}
	return DefineOwnProperty(
		IsDataDescriptor,
		SameValue,
		FromPropertyDescriptor,
		O,
		P,
		{
			'[[Configurable]]': true,
			'[[Enumerable]]': true,
			'[[Value]]': V,
			'[[Writable]]': true
		}
	);
};


/***/ }),

/***/ 3012:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(2819);

var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

var callBound = __webpack_require__(2862);

var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');

// eslint-disable-next-line max-params
module.exports = function DefineOwnProperty(IsDataDescriptor, SameValue, FromPropertyDescriptor, O, P, desc) {
	if (!$defineProperty) {
		if (!IsDataDescriptor(desc)) {
			// ES3 does not support getters/setters
			return false;
		}
		if (!desc['[[Configurable]]'] || !desc['[[Writable]]']) {
			return false;
		}

		// fallback for ES3
		if (P in O && $isEnumerable(O, P) !== !!desc['[[Enumerable]]']) {
			// a non-enumerable existing property
			return false;
		}

		// property does not exist at all, or exists but is enumerable
		var V = desc['[[Value]]'];
		// eslint-disable-next-line no-param-reassign
		O[P] = V; // will use [[Define]]
		return SameValue(O[P], V);
	}
	$defineProperty(O, P, FromPropertyDescriptor(desc));
	return true;
};


/***/ }),

/***/ 3013:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assertRecord = __webpack_require__(2923);

var Type = __webpack_require__(2839);

// https://www.ecma-international.org/ecma-262/6.0/#sec-frompropertydescriptor

module.exports = function FromPropertyDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return Desc;
	}

	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	var obj = {};
	if ('[[Value]]' in Desc) {
		obj.value = Desc['[[Value]]'];
	}
	if ('[[Writable]]' in Desc) {
		obj.writable = Desc['[[Writable]]'];
	}
	if ('[[Get]]' in Desc) {
		obj.get = Desc['[[Get]]'];
	}
	if ('[[Set]]' in Desc) {
		obj.set = Desc['[[Set]]'];
	}
	if ('[[Enumerable]]' in Desc) {
		obj.enumerable = Desc['[[Enumerable]]'];
	}
	if ('[[Configurable]]' in Desc) {
		obj.configurable = Desc['[[Configurable]]'];
	}
	return obj;
};


/***/ }),

/***/ 3014:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(2819);

var $gOPD = __webpack_require__(3015);
var $TypeError = GetIntrinsic('%TypeError%');

var callBound = __webpack_require__(2862);

var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');

var has = __webpack_require__(2848);

var IsArray = __webpack_require__(2887);
var IsPropertyKey = __webpack_require__(2861);
var IsRegExp = __webpack_require__(3016);
var ToPropertyDescriptor = __webpack_require__(3018);
var Type = __webpack_require__(2839);

// https://www.ecma-international.org/ecma-262/6.0/#sec-ordinarygetownproperty

module.exports = function OrdinaryGetOwnProperty(O, P) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: O must be an Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: P must be a Property Key');
	}
	if (!has(O, P)) {
		return void 0;
	}
	if (!$gOPD) {
		// ES3 / IE 8 fallback
		var arrayLength = IsArray(O) && P === 'length';
		var regexLastIndex = IsRegExp(O) && P === 'lastIndex';
		return {
			'[[Configurable]]': !(arrayLength || regexLastIndex),
			'[[Enumerable]]': $isEnumerable(O, P),
			'[[Value]]': O[P],
			'[[Writable]]': true
		};
	}
	return ToPropertyDescriptor($gOPD(O, P));
};


/***/ }),

/***/ 3015:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(2819);

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%');
if ($gOPD) {
	try {
		$gOPD([], 'length');
	} catch (e) {
		// IE 8 has a broken gOPD
		$gOPD = null;
	}
}

module.exports = $gOPD;


/***/ }),

/***/ 3016:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(2819);

var $match = GetIntrinsic('%Symbol.match%', true);

var hasRegExpMatcher = __webpack_require__(3017);

var ToBoolean = __webpack_require__(2924);

// https://ecma-international.org/ecma-262/6.0/#sec-isregexp

module.exports = function IsRegExp(argument) {
	if (!argument || typeof argument !== 'object') {
		return false;
	}
	if ($match) {
		var isRegExp = argument[$match];
		if (typeof isRegExp !== 'undefined') {
			return ToBoolean(isRegExp);
		}
	}
	return hasRegExpMatcher(argument);
};


/***/ }),

/***/ 3017:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__(2848);
var regexExec = RegExp.prototype.exec;
var gOPD = Object.getOwnPropertyDescriptor;

var tryRegexExecCall = function tryRegexExec(value) {
	try {
		var lastIndex = value.lastIndex;
		value.lastIndex = 0; // eslint-disable-line no-param-reassign

		regexExec.call(value);
		return true;
	} catch (e) {
		return false;
	} finally {
		value.lastIndex = lastIndex; // eslint-disable-line no-param-reassign
	}
};
var toStr = Object.prototype.toString;
var regexClass = '[object RegExp]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isRegex(value) {
	if (!value || typeof value !== 'object') {
		return false;
	}
	if (!hasToStringTag) {
		return toStr.call(value) === regexClass;
	}

	var descriptor = gOPD(value, 'lastIndex');
	var hasLastIndexDataProperty = descriptor && has(descriptor, 'value');
	if (!hasLastIndexDataProperty) {
		return false;
	}

	return tryRegexExecCall(value);
};


/***/ }),

/***/ 3018:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__(2848);

var GetIntrinsic = __webpack_require__(2819);

var $TypeError = GetIntrinsic('%TypeError%');

var Type = __webpack_require__(2839);
var ToBoolean = __webpack_require__(2924);
var IsCallable = __webpack_require__(2921);

// https://ecma-international.org/ecma-262/5.1/#sec-8.10.5

module.exports = function ToPropertyDescriptor(Obj) {
	if (Type(Obj) !== 'Object') {
		throw new $TypeError('ToPropertyDescriptor requires an object');
	}

	var desc = {};
	if (has(Obj, 'enumerable')) {
		desc['[[Enumerable]]'] = ToBoolean(Obj.enumerable);
	}
	if (has(Obj, 'configurable')) {
		desc['[[Configurable]]'] = ToBoolean(Obj.configurable);
	}
	if (has(Obj, 'value')) {
		desc['[[Value]]'] = Obj.value;
	}
	if (has(Obj, 'writable')) {
		desc['[[Writable]]'] = ToBoolean(Obj.writable);
	}
	if (has(Obj, 'get')) {
		var getter = Obj.get;
		if (typeof getter !== 'undefined' && !IsCallable(getter)) {
			throw new TypeError('getter must be a function');
		}
		desc['[[Get]]'] = getter;
	}
	if (has(Obj, 'set')) {
		var setter = Obj.set;
		if (typeof setter !== 'undefined' && !IsCallable(setter)) {
			throw new $TypeError('setter must be a function');
		}
		desc['[[Set]]'] = setter;
	}

	if ((has(desc, '[[Get]]') || has(desc, '[[Set]]')) && (has(desc, '[[Value]]') || has(desc, '[[Writable]]'))) {
		throw new $TypeError('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
	}
	return desc;
};


/***/ }),

/***/ 3019:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__(2848);

var assertRecord = __webpack_require__(2923);

var Type = __webpack_require__(2839);

// https://www.ecma-international.org/ecma-262/6.0/#sec-isdatadescriptor

module.exports = function IsDataDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return false;
	}

	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	if (!has(Desc, '[[Value]]') && !has(Desc, '[[Writable]]')) {
		return false;
	}

	return true;
};


/***/ }),

/***/ 3020:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(2819);

var $Object = GetIntrinsic('%Object%');

var isPrimitive = __webpack_require__(2925);

var $preventExtensions = $Object.preventExtensions;
var $isExtensible = $Object.isExtensible;

// https://www.ecma-international.org/ecma-262/6.0/#sec-isextensible-o

module.exports = $preventExtensions
	? function IsExtensible(obj) {
		return !isPrimitive(obj) && $isExtensible(obj);
	}
	: function IsExtensible(obj) {
		return !isPrimitive(obj);
	};


/***/ }),

/***/ 3021:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $isNaN = __webpack_require__(2888);

// http://www.ecma-international.org/ecma-262/5.1/#sec-9.12

module.exports = function SameValue(x, y) {
	if (x === y) { // 0 === -0, but they are not identical.
		if (x === 0) { return 1 / x === 1 / y; }
		return true;
	}
	return $isNaN(x) && $isNaN(y);
};


/***/ }),

/***/ 3022:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(2819);

var $TypeError = GetIntrinsic('%TypeError%');

var IsPropertyKey = __webpack_require__(2861);
var Type = __webpack_require__(2839);

// https://ecma-international.org/ecma-262/6.0/#sec-hasproperty

module.exports = function HasProperty(O, P) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: `O` must be an Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: `P` must be a Property Key');
	}
	return P in O;
};


/***/ }),

/***/ 3023:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(2819);

var $Math = GetIntrinsic('%Math%');

var ToNumber = __webpack_require__(3024);
var $isNaN = __webpack_require__(2888);
var $isFinite = __webpack_require__(2919);
var $sign = __webpack_require__(3025);

var $floor = $Math.floor;
var $abs = $Math.abs;

// http://www.ecma-international.org/ecma-262/5.1/#sec-9.4

module.exports = function ToInteger(value) {
	var number = ToNumber(value);
	if ($isNaN(number)) { return 0; }
	if (number === 0 || !$isFinite(number)) { return number; }
	return $sign(number) * $floor($abs(number));
};


/***/ }),

/***/ 3024:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// http://www.ecma-international.org/ecma-262/5.1/#sec-9.3

module.exports = function ToNumber(value) {
	return +value; // eslint-disable-line no-implicit-coercion
};


/***/ }),

/***/ 3025:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function sign(number) {
	return number >= 0 ? 1 : -1;
};


/***/ }),

/***/ 3026:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(2819);

var $TypeError = GetIntrinsic('%TypeError%');
var $Number = GetIntrinsic('%Number%');
var $RegExp = GetIntrinsic('%RegExp%');
var $parseInteger = GetIntrinsic('%parseInt%');

var callBound = __webpack_require__(2862);
var regexTester = __webpack_require__(3027);
var isPrimitive = __webpack_require__(2925);

var $strSlice = callBound('String.prototype.slice');
var isBinary = regexTester(/^0b[01]+$/i);
var isOctal = regexTester(/^0o[0-7]+$/i);
var isInvalidHexLiteral = regexTester(/^[-+]0x[0-9a-f]+$/i);
var nonWS = ['\u0085', '\u200b', '\ufffe'].join('');
var nonWSregex = new $RegExp('[' + nonWS + ']', 'g');
var hasNonWS = regexTester(nonWSregex);

// whitespace from: https://es5.github.io/#x15.5.4.20
// implementation from https://github.com/es-shims/es5-shim/blob/v3.4.0/es5-shim.js#L1304-L1324
var ws = [
	'\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003',
	'\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028',
	'\u2029\uFEFF'
].join('');
var trimRegex = new RegExp('(^[' + ws + ']+)|([' + ws + ']+$)', 'g');
var $replace = callBound('String.prototype.replace');
var $trim = function (value) {
	return $replace(value, trimRegex, '');
};

var ToPrimitive = __webpack_require__(3028);

// https://www.ecma-international.org/ecma-262/6.0/#sec-tonumber

module.exports = function ToNumber(argument) {
	var value = isPrimitive(argument) ? argument : ToPrimitive(argument, $Number);
	if (typeof value === 'symbol') {
		throw new $TypeError('Cannot convert a Symbol value to a number');
	}
	if (typeof value === 'string') {
		if (isBinary(value)) {
			return ToNumber($parseInteger($strSlice(value, 2), 2));
		} else if (isOctal(value)) {
			return ToNumber($parseInteger($strSlice(value, 2), 8));
		} else if (hasNonWS(value) || isInvalidHexLiteral(value)) {
			return NaN;
		} else {
			var trimmed = $trim(value);
			if (trimmed !== value) {
				return ToNumber(trimmed);
			}
		}
	}
	return $Number(value);
};


/***/ }),

/***/ 3027:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(2819);

var $test = GetIntrinsic('RegExp.prototype.test');

var callBind = __webpack_require__(2885);

module.exports = function regexTester(regex) {
	return callBind($test, regex);
};


/***/ }),

/***/ 3028:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toPrimitive = __webpack_require__(3029);

// https://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive

module.exports = function ToPrimitive(input) {
	if (arguments.length > 1) {
		return toPrimitive(input, arguments[1]);
	}
	return toPrimitive(input);
};


/***/ }),

/***/ 3029:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';

var isPrimitive = __webpack_require__(3030);
var isCallable = __webpack_require__(2922);
var isDate = __webpack_require__(3031);
var isSymbol = __webpack_require__(2928);

var ordinaryToPrimitive = function OrdinaryToPrimitive(O, hint) {
	if (typeof O === 'undefined' || O === null) {
		throw new TypeError('Cannot call method on ' + O);
	}
	if (typeof hint !== 'string' || (hint !== 'number' && hint !== 'string')) {
		throw new TypeError('hint must be "string" or "number"');
	}
	var methodNames = hint === 'string' ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
	var method, result, i;
	for (i = 0; i < methodNames.length; ++i) {
		method = O[methodNames[i]];
		if (isCallable(method)) {
			result = method.call(O);
			if (isPrimitive(result)) {
				return result;
			}
		}
	}
	throw new TypeError('No default value');
};

var GetMethod = function GetMethod(O, P) {
	var func = O[P];
	if (func !== null && typeof func !== 'undefined') {
		if (!isCallable(func)) {
			throw new TypeError(func + ' returned for property ' + P + ' of object ' + O + ' is not a function');
		}
		return func;
	}
	return void 0;
};

// http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive
module.exports = function ToPrimitive(input) {
	if (isPrimitive(input)) {
		return input;
	}
	var hint = 'default';
	if (arguments.length > 1) {
		if (arguments[1] === String) {
			hint = 'string';
		} else if (arguments[1] === Number) {
			hint = 'number';
		}
	}

	var exoticToPrim;
	if (hasSymbols) {
		if (Symbol.toPrimitive) {
			exoticToPrim = GetMethod(input, Symbol.toPrimitive);
		} else if (isSymbol(input)) {
			exoticToPrim = Symbol.prototype.valueOf;
		}
	}
	if (typeof exoticToPrim !== 'undefined') {
		var result = exoticToPrim.call(input, hint);
		if (isPrimitive(result)) {
			return result;
		}
		throw new TypeError('unable to convert exotic object to primitive');
	}
	if (hint === 'default' && (isDate(input) || isSymbol(input))) {
		hint = 'string';
	}
	return ordinaryToPrimitive(input, hint === 'default' ? 'number' : hint);
};


/***/ }),

/***/ 3030:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isPrimitive(value) {
	return value === null || (typeof value !== 'function' && typeof value !== 'object');
};


/***/ }),

/***/ 3031:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateGetDayCall(value) {
	try {
		getDay.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) {
		return false;
	}
	return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};


/***/ }),

/***/ 3032:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(2819);

var $String = GetIntrinsic('%String%');
var $TypeError = GetIntrinsic('%TypeError%');

// https://www.ecma-international.org/ecma-262/6.0/#sec-tostring

module.exports = function ToString(argument) {
	if (typeof argument === 'symbol') {
		throw new $TypeError('Cannot convert a Symbol value to a string');
	}
	return $String(argument);
};


/***/ }),

/***/ 3033:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(2819);

var $Object = GetIntrinsic('%Object%');

var RequireObjectCoercible = __webpack_require__(2929);

// https://www.ecma-international.org/ecma-262/6.0/#sec-toobject

module.exports = function ToObject(value) {
	RequireObjectCoercible(value);
	return $Object(value);
};


/***/ }),

/***/ 3034:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(2819);

var $TypeError = GetIntrinsic('%TypeError%');

// http://www.ecma-international.org/ecma-262/5.1/#sec-9.10

module.exports = function CheckObjectCoercible(value, optMessage) {
	if (value == null) {
		throw new $TypeError(optMessage || ('Cannot call method on ' + value));
	}
	return value;
};


/***/ }),

/***/ 3035:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(2838);
var getPolyfill = __webpack_require__(2930);

module.exports = function shimFlat() {
	var polyfill = getPolyfill();
	define(
		Array.prototype,
		{ flat: polyfill },
		{ flat: function () { return Array.prototype.flat !== polyfill; } }
	);
	return polyfill;
};


/***/ }),

/***/ 3036:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var define = __webpack_require__(2838);
var isSymbol = __webpack_require__(2928);

var globalKey = '__ global cache key __';
/* istanbul ignore else */
// eslint-disable-next-line no-restricted-properties
if (typeof Symbol === 'function' && isSymbol(Symbol('foo')) && typeof Symbol['for'] === 'function') {
	// eslint-disable-next-line no-restricted-properties
	globalKey = Symbol['for'](globalKey);
}

var trueThunk = function () {
	return true;
};

var ensureCache = function ensureCache() {
	if (!global[globalKey]) {
		var properties = {};
		properties[globalKey] = {};
		var predicates = {};
		predicates[globalKey] = trueThunk;
		define(global, properties, predicates);
	}
	return global[globalKey];
};

var cache = ensureCache();

var isPrimitive = function isPrimitive(val) {
	return val === null || (typeof val !== 'object' && typeof val !== 'function');
};

var getPrimitiveKey = function getPrimitiveKey(val) {
	if (isSymbol(val)) {
		return Symbol.prototype.valueOf.call(val);
	}
	return typeof val + ' | ' + String(val);
};

var requirePrimitiveKey = function requirePrimitiveKey(val) {
	if (!isPrimitive(val)) {
		throw new TypeError('key must not be an object');
	}
};

var globalCache = {
	clear: function clear() {
		delete global[globalKey];
		cache = ensureCache();
	},

	'delete': function deleteKey(key) {
		requirePrimitiveKey(key);
		delete cache[getPrimitiveKey(key)];
		return !globalCache.has(key);
	},

	get: function get(key) {
		requirePrimitiveKey(key);
		return cache[getPrimitiveKey(key)];
	},

	has: function has(key) {
		requirePrimitiveKey(key);
		return getPrimitiveKey(key) in cache;
	},

	set: function set(key, value) {
		requirePrimitiveKey(key);
		var primitiveKey = getPrimitiveKey(key);
		var props = {};
		props[primitiveKey] = value;
		var predicates = {};
		predicates[primitiveKey] = trueThunk;
		define(cache, props, predicates);
		return globalCache.has(key);
	},

	setIfMissingThenGet: function setIfMissingThenGet(key, valueThunk) {
		if (globalCache.has(key)) {
			return globalCache.get(key);
		}
		var item = valueThunk();
		globalCache.set(key, item);
		return item;
	}
};

module.exports = globalCache;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(20)))

/***/ }),

/***/ 3037:
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var GLOBAL_CACHE_KEY = 'reactWithStylesInterfaceCSS';
var MAX_SPECIFICITY = 20;

exports.GLOBAL_CACHE_KEY = GLOBAL_CACHE_KEY;
exports.MAX_SPECIFICITY = MAX_SPECIFICITY;

/***/ }),

/***/ 3038:
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = getClassName;
/**
 * Construct a class name.
 *
 * namespace {String} Used to construct unique class names.
 * styleName {String} Name identifying the specific style.
 *
 * Return the class name.
 */
function getClassName(namespace, styleName) {
  var namespaceSegment = namespace.length > 0 ? String(namespace) + '__' : '';
  return '' + namespaceSegment + String(styleName);
}

/***/ }),

/***/ 3039:
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
// This function takes an array of styles and separates them into styles that
// are handled by Aphrodite and inline styles.
function separateStyles(stylesArray) {
  var classNames = [];

  // Since determining if an Object is empty requires collecting all of its
  // keys, and we want the best performance in this code because we are in the
  // render path, we are going to do a little bookkeeping ourselves.
  var hasInlineStyles = false;
  var inlineStyles = {};

  // This is run on potentially every node in the tree when rendering, where
  // performance is critical. Normally we would prefer using `forEach`, but
  // old-fashioned for loops are faster so that's what we have chosen here.
  for (var i = 0; i < stylesArray.length; i++) {
    // eslint-disable-line no-plusplus
    var style = stylesArray[i];

    // If this  style is falsy, we just want to disregard it. This allows for
    // syntax like:
    //
    //   css(isFoo && styles.foo)
    if (style) {
      if (typeof style === 'string') {
        classNames.push(style);
      } else {
        Object.assign(inlineStyles, style);
        hasInlineStyles = true;
      }
    }
  }

  return {
    classNames: classNames,
    hasInlineStyles: hasInlineStyles,
    inlineStyles: inlineStyles
  };
}

exports['default'] = separateStyles;

/***/ }),

/***/ 3040:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = registerInterfaceWithDefaultTheme;

var _ThemedStyleSheet = _interopRequireDefault(__webpack_require__(2931));

var _DefaultTheme = _interopRequireDefault(__webpack_require__(2932));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function registerInterfaceWithDefaultTheme(reactWithStylesInterface) {
  _ThemedStyleSheet["default"].registerInterface(reactWithStylesInterface);

  _ThemedStyleSheet["default"].registerTheme(_DefaultTheme["default"]);
}

/***/ }),

/***/ 3041:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "CalendarDay", {
  enumerable: true,
  get: function () {
    function get() {
      return _CalendarDay["default"];
    }

    return get;
  }()
});
Object.defineProperty(exports, "CalendarMonth", {
  enumerable: true,
  get: function () {
    function get() {
      return _CalendarMonth["default"];
    }

    return get;
  }()
});
Object.defineProperty(exports, "CalendarMonthGrid", {
  enumerable: true,
  get: function () {
    function get() {
      return _CalendarMonthGrid["default"];
    }

    return get;
  }()
});
Object.defineProperty(exports, "DateRangePicker", {
  enumerable: true,
  get: function () {
    function get() {
      return _DateRangePicker["default"];
    }

    return get;
  }()
});
Object.defineProperty(exports, "DateRangePickerInput", {
  enumerable: true,
  get: function () {
    function get() {
      return _DateRangePickerInput["default"];
    }

    return get;
  }()
});
Object.defineProperty(exports, "DateRangePickerInputController", {
  enumerable: true,
  get: function () {
    function get() {
      return _DateRangePickerInputController["default"];
    }

    return get;
  }()
});
Object.defineProperty(exports, "DateRangePickerShape", {
  enumerable: true,
  get: function () {
    function get() {
      return _DateRangePickerShape["default"];
    }

    return get;
  }()
});
Object.defineProperty(exports, "DayPicker", {
  enumerable: true,
  get: function () {
    function get() {
      return _DayPicker["default"];
    }

    return get;
  }()
});
Object.defineProperty(exports, "DayPickerRangeController", {
  enumerable: true,
  get: function () {
    function get() {
      return _DayPickerRangeController["default"];
    }

    return get;
  }()
});
Object.defineProperty(exports, "DayPickerSingleDateController", {
  enumerable: true,
  get: function () {
    function get() {
      return _DayPickerSingleDateController["default"];
    }

    return get;
  }()
});
Object.defineProperty(exports, "SingleDatePicker", {
  enumerable: true,
  get: function () {
    function get() {
      return _SingleDatePicker["default"];
    }

    return get;
  }()
});
Object.defineProperty(exports, "SingleDatePickerInput", {
  enumerable: true,
  get: function () {
    function get() {
      return _SingleDatePickerInput["default"];
    }

    return get;
  }()
});
Object.defineProperty(exports, "SingleDatePickerShape", {
  enumerable: true,
  get: function () {
    function get() {
      return _SingleDatePickerShape["default"];
    }

    return get;
  }()
});
Object.defineProperty(exports, "isInclusivelyAfterDay", {
  enumerable: true,
  get: function () {
    function get() {
      return _isInclusivelyAfterDay["default"];
    }

    return get;
  }()
});
Object.defineProperty(exports, "isInclusivelyBeforeDay", {
  enumerable: true,
  get: function () {
    function get() {
      return _isInclusivelyBeforeDay["default"];
    }

    return get;
  }()
});
Object.defineProperty(exports, "isNextDay", {
  enumerable: true,
  get: function () {
    function get() {
      return _isNextDay["default"];
    }

    return get;
  }()
});
Object.defineProperty(exports, "isSameDay", {
  enumerable: true,
  get: function () {
    function get() {
      return _isSameDay["default"];
    }

    return get;
  }()
});
Object.defineProperty(exports, "toISODateString", {
  enumerable: true,
  get: function () {
    function get() {
      return _toISODateString["default"];
    }

    return get;
  }()
});
Object.defineProperty(exports, "toLocalizedDateString", {
  enumerable: true,
  get: function () {
    function get() {
      return _toLocalizedDateString["default"];
    }

    return get;
  }()
});
Object.defineProperty(exports, "toMomentObject", {
  enumerable: true,
  get: function () {
    function get() {
      return _toMomentObject["default"];
    }

    return get;
  }()
});

var _CalendarDay = _interopRequireDefault(__webpack_require__(2889));

var _CalendarMonth = _interopRequireDefault(__webpack_require__(2936));

var _CalendarMonthGrid = _interopRequireDefault(__webpack_require__(2938));

var _DateRangePicker = _interopRequireDefault(__webpack_require__(3057));

var _DateRangePickerInput = _interopRequireDefault(__webpack_require__(2953));

var _DateRangePickerInputController = _interopRequireDefault(__webpack_require__(2952));

var _DateRangePickerShape = _interopRequireDefault(__webpack_require__(2945));

var _DayPicker = _interopRequireDefault(__webpack_require__(2895));

var _DayPickerRangeController = _interopRequireDefault(__webpack_require__(2958));

var _DayPickerSingleDateController = _interopRequireDefault(__webpack_require__(2961));

var _SingleDatePicker = _interopRequireDefault(__webpack_require__(3070));

var _SingleDatePickerInput = _interopRequireDefault(__webpack_require__(2963));

var _SingleDatePickerShape = _interopRequireDefault(__webpack_require__(2962));

var _isInclusivelyAfterDay = _interopRequireDefault(__webpack_require__(2854));

var _isInclusivelyBeforeDay = _interopRequireDefault(__webpack_require__(3072));

var _isNextDay = _interopRequireDefault(__webpack_require__(2959));

var _isSameDay = _interopRequireDefault(__webpack_require__(2849));

var _toISODateString = _interopRequireDefault(__webpack_require__(2874));

var _toLocalizedDateString = _interopRequireDefault(__webpack_require__(2893));

var _toMomentObject = _interopRequireDefault(__webpack_require__(2850));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),

/***/ 3042:
/***/ (function(module, exports, __webpack_require__) {

var moment = __webpack_require__(2);

function isValidMoment(testMoment) {
  if (typeof moment.isMoment === 'function' && !moment.isMoment(testMoment)) {
    return false;
  }

  /* istanbul ignore else  */
  if (typeof testMoment.isValid === 'function') {
    // moment 1.7.0+
    return testMoment.isValid();
  }

  /* istanbul ignore next */
  return !isNaN(testMoment);
}

module.exports = {
  isValidMoment : isValidMoment,
};


/***/ }),

/***/ 3043:
/***/ (function(module, exports) {

var messages = {
  invalidPredicate: '`predicate` must be a function',
  invalidPropValidator: '`propValidator` must be a function',
  requiredCore: 'is marked as required',
  invalidTypeCore: 'Invalid input type',
  predicateFailureCore: 'Failed to succeed with predicate',
  anonymousMessage: '<<anonymous>>',
  baseInvalidMessage: 'Invalid ',
};

function constructPropValidatorVariations(propValidator) {
  if (typeof propValidator !== 'function') {
    throw new Error(messages.invalidPropValidator);
  }

  var requiredPropValidator = propValidator.bind(null, false, null);
  requiredPropValidator.isRequired = propValidator.bind(null, true, null);

  requiredPropValidator.withPredicate = function predicateApplication(predicate) {
    if (typeof predicate !== 'function') {
      throw new Error(messages.invalidPredicate);
    }
    var basePropValidator = propValidator.bind(null, false, predicate);
    basePropValidator.isRequired = propValidator.bind(null, true, predicate);
    return basePropValidator;
  };

  return requiredPropValidator;
}

function createInvalidRequiredErrorMessage(propName, componentName, value) {
  return new Error(
    'The prop `' + propName + '` ' + messages.requiredCore +
    ' in `' + componentName + '`, but its value is `' + value + '`.'
  );
}

var independentGuardianValue = -1;

function preValidationRequireCheck(isRequired, componentName, propFullName, propValue) {
  var isPropValueUndefined = typeof propValue === 'undefined';
  var isPropValueNull = propValue === null;

  if (isRequired) {
    if (isPropValueUndefined) {
      return createInvalidRequiredErrorMessage(propFullName, componentName, 'undefined');
    } else if (isPropValueNull) {
      return createInvalidRequiredErrorMessage(propFullName, componentName, 'null');
    }
  }

  if (isPropValueUndefined || isPropValueNull) {
    return null;
  }

  return independentGuardianValue;
}

function createMomentChecker(type, typeValidator, validator, momentType) {

  function propValidator(
    isRequired, // Bound parameter to indicate with the propType is required
    predicate, // Bound parameter to allow user to add dynamic validation
    props,
    propName,
    componentName,
    location,
    propFullName
  ) {
    var propValue = props[ propName ];
    var propType = typeof propValue;

    componentName = componentName || messages.anonymousMessage;
    propFullName = propFullName || propName;

    var preValidationRequireCheckValue = preValidationRequireCheck(
      isRequired, componentName, propFullName, propValue
    );

    if (preValidationRequireCheckValue !== independentGuardianValue) {
      return preValidationRequireCheckValue;
    }

    if (typeValidator && !typeValidator(propValue)) {
      return new Error(
        messages.invalidTypeCore + ': `' + propName + '` of type `' + propType + '` ' +
        'supplied to `' + componentName + '`, expected `' + type + '`.'
      );
    }

    if (!validator(propValue)) {
      return new Error(
        messages.baseInvalidMessage + location + ' `' + propName + '` of type `' + propType + '` ' +
        'supplied to `' + componentName + '`, expected `' + momentType + '`.'
      );
    }

    if (predicate && !predicate(propValue)) {
      var predicateName = predicate.name || messages.anonymousMessage;
      return new Error(
        messages.baseInvalidMessage + location + ' `' + propName + '` of type `' + propType + '` ' +
        'supplied to `' + componentName + '`. ' + messages.predicateFailureCore + ' `' +
        predicateName + '`.'
      );
    }

    return null;

  }

  return constructPropValidatorVariations(propValidator);

}

module.exports = {
  constructPropValidatorVariations: constructPropValidatorVariations,
  createMomentChecker: createMomentChecker,
  messages: messages,
};


/***/ }),

/***/ 3044:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function noop() {
  return null;
}

noop.isRequired = noop;

function noopThunk() {
  return noop;
}

module.exports = {
  and: noopThunk,
  between: noopThunk,
  booleanSome: noopThunk,
  childrenHavePropXorChildren: noopThunk,
  childrenOf: noopThunk,
  childrenOfType: noopThunk,
  childrenSequenceOf: noopThunk,
  componentWithName: noopThunk,
  disallowedIf: noopThunk,
  elementType: noopThunk,
  empty: noopThunk,
  explicitNull: noopThunk,
  forbidExtraProps: Object,
  integer: noopThunk,
  keysOf: noopThunk,
  mutuallyExclusiveProps: noopThunk,
  mutuallyExclusiveTrueProps: noopThunk,
  nChildren: noopThunk,
  nonNegativeInteger: noop,
  nonNegativeNumber: noopThunk,
  numericString: noopThunk,
  object: noopThunk,
  or: noopThunk,
  range: noopThunk,
  ref: noopThunk,
  requiredBy: noopThunk,
  restrictedProp: noopThunk,
  sequenceOf: noopThunk,
  shape: noopThunk,
  stringEndsWith: noopThunk,
  stringStartsWith: noopThunk,
  uniqueArray: noopThunk,
  uniqueArrayOf: noopThunk,
  valuesOf: noopThunk,
  withShape: noopThunk
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 3045:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defineProperties = __webpack_require__(2838);

var implementation = __webpack_require__(2933);
var getPolyfill = __webpack_require__(2934);
var shim = __webpack_require__(3046);

var polyfill = getPolyfill();

defineProperties(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ 3046:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(2838);
var getPolyfill = __webpack_require__(2934);

module.exports = function shimAssign() {
	var polyfill = getPolyfill();
	define(
		Object,
		{ assign: polyfill },
		{ assign: function () { return Object.assign !== polyfill; } }
	);
	return polyfill;
};


/***/ }),

/***/ 3047:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(178);

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ 3048:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var CHANNEL = exports.CHANNEL = '__direction__';

var DIRECTIONS = exports.DIRECTIONS = {
  LTR: 'ltr',
  RTL: 'rtl'
};

/***/ }),

/***/ 3049:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = _propTypes2['default'].shape({
  getState: _propTypes2['default'].func,
  setState: _propTypes2['default'].func,
  subscribe: _propTypes2['default'].func
});

/***/ }),

/***/ 3050:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getPhrase;

function getPhrase(phrase, args) {
  if (typeof phrase === 'string') return phrase;

  if (typeof phrase === 'function') {
    return phrase(args);
  }

  return '';
}

/***/ }),

/***/ 3051:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PureCustomizableCalendarDay = exports.selectedStyles = exports.lastInRangeStyles = exports.selectedSpanStyles = exports.hoveredSpanStyles = exports.blockedOutOfRangeStyles = exports.blockedCalendarStyles = exports.blockedMinNightsStyles = exports.highlightedCalendarStyles = exports.outsideStyles = exports.defaultStyles = void 0;

var _reactAddonsShallowCompare = _interopRequireDefault(__webpack_require__(944));

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(0));

var _reactMomentProptypes = _interopRequireDefault(__webpack_require__(2837));

var _airbnbPropTypes = __webpack_require__(2820);

var _reactWithStyles = __webpack_require__(2827);

var _moment = _interopRequireDefault(__webpack_require__(2));

var _defaultPhrases = __webpack_require__(2821);

var _getPhrasePropTypes = _interopRequireDefault(__webpack_require__(2823));

var _getCalendarDaySettings = _interopRequireDefault(__webpack_require__(2935));

var _constants = __webpack_require__(2818);

var _DefaultTheme = _interopRequireDefault(__webpack_require__(2932));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function () { function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); } return _getPrototypeOf; }(); return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function () { function _setPrototypeOf(o, p) { o.__proto__ = p; return o; } return _setPrototypeOf; }(); return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var color = _DefaultTheme["default"].reactDates.color;

function getStyles(stylesObj, isHovered) {
  if (!stylesObj) return null;
  var hover = stylesObj.hover;

  if (isHovered && hover) {
    return hover;
  }

  return stylesObj;
}

var DayStyleShape =  false ? undefined : {};
var propTypes =  false ? undefined : {};
var defaultStyles = {
  border: "1px solid ".concat(color.core.borderLight),
  color: color.text,
  background: color.background,
  hover: {
    background: color.core.borderLight,
    border: "1px solid ".concat(color.core.borderLight),
    color: 'inherit'
  }
};
exports.defaultStyles = defaultStyles;
var outsideStyles = {
  background: color.outside.backgroundColor,
  border: 0,
  color: color.outside.color
};
exports.outsideStyles = outsideStyles;
var highlightedCalendarStyles = {
  background: color.highlighted.backgroundColor,
  color: color.highlighted.color,
  hover: {
    background: color.highlighted.backgroundColor_hover,
    color: color.highlighted.color_active
  }
};
exports.highlightedCalendarStyles = highlightedCalendarStyles;
var blockedMinNightsStyles = {
  background: color.minimumNights.backgroundColor,
  border: "1px solid ".concat(color.minimumNights.borderColor),
  color: color.minimumNights.color,
  hover: {
    background: color.minimumNights.backgroundColor_hover,
    color: color.minimumNights.color_active
  }
};
exports.blockedMinNightsStyles = blockedMinNightsStyles;
var blockedCalendarStyles = {
  background: color.blocked_calendar.backgroundColor,
  border: "1px solid ".concat(color.blocked_calendar.borderColor),
  color: color.blocked_calendar.color,
  hover: {
    background: color.blocked_calendar.backgroundColor_hover,
    border: "1px solid ".concat(color.blocked_calendar.borderColor),
    color: color.blocked_calendar.color_active
  }
};
exports.blockedCalendarStyles = blockedCalendarStyles;
var blockedOutOfRangeStyles = {
  background: color.blocked_out_of_range.backgroundColor,
  border: "1px solid ".concat(color.blocked_out_of_range.borderColor),
  color: color.blocked_out_of_range.color,
  hover: {
    background: color.blocked_out_of_range.backgroundColor_hover,
    border: "1px solid ".concat(color.blocked_out_of_range.borderColor),
    color: color.blocked_out_of_range.color_active
  }
};
exports.blockedOutOfRangeStyles = blockedOutOfRangeStyles;
var hoveredSpanStyles = {
  background: color.hoveredSpan.backgroundColor,
  border: "1px double ".concat(color.hoveredSpan.borderColor),
  color: color.hoveredSpan.color,
  hover: {
    background: color.hoveredSpan.backgroundColor_hover,
    border: "1px double ".concat(color.hoveredSpan.borderColor),
    color: color.hoveredSpan.color_active
  }
};
exports.hoveredSpanStyles = hoveredSpanStyles;
var selectedSpanStyles = {
  background: color.selectedSpan.backgroundColor,
  border: "1px double ".concat(color.selectedSpan.borderColor),
  color: color.selectedSpan.color,
  hover: {
    background: color.selectedSpan.backgroundColor_hover,
    border: "1px double ".concat(color.selectedSpan.borderColor),
    color: color.selectedSpan.color_active
  }
};
exports.selectedSpanStyles = selectedSpanStyles;
var lastInRangeStyles = {
  borderStyle: 'solid',
  hover: {
    borderStyle: 'solid'
  }
};
exports.lastInRangeStyles = lastInRangeStyles;
var selectedStyles = {
  background: color.selected.backgroundColor,
  border: "1px double ".concat(color.selected.borderColor),
  color: color.selected.color,
  hover: {
    background: color.selected.backgroundColor_hover,
    border: "1px double ".concat(color.selected.borderColor),
    color: color.selected.color_active
  }
};
exports.selectedStyles = selectedStyles;
var defaultProps = {
  day: (0, _moment["default"])(),
  daySize: _constants.DAY_SIZE,
  isOutsideDay: false,
  modifiers: new Set(),
  isFocused: false,
  tabIndex: -1,
  onDayClick: function () {
    function onDayClick() {}

    return onDayClick;
  }(),
  onDayMouseEnter: function () {
    function onDayMouseEnter() {}

    return onDayMouseEnter;
  }(),
  onDayMouseLeave: function () {
    function onDayMouseLeave() {}

    return onDayMouseLeave;
  }(),
  renderDayContents: null,
  ariaLabelFormat: 'dddd, LL',
  // style defaults
  defaultStyles: defaultStyles,
  outsideStyles: outsideStyles,
  todayStyles: {},
  highlightedCalendarStyles: highlightedCalendarStyles,
  blockedMinNightsStyles: blockedMinNightsStyles,
  blockedCalendarStyles: blockedCalendarStyles,
  blockedOutOfRangeStyles: blockedOutOfRangeStyles,
  hoveredSpanStyles: hoveredSpanStyles,
  selectedSpanStyles: selectedSpanStyles,
  lastInRangeStyles: lastInRangeStyles,
  selectedStyles: selectedStyles,
  selectedStartStyles: {},
  selectedEndStyles: {},
  afterHoveredStartStyles: {},
  firstDayOfWeekStyles: {},
  lastDayOfWeekStyles: {},
  // internationalization
  phrases: _defaultPhrases.CalendarDayPhrases
};

var CustomizableCalendarDay =
/*#__PURE__*/
function (_ref) {
  _inherits(CustomizableCalendarDay, _ref);

  _createClass(CustomizableCalendarDay, [{
    key: !_react["default"].PureComponent && "shouldComponentUpdate",
    value: function () {
      function value(nextProps, nextState) {
        return (0, _reactAddonsShallowCompare["default"])(this, nextProps, nextState);
      }

      return value;
    }()
  }]);

  function CustomizableCalendarDay() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CustomizableCalendarDay);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CustomizableCalendarDay)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      isHovered: false
    };
    _this.setButtonRef = _this.setButtonRef.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(CustomizableCalendarDay, [{
    key: "componentDidUpdate",
    value: function () {
      function componentDidUpdate(prevProps) {
        var _this$props = this.props,
            isFocused = _this$props.isFocused,
            tabIndex = _this$props.tabIndex;

        if (tabIndex === 0) {
          if (isFocused || tabIndex !== prevProps.tabIndex) {
            this.buttonRef.focus();
          }
        }
      }

      return componentDidUpdate;
    }()
  }, {
    key: "onDayClick",
    value: function () {
      function onDayClick(day, e) {
        var onDayClick = this.props.onDayClick;
        onDayClick(day, e);
      }

      return onDayClick;
    }()
  }, {
    key: "onDayMouseEnter",
    value: function () {
      function onDayMouseEnter(day, e) {
        var onDayMouseEnter = this.props.onDayMouseEnter;
        this.setState({
          isHovered: true
        });
        onDayMouseEnter(day, e);
      }

      return onDayMouseEnter;
    }()
  }, {
    key: "onDayMouseLeave",
    value: function () {
      function onDayMouseLeave(day, e) {
        var onDayMouseLeave = this.props.onDayMouseLeave;
        this.setState({
          isHovered: false
        });
        onDayMouseLeave(day, e);
      }

      return onDayMouseLeave;
    }()
  }, {
    key: "onKeyDown",
    value: function () {
      function onKeyDown(day, e) {
        var onDayClick = this.props.onDayClick;
        var key = e.key;

        if (key === 'Enter' || key === ' ') {
          onDayClick(day, e);
        }
      }

      return onKeyDown;
    }()
  }, {
    key: "setButtonRef",
    value: function () {
      function setButtonRef(ref) {
        this.buttonRef = ref;
      }

      return setButtonRef;
    }()
  }, {
    key: "render",
    value: function () {
      function render() {
        var _this2 = this;

        var _this$props2 = this.props,
            day = _this$props2.day,
            ariaLabelFormat = _this$props2.ariaLabelFormat,
            daySize = _this$props2.daySize,
            isOutsideDay = _this$props2.isOutsideDay,
            modifiers = _this$props2.modifiers,
            tabIndex = _this$props2.tabIndex,
            renderDayContents = _this$props2.renderDayContents,
            styles = _this$props2.styles,
            phrases = _this$props2.phrases,
            defaultStylesWithHover = _this$props2.defaultStyles,
            outsideStylesWithHover = _this$props2.outsideStyles,
            todayStylesWithHover = _this$props2.todayStyles,
            firstDayOfWeekStylesWithHover = _this$props2.firstDayOfWeekStyles,
            lastDayOfWeekStylesWithHover = _this$props2.lastDayOfWeekStyles,
            highlightedCalendarStylesWithHover = _this$props2.highlightedCalendarStyles,
            blockedMinNightsStylesWithHover = _this$props2.blockedMinNightsStyles,
            blockedCalendarStylesWithHover = _this$props2.blockedCalendarStyles,
            blockedOutOfRangeStylesWithHover = _this$props2.blockedOutOfRangeStyles,
            hoveredSpanStylesWithHover = _this$props2.hoveredSpanStyles,
            selectedSpanStylesWithHover = _this$props2.selectedSpanStyles,
            lastInRangeStylesWithHover = _this$props2.lastInRangeStyles,
            selectedStylesWithHover = _this$props2.selectedStyles,
            selectedStartStylesWithHover = _this$props2.selectedStartStyles,
            selectedEndStylesWithHover = _this$props2.selectedEndStyles,
            afterHoveredStartStylesWithHover = _this$props2.afterHoveredStartStyles;
        var isHovered = this.state.isHovered;
        if (!day) return _react["default"].createElement("td", null);

        var _getCalendarDaySettin = (0, _getCalendarDaySettings["default"])(day, ariaLabelFormat, daySize, modifiers, phrases),
            daySizeStyles = _getCalendarDaySettin.daySizeStyles,
            useDefaultCursor = _getCalendarDaySettin.useDefaultCursor,
            selected = _getCalendarDaySettin.selected,
            hoveredSpan = _getCalendarDaySettin.hoveredSpan,
            isOutsideRange = _getCalendarDaySettin.isOutsideRange,
            ariaLabel = _getCalendarDaySettin.ariaLabel;

        return _react["default"].createElement("td", _extends({}, (0, _reactWithStyles.css)(styles.CalendarDay, useDefaultCursor && styles.CalendarDay__defaultCursor, daySizeStyles, getStyles(defaultStylesWithHover, isHovered), isOutsideDay && getStyles(outsideStylesWithHover, isHovered), modifiers.has('today') && getStyles(todayStylesWithHover, isHovered), modifiers.has('first-day-of-week') && getStyles(firstDayOfWeekStylesWithHover, isHovered), modifiers.has('last-day-of-week') && getStyles(lastDayOfWeekStylesWithHover, isHovered), modifiers.has('highlighted-calendar') && getStyles(highlightedCalendarStylesWithHover, isHovered), modifiers.has('blocked-minimum-nights') && getStyles(blockedMinNightsStylesWithHover, isHovered), modifiers.has('blocked-calendar') && getStyles(blockedCalendarStylesWithHover, isHovered), hoveredSpan && getStyles(hoveredSpanStylesWithHover, isHovered), modifiers.has('after-hovered-start') && getStyles(afterHoveredStartStylesWithHover, isHovered), modifiers.has('selected-span') && getStyles(selectedSpanStylesWithHover, isHovered), modifiers.has('last-in-range') && getStyles(lastInRangeStylesWithHover, isHovered), selected && getStyles(selectedStylesWithHover, isHovered), modifiers.has('selected-start') && getStyles(selectedStartStylesWithHover, isHovered), modifiers.has('selected-end') && getStyles(selectedEndStylesWithHover, isHovered), isOutsideRange && getStyles(blockedOutOfRangeStylesWithHover, isHovered)), {
          role: "button" // eslint-disable-line jsx-a11y/no-noninteractive-element-to-interactive-role
          ,
          ref: this.setButtonRef,
          "aria-disabled": modifiers.has('blocked'),
          "aria-label": ariaLabel,
          onMouseEnter: function () {
            function onMouseEnter(e) {
              _this2.onDayMouseEnter(day, e);
            }

            return onMouseEnter;
          }(),
          onMouseLeave: function () {
            function onMouseLeave(e) {
              _this2.onDayMouseLeave(day, e);
            }

            return onMouseLeave;
          }(),
          onMouseUp: function () {
            function onMouseUp(e) {
              e.currentTarget.blur();
            }

            return onMouseUp;
          }(),
          onClick: function () {
            function onClick(e) {
              _this2.onDayClick(day, e);
            }

            return onClick;
          }(),
          onKeyDown: function () {
            function onKeyDown(e) {
              _this2.onKeyDown(day, e);
            }

            return onKeyDown;
          }(),
          tabIndex: tabIndex
        }), renderDayContents ? renderDayContents(day, modifiers) : day.format('D'));
      }

      return render;
    }()
  }]);

  return CustomizableCalendarDay;
}(_react["default"].PureComponent || _react["default"].Component);

exports.PureCustomizableCalendarDay = CustomizableCalendarDay;
CustomizableCalendarDay.propTypes =  false ? undefined : {};
CustomizableCalendarDay.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref2) {
  var font = _ref2.reactDates.font;
  return {
    CalendarDay: {
      boxSizing: 'border-box',
      cursor: 'pointer',
      fontSize: font.size,
      textAlign: 'center',
      ':active': {
        outline: 0
      }
    },
    CalendarDay__defaultCursor: {
      cursor: 'default'
    }
  };
}, {
  pureComponent: typeof _react["default"].PureComponent !== 'undefined'
})(CustomizableCalendarDay);

exports["default"] = _default;

/***/ }),

/***/ 3052:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getCalendarMonthWeeks;

var _moment = _interopRequireDefault(__webpack_require__(2));

var _constants = __webpack_require__(2818);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getCalendarMonthWeeks(month, enableOutsideDays) {
  var firstDayOfWeek = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _moment["default"].localeData().firstDayOfWeek();

  if (!_moment["default"].isMoment(month) || !month.isValid()) {
    throw new TypeError('`month` must be a valid moment object');
  }

  if (_constants.WEEKDAYS.indexOf(firstDayOfWeek) === -1) {
    throw new TypeError('`firstDayOfWeek` must be an integer between 0 and 6');
  } // set utc offset to get correct dates in future (when timezone changes)


  var firstOfMonth = month.clone().startOf('month').hour(12);
  var lastOfMonth = month.clone().endOf('month').hour(12); // calculate the exact first and last days to fill the entire matrix
  // (considering days outside month)

  var prevDays = (firstOfMonth.day() + 7 - firstDayOfWeek) % 7;
  var nextDays = (firstDayOfWeek + 6 - lastOfMonth.day()) % 7;
  var firstDay = firstOfMonth.clone().subtract(prevDays, 'day');
  var lastDay = lastOfMonth.clone().add(nextDays, 'day');
  var totalDays = lastDay.diff(firstDay, 'days') + 1;
  var currentDay = firstDay.clone();
  var weeksInMonth = [];

  for (var i = 0; i < totalDays; i += 1) {
    if (i % 7 === 0) {
      weeksInMonth.push([]);
    }

    var day = null;

    if (i >= prevDays && i < totalDays - nextDays || enableOutsideDays) {
      day = currentDay.clone();
    }

    weeksInMonth[weeksInMonth.length - 1].push(day);
    currentDay.add(1, 'day');
  }

  return weeksInMonth;
}

/***/ }),

/***/ 3053:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isTransitionEndSupported;

function isTransitionEndSupported() {
  return !!(typeof window !== 'undefined' && 'TransitionEvent' in window);
}

/***/ }),

/***/ 3054:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getTransformStyles;

function getTransformStyles(transformValue) {
  return {
    transform: transformValue,
    msTransform: transformValue,
    MozTransform: transformValue,
    WebkitTransform: transformValue
  };
}

/***/ }),

/***/ 3055:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isPrevMonth;

var _moment = _interopRequireDefault(__webpack_require__(2));

var _isSameMonth = _interopRequireDefault(__webpack_require__(2940));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function isPrevMonth(a, b) {
  if (!_moment["default"].isMoment(a) || !_moment["default"].isMoment(b)) return false;
  return (0, _isSameMonth["default"])(a.clone().subtract(1, 'month'), b);
}

/***/ }),

/***/ 3056:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isNextMonth;

var _moment = _interopRequireDefault(__webpack_require__(2));

var _isSameMonth = _interopRequireDefault(__webpack_require__(2940));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function isNextMonth(a, b) {
  if (!_moment["default"].isMoment(a) || !_moment["default"].isMoment(b)) return false;
  return (0, _isSameMonth["default"])(a.clone().add(1, 'month'), b);
}

/***/ }),

/***/ 3057:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PureDateRangePicker = void 0;

var _reactAddonsShallowCompare = _interopRequireDefault(__webpack_require__(944));

var _react = _interopRequireDefault(__webpack_require__(1));

var _moment = _interopRequireDefault(__webpack_require__(2));

var _reactWithStyles = __webpack_require__(2827);

var _reactPortal = __webpack_require__(2966);

var _airbnbPropTypes = __webpack_require__(2820);

var _consolidatedEvents = __webpack_require__(2875);

var _isTouchDevice = _interopRequireDefault(__webpack_require__(2852));

var _reactOutsideClickHandler = _interopRequireDefault(__webpack_require__(2890));

var _DateRangePickerShape = _interopRequireDefault(__webpack_require__(2945));

var _defaultPhrases = __webpack_require__(2821);

var _getResponsiveContainerStyles = _interopRequireDefault(__webpack_require__(2949));

var _getDetachedContainerStyles = _interopRequireDefault(__webpack_require__(2950));

var _getInputHeight = _interopRequireDefault(__webpack_require__(2892));

var _isInclusivelyAfterDay = _interopRequireDefault(__webpack_require__(2854));

var _disableScroll2 = _interopRequireDefault(__webpack_require__(2951));

var _noflip = _interopRequireDefault(__webpack_require__(2842));

var _DateRangePickerInputController = _interopRequireDefault(__webpack_require__(2952));

var _DayPickerRangeController = _interopRequireDefault(__webpack_require__(2958));

var _CloseButton = _interopRequireDefault(__webpack_require__(2866));

var _constants = __webpack_require__(2818);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function () { function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); } return _getPrototypeOf; }(); return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function () { function _setPrototypeOf(o, p) { o.__proto__ = p; return o; } return _setPrototypeOf; }(); return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var propTypes =  false ? undefined : {};
var defaultProps = {
  // required props for a functional interactive DateRangePicker
  startDate: null,
  endDate: null,
  focusedInput: null,
  // input related props
  startDatePlaceholderText: 'Start Date',
  endDatePlaceholderText: 'End Date',
  startDateOffset: undefined,
  endDateOffset: undefined,
  disabled: false,
  required: false,
  readOnly: false,
  screenReaderInputMessage: '',
  showClearDates: false,
  showDefaultInputIcon: false,
  inputIconPosition: _constants.ICON_BEFORE_POSITION,
  customInputIcon: null,
  customArrowIcon: null,
  customCloseIcon: null,
  noBorder: false,
  block: false,
  small: false,
  regular: false,
  keepFocusOnInput: false,
  // calendar presentation and interaction related props
  renderMonthText: null,
  orientation: _constants.HORIZONTAL_ORIENTATION,
  anchorDirection: _constants.ANCHOR_LEFT,
  openDirection: _constants.OPEN_DOWN,
  horizontalMargin: 0,
  withPortal: false,
  withFullScreenPortal: false,
  appendToBody: false,
  disableScroll: false,
  initialVisibleMonth: null,
  numberOfMonths: 2,
  keepOpenOnDateSelect: false,
  reopenPickerOnClearDates: false,
  renderCalendarInfo: null,
  calendarInfoPosition: _constants.INFO_POSITION_BOTTOM,
  hideKeyboardShortcutsPanel: false,
  daySize: _constants.DAY_SIZE,
  isRTL: false,
  firstDayOfWeek: null,
  verticalHeight: null,
  transitionDuration: undefined,
  verticalSpacing: _constants.DEFAULT_VERTICAL_SPACING,
  horizontalMonthPadding: undefined,
  // navigation related props
  navPrev: null,
  navNext: null,
  onPrevMonthClick: function () {
    function onPrevMonthClick() {}

    return onPrevMonthClick;
  }(),
  onNextMonthClick: function () {
    function onNextMonthClick() {}

    return onNextMonthClick;
  }(),
  onClose: function () {
    function onClose() {}

    return onClose;
  }(),
  // day presentation and interaction related props
  renderCalendarDay: undefined,
  renderDayContents: null,
  renderMonthElement: null,
  minimumNights: 1,
  enableOutsideDays: false,
  isDayBlocked: function () {
    function isDayBlocked() {
      return false;
    }

    return isDayBlocked;
  }(),
  isOutsideRange: function () {
    function isOutsideRange(day) {
      return !(0, _isInclusivelyAfterDay["default"])(day, (0, _moment["default"])());
    }

    return isOutsideRange;
  }(),
  isDayHighlighted: function () {
    function isDayHighlighted() {
      return false;
    }

    return isDayHighlighted;
  }(),
  // internationalization
  displayFormat: function () {
    function displayFormat() {
      return _moment["default"].localeData().longDateFormat('L');
    }

    return displayFormat;
  }(),
  monthFormat: 'MMMM YYYY',
  weekDayFormat: 'dd',
  phrases: _defaultPhrases.DateRangePickerPhrases,
  dayAriaLabelFormat: undefined
};

var DateRangePicker =
/*#__PURE__*/
function (_ref) {
  _inherits(DateRangePicker, _ref);

  _createClass(DateRangePicker, [{
    key: !_react["default"].PureComponent && "shouldComponentUpdate",
    value: function () {
      function value(nextProps, nextState) {
        return (0, _reactAddonsShallowCompare["default"])(this, nextProps, nextState);
      }

      return value;
    }()
  }]);

  function DateRangePicker(props) {
    var _this;

    _classCallCheck(this, DateRangePicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DateRangePicker).call(this, props));
    _this.state = {
      dayPickerContainerStyles: {},
      isDateRangePickerInputFocused: false,
      isDayPickerFocused: false,
      showKeyboardShortcuts: false
    };
    _this.isTouchDevice = false;
    _this.onOutsideClick = _this.onOutsideClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onDateRangePickerInputFocus = _this.onDateRangePickerInputFocus.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onDayPickerFocus = _this.onDayPickerFocus.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onDayPickerFocusOut = _this.onDayPickerFocusOut.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onDayPickerBlur = _this.onDayPickerBlur.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.showKeyboardShortcutsPanel = _this.showKeyboardShortcutsPanel.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.responsivizePickerPosition = _this.responsivizePickerPosition.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.disableScroll = _this.disableScroll.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setDayPickerContainerRef = _this.setDayPickerContainerRef.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setContainerRef = _this.setContainerRef.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(DateRangePicker, [{
    key: "componentDidMount",
    value: function () {
      function componentDidMount() {
        this.removeEventListener = (0, _consolidatedEvents.addEventListener)(window, 'resize', this.responsivizePickerPosition, {
          passive: true
        });
        this.responsivizePickerPosition();
        this.disableScroll();
        var focusedInput = this.props.focusedInput;

        if (focusedInput) {
          this.setState({
            isDateRangePickerInputFocused: true
          });
        }

        this.isTouchDevice = (0, _isTouchDevice["default"])();
      }

      return componentDidMount;
    }()
  }, {
    key: "componentDidUpdate",
    value: function () {
      function componentDidUpdate(prevProps) {
        var focusedInput = this.props.focusedInput;

        if (!prevProps.focusedInput && focusedInput && this.isOpened()) {
          // The date picker just changed from being closed to being open.
          this.responsivizePickerPosition();
          this.disableScroll();
        } else if (prevProps.focusedInput && !focusedInput && !this.isOpened()) {
          // The date picker just changed from being open to being closed.
          if (this.enableScroll) this.enableScroll();
        }
      }

      return componentDidUpdate;
    }()
  }, {
    key: "componentWillUnmount",
    value: function () {
      function componentWillUnmount() {
        this.removeDayPickerEventListeners();
        if (this.removeEventListener) this.removeEventListener();
        if (this.enableScroll) this.enableScroll();
      }

      return componentWillUnmount;
    }()
  }, {
    key: "onOutsideClick",
    value: function () {
      function onOutsideClick(event) {
        var _this$props = this.props,
            onFocusChange = _this$props.onFocusChange,
            onClose = _this$props.onClose,
            startDate = _this$props.startDate,
            endDate = _this$props.endDate,
            appendToBody = _this$props.appendToBody;
        if (!this.isOpened()) return;
        if (appendToBody && this.dayPickerContainer.contains(event.target)) return;
        this.setState({
          isDateRangePickerInputFocused: false,
          isDayPickerFocused: false,
          showKeyboardShortcuts: false
        });
        onFocusChange(null);
        onClose({
          startDate: startDate,
          endDate: endDate
        });
      }

      return onOutsideClick;
    }()
  }, {
    key: "onDateRangePickerInputFocus",
    value: function () {
      function onDateRangePickerInputFocus(focusedInput) {
        var _this$props2 = this.props,
            onFocusChange = _this$props2.onFocusChange,
            readOnly = _this$props2.readOnly,
            withPortal = _this$props2.withPortal,
            withFullScreenPortal = _this$props2.withFullScreenPortal,
            keepFocusOnInput = _this$props2.keepFocusOnInput;

        if (focusedInput) {
          var withAnyPortal = withPortal || withFullScreenPortal;
          var moveFocusToDayPicker = withAnyPortal || readOnly && !keepFocusOnInput || this.isTouchDevice && !keepFocusOnInput;

          if (moveFocusToDayPicker) {
            this.onDayPickerFocus();
          } else {
            this.onDayPickerBlur();
          }
        }

        onFocusChange(focusedInput);
      }

      return onDateRangePickerInputFocus;
    }()
  }, {
    key: "onDayPickerFocus",
    value: function () {
      function onDayPickerFocus() {
        var _this$props3 = this.props,
            focusedInput = _this$props3.focusedInput,
            onFocusChange = _this$props3.onFocusChange;
        if (!focusedInput) onFocusChange(_constants.START_DATE);
        this.setState({
          isDateRangePickerInputFocused: false,
          isDayPickerFocused: true,
          showKeyboardShortcuts: false
        });
      }

      return onDayPickerFocus;
    }()
  }, {
    key: "onDayPickerFocusOut",
    value: function () {
      function onDayPickerFocusOut(event) {
        // In cases where **relatedTarget** is not null, it points to the right
        // element here. However, in cases where it is null (such as clicking on a
        // specific day), the appropriate value is **event.target**.
        //
        // We handle both situations here by using the ` || ` operator to fallback
        // to *event.target** when **relatedTarget** is not provided.
        if (this.dayPickerContainer.contains(event.relatedTarget || event.target)) return;
        this.onOutsideClick(event);
      }

      return onDayPickerFocusOut;
    }()
  }, {
    key: "onDayPickerBlur",
    value: function () {
      function onDayPickerBlur() {
        this.setState({
          isDateRangePickerInputFocused: true,
          isDayPickerFocused: false,
          showKeyboardShortcuts: false
        });
      }

      return onDayPickerBlur;
    }()
  }, {
    key: "setDayPickerContainerRef",
    value: function () {
      function setDayPickerContainerRef(ref) {
        if (ref === this.dayPickerContainer) return;
        if (this.dayPickerContainer) this.removeDayPickerEventListeners();
        this.dayPickerContainer = ref;
        if (!ref) return;
        this.addDayPickerEventListeners();
      }

      return setDayPickerContainerRef;
    }()
  }, {
    key: "setContainerRef",
    value: function () {
      function setContainerRef(ref) {
        this.container = ref;
      }

      return setContainerRef;
    }()
  }, {
    key: "addDayPickerEventListeners",
    value: function () {
      function addDayPickerEventListeners() {
        // NOTE: We are using a manual event listener here, because React doesn't
        // provide FocusOut, while blur and keydown don't provide the information
        // needed in order to know whether we have left focus or not.
        //
        // For reference, this issue is further described here:
        // - https://github.com/facebook/react/issues/6410
        this.removeDayPickerFocusOut = (0, _consolidatedEvents.addEventListener)(this.dayPickerContainer, 'focusout', this.onDayPickerFocusOut);
      }

      return addDayPickerEventListeners;
    }()
  }, {
    key: "removeDayPickerEventListeners",
    value: function () {
      function removeDayPickerEventListeners() {
        if (this.removeDayPickerFocusOut) this.removeDayPickerFocusOut();
      }

      return removeDayPickerEventListeners;
    }()
  }, {
    key: "isOpened",
    value: function () {
      function isOpened() {
        var focusedInput = this.props.focusedInput;
        return focusedInput === _constants.START_DATE || focusedInput === _constants.END_DATE;
      }

      return isOpened;
    }()
  }, {
    key: "disableScroll",
    value: function () {
      function disableScroll() {
        var _this$props4 = this.props,
            appendToBody = _this$props4.appendToBody,
            propDisableScroll = _this$props4.disableScroll;
        if (!appendToBody && !propDisableScroll) return;
        if (!this.isOpened()) return; // Disable scroll for every ancestor of this DateRangePicker up to the
        // document level. This ensures the input and the picker never move. Other
        // sibling elements or the picker itself can scroll.

        this.enableScroll = (0, _disableScroll2["default"])(this.container);
      }

      return disableScroll;
    }()
  }, {
    key: "responsivizePickerPosition",
    value: function () {
      function responsivizePickerPosition() {
        // It's possible the portal props have been changed in response to window resizes
        // So let's ensure we reset this back to the base state each time
        this.setState({
          dayPickerContainerStyles: {}
        });

        if (!this.isOpened()) {
          return;
        }

        var _this$props5 = this.props,
            openDirection = _this$props5.openDirection,
            anchorDirection = _this$props5.anchorDirection,
            horizontalMargin = _this$props5.horizontalMargin,
            withPortal = _this$props5.withPortal,
            withFullScreenPortal = _this$props5.withFullScreenPortal,
            appendToBody = _this$props5.appendToBody;
        var dayPickerContainerStyles = this.state.dayPickerContainerStyles;
        var isAnchoredLeft = anchorDirection === _constants.ANCHOR_LEFT;

        if (!withPortal && !withFullScreenPortal) {
          var containerRect = this.dayPickerContainer.getBoundingClientRect();
          var currentOffset = dayPickerContainerStyles[anchorDirection] || 0;
          var containerEdge = isAnchoredLeft ? containerRect[_constants.ANCHOR_RIGHT] : containerRect[_constants.ANCHOR_LEFT];
          this.setState({
            dayPickerContainerStyles: _objectSpread({}, (0, _getResponsiveContainerStyles["default"])(anchorDirection, currentOffset, containerEdge, horizontalMargin), appendToBody && (0, _getDetachedContainerStyles["default"])(openDirection, anchorDirection, this.container))
          });
        }
      }

      return responsivizePickerPosition;
    }()
  }, {
    key: "showKeyboardShortcutsPanel",
    value: function () {
      function showKeyboardShortcutsPanel() {
        this.setState({
          isDateRangePickerInputFocused: false,
          isDayPickerFocused: true,
          showKeyboardShortcuts: true
        });
      }

      return showKeyboardShortcutsPanel;
    }()
  }, {
    key: "maybeRenderDayPickerWithPortal",
    value: function () {
      function maybeRenderDayPickerWithPortal() {
        var _this$props6 = this.props,
            withPortal = _this$props6.withPortal,
            withFullScreenPortal = _this$props6.withFullScreenPortal,
            appendToBody = _this$props6.appendToBody;

        if (!this.isOpened()) {
          return null;
        }

        if (withPortal || withFullScreenPortal || appendToBody) {
          return _react["default"].createElement(_reactPortal.Portal, null, this.renderDayPicker());
        }

        return this.renderDayPicker();
      }

      return maybeRenderDayPickerWithPortal;
    }()
  }, {
    key: "renderDayPicker",
    value: function () {
      function renderDayPicker() {
        var _this$props7 = this.props,
            anchorDirection = _this$props7.anchorDirection,
            openDirection = _this$props7.openDirection,
            isDayBlocked = _this$props7.isDayBlocked,
            isDayHighlighted = _this$props7.isDayHighlighted,
            isOutsideRange = _this$props7.isOutsideRange,
            numberOfMonths = _this$props7.numberOfMonths,
            orientation = _this$props7.orientation,
            monthFormat = _this$props7.monthFormat,
            renderMonthText = _this$props7.renderMonthText,
            navPrev = _this$props7.navPrev,
            navNext = _this$props7.navNext,
            onPrevMonthClick = _this$props7.onPrevMonthClick,
            onNextMonthClick = _this$props7.onNextMonthClick,
            onDatesChange = _this$props7.onDatesChange,
            onFocusChange = _this$props7.onFocusChange,
            withPortal = _this$props7.withPortal,
            withFullScreenPortal = _this$props7.withFullScreenPortal,
            daySize = _this$props7.daySize,
            enableOutsideDays = _this$props7.enableOutsideDays,
            focusedInput = _this$props7.focusedInput,
            startDate = _this$props7.startDate,
            startDateOffset = _this$props7.startDateOffset,
            endDate = _this$props7.endDate,
            endDateOffset = _this$props7.endDateOffset,
            minimumNights = _this$props7.minimumNights,
            keepOpenOnDateSelect = _this$props7.keepOpenOnDateSelect,
            renderCalendarDay = _this$props7.renderCalendarDay,
            renderDayContents = _this$props7.renderDayContents,
            renderCalendarInfo = _this$props7.renderCalendarInfo,
            renderMonthElement = _this$props7.renderMonthElement,
            calendarInfoPosition = _this$props7.calendarInfoPosition,
            firstDayOfWeek = _this$props7.firstDayOfWeek,
            initialVisibleMonth = _this$props7.initialVisibleMonth,
            hideKeyboardShortcutsPanel = _this$props7.hideKeyboardShortcutsPanel,
            customCloseIcon = _this$props7.customCloseIcon,
            onClose = _this$props7.onClose,
            phrases = _this$props7.phrases,
            dayAriaLabelFormat = _this$props7.dayAriaLabelFormat,
            isRTL = _this$props7.isRTL,
            weekDayFormat = _this$props7.weekDayFormat,
            styles = _this$props7.styles,
            verticalHeight = _this$props7.verticalHeight,
            transitionDuration = _this$props7.transitionDuration,
            verticalSpacing = _this$props7.verticalSpacing,
            horizontalMonthPadding = _this$props7.horizontalMonthPadding,
            small = _this$props7.small,
            disabled = _this$props7.disabled,
            reactDates = _this$props7.theme.reactDates;
        var _this$state = this.state,
            dayPickerContainerStyles = _this$state.dayPickerContainerStyles,
            isDayPickerFocused = _this$state.isDayPickerFocused,
            showKeyboardShortcuts = _this$state.showKeyboardShortcuts;
        var onOutsideClick = !withFullScreenPortal && withPortal ? this.onOutsideClick : undefined;

        var initialVisibleMonthThunk = initialVisibleMonth || function () {
          return startDate || endDate || (0, _moment["default"])();
        };

        var closeIcon = customCloseIcon || _react["default"].createElement(_CloseButton["default"], (0, _reactWithStyles.css)(styles.DateRangePicker_closeButton_svg));

        var inputHeight = (0, _getInputHeight["default"])(reactDates, small);
        var withAnyPortal = withPortal || withFullScreenPortal;
        return _react["default"].createElement("div", _extends({
          // eslint-disable-line jsx-a11y/no-static-element-interactions
          ref: this.setDayPickerContainerRef
        }, (0, _reactWithStyles.css)(styles.DateRangePicker_picker, anchorDirection === _constants.ANCHOR_LEFT && styles.DateRangePicker_picker__directionLeft, anchorDirection === _constants.ANCHOR_RIGHT && styles.DateRangePicker_picker__directionRight, orientation === _constants.HORIZONTAL_ORIENTATION && styles.DateRangePicker_picker__horizontal, orientation === _constants.VERTICAL_ORIENTATION && styles.DateRangePicker_picker__vertical, !withAnyPortal && openDirection === _constants.OPEN_DOWN && {
          top: inputHeight + verticalSpacing
        }, !withAnyPortal && openDirection === _constants.OPEN_UP && {
          bottom: inputHeight + verticalSpacing
        }, withAnyPortal && styles.DateRangePicker_picker__portal, withFullScreenPortal && styles.DateRangePicker_picker__fullScreenPortal, isRTL && styles.DateRangePicker_picker__rtl, dayPickerContainerStyles), {
          onClick: onOutsideClick
        }), _react["default"].createElement(_DayPickerRangeController["default"], {
          orientation: orientation,
          enableOutsideDays: enableOutsideDays,
          numberOfMonths: numberOfMonths,
          onPrevMonthClick: onPrevMonthClick,
          onNextMonthClick: onNextMonthClick,
          onDatesChange: onDatesChange,
          onFocusChange: onFocusChange,
          onClose: onClose,
          focusedInput: focusedInput,
          startDate: startDate,
          startDateOffset: startDateOffset,
          endDate: endDate,
          endDateOffset: endDateOffset,
          monthFormat: monthFormat,
          renderMonthText: renderMonthText,
          withPortal: withAnyPortal,
          daySize: daySize,
          initialVisibleMonth: initialVisibleMonthThunk,
          hideKeyboardShortcutsPanel: hideKeyboardShortcutsPanel,
          navPrev: navPrev,
          navNext: navNext,
          minimumNights: minimumNights,
          isOutsideRange: isOutsideRange,
          isDayHighlighted: isDayHighlighted,
          isDayBlocked: isDayBlocked,
          keepOpenOnDateSelect: keepOpenOnDateSelect,
          renderCalendarDay: renderCalendarDay,
          renderDayContents: renderDayContents,
          renderCalendarInfo: renderCalendarInfo,
          renderMonthElement: renderMonthElement,
          calendarInfoPosition: calendarInfoPosition,
          isFocused: isDayPickerFocused,
          showKeyboardShortcuts: showKeyboardShortcuts,
          onBlur: this.onDayPickerBlur,
          phrases: phrases,
          dayAriaLabelFormat: dayAriaLabelFormat,
          isRTL: isRTL,
          firstDayOfWeek: firstDayOfWeek,
          weekDayFormat: weekDayFormat,
          verticalHeight: verticalHeight,
          transitionDuration: transitionDuration,
          disabled: disabled,
          horizontalMonthPadding: horizontalMonthPadding
        }), withFullScreenPortal && _react["default"].createElement("button", _extends({}, (0, _reactWithStyles.css)(styles.DateRangePicker_closeButton), {
          type: "button",
          onClick: this.onOutsideClick,
          "aria-label": phrases.closeDatePicker
        }), closeIcon));
      }

      return renderDayPicker;
    }()
  }, {
    key: "render",
    value: function () {
      function render() {
        var _this$props8 = this.props,
            startDate = _this$props8.startDate,
            startDateId = _this$props8.startDateId,
            startDatePlaceholderText = _this$props8.startDatePlaceholderText,
            endDate = _this$props8.endDate,
            endDateId = _this$props8.endDateId,
            endDatePlaceholderText = _this$props8.endDatePlaceholderText,
            focusedInput = _this$props8.focusedInput,
            screenReaderInputMessage = _this$props8.screenReaderInputMessage,
            showClearDates = _this$props8.showClearDates,
            showDefaultInputIcon = _this$props8.showDefaultInputIcon,
            inputIconPosition = _this$props8.inputIconPosition,
            customInputIcon = _this$props8.customInputIcon,
            customArrowIcon = _this$props8.customArrowIcon,
            customCloseIcon = _this$props8.customCloseIcon,
            disabled = _this$props8.disabled,
            required = _this$props8.required,
            readOnly = _this$props8.readOnly,
            openDirection = _this$props8.openDirection,
            phrases = _this$props8.phrases,
            isOutsideRange = _this$props8.isOutsideRange,
            minimumNights = _this$props8.minimumNights,
            withPortal = _this$props8.withPortal,
            withFullScreenPortal = _this$props8.withFullScreenPortal,
            displayFormat = _this$props8.displayFormat,
            reopenPickerOnClearDates = _this$props8.reopenPickerOnClearDates,
            keepOpenOnDateSelect = _this$props8.keepOpenOnDateSelect,
            onDatesChange = _this$props8.onDatesChange,
            onClose = _this$props8.onClose,
            isRTL = _this$props8.isRTL,
            noBorder = _this$props8.noBorder,
            block = _this$props8.block,
            verticalSpacing = _this$props8.verticalSpacing,
            small = _this$props8.small,
            regular = _this$props8.regular,
            styles = _this$props8.styles;
        var isDateRangePickerInputFocused = this.state.isDateRangePickerInputFocused;
        var enableOutsideClick = !withPortal && !withFullScreenPortal;
        var hideFang = verticalSpacing < _constants.FANG_HEIGHT_PX;

        var input = _react["default"].createElement(_DateRangePickerInputController["default"], {
          startDate: startDate,
          startDateId: startDateId,
          startDatePlaceholderText: startDatePlaceholderText,
          isStartDateFocused: focusedInput === _constants.START_DATE,
          endDate: endDate,
          endDateId: endDateId,
          endDatePlaceholderText: endDatePlaceholderText,
          isEndDateFocused: focusedInput === _constants.END_DATE,
          displayFormat: displayFormat,
          showClearDates: showClearDates,
          showCaret: !withPortal && !withFullScreenPortal && !hideFang,
          showDefaultInputIcon: showDefaultInputIcon,
          inputIconPosition: inputIconPosition,
          customInputIcon: customInputIcon,
          customArrowIcon: customArrowIcon,
          customCloseIcon: customCloseIcon,
          disabled: disabled,
          required: required,
          readOnly: readOnly,
          openDirection: openDirection,
          reopenPickerOnClearDates: reopenPickerOnClearDates,
          keepOpenOnDateSelect: keepOpenOnDateSelect,
          isOutsideRange: isOutsideRange,
          minimumNights: minimumNights,
          withFullScreenPortal: withFullScreenPortal,
          onDatesChange: onDatesChange,
          onFocusChange: this.onDateRangePickerInputFocus,
          onKeyDownArrowDown: this.onDayPickerFocus,
          onKeyDownQuestionMark: this.showKeyboardShortcutsPanel,
          onClose: onClose,
          phrases: phrases,
          screenReaderMessage: screenReaderInputMessage,
          isFocused: isDateRangePickerInputFocused,
          isRTL: isRTL,
          noBorder: noBorder,
          block: block,
          small: small,
          regular: regular,
          verticalSpacing: verticalSpacing
        }, this.maybeRenderDayPickerWithPortal());

        return _react["default"].createElement("div", _extends({
          ref: this.setContainerRef
        }, (0, _reactWithStyles.css)(styles.DateRangePicker, block && styles.DateRangePicker__block)), enableOutsideClick && _react["default"].createElement(_reactOutsideClickHandler["default"], {
          onOutsideClick: this.onOutsideClick
        }, input), enableOutsideClick || input);
      }

      return render;
    }()
  }]);

  return DateRangePicker;
}(_react["default"].PureComponent || _react["default"].Component);

exports.PureDateRangePicker = DateRangePicker;
DateRangePicker.propTypes =  false ? undefined : {};
DateRangePicker.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref2) {
  var _ref2$reactDates = _ref2.reactDates,
      color = _ref2$reactDates.color,
      zIndex = _ref2$reactDates.zIndex;
  return {
    DateRangePicker: {
      position: 'relative',
      display: 'inline-block'
    },
    DateRangePicker__block: {
      display: 'block'
    },
    DateRangePicker_picker: {
      zIndex: zIndex + 1,
      backgroundColor: color.background,
      position: 'absolute'
    },
    DateRangePicker_picker__rtl: {
      direction: (0, _noflip["default"])('rtl')
    },
    DateRangePicker_picker__directionLeft: {
      left: (0, _noflip["default"])(0)
    },
    DateRangePicker_picker__directionRight: {
      right: (0, _noflip["default"])(0)
    },
    DateRangePicker_picker__portal: {
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      position: 'fixed',
      top: 0,
      left: (0, _noflip["default"])(0),
      height: '100%',
      width: '100%'
    },
    DateRangePicker_picker__fullScreenPortal: {
      backgroundColor: color.background
    },
    DateRangePicker_closeButton: {
      background: 'none',
      border: 0,
      color: 'inherit',
      font: 'inherit',
      lineHeight: 'normal',
      overflow: 'visible',
      cursor: 'pointer',
      position: 'absolute',
      top: 0,
      right: (0, _noflip["default"])(0),
      padding: 15,
      zIndex: zIndex + 2,
      ':hover': {
        color: "darken(".concat(color.core.grayLighter, ", 10%)"),
        textDecoration: 'none'
      },
      ':focus': {
        color: "darken(".concat(color.core.grayLighter, ", 10%)"),
        textDecoration: 'none'
      }
    },
    DateRangePicker_closeButton_svg: {
      height: 15,
      width: 15,
      fill: color.core.grayLighter
    }
  };
}, {
  pureComponent: typeof _react["default"].PureComponent !== 'undefined'
})(DateRangePicker);

exports["default"] = _default;

/***/ }),

/***/ 3058:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _airbnbPropTypes = __webpack_require__(2820);

var _consolidatedEvents = __webpack_require__(2875);

var _object = __webpack_require__(2891);

var _object2 = _interopRequireDefault(_object);

var _document = __webpack_require__(3060);

var _document2 = _interopRequireDefault(_document);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DISPLAY = {
  BLOCK: 'block',
  FLEX: 'flex',
  INLINE: 'inline',
  INLINE_BLOCK: 'inline-block',
  CONTENTS: 'contents'
};

var propTypes = (0, _airbnbPropTypes.forbidExtraProps)({
  children: _propTypes2['default'].node.isRequired,
  onOutsideClick: _propTypes2['default'].func.isRequired,
  disabled: _propTypes2['default'].bool,
  useCapture: _propTypes2['default'].bool,
  display: _propTypes2['default'].oneOf((0, _object2['default'])(DISPLAY))
});

var defaultProps = {
  disabled: false,

  // `useCapture` is set to true by default so that a `stopPropagation` in the
  // children will not prevent all outside click handlers from firing - maja
  useCapture: true,
  display: DISPLAY.BLOCK
};

var OutsideClickHandler = function (_React$Component) {
  _inherits(OutsideClickHandler, _React$Component);

  function OutsideClickHandler() {
    var _ref;

    _classCallCheck(this, OutsideClickHandler);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = OutsideClickHandler.__proto__ || Object.getPrototypeOf(OutsideClickHandler)).call.apply(_ref, [this].concat(args)));

    _this.onMouseDown = _this.onMouseDown.bind(_this);
    _this.onMouseUp = _this.onMouseUp.bind(_this);
    _this.setChildNodeRef = _this.setChildNodeRef.bind(_this);
    return _this;
  }

  _createClass(OutsideClickHandler, [{
    key: 'componentDidMount',
    value: function () {
      function componentDidMount() {
        var _props = this.props,
            disabled = _props.disabled,
            useCapture = _props.useCapture;


        if (!disabled) this.addMouseDownEventListener(useCapture);
      }

      return componentDidMount;
    }()
  }, {
    key: 'componentDidUpdate',
    value: function () {
      function componentDidUpdate(_ref2) {
        var prevDisabled = _ref2.disabled;
        var _props2 = this.props,
            disabled = _props2.disabled,
            useCapture = _props2.useCapture;

        if (prevDisabled !== disabled) {
          if (disabled) {
            this.removeEventListeners();
          } else {
            this.addMouseDownEventListener(useCapture);
          }
        }
      }

      return componentDidUpdate;
    }()
  }, {
    key: 'componentWillUnmount',
    value: function () {
      function componentWillUnmount() {
        this.removeEventListeners();
      }

      return componentWillUnmount;
    }()

    // Use mousedown/mouseup to enforce that clicks remain outside the root's
    // descendant tree, even when dragged. This should also get triggered on
    // touch devices.

  }, {
    key: 'onMouseDown',
    value: function () {
      function onMouseDown(e) {
        var useCapture = this.props.useCapture;


        var isDescendantOfRoot = this.childNode && (0, _document2['default'])(this.childNode, e.target);
        if (!isDescendantOfRoot) {
          if (this.removeMouseUp) {
            this.removeMouseUp();
            this.removeMouseUp = null;
          }
          this.removeMouseUp = (0, _consolidatedEvents.addEventListener)(document, 'mouseup', this.onMouseUp, { capture: useCapture });
        }
      }

      return onMouseDown;
    }()

    // Use mousedown/mouseup to enforce that clicks remain outside the root's
    // descendant tree, even when dragged. This should also get triggered on
    // touch devices.

  }, {
    key: 'onMouseUp',
    value: function () {
      function onMouseUp(e) {
        var onOutsideClick = this.props.onOutsideClick;


        var isDescendantOfRoot = this.childNode && (0, _document2['default'])(this.childNode, e.target);
        if (this.removeMouseUp) {
          this.removeMouseUp();
          this.removeMouseUp = null;
        }

        if (!isDescendantOfRoot) {
          onOutsideClick(e);
        }
      }

      return onMouseUp;
    }()
  }, {
    key: 'setChildNodeRef',
    value: function () {
      function setChildNodeRef(ref) {
        this.childNode = ref;
      }

      return setChildNodeRef;
    }()
  }, {
    key: 'addMouseDownEventListener',
    value: function () {
      function addMouseDownEventListener(useCapture) {
        this.removeMouseDown = (0, _consolidatedEvents.addEventListener)(document, 'mousedown', this.onMouseDown, { capture: useCapture });
      }

      return addMouseDownEventListener;
    }()
  }, {
    key: 'removeEventListeners',
    value: function () {
      function removeEventListeners() {
        if (this.removeMouseDown) this.removeMouseDown();
        if (this.removeMouseUp) this.removeMouseUp();
      }

      return removeEventListeners;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _props3 = this.props,
            children = _props3.children,
            display = _props3.display;


        return _react2['default'].createElement(
          'div',
          {
            ref: this.setChildNodeRef,
            style: display !== DISPLAY.BLOCK && (0, _object2['default'])(DISPLAY).includes(display) ? { display: display } : undefined
          },
          children
        );
      }

      return render;
    }()
  }]);

  return OutsideClickHandler;
}(_react2['default'].Component);

exports['default'] = OutsideClickHandler;


OutsideClickHandler.propTypes = propTypes;
OutsideClickHandler.defaultProps = defaultProps;

/***/ }),

/***/ 3059:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getPolyfill = __webpack_require__(2942);
var define = __webpack_require__(2838);

module.exports = function shimValues() {
	var polyfill = getPolyfill();
	define(Object, { values: polyfill }, {
		values: function testValues() {
			return Object.values !== polyfill;
		}
	});
	return polyfill;
};


/***/ }),

/***/ 3060:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(2838);

var implementation = __webpack_require__(2943);
var getPolyfill = __webpack_require__(2944);
var polyfill = getPolyfill();
var shim = __webpack_require__(3061);

var boundContains = function contains(node, other) {
	return polyfill.apply(node, [other]);
};

define(boundContains, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = boundContains;


/***/ }),

/***/ 3061:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(2838);
var getPolyfill = __webpack_require__(2944);

module.exports = function shimContains() {
	var polyfill = getPolyfill();
	if (typeof document !== 'undefined') {
		define(
			document,
			{ contains: polyfill },
			{ contains: function () { return document.contains !== polyfill; } }
		);
		if (typeof Element !== 'undefined') {
			define(
				Element.prototype,
				{ contains: polyfill },
				{ contains: function () { return Element.prototype.contains !== polyfill; } }
			);
		}
	}
	return polyfill;
};


/***/ }),

/***/ 3062:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getSelectedDateOffset;

var defaultModifier = function defaultModifier(day) {
  return day;
};

function getSelectedDateOffset(fn, day) {
  var modifier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultModifier;
  if (!fn) return day;
  return modifier(fn(day.clone()));
}

/***/ }),

/***/ 3063:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(0));

var _airbnbPropTypes = __webpack_require__(2820);

var _reactWithStyles = __webpack_require__(2827);

var _defaultPhrases = __webpack_require__(2821);

var _getPhrasePropTypes = _interopRequireDefault(__webpack_require__(2823));

var _noflip = _interopRequireDefault(__webpack_require__(2842));

var _LeftArrow = _interopRequireDefault(__webpack_require__(2956));

var _RightArrow = _interopRequireDefault(__webpack_require__(2955));

var _ChevronUp = _interopRequireDefault(__webpack_require__(3064));

var _ChevronDown = _interopRequireDefault(__webpack_require__(3065));

var _ScrollableOrientationShape = _interopRequireDefault(__webpack_require__(2851));

var _constants = __webpack_require__(2818);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var propTypes =  false ? undefined : {};
var defaultProps = {
  disablePrev: false,
  disableNext: false,
  navPrev: null,
  navNext: null,
  orientation: _constants.HORIZONTAL_ORIENTATION,
  onPrevMonthClick: function () {
    function onPrevMonthClick() {}

    return onPrevMonthClick;
  }(),
  onNextMonthClick: function () {
    function onNextMonthClick() {}

    return onNextMonthClick;
  }(),
  // internationalization
  phrases: _defaultPhrases.DayPickerNavigationPhrases,
  isRTL: false
};

function DayPickerNavigation(_ref) {
  var disablePrev = _ref.disablePrev,
      disableNext = _ref.disableNext,
      navPrev = _ref.navPrev,
      navNext = _ref.navNext,
      onPrevMonthClick = _ref.onPrevMonthClick,
      onNextMonthClick = _ref.onNextMonthClick,
      orientation = _ref.orientation,
      phrases = _ref.phrases,
      isRTL = _ref.isRTL,
      styles = _ref.styles;
  var isHorizontal = orientation === _constants.HORIZONTAL_ORIENTATION;
  var isVertical = orientation !== _constants.HORIZONTAL_ORIENTATION;
  var isVerticalScrollable = orientation === _constants.VERTICAL_SCROLLABLE;
  var navPrevIcon = navPrev;
  var navNextIcon = navNext;
  var isDefaultNavPrev = false;
  var isDefaultNavNext = false;

  if (!navPrevIcon) {
    isDefaultNavPrev = true;
    var Icon = isVertical ? _ChevronUp["default"] : _LeftArrow["default"];

    if (isRTL && !isVertical) {
      Icon = _RightArrow["default"];
    }

    navPrevIcon = _react["default"].createElement(Icon, (0, _reactWithStyles.css)(isHorizontal && styles.DayPickerNavigation_svg__horizontal, isVertical && styles.DayPickerNavigation_svg__vertical, disablePrev && styles.DayPickerNavigation_svg__disabled));
  }

  if (!navNextIcon) {
    isDefaultNavNext = true;

    var _Icon = isVertical ? _ChevronDown["default"] : _RightArrow["default"];

    if (isRTL && !isVertical) {
      _Icon = _LeftArrow["default"];
    }

    navNextIcon = _react["default"].createElement(_Icon, (0, _reactWithStyles.css)(isHorizontal && styles.DayPickerNavigation_svg__horizontal, isVertical && styles.DayPickerNavigation_svg__vertical, disableNext && styles.DayPickerNavigation_svg__disabled));
  }

  var isDefaultNav = isVerticalScrollable ? isDefaultNavNext : isDefaultNavNext || isDefaultNavPrev;
  return _react["default"].createElement("div", _reactWithStyles.css.apply(void 0, [styles.DayPickerNavigation, isHorizontal && styles.DayPickerNavigation__horizontal].concat(_toConsumableArray(isVertical ? [styles.DayPickerNavigation__vertical, isDefaultNav && styles.DayPickerNavigation__verticalDefault] : []), _toConsumableArray(isVerticalScrollable ? [styles.DayPickerNavigation__verticalScrollable, isDefaultNav && styles.DayPickerNavigation__verticalScrollableDefault] : []))), !isVerticalScrollable && _react["default"].createElement("div", _extends({
    role: "button",
    tabIndex: "0"
  }, _reactWithStyles.css.apply(void 0, [styles.DayPickerNavigation_button, isDefaultNavPrev && styles.DayPickerNavigation_button__default, disablePrev && styles.DayPickerNavigation_button__disabled].concat(_toConsumableArray(isHorizontal ? [styles.DayPickerNavigation_button__horizontal].concat(_toConsumableArray(isDefaultNavPrev ? [styles.DayPickerNavigation_button__horizontalDefault, !isRTL && styles.DayPickerNavigation_leftButton__horizontalDefault, isRTL && styles.DayPickerNavigation_rightButton__horizontalDefault] : [])) : []), _toConsumableArray(isVertical ? [styles.DayPickerNavigation_button__vertical].concat(_toConsumableArray(isDefaultNavPrev ? [styles.DayPickerNavigation_button__verticalDefault, styles.DayPickerNavigation_prevButton__verticalDefault] : [])) : []))), {
    "aria-disabled": disablePrev ? true : undefined,
    "aria-label": phrases.jumpToPrevMonth,
    onClick: disablePrev ? undefined : onPrevMonthClick,
    onKeyUp: disablePrev ? undefined : function (e) {
      var key = e.key;
      if (key === 'Enter' || key === ' ') onPrevMonthClick(e);
    },
    onMouseUp: disablePrev ? undefined : function (e) {
      e.currentTarget.blur();
    }
  }), navPrevIcon), _react["default"].createElement("div", _extends({
    role: "button",
    tabIndex: "0"
  }, _reactWithStyles.css.apply(void 0, [styles.DayPickerNavigation_button, isDefaultNavNext && styles.DayPickerNavigation_button__default, disableNext && styles.DayPickerNavigation_button__disabled].concat(_toConsumableArray(isHorizontal ? [styles.DayPickerNavigation_button__horizontal].concat(_toConsumableArray(isDefaultNavNext ? [styles.DayPickerNavigation_button__horizontalDefault, isRTL && styles.DayPickerNavigation_leftButton__horizontalDefault, !isRTL && styles.DayPickerNavigation_rightButton__horizontalDefault] : [])) : []), _toConsumableArray(isVertical ? [styles.DayPickerNavigation_button__vertical, styles.DayPickerNavigation_nextButton__vertical].concat(_toConsumableArray(isDefaultNavNext ? [styles.DayPickerNavigation_button__verticalDefault, styles.DayPickerNavigation_nextButton__verticalDefault, isVerticalScrollable && styles.DayPickerNavigation_nextButton__verticalScrollableDefault] : [])) : []))), {
    "aria-disabled": disableNext ? true : undefined,
    "aria-label": phrases.jumpToNextMonth,
    onClick: disableNext ? undefined : onNextMonthClick,
    onKeyUp: disableNext ? undefined : function (e) {
      var key = e.key;
      if (key === 'Enter' || key === ' ') onNextMonthClick(e);
    },
    onMouseUp: disableNext ? undefined : function (e) {
      e.currentTarget.blur();
    }
  }), navNextIcon));
}

DayPickerNavigation.propTypes =  false ? undefined : {};
DayPickerNavigation.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref2) {
  var _ref2$reactDates = _ref2.reactDates,
      color = _ref2$reactDates.color,
      zIndex = _ref2$reactDates.zIndex;
  return {
    DayPickerNavigation: {
      position: 'relative',
      zIndex: zIndex + 2
    },
    DayPickerNavigation__horizontal: {
      height: 0
    },
    DayPickerNavigation__vertical: {},
    DayPickerNavigation__verticalScrollable: {},
    DayPickerNavigation__verticalDefault: {
      position: 'absolute',
      width: '100%',
      height: 52,
      bottom: 0,
      left: (0, _noflip["default"])(0)
    },
    DayPickerNavigation__verticalScrollableDefault: {
      position: 'relative'
    },
    DayPickerNavigation_button: {
      cursor: 'pointer',
      userSelect: 'none',
      border: 0,
      padding: 0,
      margin: 0
    },
    DayPickerNavigation_button__default: {
      border: "1px solid ".concat(color.core.borderLight),
      backgroundColor: color.background,
      color: color.placeholderText,
      ':focus': {
        border: "1px solid ".concat(color.core.borderMedium)
      },
      ':hover': {
        border: "1px solid ".concat(color.core.borderMedium)
      },
      ':active': {
        background: color.backgroundDark
      }
    },
    DayPickerNavigation_button__disabled: {
      cursor: 'default',
      border: "1px solid ".concat(color.disabled),
      ':focus': {
        border: "1px solid ".concat(color.disabled)
      },
      ':hover': {
        border: "1px solid ".concat(color.disabled)
      },
      ':active': {
        background: 'none'
      }
    },
    DayPickerNavigation_button__horizontal: {},
    DayPickerNavigation_button__horizontalDefault: {
      position: 'absolute',
      top: 18,
      lineHeight: 0.78,
      borderRadius: 3,
      padding: '6px 9px'
    },
    DayPickerNavigation_leftButton__horizontalDefault: {
      left: (0, _noflip["default"])(22)
    },
    DayPickerNavigation_rightButton__horizontalDefault: {
      right: (0, _noflip["default"])(22)
    },
    DayPickerNavigation_button__vertical: {},
    DayPickerNavigation_button__verticalDefault: {
      padding: 5,
      background: color.background,
      boxShadow: (0, _noflip["default"])('0 0 5px 2px rgba(0, 0, 0, 0.1)'),
      position: 'relative',
      display: 'inline-block',
      textAlign: 'center',
      height: '100%',
      width: '50%'
    },
    DayPickerNavigation_prevButton__verticalDefault: {},
    DayPickerNavigation_nextButton__verticalDefault: {
      borderLeft: (0, _noflip["default"])(0)
    },
    DayPickerNavigation_nextButton__verticalScrollableDefault: {
      width: '100%'
    },
    DayPickerNavigation_svg__horizontal: {
      height: 19,
      width: 19,
      fill: color.core.grayLight,
      display: 'block'
    },
    DayPickerNavigation_svg__vertical: {
      height: 42,
      width: 42,
      fill: color.text
    },
    DayPickerNavigation_svg__disabled: {
      fill: color.disabled
    }
  };
}, {
  pureComponent: typeof _react["default"].PureComponent !== 'undefined'
})(DayPickerNavigation);

exports["default"] = _default;

/***/ }),

/***/ 3064:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ChevronUp = function () {
  function ChevronUp(props) {
    return _react["default"].createElement("svg", props, _react["default"].createElement("path", {
      d: "M32.1 712.6l453.2-452.2c11-11 21-11 32 0l453.2 452.2c4 5 6 10 6 16 0 13-10 23-22 23-7 0-12-2-16-7L501.3 308.5 64.1 744.7c-4 5-9 7-15 7-7 0-12-2-17-7-9-11-9-21 0-32.1z"
    }));
  }

  return ChevronUp;
}();

ChevronUp.defaultProps = {
  focusable: "false",
  viewBox: "0 0 1000 1000"
};
var _default = ChevronUp;
exports["default"] = _default;

/***/ }),

/***/ 3065:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ChevronDown = function () {
  function ChevronDown(props) {
    return _react["default"].createElement("svg", props, _react["default"].createElement("path", {
      d: "M967.5 288.5L514.3 740.7c-11 11-21 11-32 0L29.1 288.5c-4-5-6-11-6-16 0-13 10-23 23-23 6 0 11 2 15 7l437.2 436.2 437.2-436.2c4-5 9-7 16-7 6 0 11 2 16 7 9 10.9 9 21 0 32z"
    }));
  }

  return ChevronDown;
}();

ChevronDown.defaultProps = {
  focusable: "false",
  viewBox: "0 0 1000 1000"
};
var _default = ChevronDown;
exports["default"] = _default;

/***/ }),

/***/ 3066:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.BOTTOM_RIGHT = exports.TOP_RIGHT = exports.TOP_LEFT = void 0;

var _reactAddonsShallowCompare = _interopRequireDefault(__webpack_require__(944));

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(0));

var _airbnbPropTypes = __webpack_require__(2820);

var _reactWithStyles = __webpack_require__(2827);

var _defaultPhrases = __webpack_require__(2821);

var _getPhrasePropTypes = _interopRequireDefault(__webpack_require__(2823));

var _KeyboardShortcutRow = _interopRequireDefault(__webpack_require__(3067));

var _CloseButton = _interopRequireDefault(__webpack_require__(2866));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function () { function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); } return _getPrototypeOf; }(); return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function () { function _setPrototypeOf(o, p) { o.__proto__ = p; return o; } return _setPrototypeOf; }(); return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TOP_LEFT = 'top-left';
exports.TOP_LEFT = TOP_LEFT;
var TOP_RIGHT = 'top-right';
exports.TOP_RIGHT = TOP_RIGHT;
var BOTTOM_RIGHT = 'bottom-right';
exports.BOTTOM_RIGHT = BOTTOM_RIGHT;
var propTypes =  false ? undefined : {};
var defaultProps = {
  block: false,
  buttonLocation: BOTTOM_RIGHT,
  showKeyboardShortcutsPanel: false,
  openKeyboardShortcutsPanel: function () {
    function openKeyboardShortcutsPanel() {}

    return openKeyboardShortcutsPanel;
  }(),
  closeKeyboardShortcutsPanel: function () {
    function closeKeyboardShortcutsPanel() {}

    return closeKeyboardShortcutsPanel;
  }(),
  phrases: _defaultPhrases.DayPickerKeyboardShortcutsPhrases
};

function getKeyboardShortcuts(phrases) {
  return [{
    unicode: '↵',
    label: phrases.enterKey,
    action: phrases.selectFocusedDate
  }, {
    unicode: '←/→',
    label: phrases.leftArrowRightArrow,
    action: phrases.moveFocusByOneDay
  }, {
    unicode: '↑/↓',
    label: phrases.upArrowDownArrow,
    action: phrases.moveFocusByOneWeek
  }, {
    unicode: 'PgUp/PgDn',
    label: phrases.pageUpPageDown,
    action: phrases.moveFocusByOneMonth
  }, {
    unicode: 'Home/End',
    label: phrases.homeEnd,
    action: phrases.moveFocustoStartAndEndOfWeek
  }, {
    unicode: 'Esc',
    label: phrases.escape,
    action: phrases.returnFocusToInput
  }, {
    unicode: '?',
    label: phrases.questionMark,
    action: phrases.openThisPanel
  }];
}

var DayPickerKeyboardShortcuts =
/*#__PURE__*/
function (_ref) {
  _inherits(DayPickerKeyboardShortcuts, _ref);

  _createClass(DayPickerKeyboardShortcuts, [{
    key: !_react["default"].PureComponent && "shouldComponentUpdate",
    value: function () {
      function value(nextProps, nextState) {
        return (0, _reactAddonsShallowCompare["default"])(this, nextProps, nextState);
      }

      return value;
    }()
  }]);

  function DayPickerKeyboardShortcuts() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DayPickerKeyboardShortcuts);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DayPickerKeyboardShortcuts)).call.apply(_getPrototypeOf2, [this].concat(args)));
    var phrases = _this.props.phrases;
    _this.keyboardShortcuts = getKeyboardShortcuts(phrases);
    _this.onShowKeyboardShortcutsButtonClick = _this.onShowKeyboardShortcutsButtonClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setShowKeyboardShortcutsButtonRef = _this.setShowKeyboardShortcutsButtonRef.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setHideKeyboardShortcutsButtonRef = _this.setHideKeyboardShortcutsButtonRef.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleFocus = _this.handleFocus.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(DayPickerKeyboardShortcuts, [{
    key: "componentWillReceiveProps",
    value: function () {
      function componentWillReceiveProps(nextProps) {
        var phrases = this.props.phrases;

        if (nextProps.phrases !== phrases) {
          this.keyboardShortcuts = getKeyboardShortcuts(nextProps.phrases);
        }
      }

      return componentWillReceiveProps;
    }()
  }, {
    key: "componentDidUpdate",
    value: function () {
      function componentDidUpdate() {
        this.handleFocus();
      }

      return componentDidUpdate;
    }()
  }, {
    key: "onKeyDown",
    value: function () {
      function onKeyDown(e) {
        e.stopPropagation();
        var closeKeyboardShortcutsPanel = this.props.closeKeyboardShortcutsPanel; // Because the close button is the only focusable element inside of the panel, this
        // amounts to a very basic focus trap. The user can exit the panel by "pressing" the
        // close button or hitting escape

        switch (e.key) {
          case 'Escape':
            closeKeyboardShortcutsPanel();
            break;
          // do nothing - this allows the up and down arrows continue their
          // default behavior of scrolling the content of the Keyboard Shortcuts Panel
          // which is needed when only a single month is shown for instance.

          case 'ArrowUp':
          case 'ArrowDown':
            break;
          // completely block the rest of the keys that have functionality outside of this panel

          case 'Tab':
          case 'Home':
          case 'End':
          case 'PageUp':
          case 'PageDown':
          case 'ArrowLeft':
          case 'ArrowRight':
            e.preventDefault();
            break;

          default:
            break;
        }
      }

      return onKeyDown;
    }()
  }, {
    key: "onShowKeyboardShortcutsButtonClick",
    value: function () {
      function onShowKeyboardShortcutsButtonClick() {
        var _this2 = this;

        var openKeyboardShortcutsPanel = this.props.openKeyboardShortcutsPanel; // we want to return focus to this button after closing the keyboard shortcuts panel

        openKeyboardShortcutsPanel(function () {
          _this2.showKeyboardShortcutsButton.focus();
        });
      }

      return onShowKeyboardShortcutsButtonClick;
    }()
  }, {
    key: "setShowKeyboardShortcutsButtonRef",
    value: function () {
      function setShowKeyboardShortcutsButtonRef(ref) {
        this.showKeyboardShortcutsButton = ref;
      }

      return setShowKeyboardShortcutsButtonRef;
    }()
  }, {
    key: "setHideKeyboardShortcutsButtonRef",
    value: function () {
      function setHideKeyboardShortcutsButtonRef(ref) {
        this.hideKeyboardShortcutsButton = ref;
      }

      return setHideKeyboardShortcutsButtonRef;
    }()
  }, {
    key: "handleFocus",
    value: function () {
      function handleFocus() {
        if (this.hideKeyboardShortcutsButton) {
          // automatically move focus into the dialog by moving
          // to the only interactive element, the hide button
          this.hideKeyboardShortcutsButton.focus();
        }
      }

      return handleFocus;
    }()
  }, {
    key: "render",
    value: function () {
      function render() {
        var _this$props = this.props,
            block = _this$props.block,
            buttonLocation = _this$props.buttonLocation,
            showKeyboardShortcutsPanel = _this$props.showKeyboardShortcutsPanel,
            closeKeyboardShortcutsPanel = _this$props.closeKeyboardShortcutsPanel,
            styles = _this$props.styles,
            phrases = _this$props.phrases;
        var toggleButtonText = showKeyboardShortcutsPanel ? phrases.hideKeyboardShortcutsPanel : phrases.showKeyboardShortcutsPanel;
        var bottomRight = buttonLocation === BOTTOM_RIGHT;
        var topRight = buttonLocation === TOP_RIGHT;
        var topLeft = buttonLocation === TOP_LEFT;
        return _react["default"].createElement("div", null, _react["default"].createElement("button", _extends({
          ref: this.setShowKeyboardShortcutsButtonRef
        }, (0, _reactWithStyles.css)(styles.DayPickerKeyboardShortcuts_buttonReset, styles.DayPickerKeyboardShortcuts_show, bottomRight && styles.DayPickerKeyboardShortcuts_show__bottomRight, topRight && styles.DayPickerKeyboardShortcuts_show__topRight, topLeft && styles.DayPickerKeyboardShortcuts_show__topLeft), {
          type: "button",
          "aria-label": toggleButtonText,
          onClick: this.onShowKeyboardShortcutsButtonClick,
          onMouseUp: function () {
            function onMouseUp(e) {
              e.currentTarget.blur();
            }

            return onMouseUp;
          }()
        }), _react["default"].createElement("span", (0, _reactWithStyles.css)(styles.DayPickerKeyboardShortcuts_showSpan, bottomRight && styles.DayPickerKeyboardShortcuts_showSpan__bottomRight, topRight && styles.DayPickerKeyboardShortcuts_showSpan__topRight, topLeft && styles.DayPickerKeyboardShortcuts_showSpan__topLeft), "?")), showKeyboardShortcutsPanel && _react["default"].createElement("div", _extends({}, (0, _reactWithStyles.css)(styles.DayPickerKeyboardShortcuts_panel), {
          role: "dialog",
          "aria-labelledby": "DayPickerKeyboardShortcuts_title",
          "aria-describedby": "DayPickerKeyboardShortcuts_description"
        }), _react["default"].createElement("div", _extends({}, (0, _reactWithStyles.css)(styles.DayPickerKeyboardShortcuts_title), {
          id: "DayPickerKeyboardShortcuts_title"
        }), phrases.keyboardShortcuts), _react["default"].createElement("button", _extends({
          ref: this.setHideKeyboardShortcutsButtonRef
        }, (0, _reactWithStyles.css)(styles.DayPickerKeyboardShortcuts_buttonReset, styles.DayPickerKeyboardShortcuts_close), {
          type: "button",
          tabIndex: "0",
          "aria-label": phrases.hideKeyboardShortcutsPanel,
          onClick: closeKeyboardShortcutsPanel,
          onKeyDown: this.onKeyDown
        }), _react["default"].createElement(_CloseButton["default"], (0, _reactWithStyles.css)(styles.DayPickerKeyboardShortcuts_closeSvg))), _react["default"].createElement("ul", _extends({}, (0, _reactWithStyles.css)(styles.DayPickerKeyboardShortcuts_list), {
          id: "DayPickerKeyboardShortcuts_description"
        }), this.keyboardShortcuts.map(function (_ref2) {
          var unicode = _ref2.unicode,
              label = _ref2.label,
              action = _ref2.action;
          return _react["default"].createElement(_KeyboardShortcutRow["default"], {
            key: label,
            unicode: unicode,
            label: label,
            action: action,
            block: block
          });
        }))));
      }

      return render;
    }()
  }]);

  return DayPickerKeyboardShortcuts;
}(_react["default"].PureComponent || _react["default"].Component);

DayPickerKeyboardShortcuts.propTypes =  false ? undefined : {};
DayPickerKeyboardShortcuts.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref3) {
  var _ref3$reactDates = _ref3.reactDates,
      color = _ref3$reactDates.color,
      font = _ref3$reactDates.font,
      zIndex = _ref3$reactDates.zIndex;
  return {
    DayPickerKeyboardShortcuts_buttonReset: {
      background: 'none',
      border: 0,
      borderRadius: 0,
      color: 'inherit',
      font: 'inherit',
      lineHeight: 'normal',
      overflow: 'visible',
      padding: 0,
      cursor: 'pointer',
      fontSize: font.size,
      ':active': {
        outline: 'none'
      }
    },
    DayPickerKeyboardShortcuts_show: {
      width: 33,
      height: 26,
      position: 'absolute',
      zIndex: zIndex + 2,
      '::before': {
        content: '""',
        display: 'block',
        position: 'absolute'
      }
    },
    DayPickerKeyboardShortcuts_show__bottomRight: {
      bottom: 0,
      right: 0,
      '::before': {
        borderTop: '26px solid transparent',
        borderRight: "33px solid ".concat(color.core.primary),
        bottom: 0,
        right: 0
      },
      ':hover::before': {
        borderRight: "33px solid ".concat(color.core.primary_dark)
      }
    },
    DayPickerKeyboardShortcuts_show__topRight: {
      top: 0,
      right: 0,
      '::before': {
        borderBottom: '26px solid transparent',
        borderRight: "33px solid ".concat(color.core.primary),
        top: 0,
        right: 0
      },
      ':hover::before': {
        borderRight: "33px solid ".concat(color.core.primary_dark)
      }
    },
    DayPickerKeyboardShortcuts_show__topLeft: {
      top: 0,
      left: 0,
      '::before': {
        borderBottom: '26px solid transparent',
        borderLeft: "33px solid ".concat(color.core.primary),
        top: 0,
        left: 0
      },
      ':hover::before': {
        borderLeft: "33px solid ".concat(color.core.primary_dark)
      }
    },
    DayPickerKeyboardShortcuts_showSpan: {
      color: color.core.white,
      position: 'absolute'
    },
    DayPickerKeyboardShortcuts_showSpan__bottomRight: {
      bottom: 0,
      right: 5
    },
    DayPickerKeyboardShortcuts_showSpan__topRight: {
      top: 1,
      right: 5
    },
    DayPickerKeyboardShortcuts_showSpan__topLeft: {
      top: 1,
      left: 5
    },
    DayPickerKeyboardShortcuts_panel: {
      overflow: 'auto',
      background: color.background,
      border: "1px solid ".concat(color.core.border),
      borderRadius: 2,
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      zIndex: zIndex + 2,
      padding: 22,
      margin: 33,
      textAlign: 'left' // TODO: investigate use of text-align throughout the library

    },
    DayPickerKeyboardShortcuts_title: {
      fontSize: 16,
      fontWeight: 'bold',
      margin: 0
    },
    DayPickerKeyboardShortcuts_list: {
      listStyle: 'none',
      padding: 0,
      fontSize: font.size
    },
    DayPickerKeyboardShortcuts_close: {
      position: 'absolute',
      right: 22,
      top: 22,
      zIndex: zIndex + 2,
      ':active': {
        outline: 'none'
      }
    },
    DayPickerKeyboardShortcuts_closeSvg: {
      height: 15,
      width: 15,
      fill: color.core.grayLighter,
      ':hover': {
        fill: color.core.grayLight
      },
      ':focus': {
        fill: color.core.grayLight
      }
    }
  };
}, {
  pureComponent: typeof _react["default"].PureComponent !== 'undefined'
})(DayPickerKeyboardShortcuts);

exports["default"] = _default;

/***/ }),

/***/ 3067:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(0));

var _airbnbPropTypes = __webpack_require__(2820);

var _reactWithStyles = __webpack_require__(2827);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var propTypes =  false ? undefined : {};
var defaultProps = {
  block: false
};

function KeyboardShortcutRow(_ref) {
  var unicode = _ref.unicode,
      label = _ref.label,
      action = _ref.action,
      block = _ref.block,
      styles = _ref.styles;
  return _react["default"].createElement("li", (0, _reactWithStyles.css)(styles.KeyboardShortcutRow, block && styles.KeyboardShortcutRow__block), _react["default"].createElement("div", (0, _reactWithStyles.css)(styles.KeyboardShortcutRow_keyContainer, block && styles.KeyboardShortcutRow_keyContainer__block), _react["default"].createElement("span", _extends({}, (0, _reactWithStyles.css)(styles.KeyboardShortcutRow_key), {
    role: "img",
    "aria-label": "".concat(label, ",") // add comma so screen readers will pause before reading action

  }), unicode)), _react["default"].createElement("div", (0, _reactWithStyles.css)(styles.KeyboardShortcutRow_action), action));
}

KeyboardShortcutRow.propTypes =  false ? undefined : {};
KeyboardShortcutRow.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref2) {
  var color = _ref2.reactDates.color;
  return {
    KeyboardShortcutRow: {
      listStyle: 'none',
      margin: '6px 0'
    },
    KeyboardShortcutRow__block: {
      marginBottom: 16
    },
    KeyboardShortcutRow_keyContainer: {
      display: 'inline-block',
      whiteSpace: 'nowrap',
      textAlign: 'right',
      // is not handled by isRTL
      marginRight: 6 // is not handled by isRTL

    },
    KeyboardShortcutRow_keyContainer__block: {
      textAlign: 'left',
      // is not handled by isRTL
      display: 'inline'
    },
    KeyboardShortcutRow_key: {
      fontFamily: 'monospace',
      fontSize: 12,
      textTransform: 'uppercase',
      background: color.core.grayLightest,
      padding: '2px 6px'
    },
    KeyboardShortcutRow_action: {
      display: 'inline',
      wordBreak: 'break-word',
      marginLeft: 8 // is not handled by isRTL

    }
  };
}, {
  pureComponent: typeof _react["default"].PureComponent !== 'undefined'
})(KeyboardShortcutRow);

exports["default"] = _default;

/***/ }),

/***/ 3068:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getNumberOfCalendarMonthWeeks;

var _moment = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getBlankDaysBeforeFirstDay(firstDayOfMonth, firstDayOfWeek) {
  var weekDayDiff = firstDayOfMonth.day() - firstDayOfWeek;
  return (weekDayDiff + 7) % 7;
}

function getNumberOfCalendarMonthWeeks(month) {
  var firstDayOfWeek = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _moment["default"].localeData().firstDayOfWeek();
  var firstDayOfMonth = month.clone().startOf('month');
  var numBlankDays = getBlankDaysBeforeFirstDay(firstDayOfMonth, firstDayOfWeek);
  return Math.ceil((numBlankDays + month.daysInMonth()) / 7);
}

/***/ }),

/***/ 3069:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getActiveElement;

function getActiveElement() {
  return typeof document !== 'undefined' && document.activeElement;
}

/***/ }),

/***/ 3070:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PureSingleDatePicker = void 0;

var _reactAddonsShallowCompare = _interopRequireDefault(__webpack_require__(944));

var _react = _interopRequireDefault(__webpack_require__(1));

var _moment = _interopRequireDefault(__webpack_require__(2));

var _reactWithStyles = __webpack_require__(2827);

var _reactPortal = __webpack_require__(2966);

var _airbnbPropTypes = __webpack_require__(2820);

var _consolidatedEvents = __webpack_require__(2875);

var _isTouchDevice = _interopRequireDefault(__webpack_require__(2852));

var _reactOutsideClickHandler = _interopRequireDefault(__webpack_require__(2890));

var _SingleDatePickerShape = _interopRequireDefault(__webpack_require__(2962));

var _defaultPhrases = __webpack_require__(2821);

var _getResponsiveContainerStyles = _interopRequireDefault(__webpack_require__(2949));

var _getDetachedContainerStyles = _interopRequireDefault(__webpack_require__(2950));

var _getInputHeight = _interopRequireDefault(__webpack_require__(2892));

var _isInclusivelyAfterDay = _interopRequireDefault(__webpack_require__(2854));

var _disableScroll2 = _interopRequireDefault(__webpack_require__(2951));

var _noflip = _interopRequireDefault(__webpack_require__(2842));

var _SingleDatePickerInputController = _interopRequireDefault(__webpack_require__(3071));

var _DayPickerSingleDateController = _interopRequireDefault(__webpack_require__(2961));

var _CloseButton = _interopRequireDefault(__webpack_require__(2866));

var _constants = __webpack_require__(2818);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function () { function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); } return _getPrototypeOf; }(); return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function () { function _setPrototypeOf(o, p) { o.__proto__ = p; return o; } return _setPrototypeOf; }(); return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var propTypes =  false ? undefined : {};
var defaultProps = {
  // required props for a functional interactive SingleDatePicker
  date: null,
  focused: false,
  // input related props
  id: 'date',
  placeholder: 'Date',
  disabled: false,
  required: false,
  readOnly: false,
  screenReaderInputMessage: '',
  showClearDate: false,
  showDefaultInputIcon: false,
  inputIconPosition: _constants.ICON_BEFORE_POSITION,
  customInputIcon: null,
  customCloseIcon: null,
  noBorder: false,
  block: false,
  small: false,
  regular: false,
  verticalSpacing: _constants.DEFAULT_VERTICAL_SPACING,
  keepFocusOnInput: false,
  // calendar presentation and interaction related props
  orientation: _constants.HORIZONTAL_ORIENTATION,
  anchorDirection: _constants.ANCHOR_LEFT,
  openDirection: _constants.OPEN_DOWN,
  horizontalMargin: 0,
  withPortal: false,
  withFullScreenPortal: false,
  appendToBody: false,
  disableScroll: false,
  initialVisibleMonth: null,
  firstDayOfWeek: null,
  numberOfMonths: 2,
  keepOpenOnDateSelect: false,
  reopenPickerOnClearDate: false,
  renderCalendarInfo: null,
  calendarInfoPosition: _constants.INFO_POSITION_BOTTOM,
  hideKeyboardShortcutsPanel: false,
  daySize: _constants.DAY_SIZE,
  isRTL: false,
  verticalHeight: null,
  transitionDuration: undefined,
  horizontalMonthPadding: 13,
  // navigation related props
  navPrev: null,
  navNext: null,
  onPrevMonthClick: function () {
    function onPrevMonthClick() {}

    return onPrevMonthClick;
  }(),
  onNextMonthClick: function () {
    function onNextMonthClick() {}

    return onNextMonthClick;
  }(),
  onClose: function () {
    function onClose() {}

    return onClose;
  }(),
  // month presentation and interaction related props
  renderMonthText: null,
  // day presentation and interaction related props
  renderCalendarDay: undefined,
  renderDayContents: null,
  renderMonthElement: null,
  enableOutsideDays: false,
  isDayBlocked: function () {
    function isDayBlocked() {
      return false;
    }

    return isDayBlocked;
  }(),
  isOutsideRange: function () {
    function isOutsideRange(day) {
      return !(0, _isInclusivelyAfterDay["default"])(day, (0, _moment["default"])());
    }

    return isOutsideRange;
  }(),
  isDayHighlighted: function () {
    function isDayHighlighted() {}

    return isDayHighlighted;
  }(),
  // internationalization props
  displayFormat: function () {
    function displayFormat() {
      return _moment["default"].localeData().longDateFormat('L');
    }

    return displayFormat;
  }(),
  monthFormat: 'MMMM YYYY',
  weekDayFormat: 'dd',
  phrases: _defaultPhrases.SingleDatePickerPhrases,
  dayAriaLabelFormat: undefined
};

var SingleDatePicker =
/*#__PURE__*/
function (_ref) {
  _inherits(SingleDatePicker, _ref);

  _createClass(SingleDatePicker, [{
    key: !_react["default"].PureComponent && "shouldComponentUpdate",
    value: function () {
      function value(nextProps, nextState) {
        return (0, _reactAddonsShallowCompare["default"])(this, nextProps, nextState);
      }

      return value;
    }()
  }]);

  function SingleDatePicker(props) {
    var _this;

    _classCallCheck(this, SingleDatePicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SingleDatePicker).call(this, props));
    _this.isTouchDevice = false;
    _this.state = {
      dayPickerContainerStyles: {},
      isDayPickerFocused: false,
      isInputFocused: false,
      showKeyboardShortcuts: false
    };
    _this.onFocusOut = _this.onFocusOut.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onOutsideClick = _this.onOutsideClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onInputFocus = _this.onInputFocus.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onDayPickerFocus = _this.onDayPickerFocus.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onDayPickerBlur = _this.onDayPickerBlur.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.showKeyboardShortcutsPanel = _this.showKeyboardShortcutsPanel.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.responsivizePickerPosition = _this.responsivizePickerPosition.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.disableScroll = _this.disableScroll.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setDayPickerContainerRef = _this.setDayPickerContainerRef.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setContainerRef = _this.setContainerRef.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }
  /* istanbul ignore next */


  _createClass(SingleDatePicker, [{
    key: "componentDidMount",
    value: function () {
      function componentDidMount() {
        this.removeResizeEventListener = (0, _consolidatedEvents.addEventListener)(window, 'resize', this.responsivizePickerPosition, {
          passive: true
        });
        this.responsivizePickerPosition();
        this.disableScroll();
        var focused = this.props.focused;

        if (focused) {
          this.setState({
            isInputFocused: true
          });
        }

        this.isTouchDevice = (0, _isTouchDevice["default"])();
      }

      return componentDidMount;
    }()
  }, {
    key: "componentDidUpdate",
    value: function () {
      function componentDidUpdate(prevProps) {
        var focused = this.props.focused;

        if (!prevProps.focused && focused) {
          this.responsivizePickerPosition();
          this.disableScroll();
        } else if (prevProps.focused && !focused) {
          if (this.enableScroll) this.enableScroll();
        }
      }

      return componentDidUpdate;
    }()
    /* istanbul ignore next */

  }, {
    key: "componentWillUnmount",
    value: function () {
      function componentWillUnmount() {
        if (this.removeResizeEventListener) this.removeResizeEventListener();
        if (this.removeFocusOutEventListener) this.removeFocusOutEventListener();
        if (this.enableScroll) this.enableScroll();
      }

      return componentWillUnmount;
    }()
  }, {
    key: "onOutsideClick",
    value: function () {
      function onOutsideClick(event) {
        var _this$props = this.props,
            focused = _this$props.focused,
            onFocusChange = _this$props.onFocusChange,
            onClose = _this$props.onClose,
            startDate = _this$props.startDate,
            endDate = _this$props.endDate,
            appendToBody = _this$props.appendToBody;
        if (!focused) return;
        if (appendToBody && this.dayPickerContainer.contains(event.target)) return;
        this.setState({
          isInputFocused: false,
          isDayPickerFocused: false,
          showKeyboardShortcuts: false
        });
        onFocusChange({
          focused: false
        });
        onClose({
          startDate: startDate,
          endDate: endDate
        });
      }

      return onOutsideClick;
    }()
  }, {
    key: "onInputFocus",
    value: function () {
      function onInputFocus(_ref2) {
        var focused = _ref2.focused;
        var _this$props2 = this.props,
            onFocusChange = _this$props2.onFocusChange,
            readOnly = _this$props2.readOnly,
            withPortal = _this$props2.withPortal,
            withFullScreenPortal = _this$props2.withFullScreenPortal,
            keepFocusOnInput = _this$props2.keepFocusOnInput;

        if (focused) {
          var withAnyPortal = withPortal || withFullScreenPortal;
          var moveFocusToDayPicker = withAnyPortal || readOnly && !keepFocusOnInput || this.isTouchDevice && !keepFocusOnInput;

          if (moveFocusToDayPicker) {
            this.onDayPickerFocus();
          } else {
            this.onDayPickerBlur();
          }
        }

        onFocusChange({
          focused: focused
        });
      }

      return onInputFocus;
    }()
  }, {
    key: "onDayPickerFocus",
    value: function () {
      function onDayPickerFocus() {
        this.setState({
          isInputFocused: false,
          isDayPickerFocused: true,
          showKeyboardShortcuts: false
        });
      }

      return onDayPickerFocus;
    }()
  }, {
    key: "onDayPickerBlur",
    value: function () {
      function onDayPickerBlur() {
        this.setState({
          isInputFocused: true,
          isDayPickerFocused: false,
          showKeyboardShortcuts: false
        });
      }

      return onDayPickerBlur;
    }()
  }, {
    key: "onFocusOut",
    value: function () {
      function onFocusOut(e) {
        var onFocusChange = this.props.onFocusChange;
        if (this.container.contains(e.relatedTarget || e.target)) return;
        onFocusChange({
          focused: false
        });
      }

      return onFocusOut;
    }()
  }, {
    key: "setDayPickerContainerRef",
    value: function () {
      function setDayPickerContainerRef(ref) {
        this.dayPickerContainer = ref;
      }

      return setDayPickerContainerRef;
    }()
  }, {
    key: "setContainerRef",
    value: function () {
      function setContainerRef(ref) {
        if (ref === this.container) return;
        this.removeEventListeners();
        this.container = ref;
        if (!ref) return;
        this.addEventListeners();
      }

      return setContainerRef;
    }()
  }, {
    key: "addEventListeners",
    value: function () {
      function addEventListeners() {
        // We manually set event because React has not implemented onFocusIn/onFocusOut.
        // Keep an eye on https://github.com/facebook/react/issues/6410 for updates
        // We use "blur w/ useCapture param" vs "onfocusout" for FF browser support
        this.removeFocusOutEventListener = (0, _consolidatedEvents.addEventListener)(this.container, 'focusout', this.onFocusOut);
      }

      return addEventListeners;
    }()
  }, {
    key: "removeEventListeners",
    value: function () {
      function removeEventListeners() {
        if (this.removeFocusOutEventListener) this.removeFocusOutEventListener();
      }

      return removeEventListeners;
    }()
  }, {
    key: "disableScroll",
    value: function () {
      function disableScroll() {
        var _this$props3 = this.props,
            appendToBody = _this$props3.appendToBody,
            propDisableScroll = _this$props3.disableScroll,
            focused = _this$props3.focused;
        if (!appendToBody && !propDisableScroll) return;
        if (!focused) return; // Disable scroll for every ancestor of this <SingleDatePicker> up to the
        // document level. This ensures the input and the picker never move. Other
        // sibling elements or the picker itself can scroll.

        this.enableScroll = (0, _disableScroll2["default"])(this.container);
      }

      return disableScroll;
    }()
    /* istanbul ignore next */

  }, {
    key: "responsivizePickerPosition",
    value: function () {
      function responsivizePickerPosition() {
        // It's possible the portal props have been changed in response to window resizes
        // So let's ensure we reset this back to the base state each time
        this.setState({
          dayPickerContainerStyles: {}
        });
        var _this$props4 = this.props,
            openDirection = _this$props4.openDirection,
            anchorDirection = _this$props4.anchorDirection,
            horizontalMargin = _this$props4.horizontalMargin,
            withPortal = _this$props4.withPortal,
            withFullScreenPortal = _this$props4.withFullScreenPortal,
            appendToBody = _this$props4.appendToBody,
            focused = _this$props4.focused;
        var dayPickerContainerStyles = this.state.dayPickerContainerStyles;

        if (!focused) {
          return;
        }

        var isAnchoredLeft = anchorDirection === _constants.ANCHOR_LEFT;

        if (!withPortal && !withFullScreenPortal) {
          var containerRect = this.dayPickerContainer.getBoundingClientRect();
          var currentOffset = dayPickerContainerStyles[anchorDirection] || 0;
          var containerEdge = isAnchoredLeft ? containerRect[_constants.ANCHOR_RIGHT] : containerRect[_constants.ANCHOR_LEFT];
          this.setState({
            dayPickerContainerStyles: _objectSpread({}, (0, _getResponsiveContainerStyles["default"])(anchorDirection, currentOffset, containerEdge, horizontalMargin), appendToBody && (0, _getDetachedContainerStyles["default"])(openDirection, anchorDirection, this.container))
          });
        }
      }

      return responsivizePickerPosition;
    }()
  }, {
    key: "showKeyboardShortcutsPanel",
    value: function () {
      function showKeyboardShortcutsPanel() {
        this.setState({
          isInputFocused: false,
          isDayPickerFocused: true,
          showKeyboardShortcuts: true
        });
      }

      return showKeyboardShortcutsPanel;
    }()
  }, {
    key: "maybeRenderDayPickerWithPortal",
    value: function () {
      function maybeRenderDayPickerWithPortal() {
        var _this$props5 = this.props,
            focused = _this$props5.focused,
            withPortal = _this$props5.withPortal,
            withFullScreenPortal = _this$props5.withFullScreenPortal,
            appendToBody = _this$props5.appendToBody;

        if (!focused) {
          return null;
        }

        if (withPortal || withFullScreenPortal || appendToBody) {
          return _react["default"].createElement(_reactPortal.Portal, null, this.renderDayPicker());
        }

        return this.renderDayPicker();
      }

      return maybeRenderDayPickerWithPortal;
    }()
  }, {
    key: "renderDayPicker",
    value: function () {
      function renderDayPicker() {
        var _this$props6 = this.props,
            anchorDirection = _this$props6.anchorDirection,
            openDirection = _this$props6.openDirection,
            onDateChange = _this$props6.onDateChange,
            date = _this$props6.date,
            onFocusChange = _this$props6.onFocusChange,
            focused = _this$props6.focused,
            enableOutsideDays = _this$props6.enableOutsideDays,
            numberOfMonths = _this$props6.numberOfMonths,
            orientation = _this$props6.orientation,
            monthFormat = _this$props6.monthFormat,
            navPrev = _this$props6.navPrev,
            navNext = _this$props6.navNext,
            onPrevMonthClick = _this$props6.onPrevMonthClick,
            onNextMonthClick = _this$props6.onNextMonthClick,
            onClose = _this$props6.onClose,
            withPortal = _this$props6.withPortal,
            withFullScreenPortal = _this$props6.withFullScreenPortal,
            keepOpenOnDateSelect = _this$props6.keepOpenOnDateSelect,
            initialVisibleMonth = _this$props6.initialVisibleMonth,
            renderMonthText = _this$props6.renderMonthText,
            renderCalendarDay = _this$props6.renderCalendarDay,
            renderDayContents = _this$props6.renderDayContents,
            renderCalendarInfo = _this$props6.renderCalendarInfo,
            renderMonthElement = _this$props6.renderMonthElement,
            calendarInfoPosition = _this$props6.calendarInfoPosition,
            hideKeyboardShortcutsPanel = _this$props6.hideKeyboardShortcutsPanel,
            firstDayOfWeek = _this$props6.firstDayOfWeek,
            customCloseIcon = _this$props6.customCloseIcon,
            phrases = _this$props6.phrases,
            dayAriaLabelFormat = _this$props6.dayAriaLabelFormat,
            daySize = _this$props6.daySize,
            isRTL = _this$props6.isRTL,
            isOutsideRange = _this$props6.isOutsideRange,
            isDayBlocked = _this$props6.isDayBlocked,
            isDayHighlighted = _this$props6.isDayHighlighted,
            weekDayFormat = _this$props6.weekDayFormat,
            styles = _this$props6.styles,
            verticalHeight = _this$props6.verticalHeight,
            transitionDuration = _this$props6.transitionDuration,
            verticalSpacing = _this$props6.verticalSpacing,
            horizontalMonthPadding = _this$props6.horizontalMonthPadding,
            small = _this$props6.small,
            reactDates = _this$props6.theme.reactDates;
        var _this$state = this.state,
            dayPickerContainerStyles = _this$state.dayPickerContainerStyles,
            isDayPickerFocused = _this$state.isDayPickerFocused,
            showKeyboardShortcuts = _this$state.showKeyboardShortcuts;
        var onOutsideClick = !withFullScreenPortal && withPortal ? this.onOutsideClick : undefined;

        var closeIcon = customCloseIcon || _react["default"].createElement(_CloseButton["default"], null);

        var inputHeight = (0, _getInputHeight["default"])(reactDates, small);
        var withAnyPortal = withPortal || withFullScreenPortal;
        return _react["default"].createElement("div", _extends({
          // eslint-disable-line jsx-a11y/no-static-element-interactions
          ref: this.setDayPickerContainerRef
        }, (0, _reactWithStyles.css)(styles.SingleDatePicker_picker, anchorDirection === _constants.ANCHOR_LEFT && styles.SingleDatePicker_picker__directionLeft, anchorDirection === _constants.ANCHOR_RIGHT && styles.SingleDatePicker_picker__directionRight, openDirection === _constants.OPEN_DOWN && styles.SingleDatePicker_picker__openDown, openDirection === _constants.OPEN_UP && styles.SingleDatePicker_picker__openUp, !withAnyPortal && openDirection === _constants.OPEN_DOWN && {
          top: inputHeight + verticalSpacing
        }, !withAnyPortal && openDirection === _constants.OPEN_UP && {
          bottom: inputHeight + verticalSpacing
        }, orientation === _constants.HORIZONTAL_ORIENTATION && styles.SingleDatePicker_picker__horizontal, orientation === _constants.VERTICAL_ORIENTATION && styles.SingleDatePicker_picker__vertical, withAnyPortal && styles.SingleDatePicker_picker__portal, withFullScreenPortal && styles.SingleDatePicker_picker__fullScreenPortal, isRTL && styles.SingleDatePicker_picker__rtl, dayPickerContainerStyles), {
          onClick: onOutsideClick
        }), _react["default"].createElement(_DayPickerSingleDateController["default"], {
          date: date,
          onDateChange: onDateChange,
          onFocusChange: onFocusChange,
          orientation: orientation,
          enableOutsideDays: enableOutsideDays,
          numberOfMonths: numberOfMonths,
          monthFormat: monthFormat,
          withPortal: withAnyPortal,
          focused: focused,
          keepOpenOnDateSelect: keepOpenOnDateSelect,
          hideKeyboardShortcutsPanel: hideKeyboardShortcutsPanel,
          initialVisibleMonth: initialVisibleMonth,
          navPrev: navPrev,
          navNext: navNext,
          onPrevMonthClick: onPrevMonthClick,
          onNextMonthClick: onNextMonthClick,
          onClose: onClose,
          renderMonthText: renderMonthText,
          renderCalendarDay: renderCalendarDay,
          renderDayContents: renderDayContents,
          renderCalendarInfo: renderCalendarInfo,
          renderMonthElement: renderMonthElement,
          calendarInfoPosition: calendarInfoPosition,
          isFocused: isDayPickerFocused,
          showKeyboardShortcuts: showKeyboardShortcuts,
          onBlur: this.onDayPickerBlur,
          phrases: phrases,
          dayAriaLabelFormat: dayAriaLabelFormat,
          daySize: daySize,
          isRTL: isRTL,
          isOutsideRange: isOutsideRange,
          isDayBlocked: isDayBlocked,
          isDayHighlighted: isDayHighlighted,
          firstDayOfWeek: firstDayOfWeek,
          weekDayFormat: weekDayFormat,
          verticalHeight: verticalHeight,
          transitionDuration: transitionDuration,
          horizontalMonthPadding: horizontalMonthPadding
        }), withFullScreenPortal && _react["default"].createElement("button", _extends({}, (0, _reactWithStyles.css)(styles.SingleDatePicker_closeButton), {
          "aria-label": phrases.closeDatePicker,
          type: "button",
          onClick: this.onOutsideClick
        }), _react["default"].createElement("div", (0, _reactWithStyles.css)(styles.SingleDatePicker_closeButton_svg), closeIcon)));
      }

      return renderDayPicker;
    }()
  }, {
    key: "render",
    value: function () {
      function render() {
        var _this$props7 = this.props,
            id = _this$props7.id,
            placeholder = _this$props7.placeholder,
            disabled = _this$props7.disabled,
            focused = _this$props7.focused,
            required = _this$props7.required,
            readOnly = _this$props7.readOnly,
            openDirection = _this$props7.openDirection,
            showClearDate = _this$props7.showClearDate,
            showDefaultInputIcon = _this$props7.showDefaultInputIcon,
            inputIconPosition = _this$props7.inputIconPosition,
            customCloseIcon = _this$props7.customCloseIcon,
            customInputIcon = _this$props7.customInputIcon,
            date = _this$props7.date,
            onDateChange = _this$props7.onDateChange,
            displayFormat = _this$props7.displayFormat,
            phrases = _this$props7.phrases,
            withPortal = _this$props7.withPortal,
            withFullScreenPortal = _this$props7.withFullScreenPortal,
            screenReaderInputMessage = _this$props7.screenReaderInputMessage,
            isRTL = _this$props7.isRTL,
            noBorder = _this$props7.noBorder,
            block = _this$props7.block,
            small = _this$props7.small,
            regular = _this$props7.regular,
            verticalSpacing = _this$props7.verticalSpacing,
            reopenPickerOnClearDate = _this$props7.reopenPickerOnClearDate,
            keepOpenOnDateSelect = _this$props7.keepOpenOnDateSelect,
            styles = _this$props7.styles,
            isOutsideRange = _this$props7.isOutsideRange;
        var isInputFocused = this.state.isInputFocused;
        var enableOutsideClick = !withPortal && !withFullScreenPortal;
        var hideFang = verticalSpacing < _constants.FANG_HEIGHT_PX;

        var input = _react["default"].createElement(_SingleDatePickerInputController["default"], {
          id: id,
          placeholder: placeholder,
          focused: focused,
          isFocused: isInputFocused,
          disabled: disabled,
          required: required,
          readOnly: readOnly,
          openDirection: openDirection,
          showCaret: !withPortal && !withFullScreenPortal && !hideFang,
          showClearDate: showClearDate,
          showDefaultInputIcon: showDefaultInputIcon,
          inputIconPosition: inputIconPosition,
          isOutsideRange: isOutsideRange,
          customCloseIcon: customCloseIcon,
          customInputIcon: customInputIcon,
          date: date,
          onDateChange: onDateChange,
          displayFormat: displayFormat,
          onFocusChange: this.onInputFocus,
          onKeyDownArrowDown: this.onDayPickerFocus,
          onKeyDownQuestionMark: this.showKeyboardShortcutsPanel,
          screenReaderMessage: screenReaderInputMessage,
          phrases: phrases,
          isRTL: isRTL,
          noBorder: noBorder,
          block: block,
          small: small,
          regular: regular,
          verticalSpacing: verticalSpacing,
          reopenPickerOnClearDate: reopenPickerOnClearDate,
          keepOpenOnDateSelect: keepOpenOnDateSelect
        }, this.maybeRenderDayPickerWithPortal());

        return _react["default"].createElement("div", _extends({
          ref: this.setContainerRef
        }, (0, _reactWithStyles.css)(styles.SingleDatePicker, block && styles.SingleDatePicker__block)), enableOutsideClick && _react["default"].createElement(_reactOutsideClickHandler["default"], {
          onOutsideClick: this.onOutsideClick
        }, input), enableOutsideClick || input);
      }

      return render;
    }()
  }]);

  return SingleDatePicker;
}(_react["default"].PureComponent || _react["default"].Component);

exports.PureSingleDatePicker = SingleDatePicker;
SingleDatePicker.propTypes =  false ? undefined : {};
SingleDatePicker.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref3) {
  var _ref3$reactDates = _ref3.reactDates,
      color = _ref3$reactDates.color,
      zIndex = _ref3$reactDates.zIndex;
  return {
    SingleDatePicker: {
      position: 'relative',
      display: 'inline-block'
    },
    SingleDatePicker__block: {
      display: 'block'
    },
    SingleDatePicker_picker: {
      zIndex: zIndex + 1,
      backgroundColor: color.background,
      position: 'absolute'
    },
    SingleDatePicker_picker__rtl: {
      direction: (0, _noflip["default"])('rtl')
    },
    SingleDatePicker_picker__directionLeft: {
      left: (0, _noflip["default"])(0)
    },
    SingleDatePicker_picker__directionRight: {
      right: (0, _noflip["default"])(0)
    },
    SingleDatePicker_picker__portal: {
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      position: 'fixed',
      top: 0,
      left: (0, _noflip["default"])(0),
      height: '100%',
      width: '100%'
    },
    SingleDatePicker_picker__fullScreenPortal: {
      backgroundColor: color.background
    },
    SingleDatePicker_closeButton: {
      background: 'none',
      border: 0,
      color: 'inherit',
      font: 'inherit',
      lineHeight: 'normal',
      overflow: 'visible',
      cursor: 'pointer',
      position: 'absolute',
      top: 0,
      right: (0, _noflip["default"])(0),
      padding: 15,
      zIndex: zIndex + 2,
      ':hover': {
        color: "darken(".concat(color.core.grayLighter, ", 10%)"),
        textDecoration: 'none'
      },
      ':focus': {
        color: "darken(".concat(color.core.grayLighter, ", 10%)"),
        textDecoration: 'none'
      }
    },
    SingleDatePicker_closeButton_svg: {
      height: 15,
      width: 15,
      fill: color.core.grayLighter
    }
  };
}, {
  pureComponent: typeof _react["default"].PureComponent !== 'undefined'
})(SingleDatePicker);

exports["default"] = _default;

/***/ }),

/***/ 3071:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactAddonsShallowCompare = _interopRequireDefault(__webpack_require__(944));

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(0));

var _moment = _interopRequireDefault(__webpack_require__(2));

var _reactMomentProptypes = _interopRequireDefault(__webpack_require__(2837));

var _airbnbPropTypes = __webpack_require__(2820);

var _OpenDirectionShape = _interopRequireDefault(__webpack_require__(2844));

var _defaultPhrases = __webpack_require__(2821);

var _getPhrasePropTypes = _interopRequireDefault(__webpack_require__(2823));

var _SingleDatePickerInput = _interopRequireDefault(__webpack_require__(2963));

var _IconPositionShape = _interopRequireDefault(__webpack_require__(2853));

var _DisabledShape = _interopRequireDefault(__webpack_require__(2863));

var _toMomentObject = _interopRequireDefault(__webpack_require__(2850));

var _toLocalizedDateString = _interopRequireDefault(__webpack_require__(2893));

var _isInclusivelyAfterDay = _interopRequireDefault(__webpack_require__(2854));

var _constants = __webpack_require__(2818);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function () { function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); } return _getPrototypeOf; }(); return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function () { function _setPrototypeOf(o, p) { o.__proto__ = p; return o; } return _setPrototypeOf; }(); return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var propTypes =  false ? undefined : {};
var defaultProps = {
  children: null,
  date: null,
  focused: false,
  placeholder: '',
  screenReaderMessage: 'Date',
  showClearDate: false,
  showCaret: false,
  showDefaultInputIcon: false,
  inputIconPosition: _constants.ICON_BEFORE_POSITION,
  disabled: false,
  required: false,
  readOnly: false,
  openDirection: _constants.OPEN_DOWN,
  noBorder: false,
  block: false,
  small: false,
  regular: false,
  verticalSpacing: undefined,
  keepOpenOnDateSelect: false,
  reopenPickerOnClearDate: false,
  isOutsideRange: function () {
    function isOutsideRange(day) {
      return !(0, _isInclusivelyAfterDay["default"])(day, (0, _moment["default"])());
    }

    return isOutsideRange;
  }(),
  displayFormat: function () {
    function displayFormat() {
      return _moment["default"].localeData().longDateFormat('L');
    }

    return displayFormat;
  }(),
  onClose: function () {
    function onClose() {}

    return onClose;
  }(),
  onKeyDownArrowDown: function () {
    function onKeyDownArrowDown() {}

    return onKeyDownArrowDown;
  }(),
  onKeyDownQuestionMark: function () {
    function onKeyDownQuestionMark() {}

    return onKeyDownQuestionMark;
  }(),
  customInputIcon: null,
  customCloseIcon: null,
  // accessibility
  isFocused: false,
  // i18n
  phrases: _defaultPhrases.SingleDatePickerInputPhrases,
  isRTL: false
};

var SingleDatePickerInputController =
/*#__PURE__*/
function (_ref) {
  _inherits(SingleDatePickerInputController, _ref);

  _createClass(SingleDatePickerInputController, [{
    key: !_react["default"].PureComponent && "shouldComponentUpdate",
    value: function () {
      function value(nextProps, nextState) {
        return (0, _reactAddonsShallowCompare["default"])(this, nextProps, nextState);
      }

      return value;
    }()
  }]);

  function SingleDatePickerInputController(props) {
    var _this;

    _classCallCheck(this, SingleDatePickerInputController);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SingleDatePickerInputController).call(this, props));
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onClearFocus = _this.onClearFocus.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.clearDate = _this.clearDate.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(SingleDatePickerInputController, [{
    key: "onChange",
    value: function () {
      function onChange(dateString) {
        var _this$props = this.props,
            isOutsideRange = _this$props.isOutsideRange,
            keepOpenOnDateSelect = _this$props.keepOpenOnDateSelect,
            onDateChange = _this$props.onDateChange,
            onFocusChange = _this$props.onFocusChange,
            onClose = _this$props.onClose;
        var newDate = (0, _toMomentObject["default"])(dateString, this.getDisplayFormat());
        var isValid = newDate && !isOutsideRange(newDate);

        if (isValid) {
          onDateChange(newDate);

          if (!keepOpenOnDateSelect) {
            onFocusChange({
              focused: false
            });
            onClose({
              date: newDate
            });
          }
        } else {
          onDateChange(null);
        }
      }

      return onChange;
    }()
  }, {
    key: "onFocus",
    value: function () {
      function onFocus() {
        var _this$props2 = this.props,
            onFocusChange = _this$props2.onFocusChange,
            disabled = _this$props2.disabled;

        if (!disabled) {
          onFocusChange({
            focused: true
          });
        }
      }

      return onFocus;
    }()
  }, {
    key: "onClearFocus",
    value: function () {
      function onClearFocus() {
        var _this$props3 = this.props,
            focused = _this$props3.focused,
            onFocusChange = _this$props3.onFocusChange,
            onClose = _this$props3.onClose,
            date = _this$props3.date;
        if (!focused) return;
        onFocusChange({
          focused: false
        });
        onClose({
          date: date
        });
      }

      return onClearFocus;
    }()
  }, {
    key: "getDisplayFormat",
    value: function () {
      function getDisplayFormat() {
        var displayFormat = this.props.displayFormat;
        return typeof displayFormat === 'string' ? displayFormat : displayFormat();
      }

      return getDisplayFormat;
    }()
  }, {
    key: "getDateString",
    value: function () {
      function getDateString(date) {
        var displayFormat = this.getDisplayFormat();

        if (date && displayFormat) {
          return date && date.format(displayFormat);
        }

        return (0, _toLocalizedDateString["default"])(date);
      }

      return getDateString;
    }()
  }, {
    key: "clearDate",
    value: function () {
      function clearDate() {
        var _this$props4 = this.props,
            onDateChange = _this$props4.onDateChange,
            reopenPickerOnClearDate = _this$props4.reopenPickerOnClearDate,
            onFocusChange = _this$props4.onFocusChange;
        onDateChange(null);

        if (reopenPickerOnClearDate) {
          onFocusChange({
            focused: true
          });
        }
      }

      return clearDate;
    }()
  }, {
    key: "render",
    value: function () {
      function render() {
        var _this$props5 = this.props,
            children = _this$props5.children,
            id = _this$props5.id,
            placeholder = _this$props5.placeholder,
            disabled = _this$props5.disabled,
            focused = _this$props5.focused,
            isFocused = _this$props5.isFocused,
            required = _this$props5.required,
            readOnly = _this$props5.readOnly,
            openDirection = _this$props5.openDirection,
            showClearDate = _this$props5.showClearDate,
            showCaret = _this$props5.showCaret,
            showDefaultInputIcon = _this$props5.showDefaultInputIcon,
            inputIconPosition = _this$props5.inputIconPosition,
            customCloseIcon = _this$props5.customCloseIcon,
            customInputIcon = _this$props5.customInputIcon,
            date = _this$props5.date,
            phrases = _this$props5.phrases,
            onKeyDownArrowDown = _this$props5.onKeyDownArrowDown,
            onKeyDownQuestionMark = _this$props5.onKeyDownQuestionMark,
            screenReaderMessage = _this$props5.screenReaderMessage,
            isRTL = _this$props5.isRTL,
            noBorder = _this$props5.noBorder,
            block = _this$props5.block,
            small = _this$props5.small,
            regular = _this$props5.regular,
            verticalSpacing = _this$props5.verticalSpacing;
        var displayValue = this.getDateString(date);
        return _react["default"].createElement(_SingleDatePickerInput["default"], {
          id: id,
          placeholder: placeholder,
          focused: focused,
          isFocused: isFocused,
          disabled: disabled,
          required: required,
          readOnly: readOnly,
          openDirection: openDirection,
          showCaret: showCaret,
          onClearDate: this.clearDate,
          showClearDate: showClearDate,
          showDefaultInputIcon: showDefaultInputIcon,
          inputIconPosition: inputIconPosition,
          customCloseIcon: customCloseIcon,
          customInputIcon: customInputIcon,
          displayValue: displayValue,
          onChange: this.onChange,
          onFocus: this.onFocus,
          onKeyDownShiftTab: this.onClearFocus,
          onKeyDownArrowDown: onKeyDownArrowDown,
          onKeyDownQuestionMark: onKeyDownQuestionMark,
          screenReaderMessage: screenReaderMessage,
          phrases: phrases,
          isRTL: isRTL,
          noBorder: noBorder,
          block: block,
          small: small,
          regular: regular,
          verticalSpacing: verticalSpacing
        }, children);
      }

      return render;
    }()
  }]);

  return SingleDatePickerInputController;
}(_react["default"].PureComponent || _react["default"].Component);

exports["default"] = SingleDatePickerInputController;
SingleDatePickerInputController.propTypes =  false ? undefined : {};
SingleDatePickerInputController.defaultProps = defaultProps;

/***/ }),

/***/ 3072:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isInclusivelyBeforeDay;

var _moment = _interopRequireDefault(__webpack_require__(2));

var _isAfterDay = _interopRequireDefault(__webpack_require__(2877));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function isInclusivelyBeforeDay(a, b) {
  if (!_moment["default"].isMoment(a) || !_moment["default"].isMoment(b)) return false;
  return !(0, _isAfterDay["default"])(a, b);
}

/***/ }),

/***/ 3073:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(4);

var _lodash2 = _interopRequireDefault(_lodash);

var _challengeDetails = __webpack_require__(951);

var _challengeDetails2 = _interopRequireDefault(_challengeDetails);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _lodash2.default.merge({}, _challengeDetails2.default);

/***/ }),

/***/ 3083:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tracking = undefined;

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _topcoderReactLib = __webpack_require__(25);

var _page = __webpack_require__(3073);

var _page2 = _interopRequireDefault(_page);

var _tracking = __webpack_require__(3121);

var tracking = _interopRequireWildcard(_tracking);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.tracking = tracking; /**
                              * This module combines all available actions into a single object, which is
                              * more convenient for use inside containers that need access to different
                              * groups of actions.
                              */

exports.default = (0, _extends3.default)({}, _page2.default, {
  memberTasks: _topcoderReactLib.actions.memberTasks,
  direct: _topcoderReactLib.actions.direct
});

/***/ }),

/***/ 3119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(105);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _lodash = __webpack_require__(4);

var _lodash2 = _interopRequireDefault(_lodash);

var _topcoder_header = __webpack_require__(946);

var _topcoder_header2 = _interopRequireDefault(_topcoder_header);

var _topcoderReactLib = __webpack_require__(25);

var _Header = __webpack_require__(3120);

var _Header2 = _interopRequireDefault(_Header);

var _reactRedux = __webpack_require__(36);

var _redux = __webpack_require__(68);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Container for the standard Topcoder header.
 */
/* global location */
/* eslint-disable no-restricted-globals */

function mapDispatchToProps(dispatch) {
  return (0, _extends3.default)({}, (0, _redux.bindActionCreators)(_topcoder_header2.default.topcoderHeader, dispatch), {
    loadNotifications: function loadNotifications(tokenV3) {
      dispatch(_topcoderReactLib.actions.notifications.getNotificationsInit());
      dispatch(_topcoderReactLib.actions.notifications.getNotificationsDone(tokenV3));
    },
    markNotificationAsRead: function markNotificationAsRead(item, tokenV3) {
      dispatch(_topcoderReactLib.actions.notifications.markNotificationAsReadInit());
      dispatch(_topcoderReactLib.actions.notifications.markNotificationAsReadDone(item, tokenV3));
    },
    markAllNotificationAsRead: function markAllNotificationAsRead(tokenV3) {
      dispatch(_topcoderReactLib.actions.notifications.markAllNotificationAsReadInit());
      dispatch(_topcoderReactLib.actions.notifications.markAllNotificationAsReadDone(tokenV3));
    },
    markAllNotificationAsSeen: function markAllNotificationAsSeen(items, tokenV3) {
      dispatch(_topcoderReactLib.actions.notifications.markAllNotificationAsSeenInit());
      dispatch(_topcoderReactLib.actions.notifications.markAllNotificationAsSeenDone(items, tokenV3));
    },
    dismissChallengeNotifications: function dismissChallengeNotifications(challegeId, tokenV3) {
      dispatch(_topcoderReactLib.actions.notifications.dismissChallengeNotificationsInit());
      dispatch(_topcoderReactLib.actions.notifications.dismissChallengeNotificationsDone(challegeId, tokenV3));
    }
  });
}

function mapStateToProps(state, ownProps) {
  return (0, _extends3.default)({}, state.topcoderHeader, {
    profile: (0, _extends3.default)({}, state.auth.profile, _lodash2.default.pickBy({ roles: state.auth.user ? state.auth.user.roles : undefined })),
    notifications: state.notifications && state.notifications.items && [].concat((0, _toConsumableArray3.default)(state.notifications.items)) || [],
    auth: (0, _extends3.default)({}, state.auth),
    headerMenu: ownProps.headerMenu
  });
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Header2.default);

/***/ }),

/***/ 3120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = __webpack_require__(77);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _lodash = __webpack_require__(4);

var _lodash2 = _interopRequireDefault(_lodash);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _topcoderReactUtils = __webpack_require__(7);

var _actions = __webpack_require__(3083);

__webpack_require__(3122);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Logo = function Logo(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        fill: '#FFF',
        fillRule: 'evenodd'
      },
      _react2.default.createElement('path', {
        d: 'M45.903 14.578a97.989 97.989 0 0 1 2.206 5.403c.686-.137 1.304-.525 1.856-1.221 3.135-3.964 4.586-7.572 3.844-9.785-.937-2.794-5.513-3.501-12.244-2.278 1.368 1.763 2.835 4.5 4.338 7.88zM28.163 9.764c3.294-1.5 7.466-2.885 11.395-3.75C35.856 1.972 31.664 0 27.01 0 22.8 0 18.278 2.2 14.5 6.023c3.917.866 8.072 2.246 11.355 3.741.33.15.696.314 1.154.516a104.8 104.8 0 0 0 1.153-.516zM12.451 6.7C5.713 5.472 1.128 6.177.191 8.974c-.742 2.213.71 5.821 3.844 9.785.58.732 1.234 1.124 1.962 1.24.338-3.305 3.38-9.57 6.454-13.3zM28.776 10.604l-.082.036c1.354.31 2.681.756 4.046 1.348 2.851 1.237 3.382 1.562 11.629 6.887.464.3.833.51 1.323.722.434.187.86.32 1.27.388a95.906 95.906 0 0 0-.642-1.648 87.545 87.545 0 0 0-2.316-5.31c-1.035-2.158-2.04-3.953-2.98-5.259a13.004 13.004 0 0 0-.662-.85c-2.664.442-8.17 2.185-11.586 3.686z'
      }),
      _react2.default.createElement('path', {
        d: 'M7.08 19.981c.81-.138 1.776-.539 2.747-1.103a51.62 51.62 0 0 0 2.372-1.482c.548-.36 2.593-1.727 2.447-1.63 4.361-2.902 7.317-4.46 10.525-5.147-3.576-1.554-8.545-3.188-11.506-3.691-3.036 3.46-6.207 9.852-6.586 13.053z'
      })
    )
  );
};

Logo.defaultProps = {
  width: '54',
  height: '20',
  viewBox: '0 0 54 20',
  xmlns: 'http://www.w3.org/2000/svg'
};


var TopNavRef = void 0;
var LoginNavRef = void 0;

try {
  // eslint-disable-next-line global-require
  var _require = __webpack_require__(967),
      TopNav = _require.TopNav,
      LoginNav = _require.LoginNav;

  TopNavRef = TopNav;
  LoginNavRef = LoginNav;
} catch (e) {
  // window is undefined
}

var Header = function Header(_ref) {
  var profile = _ref.profile,
      auth = _ref.auth,
      notifications = _ref.notifications,
      loadNotifications = _ref.loadNotifications,
      markNotificationAsRead = _ref.markNotificationAsRead,
      markAllNotificationAsRead = _ref.markAllNotificationAsRead,
      markAllNotificationAsSeen = _ref.markAllNotificationAsSeen,
      dismissChallengeNotifications = _ref.dismissChallengeNotifications,
      headerMenu = _ref.headerMenu;

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray3.default)(_useState, 2),
      activeLevel1Id = _useState2[0],
      setActiveLevel1Id = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = (0, _slicedToArray3.default)(_useState3, 2),
      path = _useState4[0],
      setPath = _useState4[1];

  var _useState5 = (0, _react.useState)(true),
      _useState6 = (0, _slicedToArray3.default)(_useState5, 2),
      openMore = _useState6[0],
      setOpenMore = _useState6[1];

  var handleChangeLevel1Id = function handleChangeLevel1Id(menuId) {
    setActiveLevel1Id(menuId);
  };

  var handleCloseOpenMore = function handleCloseOpenMore() {
    setOpenMore(false);
  };

  var handleChangeOpenMore = function handleChangeOpenMore(changedOpenMore) {
    setOpenMore(changedOpenMore);
  };

  var handleSwitchMenu = function handleSwitchMenu() {
    setActiveLevel1Id(_topcoderReactUtils.config.HEADER_MENU[0].id);
  };

  var normalizedProfile = profile && _lodash2.default.clone(profile);
  if (profile) {
    normalizedProfile.photoURL = _lodash2.default.has(profile, 'photoURL') && profile.photoURL !== null ? _topcoderReactUtils.config.CDN.PUBLIC + '/avatar/' + encodeURIComponent(profile.photoURL) + '?size=32' : '';
  } else {
    normalizedProfile = null;
  }

  (0, _react.useEffect)(function () {
    setPath(window.location.pathname + window.location.search);
  }, []);

  /*
  * Load Notifications and Init Google Analytics
  */
  (0, _react.useEffect)(function () {
    if (auth) {
      if (auth.tokenV3) {
        loadNotifications(auth.tokenV3);
      }
      if (auth.user) {
        _actions.tracking.init(auth.user.handle);
      }
    }
  }, []);

  if (TopNavRef) {
    return _react2.default.createElement(
      'div',
      { className: '_3oH9Jh' },
      _react2.default.createElement(TopNavRef, {
        menu: headerMenu || _topcoderReactUtils.config.HEADER_MENU,
        rightMenu: _react2.default.createElement(LoginNavRef, {
          loggedIn: !_lodash2.default.isEmpty(profile),
          notificationButtonState: 'new',
          notifications: notifications || [],
          loadNotifications: loadNotifications,
          markNotificationAsRead: markNotificationAsRead,
          markAllNotificationAsRead: markAllNotificationAsRead,
          markAllNotificationAsSeen: markAllNotificationAsSeen,
          dismissChallengeNotifications: dismissChallengeNotifications,
          accountMenu: _topcoderReactUtils.config.ACCOUNT_MENU,
          switchText: _topcoderReactUtils.config.ACCOUNT_MENU_SWITCH_TEXT,
          onSwitch: handleSwitchMenu,
          onMenuOpen: handleCloseOpenMore,
          showNotification: true,
          auth: auth,
          profile: normalizedProfile,
          authURLs: _topcoderReactUtils.config.HEADER_AUTH_URLS,
          tracking: _actions.tracking
        }),
        logo: _react2.default.createElement(Logo, null),
        theme: _topcoderReactUtils.config.HEADER_MENU_THEME,
        currentLevel1Id: activeLevel1Id,
        onChangeLevel1Id: handleChangeLevel1Id,
        path: path,
        openMore: openMore,
        setOpenMore: handleChangeOpenMore,
        loggedIn: !_lodash2.default.isEmpty(profile),
        profileHandle: profile ? profile.handle : '',
        tracking: _actions.tracking
      })
    );
  }

  return _react2.default.createElement('div', null);
};

Header.defaultProps = {
  profile: null,
  auth: null,
  headerMenu: null
};

Header.propTypes = {
  profile: _propTypes2.default.shape({
    photoURL: _propTypes2.default.string,
    handle: _propTypes2.default.string
  }),
  auth: _propTypes2.default.shape(),
  notifications: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  loadNotifications: _propTypes2.default.func.isRequired,
  markNotificationAsRead: _propTypes2.default.func.isRequired,
  markAllNotificationAsRead: _propTypes2.default.func.isRequired,
  markAllNotificationAsSeen: _propTypes2.default.func.isRequired,
  dismissChallengeNotifications: _propTypes2.default.func.isRequired,
  headerMenu: _propTypes2.default.arrayOf(_propTypes2.default.object)
};

exports.default = Header;

/***/ }),

/***/ 3121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.event = exports.pageView = exports.init = undefined;

var _reactGa = __webpack_require__(3154);

var _reactGa2 = _interopRequireDefault(_reactGa);

var _topcoderReactUtils = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global window */

var TRACKING_NAME = 'tracking';

/**
 * init - Init Google Analytics tracking
 * @param {string} userId
 */
var init = exports.init = function init(userId) {
  _reactGa2.default.initialize([{
    trackingId: _topcoderReactUtils.config.GOOGLE_ANALYTICS_ID,
    gaOptions: {
      name: TRACKING_NAME,
      userId: userId
    }
  }], {
    alwaysSendToDefaultTracker: false
  });
};

/**
 * pageView - Track page view
 */
var pageView = exports.pageView = function pageView() {
  _reactGa2.default.pageview(window.location.pathname + window.location.search, [TRACKING_NAME]);
};

/**
 * event - Add custom tracking event.
 * @param {string} category
 * @param {string} action
 * @param {string} label
 */
var event = exports.event = function event(category, action, label) {
  _reactGa2.default.event({
    category: category,
    action: action,
    label: label
  }, [TRACKING_NAME]);
};

exports.default = undefined;

/***/ }),

/***/ 3122:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"nav-header-wrapper":"_3oH9Jh"};

/***/ }),

/***/ 3154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var core_namespaceObject = {};
__webpack_require__.r(core_namespaceObject);
__webpack_require__.d(core_namespaceObject, "initialize", function() { return initialize; });
__webpack_require__.d(core_namespaceObject, "ga", function() { return ga; });
__webpack_require__.d(core_namespaceObject, "set", function() { return set; });
__webpack_require__.d(core_namespaceObject, "send", function() { return send; });
__webpack_require__.d(core_namespaceObject, "pageview", function() { return pageview; });
__webpack_require__.d(core_namespaceObject, "modalview", function() { return modalview; });
__webpack_require__.d(core_namespaceObject, "timing", function() { return timing; });
__webpack_require__.d(core_namespaceObject, "event", function() { return core_event; });
__webpack_require__.d(core_namespaceObject, "exception", function() { return exception; });
__webpack_require__.d(core_namespaceObject, "plugin", function() { return core_plugin; });
__webpack_require__.d(core_namespaceObject, "outboundLink", function() { return outboundLink; });
__webpack_require__.d(core_namespaceObject, "testModeAPI", function() { return core_testModeAPI; });
__webpack_require__.d(core_namespaceObject, "default", function() { return core; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(0);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./node_modules/react-ga/dist/esm/utils/console/warn.js
function warn(s) {
  console.warn('[react-ga]', s);
}
// CONCATENATED MODULE: ./node_modules/react-ga/dist/esm/components/OutboundLink.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var NEWTAB = '_blank';
var MIDDLECLICK = 1;

var OutboundLink_OutboundLink =
/*#__PURE__*/
function (_Component) {
  _inherits(OutboundLink, _Component);

  function OutboundLink() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, OutboundLink);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(OutboundLink)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (event) {
      var _this$props = _this.props,
          target = _this$props.target,
          eventLabel = _this$props.eventLabel,
          to = _this$props.to,
          onClick = _this$props.onClick,
          trackerNames = _this$props.trackerNames;
      var eventMeta = {
        label: eventLabel
      };
      var sameTarget = target !== NEWTAB;
      var normalClick = !(event.ctrlKey || event.shiftKey || event.metaKey || event.button === MIDDLECLICK);

      if (sameTarget && normalClick) {
        event.preventDefault();
        OutboundLink.trackLink(eventMeta, function () {
          window.location.href = to;
        }, trackerNames);
      } else {
        OutboundLink.trackLink(eventMeta, function () {}, trackerNames);
      }

      if (onClick) {
        onClick(event);
      }
    });

    return _this;
  }

  _createClass(OutboundLink, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          href = _this$props2.to,
          oldProps = _objectWithoutProperties(_this$props2, ["to"]);

      var props = _objectSpread({}, oldProps, {
        href: href,
        onClick: this.handleClick
      });

      if (this.props.target === NEWTAB) {
        props.rel = 'noopener noreferrer';
      }

      delete props.eventLabel;
      delete props.trackerNames;
      return react_default.a.createElement('a', props);
    }
  }]);

  return OutboundLink;
}(react["Component"]);

_defineProperty(OutboundLink_OutboundLink, "trackLink", function () {
  warn('ga tracking not enabled');
});

_defineProperty(OutboundLink_OutboundLink, "propTypes", {
  eventLabel: prop_types_default.a.string.isRequired,
  target: prop_types_default.a.string,
  to: prop_types_default.a.string,
  onClick: prop_types_default.a.func,
  trackerNames: prop_types_default.a.arrayOf(prop_types_default.a.string)
});

_defineProperty(OutboundLink_OutboundLink, "defaultProps", {
  target: null,
  to: null,
  onClick: null,
  trackerNames: null
});


// CONCATENATED MODULE: ./node_modules/react-ga/dist/esm/utils/mightBeEmail.js
// See if s could be an email address. We don't want to send personal data like email.
// https://support.google.com/analytics/answer/2795983?hl=en
function mightBeEmail(s) {
  // There's no point trying to validate rfc822 fully, just look for ...@...
  return typeof s === 'string' && s.indexOf('@') !== -1;
}
// CONCATENATED MODULE: ./node_modules/react-ga/dist/esm/utils/trim.js
// GA strings need to have leading/trailing whitespace trimmed, and not all
// browsers have String.prototoype.trim().
function trim(s) {
  return s.replace(/^\s+|\s+$/g, '');
}
// CONCATENATED MODULE: ./node_modules/react-ga/dist/esm/utils/toTitleCase.js
/**
 * To Title Case 2.1 - http://individed.com/code/to-title-case/
 * Copyright 2008-2013 David Gouch. Licensed under the MIT License.
 * https://github.com/gouch/to-title-case
 */

var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;
function toTitleCase(string) {
  return trim(string).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function (match, index, title) {
    if (index > 0 && index + match.length !== title.length && match.search(smallWords) > -1 && title.charAt(index - 2) !== ':' && (title.charAt(index + match.length) !== '-' || title.charAt(index - 1) === '-') && title.charAt(index - 1).search(/[^\s-]/) < 0) {
      return match.toLowerCase();
    }

    if (match.substr(1).search(/[A-Z]|\../) > -1) {
      return match;
    }

    return match.charAt(0).toUpperCase() + match.substr(1);
  });
}
// CONCATENATED MODULE: ./node_modules/react-ga/dist/esm/utils/format.js



var redacted = 'REDACTED (Potential Email Address)';
function format(s, titleCase) {
  if (mightBeEmail(s)) {
    warn('This arg looks like an email address, redacting.');
    return redacted;
  }

  if (titleCase) {
    return toTitleCase(s);
  }

  return s;
}
// CONCATENATED MODULE: ./node_modules/react-ga/dist/esm/utils/removeLeadingSlash.js
function removeLeadingSlash(string) {
  if (string.substring(0, 1) === '/') {
    return string.substring(1);
  }

  return string;
}
// CONCATENATED MODULE: ./node_modules/react-ga/dist/esm/utils/loadGA.js
/* harmony default export */ var loadGA = (function (options) {
  var gaAddress = 'https://www.google-analytics.com/analytics.js';

  if (options && options.gaAddress) {
    gaAddress = options.gaAddress;
  } else if (options && options.debug) {
    gaAddress = 'https://www.google-analytics.com/analytics_debug.js';
  } // https://developers.google.com/analytics/devguides/collection/analyticsjs/

  /* eslint-disable */


  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(window, document, 'script', gaAddress, 'ga');
  /* eslint-enable */

});
// CONCATENATED MODULE: ./node_modules/react-ga/dist/esm/utils/console/log.js
function log(s) {
  console.info('[react-ga]', s);
}
// CONCATENATED MODULE: ./node_modules/react-ga/dist/esm/utils/testModeAPI.js
var gaCalls = [];
/* harmony default export */ var testModeAPI = ({
  calls: gaCalls,
  ga: function ga() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    gaCalls.push([].concat(args));
  },
  resetCalls: function resetCalls() {
    gaCalls.length = 0;
  }
});
// CONCATENATED MODULE: ./node_modules/react-ga/dist/esm/core.js
function core_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = core_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function core_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function core_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function core_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { core_ownKeys(source, true).forEach(function (key) { core_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { core_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function core_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function core_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { core_typeof = function _typeof(obj) { return typeof obj; }; } else { core_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return core_typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * React Google Analytics Module
 *
 * @package react-ga
 * @author  Adam Lofting <adam@mozillafoundation.org>
 *          Atul Varma <atul@mozillafoundation.org>
 */

/**
 * Utilities
 */








var _isNotBrowser = typeof window === 'undefined' || typeof document === 'undefined';

var _debug = false;
var _titleCase = true;
var _testMode = false;
var _alwaysSendToDefaultTracker = true;

var core_internalGa = function internalGa() {
  var _window;

  if (_testMode) return testModeAPI.ga.apply(testModeAPI, arguments);
  if (_isNotBrowser) return false;
  if (!window.ga) return warn('ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually');
  return (_window = window).ga.apply(_window, arguments);
};

function _format(s) {
  return format(s, _titleCase);
}

function _gaCommand(trackerNames) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var command = args[0];

  if (typeof core_internalGa === 'function') {
    if (typeof command !== 'string') {
      warn('ga command must be a string');
      return;
    }

    if (_alwaysSendToDefaultTracker || !Array.isArray(trackerNames)) core_internalGa.apply(void 0, args);

    if (Array.isArray(trackerNames)) {
      trackerNames.forEach(function (name) {
        core_internalGa.apply(void 0, _toConsumableArray(["".concat(name, ".").concat(command)].concat(args.slice(1))));
      });
    }
  }
}

function _initialize(gaTrackingID, options) {
  if (!gaTrackingID) {
    warn('gaTrackingID is required in initialize()');
    return;
  }

  if (options) {
    if (options.debug && options.debug === true) {
      _debug = true;
    }

    if (options.titleCase === false) {
      _titleCase = false;
    }

    if (options.useExistingGa) {
      return;
    }
  }

  if (options && options.gaOptions) {
    core_internalGa('create', gaTrackingID, options.gaOptions);
  } else {
    core_internalGa('create', gaTrackingID, 'auto');
  }
}

function initialize(configsOrTrackingId, options) {
  if (options && options.testMode === true) {
    _testMode = true;
  } else {
    if (_isNotBrowser) {
      return false;
    }

    if (!options || options.standardImplementation !== true) loadGA(options);
  }

  _alwaysSendToDefaultTracker = options && typeof options.alwaysSendToDefaultTracker === 'boolean' ? options.alwaysSendToDefaultTracker : true;

  if (Array.isArray(configsOrTrackingId)) {
    configsOrTrackingId.forEach(function (config) {
      if (core_typeof(config) !== 'object') {
        warn('All configs must be an object');
        return;
      }

      _initialize(config.trackingId, config);
    });
  } else {
    _initialize(configsOrTrackingId, options);
  }

  return true;
}
/**
 * ga:
 * Returns the original GA object.
 */

function ga() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  if (args.length > 0) {
    core_internalGa.apply(void 0, args);

    if (_debug) {
      log('called ga(\'arguments\');');
      log("with arguments: ".concat(JSON.stringify(args)));
    }
  }

  return window.ga;
}
/**
 * set:
 * GA tracker set method
 * @param {Object} fieldsObject - a field/value pair or a group of field/value pairs on the tracker
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function set(fieldsObject, trackerNames) {
  if (!fieldsObject) {
    warn('`fieldsObject` is required in .set()');
    return;
  }

  if (core_typeof(fieldsObject) !== 'object') {
    warn('Expected `fieldsObject` arg to be an Object');
    return;
  }

  if (Object.keys(fieldsObject).length === 0) {
    warn('empty `fieldsObject` given to .set()');
  }

  _gaCommand(trackerNames, 'set', fieldsObject);

  if (_debug) {
    log('called ga(\'set\', fieldsObject);');
    log("with fieldsObject: ".concat(JSON.stringify(fieldsObject)));
  }
}
/**
 * send:
 * Clone of the low level `ga.send` method
 * WARNING: No validations will be applied to this
 * @param  {Object} fieldObject - field object for tracking different analytics
 * @param  {Array} trackerNames - trackers to send the command to
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function send(fieldObject, trackerNames) {
  _gaCommand(trackerNames, 'send', fieldObject);

  if (_debug) {
    log('called ga(\'send\', fieldObject);');
    log("with fieldObject: ".concat(JSON.stringify(fieldObject)));
    log("with trackers: ".concat(JSON.stringify(trackerNames)));
  }
}
/**
 * pageview:
 * Basic GA pageview tracking
 * @param  {String} path - the current page page e.g. '/about'
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 * @param {String} title - (optional) the page title e. g. 'My Website'
 */

function pageview(rawPath, trackerNames, title) {
  if (!rawPath) {
    warn('path is required in .pageview()');
    return;
  }

  var path = trim(rawPath);

  if (path === '') {
    warn('path cannot be an empty string in .pageview()');
    return;
  }

  var extraFields = {};

  if (title) {
    extraFields.title = title;
  }

  if (typeof ga === 'function') {
    _gaCommand(trackerNames, 'send', core_objectSpread({
      hitType: 'pageview',
      page: path
    }, extraFields));

    if (_debug) {
      log('called ga(\'send\', \'pageview\', path);');
      var extraLog = '';

      if (title) {
        extraLog = " and title: ".concat(title);
      }

      log("with path: ".concat(path).concat(extraLog));
    }
  }
}
/**
 * modalview:
 * a proxy to basic GA pageview tracking to consistently track
 * modal views that are an equivalent UX to a traditional pageview
 * @param  {String} modalName e.g. 'add-or-edit-club'
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function modalview(rawModalName, trackerNames) {
  if (!rawModalName) {
    warn('modalName is required in .modalview(modalName)');
    return;
  }

  var modalName = removeLeadingSlash(trim(rawModalName));

  if (modalName === '') {
    warn('modalName cannot be an empty string or a single / in .modalview()');
    return;
  }

  if (typeof ga === 'function') {
    var path = "/modal/".concat(modalName);

    _gaCommand(trackerNames, 'send', 'pageview', path);

    if (_debug) {
      log('called ga(\'send\', \'pageview\', path);');
      log("with path: ".concat(path));
    }
  }
}
/**
 * timing:
 * GA timing
 * @param args.category {String} required
 * @param args.variable {String} required
 * @param args.value  {Int}  required
 * @param args.label  {String} required
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function timing() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      category = _ref.category,
      variable = _ref.variable,
      value = _ref.value,
      label = _ref.label;

  var trackerNames = arguments.length > 1 ? arguments[1] : undefined;

  if (typeof ga === 'function') {
    if (!category || !variable || !value || typeof value !== 'number') {
      warn('args.category, args.variable ' + 'AND args.value are required in timing() ' + 'AND args.value has to be a number');
      return;
    } // Required Fields


    var fieldObject = {
      hitType: 'timing',
      timingCategory: _format(category),
      timingVar: _format(variable),
      timingValue: value
    };

    if (label) {
      fieldObject.timingLabel = _format(label);
    }

    send(fieldObject, trackerNames);
  }
}
/**
 * event:
 * GA event tracking
 * @param args.category {String} required
 * @param args.action {String} required
 * @param args.label {String} optional
 * @param args.value {Int} optional
 * @param args.nonInteraction {boolean} optional
 * @param args.transport {string} optional
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function core_event() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      category = _ref2.category,
      action = _ref2.action,
      label = _ref2.label,
      value = _ref2.value,
      nonInteraction = _ref2.nonInteraction,
      transport = _ref2.transport,
      args = core_objectWithoutProperties(_ref2, ["category", "action", "label", "value", "nonInteraction", "transport"]);

  var trackerNames = arguments.length > 1 ? arguments[1] : undefined;

  if (typeof ga === 'function') {
    // Simple Validation
    if (!category || !action) {
      warn('args.category AND args.action are required in event()');
      return;
    } // Required Fields


    var fieldObject = {
      hitType: 'event',
      eventCategory: _format(category),
      eventAction: _format(action)
    }; // Optional Fields

    if (label) {
      fieldObject.eventLabel = _format(label);
    }

    if (typeof value !== 'undefined') {
      if (typeof value !== 'number') {
        warn('Expected `args.value` arg to be a Number.');
      } else {
        fieldObject.eventValue = value;
      }
    }

    if (typeof nonInteraction !== 'undefined') {
      if (typeof nonInteraction !== 'boolean') {
        warn('`args.nonInteraction` must be a boolean.');
      } else {
        fieldObject.nonInteraction = nonInteraction;
      }
    }

    if (typeof transport !== 'undefined') {
      if (typeof transport !== 'string') {
        warn('`args.transport` must be a string.');
      } else {
        if (['beacon', 'xhr', 'image'].indexOf(transport) === -1) {
          warn('`args.transport` must be either one of these values: `beacon`, `xhr` or `image`');
        }

        fieldObject.transport = transport;
      }
    }

    Object.keys(args).filter(function (key) {
      return key.substr(0, 'dimension'.length) === 'dimension';
    }).forEach(function (key) {
      fieldObject[key] = args[key];
    });
    Object.keys(args).filter(function (key) {
      return key.substr(0, 'metric'.length) === 'metric';
    }).forEach(function (key) {
      fieldObject[key] = args[key];
    }); // Send to GA

    send(fieldObject, trackerNames);
  }
}
/**
 * exception:
 * GA exception tracking
 * @param args.description {String} optional
 * @param args.fatal {boolean} optional
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function exception(_ref3, trackerNames) {
  var description = _ref3.description,
      fatal = _ref3.fatal;

  if (typeof ga === 'function') {
    // Required Fields
    var fieldObject = {
      hitType: 'exception'
    }; // Optional Fields

    if (description) {
      fieldObject.exDescription = _format(description);
    }

    if (typeof fatal !== 'undefined') {
      if (typeof fatal !== 'boolean') {
        warn('`args.fatal` must be a boolean.');
      } else {
        fieldObject.exFatal = fatal;
      }
    } // Send to GA


    send(fieldObject, trackerNames);
  }
}
var core_plugin = {
  /**
   * require:
   * GA requires a plugin
   * @param name {String} e.g. 'ecommerce' or 'myplugin'
   * @param options {Object} optional e.g {path: '/log', debug: true}
   * @param trackerName {String} optional e.g 'trackerName'
   */
  require: function require(rawName, options, trackerName) {
    if (typeof ga === 'function') {
      // Required Fields
      if (!rawName) {
        warn('`name` is required in .require()');
        return;
      }

      var name = trim(rawName);

      if (name === '') {
        warn('`name` cannot be an empty string in .require()');
        return;
      }

      var requireString = trackerName ? "".concat(trackerName, ".require") : 'require'; // Optional Fields

      if (options) {
        if (core_typeof(options) !== 'object') {
          warn('Expected `options` arg to be an Object');
          return;
        }

        if (Object.keys(options).length === 0) {
          warn('Empty `options` given to .require()');
        }

        ga(requireString, name, options);

        if (_debug) {
          log("called ga('require', '".concat(name, "', ").concat(JSON.stringify(options)));
        }
      } else {
        ga(requireString, name);

        if (_debug) {
          log("called ga('require', '".concat(name, "');"));
        }
      }
    }
  },

  /**
   * execute:
   * GA execute action for plugin
   * Takes variable number of arguments
   * @param pluginName {String} e.g. 'ecommerce' or 'myplugin'
   * @param action {String} e.g. 'addItem' or 'myCustomAction'
   * @param actionType {String} optional e.g. 'detail'
   * @param payload {Object} optional e.g { id: '1x5e', name : 'My product to track' }
   */
  execute: function execute(pluginName, action) {
    var payload;
    var actionType;

    if ((arguments.length <= 2 ? 0 : arguments.length - 2) === 1) {
      payload = arguments.length <= 2 ? undefined : arguments[2];
    } else {
      actionType = arguments.length <= 2 ? undefined : arguments[2];
      payload = arguments.length <= 3 ? undefined : arguments[3];
    }

    if (typeof ga === 'function') {
      if (typeof pluginName !== 'string') {
        warn('Expected `pluginName` arg to be a String.');
      } else if (typeof action !== 'string') {
        warn('Expected `action` arg to be a String.');
      } else {
        var command = "".concat(pluginName, ":").concat(action);
        payload = payload || null;

        if (actionType && payload) {
          ga(command, actionType, payload);

          if (_debug) {
            log("called ga('".concat(command, "');"));
            log("actionType: \"".concat(actionType, "\" with payload: ").concat(JSON.stringify(payload)));
          }
        } else if (payload) {
          ga(command, payload);

          if (_debug) {
            log("called ga('".concat(command, "');"));
            log("with payload: ".concat(JSON.stringify(payload)));
          }
        } else {
          ga(command);

          if (_debug) {
            log("called ga('".concat(command, "');"));
          }
        }
      }
    }
  }
};
/**
 * outboundLink:
 * GA outboundLink tracking
 * @param args.label {String} e.g. url, or 'Create an Account'
 * @param {function} hitCallback - Called after processing a hit.
 */

function outboundLink(args, hitCallback, trackerNames) {
  if (typeof hitCallback !== 'function') {
    warn('hitCallback function is required');
    return;
  }

  if (typeof ga === 'function') {
    // Simple Validation
    if (!args || !args.label) {
      warn('args.label is required in outboundLink()');
      return;
    } // Required Fields


    var fieldObject = {
      hitType: 'event',
      eventCategory: 'Outbound',
      eventAction: 'Click',
      eventLabel: _format(args.label)
    };
    var safetyCallbackCalled = false;

    var safetyCallback = function safetyCallback() {
      // This prevents a delayed response from GA
      // causing hitCallback from being fired twice
      safetyCallbackCalled = true;
      hitCallback();
    }; // Using a timeout to ensure the execution of critical application code
    // in the case when the GA server might be down
    // or an ad blocker prevents sending the data
    // register safety net timeout:


    var t = setTimeout(safetyCallback, 250);

    var clearableCallbackForGA = function clearableCallbackForGA() {
      clearTimeout(t);

      if (!safetyCallbackCalled) {
        hitCallback();
      }
    };

    fieldObject.hitCallback = clearableCallbackForGA; // Send to GA

    send(fieldObject, trackerNames);
  } else {
    // if ga is not defined, return the callback so the application
    // continues to work as expected
    setTimeout(hitCallback, 0);
  }
}
var core_testModeAPI = testModeAPI;
/* harmony default export */ var core = ({
  initialize: initialize,
  ga: ga,
  set: set,
  send: send,
  pageview: pageview,
  modalview: modalview,
  timing: timing,
  event: core_event,
  exception: exception,
  plugin: core_plugin,
  outboundLink: outboundLink,
  testModeAPI: testModeAPI
});
// CONCATENATED MODULE: ./node_modules/react-ga/dist/esm/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return esm_initialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ga", function() { return esm_ga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return esm_set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "send", function() { return esm_send; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageview", function() { return esm_pageview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalview", function() { return esm_modalview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timing", function() { return esm_timing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "event", function() { return esm_event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exception", function() { return esm_exception; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return esm_plugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outboundLink", function() { return esm_outboundLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testModeAPI", function() { return esm_testModeAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutboundLink", function() { return esm_OutboundLink; });
function esm_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function esm_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { esm_ownKeys(source, true).forEach(function (key) { esm_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { esm_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function esm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var esm_initialize = initialize;
var esm_ga = ga;
var esm_set = set;
var esm_send = send;
var esm_pageview = pageview;
var esm_modalview = modalview;
var esm_timing = timing;
var esm_event = core_event;
var esm_exception = exception;
var esm_plugin = core_plugin;
var esm_outboundLink = outboundLink;
var esm_testModeAPI = core_testModeAPI;
OutboundLink_OutboundLink.origTrackLink = OutboundLink_OutboundLink.trackLink;
OutboundLink_OutboundLink.trackLink = outboundLink;
var esm_OutboundLink = OutboundLink_OutboundLink;
/* harmony default export */ var esm = __webpack_exports__["default"] = (esm_objectSpread({}, core_namespaceObject, {
  OutboundLink: esm_OutboundLink
}));

/***/ }),

/***/ 3410:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = __webpack_require__(77);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getClassName2 = __webpack_require__(89);

var _getClassName3 = _interopRequireDefault(_getClassName2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = __webpack_require__(4);

var _lodash2 = _interopRequireDefault(_lodash);

__webpack_require__(3411);

var _topcoderReactUtils = __webpack_require__(7);

var _checkmarkLarge = __webpack_require__(3412);

var _checkmarkLarge2 = _interopRequireDefault(_checkmarkLarge);

var _checkmarkMedium = __webpack_require__(3413);

var _checkmarkMedium2 = _interopRequireDefault(_checkmarkMedium);

var _checkmarkSmall = __webpack_require__(3414);

var _checkmarkSmall2 = _interopRequireDefault(_checkmarkSmall);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/**
 * Checkbox component.
 */
var _styleModuleImportMap = {
  './style.scss': {
    'checkmark': '_1xdsjH',
    'haveError': '_3Wcvkj',
    'after': '_2rEBgN',
    'container': '_2a1GZS',
    'lgSize': '_278L-R',
    'smSize': '_3aux-f',
    'xsSize': '_14WaTe',
    'errorMessage': '_29edTT'
  }
};


function Checkbox(_ref) {
  var checked = _ref.checked,
      _onChange = _ref.onChange,
      size = _ref.size,
      errorMsg = _ref.errorMsg;

  var _useState = (0, _react.useState)(checked),
      _useState2 = (0, _slicedToArray3.default)(_useState, 2),
      checkedInternal = _useState2[0],
      setCheckedInternal = _useState2[1];

  var sizeStyle = size === 'lg' ? 'lgSize' : null;
  // eslint-disable-next-line no-nested-ternary
  var imgSrc = size === 'xs' ? _checkmarkSmall2.default : size === 'sm' ? _checkmarkMedium2.default : _checkmarkLarge2.default;
  if (!sizeStyle) {
    sizeStyle = size === 'xs' ? 'xsSize' : 'smSize';
  }
  var delayedOnChange = (0, _react.useRef)(_lodash2.default.debounce(function (q, cb) {
    return cb(q);
  }, _topcoderReactUtils.config.GUIKIT.DEBOUNCE_ON_CHANGE_TIME)).current;

  return _react2.default.createElement(
    'label',
    {
      className: (0, _getClassName3.default)('container ' + sizeStyle, _styleModuleImportMap)
    },
    _react2.default.createElement('input', {
      checked: checkedInternal,
      type: 'checkbox',
      onChange: function onChange(e) {
        setCheckedInternal(e.target.checked);
        delayedOnChange(e.target.checked, _onChange);
      }
    }),
    _react2.default.createElement(
      'div',
      {
        className: (0, _getClassName3.default)('checkmark ' + (errorMsg ? 'haveError' : ''), _styleModuleImportMap)
      },
      _react2.default.createElement('img', { src: imgSrc, className: '_2rEBgN', alt: 'checkmark-icon' })
    ),
    errorMsg ? _react2.default.createElement(
      'span',
      { className: '_29edTT' },
      errorMsg
    ) : null
  );
}

Checkbox.defaultProps = {
  checked: false,
  onChange: function onChange() {},
  size: 'sm',
  errorMsg: ''
};

Checkbox.propTypes = {
  checked: _propTypes2.default.bool,
  onChange: _propTypes2.default.func,
  size: _propTypes2.default.oneOf(['xs', 'sm', 'lg']),
  errorMsg: _propTypes2.default.string
};

exports.default = Checkbox;

/***/ }),

/***/ 3411:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"primary-green-xs":"_32YV1E","primary-green-sm":"_1eO2-o","primary-green-md":"_3MgVUt","primary-green-lg":"bzGhiN","primary-white-xs":"_35_2So","primary-white-sm":"UJfsSg","primary-white-md":"_2lcDlE","primary-white-lg":"_3z24sA","primary-borderless-xs":"_2QXyh5","primary-borderless-sm":"_3fllbg","primary-borderless-md":"_2tV6Wy","primary-borderless-lg":"A7MWx2","sec-gray-xs":"_3LQgyN","sec-gray-sm":"_3sXTbc","sec-gray-md":"_1sN7zd","sec-gray-lg":"GWhIh6","warn-red-xs":"_1zp62N","warn-red-sm":"_27GcKT","warn-red-md":"_3Mngps","warn-red-lg":"_8RQefl","themedButtonDisabled":"kZmSPU","container":"_2a1GZS","checkmark":"_1xdsjH","haveError":"_3Wcvkj","after":"_2rEBgN","lgSize":"_278L-R","smSize":"_3aux-f","xsSize":"_14WaTe","errorMessage":"_29edTT"};

/***/ }),

/***/ 3412:
/***/ (function(module, exports) {

module.exports = "https://community-app-cdn.topcoder.com/static-assets/images/5ebcba91993bc09b9c0763d2946582d8.png";

/***/ }),

/***/ 3413:
/***/ (function(module, exports) {

module.exports = "https://community-app-cdn.topcoder.com/static-assets/images/07507a04e0986d806cbd3ec73c724143.png";

/***/ }),

/***/ 3414:
/***/ (function(module, exports) {

module.exports = "https://community-app-cdn.topcoder.com/static-assets/images/3b1f3c4fdc0e6cb5388655abe5f5de91.png";

/***/ }),

/***/ 3415:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _slicedToArray2 = __webpack_require__(77);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getClassName2 = __webpack_require__(89);

var _getClassName3 = _interopRequireDefault(_getClassName2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = __webpack_require__(4);

var _lodash2 = _interopRequireDefault(_lodash);

__webpack_require__(3416);

var _topcoderReactUtils = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _styleModuleImportMap = {
  './style.scss': {
    'checkmark': '_1iCFJN',
    'hasError': '_3MepUt',
    'radioButton': '_2JtbjO',
    'label': 'MCxnkH',
    'container': '_3nVSAA',
    'radioButtonContainer': '_3YAY06',
    'lgSize': '_26YgoU',
    'smSize': '_lb3sx',
    'xsSize': '_2fCyBm',
    'errorMessage': '_1POZB9'
  }
}; /* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/**
 * Radio button component.
 */

function RadioButton(_ref) {
  var options = _ref.options,
      _onChange = _ref.onChange,
      size = _ref.size,
      errorMsg = _ref.errorMsg;

  var _useState = (0, _react.useState)(options),
      _useState2 = (0, _slicedToArray3.default)(_useState, 2),
      internalOptions = _useState2[0],
      setInternalOptions = _useState2[1];

  var optionsWithKey = internalOptions.map(function (o, oIndex) {
    return (0, _extends3.default)({}, o, { key: oIndex });
  });
  var sizeStyle = size === 'lg' ? 'lgSize' : null;
  if (!sizeStyle) {
    sizeStyle = size === 'xs' ? 'xsSize' : 'smSize';
  }
  var delayedOnChange = (0, _react.useRef)(_lodash2.default.debounce(function (q, cb) {
    return cb(q);
  }, _topcoderReactUtils.config.GUIKIT.DEBOUNCE_ON_CHANGE_TIME)).current;

  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(
      'div',
      {
        className: 'radioButtonContainer ' + (0, _getClassName3.default)('radioButtonContainer ' + sizeStyle, _styleModuleImportMap)
      },
      optionsWithKey.map(function (o) {
        return _react2.default.createElement(
          'div',
          { key: o.key, className: 'radioButton _2JtbjO' },
          _react2.default.createElement(
            'label',
            { className: '_3nVSAA' },
            _react2.default.createElement('input', {
              type: 'radio',
              checked: o.value,
              onChange: function onChange() {
                var newOptions = optionsWithKey.map(function (oWithKeyTmp) {
                  return {
                    label: oWithKeyTmp.label,
                    value: o.key === oWithKeyTmp.key
                  };
                });
                setInternalOptions(newOptions);
                delayedOnChange(_lodash2.default.cloneDeep(newOptions), _onChange);
              }
            }),
            _react2.default.createElement('span', {
              className: (0, _getClassName3.default)('checkmark ' + (errorMsg ? 'hasError' : ''), _styleModuleImportMap)
            })
          ),
          o.label ? _react2.default.createElement(
            'span',
            { className: 'MCxnkH' },
            o.label
          ) : null
        );
      })
    ),
    errorMsg ? _react2.default.createElement(
      'span',
      { className: '_1POZB9' },
      errorMsg
    ) : null
  );
}

RadioButton.defaultProps = {
  onChange: function onChange() {},
  size: 'sm',
  errorMsg: ''
};

RadioButton.propTypes = {
  options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.string,
    value: _propTypes2.default.bool.isRequired
  })).isRequired,
  onChange: _propTypes2.default.func,
  size: _propTypes2.default.oneOf(['xs', 'sm', 'lg']),
  errorMsg: _propTypes2.default.string
};

exports.default = RadioButton;

/***/ }),

/***/ 3416:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"primary-green-xs":"_1pcb4J","primary-green-sm":"L-_AO7","primary-green-md":"djpRgj","primary-green-lg":"_2NR0xp","primary-white-xs":"_2B7-4T","primary-white-sm":"_3K9o3S","primary-white-md":"qJfPYW","primary-white-lg":"Xc26Wv","primary-borderless-xs":"_2YGaK4","primary-borderless-sm":"h2VLuF","primary-borderless-md":"_8UhIfJ","primary-borderless-lg":"_2H95u2","sec-gray-xs":"_2vqBGm","sec-gray-sm":"I2akCT","sec-gray-md":"_2IP_CW","sec-gray-lg":"_1I38mv","warn-red-xs":"_17qwWm","warn-red-sm":"_1AZtoQ","warn-red-md":"_2kJPbu","warn-red-lg":"_27sRwU","themedButtonDisabled":"_1SmIgl","container":"_3nVSAA","checkmark":"_1iCFJN","hasError":"_3MepUt","radioButton":"_2JtbjO","label":"MCxnkH","radioButtonContainer":"_3YAY06","lgSize":"_26YgoU","smSize":"_lb3sx","xsSize":"_2fCyBm","errorMessage":"_1POZB9"};

/***/ }),

/***/ 3417:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = __webpack_require__(77);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getClassName2 = __webpack_require__(89);

var _getClassName3 = _interopRequireDefault(_getClassName2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = __webpack_require__(2);

var _moment2 = _interopRequireDefault(_moment);

__webpack_require__(3418);

__webpack_require__(2988);

var _reactDates = __webpack_require__(2989);

var _useWindowSize2 = __webpack_require__(3419);

var _useWindowSize3 = _interopRequireDefault(_useWindowSize2);

var _CalendarWeek = __webpack_require__(2904);

var _CalendarWeek2 = _interopRequireDefault(_CalendarWeek);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable jsx-a11y/label-has-for */
/**
 * Datepicker component.
 */
var _styleModuleImportMap = {
  './style.scss': {
    'container': 'Sl58Xa',
    'label': '_3o7VuX',
    'haveValue': '_1Sp2_O',
    'isFocused': '_2hTTXW',
    'haveError': '_10ePgB',
    'SingleDatePicker': '_1o-Iqf',
    'SingleDatePickerInput': '_1EAw3u',
    'SingleDatePickerInput_calendarIcon': '_1Wot4X',
    'DateInput': '_3MUGKa',
    'DateInput_fang': '_1xGTe7',
    'DateInput_screenReaderMessage': '_20EWhe',
    'SingleDatePicker_picker': '_2db6xM',
    'DayPicker': '_2V_TTK',
    'DayPicker_weekHeaders__horizontal': '_3LvbhA',
    'DayPicker_weekHeader': 'jmWyl0',
    'DayPicker_weekHeader_ul': '_2yn5A9',
    'DayPicker_weekHeaders': 'JG8651',
    'DayPicker_weekHeader_li': 'JmicQN',
    'DayPicker_focusRegion': '_2MaflM',
    'DayPicker__withBorder': '_2SLqKR',
    'DayPickerNavigation__horizontal': 'EDBYyA',
    'DayPickerNavigation': '_2-_sEy',
    'DayPickerNavigation_button': 'eqxJKr',
    'CalendarMonth_caption': 'ze5bo5',
    'DayPicker_transitionContainer': '_20_iBR',
    'DayPicker_transitionContainer__horizontal': '_1_A_DU',
    'CalendarMonthGrid': '_2zgaVo',
    'CalendarMonthGrid_month__horizontal': '_2j50rQ',
    'CalendarMonthGrid_month__hidden': 'WrCOs6',
    'CalendarMonthGrid_month__hideForAnimation': '_1-eb_6',
    'CalendarMonth': '_2b2ixT',
    'CalendarMonth_table': '_1y-Bjs',
    'CalendarDay__default': '_2YNQun',
    'CalendarDay__blocked_out_of_range': '_2X3JvY',
    'CalendarDay__selected': 'tTIunN',
    'CalendarDay__outside': '_3KMtMF',
    'errorMessage': '_13eRR-'
  }
};

var IconCalendar = function IconCalendar(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'title',
      null,
      'Fill 81 Copy'
    ),
    _react2.default.createElement('path', {
      d: 'M14 14H2V7h12v7zm1-12h-2V1c0-.6-.4-1-1-1h-1c-.6 0-1 .4-1 1v1H6V1c0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1v1H1c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1z',
      fill: '#C3C3C8',
      fillRule: 'evenodd'
    })
  );
};

IconCalendar.defaultProps = {
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
  xmlns: 'http://www.w3.org/2000/svg'
};

var IconNext = function IconNext(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      fill: '#137D60',
      d: 'M1.9 15.7L.4 14.3 6.7 8 .4 1.7 1.9.3 9.6 8z',
      fillRule: 'evenodd'
    })
  );
};

IconNext.defaultProps = {
  width: '10',
  height: '16',
  viewBox: '0 0 10 16',
  xmlns: 'http://www.w3.org/2000/svg'
};

var IconPrev = function IconPrev(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      fill: '#137D60',
      d: 'M8.1 15.7L.4 8 8.1.3l1.5 1.4L3.3 8l6.3 6.3z',
      fillRule: 'evenodd'
    })
  );
};

IconPrev.defaultProps = {
  width: '10',
  height: '16',
  viewBox: '0 0 10 16',
  xmlns: 'http://www.w3.org/2000/svg'
};

// eslint-disable-next-line no-unused-expressions, react/forbid-foreign-prop-types

_CalendarWeek2.default && _CalendarWeek2.default.propTypes && delete _CalendarWeek2.default.propTypes.children; // fixing the bug in react-dates, more detail in here https://github.com/airbnb/react-dates/issues/1121

function Datepicker(_ref) {
  var value = _ref.value,
      placeholder = _ref.placeholder,
      label = _ref.label,
      onChange = _ref.onChange,
      errorMsg = _ref.errorMsg,
      required = _ref.required;

  var _useState = (0, _react.useState)(value ? (0, _moment2.default)(value) : null),
      _useState2 = (0, _slicedToArray3.default)(_useState, 2),
      date = _useState2[0],
      setDate = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray3.default)(_useState3, 2),
      focused = _useState4[0],
      setFocused = _useState4[1];

  var _useWindowSize = (0, _useWindowSize3.default)(),
      width = _useWindowSize.width;

  return _react2.default.createElement(
    'div',
    {
      className: (0, _getClassName3.default)('container ' + (date ? 'haveValue' : '') + ' ' + (errorMsg ? 'haveError' : '') + ' ' + (focused ? 'isFocused' : ''), _styleModuleImportMap)
    },
    _react2.default.createElement(_reactDates.SingleDatePicker, {
      hideKeyboardShortcutsPanel: true,
      customInputIcon: _react2.default.createElement(IconCalendar, null),
      date: date,
      onDateChange: function onDateChange(changedDate) {
        setDate(changedDate);
        onChange(changedDate ? changedDate.toDate() : null);
      },
      focused: focused,
      onFocusChange: function onFocusChange(_ref2) {
        var changedFocused = _ref2.focused;
        return setFocused(changedFocused);
      },
      id: value + '-' + placeholder + '-' + label + '-' + errorMsg + '-' + required,
      placeholder: '' + placeholder + (placeholder && required ? ' *' : ''),
      inputIconPosition: 'after',
      numberOfMonths: 1,
      navPrev: _react2.default.createElement(IconPrev, null),
      navNext: _react2.default.createElement(IconNext, null),
      displayFormat: 'MMM DD, YYYY',
      daySize: width > 600 ? 47 : 35,
      renderDayContents: function renderDayContents(d) {
        return _react2.default.createElement(
          'div',
          null,
          d.date ? d.date() : ''
        );
      },
      enableOutsideDays: true,
      firstDayOfWeek: 1,
      weekDayFormat: 'ddd'
    }),
    label ? _react2.default.createElement(
      'span',
      { className: '_3o7VuX' },
      label,
      required ? _react2.default.createElement(
        'span',
        null,
        '\xA0*'
      ) : null
    ) : null,
    errorMsg ? _react2.default.createElement(
      'span',
      { className: '_13eRR-' },
      errorMsg
    ) : null
  );
}

Datepicker.defaultProps = {
  value: null,
  placeholder: '',
  label: '',
  onChange: function onChange() {},
  errorMsg: '',
  required: false
};

Datepicker.propTypes = {
  value: _propTypes2.default.instanceOf(Date),
  placeholder: _propTypes2.default.string,
  label: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  errorMsg: _propTypes2.default.string,
  required: _propTypes2.default.bool
};

exports.default = Datepicker;

/***/ }),

/***/ 3418:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"primary-green-xs":"gMA9ok","primary-green-sm":"_3H-YkE","primary-green-md":"_3vyA56","primary-green-lg":"_1-g0rI","primary-white-xs":"_3Gsuwi","primary-white-sm":"_16kWXW","primary-white-md":"_2XzEjx","primary-white-lg":"_2-Aec2","primary-borderless-xs":"_1mC6OC","primary-borderless-sm":"_2C9CtS","primary-borderless-md":"_2Iwt_d","primary-borderless-lg":"EbyS-P","sec-gray-xs":"_2Vbdog","sec-gray-sm":"GW9C8I","sec-gray-md":"_1mdQKI","sec-gray-lg":"_3fPTA5","warn-red-xs":"_2saw7s","warn-red-sm":"_3LmHtt","warn-red-md":"_2_-FJR","warn-red-lg":"Wz2rmv","themedButtonDisabled":"_3mg1G9","container":"Sl58Xa","label":"_3o7VuX","haveValue":"_1Sp2_O","isFocused":"_2hTTXW","haveError":"_10ePgB","errorMessage":"_13eRR-"};

/***/ }),

/***/ 3419:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = __webpack_require__(77);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

exports.default = useWindowSize;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get window size
 */
function useWindowSize() {
  var isSSR = typeof window !== 'undefined';

  var _React$useState = _react2.default.useState({
    width: isSSR ? window.innerWidth : 1200,
    height: isSSR ? window.innerHeight : 800
  }),
      _React$useState2 = (0, _slicedToArray3.default)(_React$useState, 2),
      windowSize = _React$useState2[0],
      setWindowSize = _React$useState2[1];

  function changeWindowSize() {
    setWindowSize({
      width: isSSR ? window.innerWidth : 1200,
      height: isSSR ? window.innerHeight : 800
    });
  }

  _react2.default.useEffect(function () {
    window.addEventListener('resize', changeWindowSize);

    return function () {
      window.removeEventListener('resize', changeWindowSize);
    };
  }, []);

  return windowSize;
}

/***/ }),

/***/ 3420:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = __webpack_require__(77);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getClassName2 = __webpack_require__(89);

var _getClassName3 = _interopRequireDefault(_getClassName2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = __webpack_require__(4);

var _lodash2 = _interopRequireDefault(_lodash);

var _reactSelect = __webpack_require__(494);

var _dropdownArrow = __webpack_require__(998);

var _dropdownArrow2 = _interopRequireDefault(_dropdownArrow);

__webpack_require__(3421);

var _topcoderReactUtils = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _styleModuleImportMap = {
  './style.scss': {
    'label': '_1_30po',
    'relative': 'EOspVf',
    'errorMessage': 'jg1sVx',
    'haveValue': '_1PpjhV',
    'haveError': 'g6N8xm',
    'iconDropdown': '_25Wtgi',
    'isFocused': 'j5whr0',
    'container': 'oBZ2mX',
    'Select-control': '-zTiMH',
    'Select-arrow-zone': '_123-Zv',
    'Select-multi-value-wrapper': '_3_kp8o',
    'Select-value': '_3wWYVZ',
    'Select-value-icon': '_2HvS4V',
    'Select-value-label': 'Rtf9eR',
    'Select-input': '_1kmGRL',
    'Select-option': 'vq6qUi',
    'isEmptySelectList': 'CWafxX',
    'Select-menu-outer': '_2SHX3T',
    'addAnotherSkill': '_3Z77cb'
  }
}; /* eslint-disable jsx-a11y/label-has-for */
/**
 * Dropdown terms component.
 */

function DropdownTerms(_ref) {
  var terms = _ref.terms,
      placeholder = _ref.placeholder,
      label = _ref.label,
      required = _ref.required,
      _onChange = _ref.onChange,
      errorMsg = _ref.errorMsg,
      addNewOptionPlaceholder = _ref.addNewOptionPlaceholder;

  var _useState = (0, _react.useState)(terms),
      _useState2 = (0, _slicedToArray3.default)(_useState, 2),
      internalTerms = _useState2[0],
      setInternalTerms = _useState2[1];

  var selectedOption = _lodash2.default.filter(internalTerms, { selected: true }).map(function (o) {
    return {
      value: o.label,
      label: o.label
    };
  });

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray3.default)(_useState3, 2),
      focused = _useState4[0],
      setFocused = _useState4[1];

  var delayedOnChange = (0, _react.useRef)(_lodash2.default.debounce(function (q, cb) {
    return cb(q);
  }, _topcoderReactUtils.config.GUIKIT.DEBOUNCE_ON_CHANGE_TIME)).current;
  var containerRef = (0, _react.useRef)(null);
  var inputField = void 0;
  (0, _react.useEffect)(function () {
    var selectInput = containerRef.current.getElementsByClassName('Select-input');
    if (selectInput && selectInput.length) {
      inputField = selectInput[0].getElementsByTagName('input');
      inputField[0].placeholder = focused ? addNewOptionPlaceholder : '';
      inputField[0].style.border = 'none';
      inputField[0].style.boxShadow = 'none';
      selectInput[0].style.borderTop = 'none';
    }
  }, [focused, selectedOption]);

  var CustomReactSelectRow = _react2.default.forwardRef(function (_ref2, ref) {
    var className = _ref2.className,
        option = _ref2.option,
        children = _ref2.children,
        onSelect = _ref2.onSelect;
    return children ? _react2.default.createElement(
      'a',
      {
        ref: ref,
        role: 'button',
        className: className,
        onMouseDown: function onMouseDown(event) {
          event.preventDefault();
          event.stopPropagation();
          onSelect(option, event);
        },
        title: option.title,
        tabIndex: -1
      },
      children
    ) : null;
  });

  CustomReactSelectRow.defaultProps = {
    children: null,
    className: '',
    onSelect: function onSelect() {}
  };

  CustomReactSelectRow.propTypes = {
    children: _propTypes2.default.node,
    className: _propTypes2.default.string,
    onSelect: _propTypes2.default.func,
    option: _propTypes2.default.object.isRequired
  };

  return _react2.default.createElement(
    'div',
    {
      ref: containerRef,
      className: 'dropdownContainer ' + (0, _getClassName3.default)('container ' + (selectedOption && !!selectedOption.length ? 'haveValue' : '') + ' ' + (errorMsg ? 'haveError' : '') + ' ' + (_lodash2.default.every(internalTerms, { selected: true }) ? 'isEmptySelectList' : '') + ' ' + (focused ? 'isFocused' : ''), _styleModuleImportMap)
    },
    _react2.default.createElement(
      'div',
      { className: 'EOspVf' },
      _react2.default.createElement(_reactSelect.Creatable, {
        onOpen: function onOpen() {
          return setFocused(true);
        },
        onClose: function onClose() {
          return setFocused(false);
        },
        autosize: false,
        optionComponent: CustomReactSelectRow,
        options: internalTerms.map(function (o) {
          return { value: o.label, label: o.label };
        }),
        value: selectedOption,
        onInputKeyDown: function onInputKeyDown(e) {
          switch (e.keyCode) {
            case 13:
              // ENTER
              if (inputField && inputField && inputField[0]) {
                var value = inputField[0].value;

                if (!value || !value.trim() || _lodash2.default.find(selectedOption, { label: value }) || _lodash2.default.find(internalTerms, { label: value })) {
                  e.preventDefault();
                }
              }
              break;
            default:
          }
        },
        onChange: function onChange(value) {
          var newValues = _lodash2.default.filter(value, function (o) {
            return o.label && o.label.trim() && !_lodash2.default.find(internalTerms, { label: o.label });
          }).map(function (o) {
            return { selected: true, label: o.label };
          });
          var newTerms = internalTerms.map(function (o) {
            return {
              selected: !!_lodash2.default.find(value, { label: o.label }),
              label: o.label
            };
          }).concat(newValues);
          setInternalTerms(newTerms);
          delayedOnChange(_lodash2.default.cloneDeep(newTerms), _onChange);
        },
        placeholder: focused ? '' : '' + placeholder + (placeholder && required ? ' *' : ''),
        clearable: false,
        backspaceRemoves: false,
        multi: true,
        promptTextCreator: function promptTextCreator() {
          return null;
        },
        filterOptions: function filterOptions(option, inputValue) {
          return _lodash2.default.filter(internalTerms, function (t) {
            return inputValue && inputValue.length >= 2 ? t.label.toLowerCase().includes(inputValue.toLowerCase()) && !_lodash2.default.find(selectedOption, { label: t.label }) : !_lodash2.default.find(selectedOption, { label: t.label });
          });
        }
      }),
      _react2.default.createElement('img', { width: '15', height: '9', className: '_25Wtgi', src: _dropdownArrow2.default, alt: 'dropdown-arrow-icon' })
    ),
    label ? _react2.default.createElement(
      'span',
      { className: '_1_30po' },
      label,
      required ? _react2.default.createElement(
        'span',
        null,
        '\xA0*'
      ) : null
    ) : null,
    errorMsg ? _react2.default.createElement(
      'span',
      { className: 'jg1sVx' },
      errorMsg
    ) : null
  );
}

DropdownTerms.defaultProps = {
  placeholder: '',
  label: '',
  required: false,
  onChange: function onChange() {},
  errorMsg: '',
  addNewOptionPlaceholder: ''
};

DropdownTerms.propTypes = {
  terms: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.string.isRequired,
    selected: _propTypes2.default.bool.isRequired
  })).isRequired,
  placeholder: _propTypes2.default.string,
  label: _propTypes2.default.string,
  required: _propTypes2.default.bool,
  onChange: _propTypes2.default.func,
  errorMsg: _propTypes2.default.string,
  addNewOptionPlaceholder: _propTypes2.default.string
};

exports.default = DropdownTerms;

/***/ }),

/***/ 3421:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"primary-green-xs":"_2-sjE7","primary-green-sm":"_2xWvIO","primary-green-md":"_3u75lX","primary-green-lg":"_13Gdm-","primary-white-xs":"_33zT1y","primary-white-sm":"_2VVBox","primary-white-md":"_2ypnDt","primary-white-lg":"_38VIxP","primary-borderless-xs":"_3EQFZX","primary-borderless-sm":"_1Akgzh","primary-borderless-md":"_1O7lV3","primary-borderless-lg":"WGKM7R","sec-gray-xs":"_3UUSRn","sec-gray-sm":"Acsovj","sec-gray-md":"ZEy1Qn","sec-gray-lg":"_1cX8Zo","warn-red-xs":"_1MnRT1","warn-red-sm":"_22FyHB","warn-red-md":"_3sPMOs","warn-red-lg":"_2lsE0p","themedButtonDisabled":"_17k8Qf","container":"oBZ2mX","label":"_1_30po","relative":"EOspVf","errorMessage":"jg1sVx","iconDropdown":"_25Wtgi","haveValue":"_1PpjhV","haveError":"g6N8xm","isFocused":"j5whr0","lgSize":"RjqGrX","xsSize":"_26wT5d","isEmptySelectList":"CWafxX","addAnotherSkill":"_3Z77cb","Select-animation-fadeIn":"_29GRy7","Select-animation-spin":"cH5wws"};

/***/ }),

/***/ 4071:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(21);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(13);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(10);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(11);

var _inherits3 = _interopRequireDefault(_inherits2);

var _lodash = __webpack_require__(4);

var _lodash2 = _interopRequireDefault(_lodash);

var _recruitCRM = __webpack_require__(505);

var _recruitCRM2 = _interopRequireDefault(_recruitCRM);

var _LoadingIndicator = __webpack_require__(15);

var _LoadingIndicator2 = _interopRequireDefault(_LoadingIndicator);

var _GigDetails = __webpack_require__(4072);

var _GigDetails2 = _interopRequireDefault(_GigDetails);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(36);

var _RecruitCRMJobApply = __webpack_require__(4080);

var _RecruitCRMJobApply2 = _interopRequireDefault(_RecruitCRMJobApply);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A block that fetches and renders a job details page
 * driven by recruitCRM
 */

var RecruitCRMJobDetailsContainer = function (_React$Component) {
  (0, _inherits3.default)(RecruitCRMJobDetailsContainer, _React$Component);

  function RecruitCRMJobDetailsContainer() {
    (0, _classCallCheck3.default)(this, RecruitCRMJobDetailsContainer);
    return (0, _possibleConstructorReturn3.default)(this, (RecruitCRMJobDetailsContainer.__proto__ || (0, _getPrototypeOf2.default)(RecruitCRMJobDetailsContainer)).apply(this, arguments));
  }

  (0, _createClass3.default)(RecruitCRMJobDetailsContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          getJob = _props.getJob,
          id = _props.id,
          job = _props.job;


      if (_lodash2.default.isEmpty(job)) {
        getJob(id);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          loading = _props2.loading,
          job = _props2.job,
          isApply = _props2.isApply,
          application = _props2.application;


      if (loading) {
        return _react2.default.createElement(_LoadingIndicator2.default, null);
      }

      return isApply ? _react2.default.createElement(_RecruitCRMJobApply2.default, { job: job }) : _react2.default.createElement(_GigDetails2.default, { job: job, application: application });
    }
  }]);
  return RecruitCRMJobDetailsContainer;
}(_react2.default.Component);

RecruitCRMJobDetailsContainer.defaultProps = {
  job: {},
  application: null
};

RecruitCRMJobDetailsContainer.propTypes = {
  getJob: _propTypes2.default.func.isRequired,
  loading: _propTypes2.default.bool.isRequired,
  job: _propTypes2.default.shape(),
  id: _propTypes2.default.string.isRequired,
  isApply: _propTypes2.default.bool.isRequired,
  application: _propTypes2.default.shape()
};

function mapStateToProps(state, ownProps) {
  var data = state.recruitCRM[ownProps.id];
  return {
    job: data ? data.job : {},
    loading: data ? data.loading : true,
    application: data ? data.application : null
  };
}

function mapDispatchToActions(dispatch) {
  var a = _recruitCRM2.default.recruit;
  return {
    getJob: function getJob(id) {
      dispatch(a.getJobInit(id));
      dispatch(a.getJobDone(id));
    }
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToActions)(RecruitCRMJobDetailsContainer);

/***/ }),

/***/ 4072:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = GigDetails;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _topcoderReactUtils = __webpack_require__(7);

var _reactHtmlParser = __webpack_require__(979);

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

var _gigs = __webpack_require__(996);

var _SubscribeMailChimpTag = __webpack_require__(4073);

var _SubscribeMailChimpTag2 = _interopRequireDefault(_SubscribeMailChimpTag);

__webpack_require__(4075);

var _iconSkillsBlue = __webpack_require__(4076);

var _iconSkillsBlue2 = _interopRequireDefault(_iconSkillsBlue);

var _l = __webpack_require__(4077);

var _l2 = _interopRequireDefault(_l);

var _l3 = __webpack_require__(4078);

var _l4 = _interopRequireDefault(_l3);

var _l5 = __webpack_require__(4079);

var _l6 = _interopRequireDefault(_l5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconFacebook = function IconFacebook(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'title',
      null,
      '1EF461D5-8CE7-4936-91E5-80EBD141882D'
    ),
    _react2.default.createElement('path', {
      d: 'M17.5 0C7.836 0 0 7.836 0 17.5S7.836 35 17.5 35 35 27.164 35 17.5 27.164 0 17.5 0zm4.375 11.667h-1.969c-.784 0-.948.322-.948 1.134v1.782h2.917L21.57 17.5h-2.612v10.208h-4.375V17.5h-2.916v-2.917h2.916v-3.366c0-2.58 1.358-3.925 4.418-3.925h2.874v4.375z',
      fill: '#AAA',
      fillRule: 'nonzero'
    })
  );
}; /* eslint-disable max-len */
/**
 * The Gig details component.
 */

IconFacebook.defaultProps = {
  width: '35',
  height: '35',
  viewBox: '0 0 35 35',
  xmlns: 'http://www.w3.org/2000/svg'
};

var IconTwitter = function IconTwitter(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'title',
      null,
      '98B36CB6-9363-4AE1-9293-675C31608E4A'
    ),
    _react2.default.createElement('path', {
      d: 'M17.5 0C7.836 0 0 7.836 0 17.5S7.836 35 17.5 35 35 27.164 35 17.5 27.164 0 17.5 0zm8.846 14.066c.267 5.891-4.127 12.46-11.906 12.46-2.365 0-4.566-.695-6.42-1.883a8.427 8.427 0 0 0 6.202-1.734 4.198 4.198 0 0 1-3.914-2.91 4.2 4.2 0 0 0 1.892-.07c-2.014-.406-3.405-2.22-3.36-4.162.566.314 1.21.502 1.898.524a4.195 4.195 0 0 1-1.297-5.593 11.89 11.89 0 0 0 8.634 4.377c-.611-2.62 1.376-5.144 4.081-5.144 1.204 0 2.293.51 3.057 1.323a8.355 8.355 0 0 0 2.66-1.017 4.206 4.206 0 0 1-1.842 2.318 8.356 8.356 0 0 0 2.405-.66 8.407 8.407 0 0 1-2.09 2.17z',
      fill: '#AAA',
      fillRule: 'nonzero'
    })
  );
};

IconTwitter.defaultProps = {
  width: '35',
  height: '35',
  viewBox: '0 0 35 35',
  xmlns: 'http://www.w3.org/2000/svg'
};

var IconLinkedIn = function IconLinkedIn(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'title',
      null,
      'A17EE70C-4FF2-418A-A9EE-80C7482C7231'
    ),
    _react2.default.createElement('path', {
      d: 'M17.5 0C7.836 0 0 7.836 0 17.5S7.836 35 17.5 35 35 27.164 35 17.5 27.164 0 17.5 0zm-2.917 23.333h-2.916v-8.75h2.916v8.75zm-1.458-10.049a1.61 1.61 0 0 1-1.604-1.617 1.61 1.61 0 0 1 1.604-1.618 1.61 1.61 0 0 1 1.604 1.618 1.61 1.61 0 0 1-1.604 1.617zm11.667 10.05h-2.914V19.16c0-2.743-2.92-2.511-2.92 0v4.172h-2.916v-8.75h2.916v1.594c1.272-2.356 5.834-2.531 5.834 2.258v4.898z',
      fill: '#AAA',
      fillRule: 'nonzero'
    })
  );
};

IconLinkedIn.defaultProps = {
  width: '35',
  height: '35',
  viewBox: '0 0 35 35',
  xmlns: 'http://www.w3.org/2000/svg'
};

var IconLocation = function IconLocation(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'title',
      null,
      'AAEC0EB0-9F48-4361-A4E3-F440FA4B8F40'
    ),
    _react2.default.createElement(
      'g',
      {
        strokeWidth: '2',
        transform: 'translate(1 1)',
        stroke: '#EF476F',
        fill: 'none',
        fillRule: 'evenodd',
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
      },
      _react2.default.createElement('ellipse', {
        cx: '10',
        cy: '6.368',
        rx: '2.941',
        ry: '2.895'
      }),
      _react2.default.createElement('path', {
        d: 'M10 0c3.574 0 6.47 2.91 6.47 6.5 0 3.13-4.919 10.135-6.179 11.878a.36.36 0 0 1-.582 0c-1.26-1.743-6.18-8.748-6.18-11.879C3.53 2.91 6.426 0 10 0z'
      }),
      _react2.default.createElement('path', {
        d: 'M15.694 16.21c2.602.574 4.306 1.53 4.306 2.612C20 20.578 15.524 22 10 22S0 20.578 0 18.822c0-1.08 1.696-2.034 4.286-2.608'
      })
    )
  );
};

IconLocation.defaultProps = {
  width: '22',
  height: '24',
  viewBox: '0 0 22 24',
  xmlns: 'http://www.w3.org/2000/svg'
};

var IconMoney = function IconMoney(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'title',
      null,
      'D27E7EE2-D0BE-43EA-B61C-C22ADE2FA375'
    ),
    _react2.default.createElement(
      'g',
      {
        transform: 'translate(1 1)',
        fill: 'none',
        fillRule: 'evenodd'
      },
      _react2.default.createElement('circle', {
        stroke: '#26B3C5',
        strokeWidth: '2',
        cx: '10.5',
        cy: '10.5',
        r: '10.5'
      }),
      _react2.default.createElement(
        'text',
        {
          fontFamily: 'Barlow-SemiBold, Barlow',
          fontSize: '16',
          fontWeight: '500',
          fill: '#26B3C5'
        },
        _react2.default.createElement(
          'tspan',
          {
            x: '6',
            y: '17'
          },
          '$'
        )
      )
    )
  );
};

IconMoney.defaultProps = {
  width: '23',
  height: '23',
  viewBox: '0 0 23 23',
  xmlns: 'http://www.w3.org/2000/svg'
};

var IconDuration = function IconDuration(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'title',
      null,
      '7AC9DEAC-3F2A-487E-B616-A085E6B4D7FA'
    ),
    _react2.default.createElement(
      'g',
      {
        strokeWidth: '2',
        transform: 'translate(1 1)',
        stroke: '#26B3C5',
        fill: 'none',
        fillRule: 'evenodd',
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
      },
      _react2.default.createElement('rect', {
        x: '.625',
        y: '3.125',
        width: '18.75',
        height: '16.25',
        rx: '1.5'
      }),
      _react2.default.createElement('path', {
        d: 'M.625 8.125h18.75M5.625 5V.625M14.375 5V.625M4.688 11.25a.312.312 0 1 0 0 .625.312.312 0 0 0 0-.625M4.688 15.625a.312.312 0 1 0 0 .625.312.312 0 0 0 0-.625M10 11.25a.312.312 0 1 0 0 .625.312.312 0 0 0 0-.625M10 15.625a.312.312 0 1 0 0 .625.312.312 0 0 0 0-.625M15.313 11.25a.312.312 0 1 0 0 .625.312.312 0 0 0 0-.625M15.313 15.625a.312.312 0 1 0 0 .625.312.312 0 0 0 0-.625'
      })
    )
  );
};

IconDuration.defaultProps = {
  width: '22',
  height: '22',
  viewBox: '0 0 22 22',
  xmlns: 'http://www.w3.org/2000/svg'
};

var IconHours = function IconHours(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'title',
      null,
      '52C90FFB-CC27-4B10-8E63-415ACA6557E4'
    ),
    _react2.default.createElement(
      'g',
      {
        strokeWidth: '2',
        stroke: '#26B3C5',
        fill: 'none',
        fillRule: 'evenodd',
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
      },
      _react2.default.createElement('path', {
        d: 'M3.154 5.792c.523 2.942 2.362 4.957 5.61 5.979 3.25-1.022 5.089-3.037 5.612-5.979.119-.75-.41-1.452-1.181-1.567a1.287 1.287 0 0 0-.222-.017H4.557c-.78-.004-1.416.608-1.42 1.368 0 .072.005.145.017.216z'
      }),
      _react2.default.createElement('path', {
        d: 'M4.557 19.333c-.78.005-1.415-.607-1.42-1.366 0-.073.005-.145.016-.217.524-2.941 2.363-4.956 5.612-5.98 3.248 1.024 5.088 3.039 5.61 5.98.118.751-.41 1.452-1.181 1.567a1.366 1.366 0 0 1-.221.016H4.557zM1 22.083h15.529M1 1.458h15.529'
      })
    )
  );
};

IconHours.defaultProps = {
  width: '18',
  height: '24',
  viewBox: '0 0 18 24',
  xmlns: 'http://www.w3.org/2000/svg'
};

var IconTimezone = function IconTimezone(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'title',
      null,
      '90608BD4-776C-4ABD-B264-60B29B9673AC'
    ),
    _react2.default.createElement(
      'g',
      {
        strokeWidth: '2',
        transform: 'translate(1 1)',
        stroke: '#26B3C5',
        fill: 'none',
        fillRule: 'evenodd',
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
      },
      _react2.default.createElement('path', {
        d: 'M6.3 17.1c-1.29-2.613-1.907-5.571-1.785-8.55C4.393 5.571 5.011 2.613 6.3 0M10.8 17.1c1.29-2.613 1.907-5.571 1.785-8.55.122-2.979-.496-5.937-1.785-8.55'
      }),
      _react2.default.createElement('circle', {
        cx: '9',
        cy: '9',
        r: '9'
      }),
      _react2.default.createElement('path', {
        d: 'M0 8.55h18M.9 4.05h15.3M.9 13.05h15.3'
      })
    )
  );
};

IconTimezone.defaultProps = {
  width: '20',
  height: '20',
  viewBox: '0 0 20 20',
  xmlns: 'http://www.w3.org/2000/svg'
};

var SadFace = function SadFace(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'title',
      null,
      '838C3DF4-2CF1-42A3-BC49-21142AF2003C@2x'
    ),
    _react2.default.createElement(
      'g',
      {
        transform: 'translate(4 4)',
        fill: 'none',
        fillRule: 'evenodd'
      },
      _react2.default.createElement('circle', {
        stroke: '#EF476F',
        strokeWidth: '8',
        cx: '47',
        cy: '47',
        r: '47'
      }),
      _react2.default.createElement(
        'g',
        {
          transform: 'translate(25.898 28.776)',
          fill: '#EF476F'
        },
        _react2.default.createElement('circle', {
          cx: '5.755',
          cy: '5.755',
          r: '5.755'
        }),
        _react2.default.createElement('circle', {
          cx: '37.408',
          cy: '5.755',
          r: '5.755'
        })
      ),
      _react2.default.createElement('path', {
        d: 'M28.776 70.02c3.197-7.673 9.431-11.51 18.704-11.51 9.272 0 15.506 3.837 18.704 11.51',
        stroke: '#EF476F',
        strokeWidth: '7',
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
      })
    )
  );
};

SadFace.defaultProps = {
  width: '102',
  height: '102',
  viewBox: '0 0 102 102',
  xmlns: 'http://www.w3.org/2000/svg'
};

// Cleanup HTML from style tags
// so it won't affect other parts of the UI

var ReactHtmlParserOptions = {
  // eslint-disable-next-line consistent-return
  transform: function transform(node) {
    if (node.type === 'style' && node.name === 'style') {
      return null;
    }
  }
};

function GigDetails(props) {
  var job = props.job,
      application = props.application;

  var shareUrl = void 0;
  if (_topcoderReactUtils.isomorphy.isClientSide()) {
    shareUrl = encodeURIComponent(window.location.href);
  }
  var skills = (0, _gigs.getCustomField)(job.custom_fields, 'Technologies Required');
  if (skills !== 'n/a') skills = skills.split(',').join(', ');
  var hPerW = (0, _gigs.getCustomField)(job.custom_fields, 'Hours per week');
  var compens = job.min_annual_salary === job.max_annual_salary ? job.max_annual_salary : job.min_annual_salary + ' - ' + job.max_annual_salary + ' (USD)';

  return _react2.default.createElement(
    'div',
    { className: '_3YprAu' },
    job.error || job.enable_job_application_form !== 1 ? _react2.default.createElement(
      'div',
      { className: 'cpp82H' },
      job.error ? _react2.default.createElement(SadFace, null) : null,
      _react2.default.createElement(
        'h3',
        null,
        job.error ? 'Gig does not exist' : 'This Gig has been Fulfilled'
      ),
      _react2.default.createElement(
        'div',
        { className: '_2OUp3K' },
        _react2.default.createElement(
          _topcoderReactUtils.Link,
          { to: _topcoderReactUtils.config.GIGS_PAGES_PATH },
          'VIEW OTHER GIGS'
        )
      )
    ) : _react2.default.createElement(
      'div',
      { className: 'tpxQXk' },
      _react2.default.createElement(
        'h2',
        null,
        job.name
      ),
      _react2.default.createElement(
        'div',
        { className: '_17R16j' },
        _react2.default.createElement(
          'div',
          { className: '_33yNaO' },
          _react2.default.createElement(IconLocation, null),
          _react2.default.createElement(
            'div',
            { className: '_1PPxvA' },
            'Location',
            _react2.default.createElement(
              'strong',
              null,
              job.country
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: '_33yNaO' },
          _react2.default.createElement(IconMoney, null),
          _react2.default.createElement(
            'div',
            { className: '_1PPxvA' },
            'Compensation',
            _react2.default.createElement(
              'strong',
              null,
              '$',
              compens,
              ' / ',
              (0, _gigs.getSalaryType)(job.salary_type)
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: '_33yNaO' },
          _react2.default.createElement(IconDuration, null),
          _react2.default.createElement(
            'div',
            { className: '_1PPxvA' },
            'Duration',
            _react2.default.createElement(
              'strong',
              null,
              (0, _gigs.getCustomField)(job.custom_fields, 'Duration')
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: '_33yNaO' },
          _react2.default.createElement(IconHours, null),
          _react2.default.createElement(
            'div',
            { className: '_1PPxvA' },
            'Hours',
            _react2.default.createElement(
              'strong',
              null,
              hPerW === 'n/a' ? hPerW : hPerW + ' hours / week'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: '_33yNaO' },
          _react2.default.createElement(IconTimezone, null),
          _react2.default.createElement(
            'div',
            { className: '_1PPxvA' },
            'Timezone',
            _react2.default.createElement(
              'strong',
              null,
              (0, _gigs.getCustomField)(job.custom_fields, 'Timezone')
            )
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: '_3btISl' },
        _react2.default.createElement(
          'div',
          { className: '_3qffPc' },
          _react2.default.createElement(
            'h4',
            null,
            'Skills'
          ),
          _react2.default.createElement(
            'p',
            { className: '_36jRYd' },
            _react2.default.createElement('img', { src: _iconSkillsBlue2.default, alt: 'skills-icon' }),
            ' ',
            skills
          ),
          _react2.default.createElement(
            'h4',
            null,
            'Description'
          ),
          _react2.default.createElement(
            'p',
            null,
            (0, _reactHtmlParser2.default)(job.job_description_text, ReactHtmlParserOptions)
          ),
          _react2.default.createElement(
            'h4',
            null,
            'Notes'
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'strong',
              null,
              '* Topcoder does not provide visa sponsorship nor will we work with Staffing Agencies.'
            ),
            _react2.default.createElement(
              'strong',
              null,
              '** USA Visa Holders - Please consult an attorney before applying to any Topcoder Gig. Some visa statuses will or will not allow you to conduct freelance work with Topcoder.'
            ),
            _react2.default.createElement(
              'strong',
              null,
              '*** Topcoder and Wipro employees are not eligible for Gig work opportunities. Do not apply and send questions to ',
              _react2.default.createElement(
                'a',
                { href: 'mailto:support@topcoder.com' },
                'support@topcoder.com'
              ),
              '.'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: '_2OUp3K' },
            !application || !application.success ? _react2.default.createElement(
              _topcoderReactUtils.Link,
              { className: '_1ebVT4', to: _topcoderReactUtils.config.GIGS_PAGES_PATH + '/' + job.slug + '/apply' },
              'APPLY TO THIS JOB'
            ) : null,
            _react2.default.createElement(
              _topcoderReactUtils.Link,
              { to: _topcoderReactUtils.config.GIGS_PAGES_PATH },
              'VIEW OTHER JOBS'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: '_2_G176' },
          _react2.default.createElement(
            'div',
            { className: '_3nYgwa' },
            'Share this job on:\xA0\xA0',
            _react2.default.createElement(
              'a',
              { href: 'https://www.linkedin.com/sharing/share-offsite/?url=' + shareUrl, target: '_blank', rel: 'noopener noreferrer' },
              _react2.default.createElement(IconLinkedIn, null)
            ),
            _react2.default.createElement(
              'a',
              { href: 'https://www.facebook.com/sharer/sharer.php?u=' + shareUrl + '&src=share_button', target: '_blank', rel: 'noopener noreferrer' },
              _react2.default.createElement(IconFacebook, null)
            ),
            _react2.default.createElement(
              'a',
              { href: 'https://twitter.com/intent/tweet?url=' + shareUrl, target: '_blank', rel: 'noopener noreferrer' },
              _react2.default.createElement(IconTwitter, null)
            )
          ),
          _react2.default.createElement(
            'div',
            { className: '_3heDMj' },
            _react2.default.createElement(
              'h6',
              null,
              'SUBSCRIBE TO WEEKLY UPDATES'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Not ready to apply? Want to stay tuned for any new gigs that may be upcoming? Join our weekly Gig Work list.'
            ),
            _react2.default.createElement(_SubscribeMailChimpTag2.default, { listId: '28bfd3c062', tags: ['Gig Work'] })
          ),
          _react2.default.createElement(
            'div',
            { className: '_2BPNPz' },
            _react2.default.createElement(
              'p',
              null,
              'At Topcoder, we pride ourselves in bringing our customers the very best candidates to help fill their needs. Want to improve your chances? You can do a few things:'
            ),
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement('img', { src: _l2.default, alt: 'label 1' }),
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'strong',
                    null,
                    'Make sure your ',
                    _react2.default.createElement(
                      'a',
                      { target: '_blank', rel: 'noreferrer', href: 'https://www.topcoder.com/settings/profile' },
                      'Topcoder profile'
                    ),
                    ' says it all.'
                  ),
                  ' Fill out your profile to the best of your ability. Your skills, your location, your devices, etc, all help you improve your chances of being selected for a gig.'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement('img', { src: _l4.default, alt: 'label 2' }),
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'strong',
                    null,
                    'Let us know you\u2019re here!'
                  ),
                  ' Check in on our ',
                  _react2.default.createElement(
                    'a',
                    { target: '_blank', rel: 'noreferrer', href: 'https://apps.topcoder.com/forums/?module=ThreadList&forumID=703475' },
                    'Gig Work forum'
                  ),
                  ' and tell us you\u2019re looking for a gig. It\u2019s great visibility for the Gig team.'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement('img', { src: _l6.default, alt: 'label 3' }),
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'strong',
                    null,
                    'Check out our ',
                    _react2.default.createElement(
                      'a',
                      { target: '_blank', rel: 'noreferrer', href: 'https://www.topcoder.com/challenges' },
                      'Topcoder challenges'
                    ),
                    ' and participate.'
                  ),
                  ' Challenges showing your technology skills make you a \u201Cqualified\u201D candidate so we know you\u2019re good. The proof is in the pudding!'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: '_3JELNL' },
            'If you have any questions or doubts, don\u2019t hesitate  to email ',
            _react2.default.createElement(
              'a',
              { href: 'mailto:support@topcoder.com' },
              'support@topcoder.com'
            ),
            '.'
          )
        )
      )
    )
  );
}

GigDetails.defaultProps = {
  application: null
};

GigDetails.propTypes = {
  job: _propTypes2.default.shape().isRequired,
  application: _propTypes2.default.shape()
};

/***/ }),

/***/ 4073:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(78);

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = __webpack_require__(21);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(13);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(10);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(11);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _tc = __webpack_require__(69);

var _topcoderReactUiKit = __webpack_require__(54);

var _modal = __webpack_require__(508);

var _modal2 = _interopRequireDefault(_modal);

var _style = __webpack_require__(4074);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Holds the base URL of Community App endpoints that proxy HTTP request to
 * mailchimp APIs. */
/**
 * Genetic subscribe for MailChimp tags component
 */
var PROXY_ENDPOINT = '/api/mailchimp';

var SubscribeMailChimpTagContainer = function (_React$Component) {
  (0, _inherits3.default)(SubscribeMailChimpTagContainer, _React$Component);

  function SubscribeMailChimpTagContainer(props) {
    (0, _classCallCheck3.default)(this, SubscribeMailChimpTagContainer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SubscribeMailChimpTagContainer.__proto__ || (0, _getPrototypeOf2.default)(SubscribeMailChimpTagContainer)).call(this, props));

    _this.state = {
      error: '',
      subsribed: false,
      disabled: true,
      inputVal: ''
    };
    _this.onSubscribeClick = _this.onSubscribeClick.bind(_this);
    _this.onInputChange = _this.onInputChange.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(SubscribeMailChimpTagContainer, [{
    key: 'onSubscribeClick',
    value: function onSubscribeClick() {
      var _this2 = this;

      var inputVal = this.state.inputVal;
      var _props = this.props,
          listId = _props.listId,
          tags = _props.tags;

      var fetchUrl = PROXY_ENDPOINT + '/' + listId + '/members/' + inputVal + '/tags';
      var data = {
        email_address: inputVal,
        status: 'subscribed',
        tags: tags.map(function (t) {
          return { name: t, status: 'active' };
        })
      };
      var formData = (0, _stringify2.default)(data);
      fetch(fetchUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: formData
      }).then(function (result) {
        return result.json();
      }).then(function (dataResponse) {
        if (dataResponse.status === 204) {
          // regist success
          return _this2.setState({
            subsribed: true,
            error: ''
          });
        }
        if (dataResponse.status === 404) {
          // new email register it for list and add tags
          return fetch(PROXY_ENDPOINT + '/' + listId + '/members', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: (0, _stringify2.default)({
              email_address: inputVal,
              status: 'subscribed',
              tags: tags
            })
          }).then(function (result) {
            return result.json();
          }).then(function () {
            _this2.setState({
              subsribed: true,
              error: ''
            });
          });
        }
        return _this2.setState({
          subsribed: false,
          error: 'Error ' + dataResponse.status + ' when assign to tags'
        });
      }).catch(function (e) {
        _this2.setState({
          subsribed: false,
          error: e.message
        });
      });
    }
  }, {
    key: 'onInputChange',
    value: function onInputChange(event) {
      this.setState({
        inputVal: event.target.value,
        disabled: !(0, _tc.isValidEmail)(event.target.value)
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          disabled = _state.disabled,
          inputVal = _state.inputVal,
          error = _state.error,
          subsribed = _state.subsribed;

      return _react2.default.createElement(
        'div',
        { className: _style2.default.wrapper },
        subsribed || error ? _react2.default.createElement(
          _topcoderReactUiKit.Modal,
          {
            theme: _modal2.default,
            onCancel: function onCancel() {
              return _this3.setState({
                subsribed: false,
                error: false,
                inputVal: '',
                disabled: true
              });
            }
          },
          _react2.default.createElement(
            'div',
            { className: _modal2.default.modalMsg },
            _react2.default.createElement(
              'h4',
              null,
              subsribed ? 'Congratulations!' : 'Ops :('
            ),
            _react2.default.createElement(
              'p',
              { style: { fontSize: '24px' } },
              error || 'You are now subscribed.'
            )
          )
        ) : null,
        _react2.default.createElement('input', { type: 'email', placeholder: 'Email', value: inputVal, onChange: this.onInputChange }),
        _react2.default.createElement(
          'button',
          { type: 'button', onClick: this.onSubscribeClick, disabled: disabled, className: _style2.default.button },
          'Subscribe'
        )
      );
    }
  }]);
  return SubscribeMailChimpTagContainer;
}(_react2.default.Component);

SubscribeMailChimpTagContainer.propTypes = {
  listId: _propTypes2.default.string.isRequired,
  tags: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired
};

exports.default = SubscribeMailChimpTagContainer;

/***/ }),

/***/ 4074:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"wrapper":"_1gHoAX","button":"_3vUrzV"};

/***/ }),

/***/ 4075:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"_3YprAu","error":"cpp82H","wrap":"tpxQXk","content":"_3btISl","right":"_2_G176","support":"_3JELNL","infos":"_17R16j","infos-item":"_33yNaO","infos-data":"_1PPxvA","shareButtons":"_3nYgwa","subscribe-area":"_3heDMj","info-area":"_2BPNPz","gig-skills":"jIlors","left":"_3qffPc","skills":"_36jRYd","cta-buttons":"_2OUp3K","primaryBtn":"_1ebVT4"};

/***/ }),

/***/ 4076:
/***/ (function(module, exports) {

module.exports = "https://community-app-cdn.topcoder.com/static-assets/images/97abc6f81363e1dec443cc880379a2b8.png";

/***/ }),

/***/ 4077:
/***/ (function(module, exports) {

module.exports = "https://community-app-cdn.topcoder.com/static-assets/images/5bb0dad578bcfd9ba9be07c963c66249.png";

/***/ }),

/***/ 4078:
/***/ (function(module, exports) {

module.exports = "https://community-app-cdn.topcoder.com/static-assets/images/0ba009efbb209979bd77f4d2dfc653aa.png";

/***/ }),

/***/ 4079:
/***/ (function(module, exports) {

module.exports = "https://community-app-cdn.topcoder.com/static-assets/images/075c8f180be8ab732b129da44aef56ae.png";

/***/ }),

/***/ 4080:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(19);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = __webpack_require__(5);

var _extends4 = _interopRequireDefault(_extends3);

var _getPrototypeOf = __webpack_require__(21);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(13);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(10);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(11);

var _inherits3 = _interopRequireDefault(_inherits2);

var _lodash = __webpack_require__(4);

var _lodash2 = _interopRequireDefault(_lodash);

var _recruitCRM = __webpack_require__(505);

var _recruitCRM2 = _interopRequireDefault(_recruitCRM);

var _GigApply = __webpack_require__(4081);

var _GigApply2 = _interopRequireDefault(_GigApply);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(36);

var _tc = __webpack_require__(69);

var _techSkills = __webpack_require__(4087);

var _techSkills2 = _interopRequireDefault(_techSkills);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Apply for a job page
 */

var countries = __webpack_require__(4088);
countries.registerLocale(__webpack_require__(4090));

var RecruitCRMJobApplyContainer = function (_React$Component) {
  (0, _inherits3.default)(RecruitCRMJobApplyContainer, _React$Component);

  function RecruitCRMJobApplyContainer(props) {
    (0, _classCallCheck3.default)(this, RecruitCRMJobApplyContainer);

    // initial state
    var _this = (0, _possibleConstructorReturn3.default)(this, (RecruitCRMJobApplyContainer.__proto__ || (0, _getPrototypeOf2.default)(RecruitCRMJobApplyContainer)).call(this, props));

    _this.state = {
      formErrors: {},
      formData: {
        availFrom: new Date().toISOString(),
        skills: _lodash2.default.map(_techSkills2.default, function (label) {
          return { label: label, selected: false };
        }),
        durationConfirm: [{ label: 'Yes', value: false }, { label: 'No', value: false }],
        timezoneConfirm: [{ label: 'Yes', value: false }, { label: 'No', value: false }],
        agreedTerms: false,
        country: _lodash2.default.map(countries.getNames('en'), function (val) {
          return { label: val, selected: false };
        })
        // eslint-disable-next-line react/destructuring-assignment
      }
    };

    // binds
    _this.onFormInputChange = _this.onFormInputChange.bind(_this);
    _this.onApplyClick = _this.onApplyClick.bind(_this);
    _this.validateForm = _this.validateForm.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(RecruitCRMJobApplyContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var formData = this.state.formData;
      var user = this.props.user;

      this.setState({
        formData: _lodash2.default.merge(formData, user)
      });
    }
  }, {
    key: 'onFormInputChange',
    value: function onFormInputChange(key, value) {
      // update the state
      this.setState(function (state) {
        return (0, _extends4.default)({}, state, {
          formData: (0, _extends4.default)({}, state.formData, (0, _defineProperty3.default)({}, key, value))
        });
      });
      this.validateForm(key);
    }
  }, {
    key: 'onApplyClick',
    value: function onApplyClick() {
      var _props = this.props,
          applyForJob = _props.applyForJob,
          job = _props.job;
      var formData = this.state.formData;

      this.validateForm();
      this.setState(function (state) {
        if (_lodash2.default.isEmpty(state.formErrors)) {
          applyForJob(job, formData);
        }
      });
    }
  }, {
    key: 'validateForm',
    value: function validateForm(prop) {
      this.setState(function (state) {
        var formData = state.formData,
            formErrors = state.formErrors;
        // Form validation happens here

        var requiredTextFields = ['fname', 'lname', 'city', 'reffereal', 'phone', 'email'];
        // check required text fields for value
        // check min/max lengths
        _lodash2.default.each(requiredTextFields, function (key) {
          // validate only modified prop if set
          // and do not touch the others
          if (prop && prop !== key) return;
          if (!formData[key] || !_lodash2.default.trim(formData[key])) formErrors[key] = 'Required field';else if (formData[key] && _lodash2.default.trim(formData[key]).length < 2) formErrors[key] = 'Must be at least 2 characters';else if (formData[key] && _lodash2.default.trim(formData[key]).length > 2) {
            switch (key) {
              case 'reffereal':
                if (_lodash2.default.trim(formData[key]).length > 2000) formErrors[key] = 'Must be max 2000 characters';else delete formErrors[key];
                break;
              case 'city':
              case 'phone':
                if (_lodash2.default.trim(formData[key]).length > 50) formErrors[key] = 'Must be max 50 characters';else delete formErrors[key];
                break;
              default:
                if (_lodash2.default.trim(formData[key]).length > 40) formErrors[key] = 'Must be max 40 characters';else delete formErrors[key];
                break;
            }
          } else delete formErrors[key];
        });
        // check for selected country
        if (!prop || prop === 'country') {
          if (!_lodash2.default.find(formData.country, { selected: true })) formErrors.country = 'Please, select your country';else delete formErrors.country;
        }
        // check payExpectation to be a number
        if (!prop || prop === 'payExpectation') {
          if (formData.payExpectation && _lodash2.default.trim(formData.payExpectation)) {
            if (!_lodash2.default.isInteger(_lodash2.default.toNumber(formData.payExpectation))) formErrors.payExpectation = 'Must be integer value in $';else delete formErrors.payExpectation;
          } else delete formErrors.payExpectation;
        }
        // check for valid email
        if (!prop || prop === 'email') {
          if (formData.email && _lodash2.default.trim(formData.email)) {
            if (!(0, _tc.isValidEmail)(formData.email)) formErrors.email = 'Invalid email';else delete formErrors.email;
          }
        }
        // require atleast 1 skill
        if (!prop || prop === 'skills') {
          var skills = _lodash2.default.filter(formData.skills, ['selected', true]);
          if (!skills.length) formErrors.skills = 'Please, add technical skills';else if (skills.map(function (skill) {
            return skill.label;
          }).join(',').length >= 100) formErrors.skills = 'Sum of all skill characters may not be greater than 100';else delete formErrors.skills;
        }
        // have accepted terms
        if (!prop || prop === 'agreedTerms') {
          if (!formData.agreedTerms) formErrors.agreedTerms = 'Please, accept our terms';else delete formErrors.agreedTerms;
        }
        // has CV file ready for upload
        if (!prop || prop === 'fileCV') {
          if (!formData.fileCV) formErrors.fileCV = 'Please, pick your CV file for uploading';else {
            var sizeInMB = (formData.fileCV.size / (1024 * 1024)).toFixed(2);
            if (sizeInMB > 8) {
              formErrors.fileCV = 'Max file size is limited to 8 MB';
              delete formData.fileCV;
            } else if (_lodash2.default.endsWith(formData.fileCV.name, '.pdf') || _lodash2.default.endsWith(formData.fileCV.name, '.docx')) {
              delete formErrors.fileCV;
            } else {
              formErrors.fileCV = 'Only .pdf and .docx files are allowed';
            }
          }
        }
        // updated state
        return (0, _extends4.default)({}, state, {
          formErrors: formErrors
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          formErrors = _state.formErrors,
          formData = _state.formData;

      return _react2.default.createElement(_GigApply2.default, (0, _extends4.default)({}, this.props, {
        onFormInputChange: this.onFormInputChange,
        formErrors: formErrors,
        formData: formData,
        onApplyClick: this.onApplyClick
      }));
    }
  }]);
  return RecruitCRMJobApplyContainer;
}(_react2.default.Component);

RecruitCRMJobApplyContainer.defaultProps = {
  user: null,
  applying: false,
  application: null
};

RecruitCRMJobApplyContainer.propTypes = {
  job: _propTypes2.default.shape().isRequired,
  user: _propTypes2.default.shape(),
  applyForJob: _propTypes2.default.func.isRequired,
  applying: _propTypes2.default.bool,
  application: _propTypes2.default.shape()
};

function mapStateToProps(state, ownProps) {
  var profile = state.auth.profile;
  var job = ownProps.job;

  var userData = null;
  if (profile && profile.email) {
    userData = {
      fname: profile.firstName,
      lname: profile.lastName,
      email: profile.email,
      city: profile.addresses && profile.addresses[0] ? profile.addresses[0].city : '',
      handle: profile.handle
    };
  }
  return {
    user: userData,
    applying: state.recruitCRM && state.recruitCRM[job.slug] ? state.recruitCRM[job.slug].applying : false,
    application: state.recruitCRM && state.recruitCRM[job.slug] ? state.recruitCRM[job.slug].application : null
  };
}

function mapDispatchToActions(dispatch) {
  var a = _recruitCRM2.default.recruit;
  return {
    applyForJob: function applyForJob(job, payload) {
      dispatch(a.applyForJobInit(job, payload));
      dispatch(a.applyForJobDone(job, payload));
    }
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToActions)(RecruitCRMJobApplyContainer);

/***/ }),

/***/ 4081:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = GigApply;

var _lodash = __webpack_require__(4);

var _lodash2 = _interopRequireDefault(_lodash);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _topcoderReactUtils = __webpack_require__(7);

var _TextInput = __webpack_require__(506);

var _TextInput2 = _interopRequireDefault(_TextInput);

var _Datepicker = __webpack_require__(3417);

var _Datepicker2 = _interopRequireDefault(_Datepicker);

var _DropdownTerms = __webpack_require__(3420);

var _DropdownTerms2 = _interopRequireDefault(_DropdownTerms);

var _RadioButton = __webpack_require__(3415);

var _RadioButton2 = _interopRequireDefault(_RadioButton);

var _Checkbox = __webpack_require__(3410);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _gigs = __webpack_require__(996);

var _Modal = __webpack_require__(981);

var _Modal2 = _interopRequireDefault(_Modal);

var _FilePicker = __webpack_require__(4082);

var _FilePicker2 = _interopRequireDefault(_FilePicker);

var _Dropdown = __webpack_require__(997);

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _LoadingIndicator = __webpack_require__(15);

var _LoadingIndicator2 = _interopRequireDefault(_LoadingIndicator);

__webpack_require__(4085);

var _bigCheckmark = __webpack_require__(4086);

var _bigCheckmark2 = _interopRequireDefault(_bigCheckmark);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The Gig apply page.
 */

var SadFace = function SadFace(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'title',
      null,
      '838C3DF4-2CF1-42A3-BC49-21142AF2003C@2x'
    ),
    _react2.default.createElement(
      'g',
      {
        transform: 'translate(4 4)',
        fill: 'none',
        fillRule: 'evenodd'
      },
      _react2.default.createElement('circle', {
        stroke: '#EF476F',
        strokeWidth: '8',
        cx: '47',
        cy: '47',
        r: '47'
      }),
      _react2.default.createElement(
        'g',
        {
          transform: 'translate(25.898 28.776)',
          fill: '#EF476F'
        },
        _react2.default.createElement('circle', {
          cx: '5.755',
          cy: '5.755',
          r: '5.755'
        }),
        _react2.default.createElement('circle', {
          cx: '37.408',
          cy: '5.755',
          r: '5.755'
        })
      ),
      _react2.default.createElement('path', {
        d: 'M28.776 70.02c3.197-7.673 9.431-11.51 18.704-11.51 9.272 0 15.506 3.837 18.704 11.51',
        stroke: '#EF476F',
        strokeWidth: '7',
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
      })
    )
  );
};

SadFace.defaultProps = {
  width: '102',
  height: '102',
  viewBox: '0 0 102 102',
  xmlns: 'http://www.w3.org/2000/svg'
};

var BackArrowGig = function BackArrowGig(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'style',
      null,
      '.st0',
      '{',
      'fill-rule:evenodd;clip-rule:evenodd;fill:#229174',
      '}'
    ),
    _react2.default.createElement(
      'title',
      null,
      'BD4BD0F4-C75C-4897-A58C-B092051E2535'
    ),
    _react2.default.createElement(
      'g',
      {
        transform: 'translate(-4 -2)',
        id: 'Symbols'
      },
      _react2.default.createElement('path', {
        className: 'st0',
        d: 'M10 13.4L4.6 8 10 2.6 11.4 4l-4 4 4 4z',
        id: 'icon-color'
      })
    )
  );
};

BackArrowGig.defaultProps = {
  id: 'Layer_1',
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 8 12'
};
function GigApply(props) {
  var job = props.job,
      onFormInputChange = props.onFormInputChange,
      formData = props.formData,
      formErrors = props.formErrors,
      onApplyClick = props.onApplyClick,
      applying = props.applying,
      application = props.application;


  return _react2.default.createElement(
    'div',
    { className: 'd-xrPd' },
    job.error || job.enable_job_application_form !== 1 ? _react2.default.createElement(
      'div',
      { className: '_1vX8GD' },
      _react2.default.createElement(
        'h3',
        null,
        'Gig does not exist.'
      ),
      _react2.default.createElement(
        'div',
        { className: '_2sZaxL' },
        _react2.default.createElement(
          _topcoderReactUtils.Link,
          { to: _topcoderReactUtils.config.GIGS_PAGES_PATH },
          'VIEW OTHER GIGS'
        )
      )
    ) : _react2.default.createElement(
      'div',
      { className: 'sDX0DP' },
      _react2.default.createElement(
        'h2',
        null,
        job.name
      ),
      _react2.default.createElement(
        _topcoderReactUtils.Link,
        { to: _topcoderReactUtils.config.GIGS_PAGES_PATH + '/' + job.slug, className: '_1jaj9k' },
        _react2.default.createElement(BackArrowGig, null),
        ' GIG DETAILS'
      ),
      _react2.default.createElement('div', { className: 'D6NcCm' }),
      application ? _react2.default.createElement(
        'div',
        { className: '_3MFlED' },
        application.error ? _react2.default.createElement(SadFace, null) : _react2.default.createElement('img', { src: _bigCheckmark2.default, alt: 'bigCheckmark OK' }),
        _react2.default.createElement(
          'h2',
          null,
          application.error ? 'OOPS!' : 'APPLICATION SUBMITTED'
        ),
        application.error ? _react2.default.createElement(
          'p',
          null,
          'Looks like there is a problem on our end. Please try again.',
          _react2.default.createElement('br', null),
          'If this persists please contact ',
          _react2.default.createElement(
            'a',
            { href: 'mailto:support@topcoder.com' },
            'support@topcoder.com'
          ),
          '.'
        ) : _react2.default.createElement(
          'p',
          null,
          'We will contact you via email if it seems like a fit!'
        ),
        _react2.default.createElement(
          'div',
          { className: '_2sZaxL' },
          application.error ? _react2.default.createElement(
            'a',
            {
              href: '#',
              className: '_7MgUVI',
              onClick: function onClick(e) {
                e.preventDefault();
                window.location.reload();
              }
            },
            'APPLY AGAIN'
          ) : _react2.default.createElement(
            _topcoderReactUtils.Link,
            { to: '' + _topcoderReactUtils.config.GIGS_PAGES_PATH, className: '_7MgUVI' },
            'GO TO GIG LIST'
          )
        )
      ) : null,
      applying ? _react2.default.createElement(
        'div',
        { className: '_3YkbNx' },
        _react2.default.createElement(_LoadingIndicator2.default, null),
        _react2.default.createElement(
          'p',
          { className: '_1gho3G' },
          'Processing your application\u2026'
        )
      ) : null,
      !application && !applying ? _react2.default.createElement(
        'div',
        { className: 'lAapQI' },
        _react2.default.createElement(
          'h4',
          null,
          'PERSONAL INFORMATION'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Welcome to Topcoder Gigs! We\u2019d like to get to know you.'
        ),
        _react2.default.createElement(
          'div',
          { className: '_32oAtP' },
          _react2.default.createElement(
            'div',
            { className: 'Ls02Ba' },
            _react2.default.createElement(_TextInput2.default, {
              placeholder: 'First Name',
              label: 'First Name',
              onChange: function onChange(val) {
                return onFormInputChange('fname', val);
              },
              errorMsg: formErrors.fname,
              value: formData.fname,
              required: true
            }),
            _react2.default.createElement(_TextInput2.default, {
              placeholder: 'Last Name',
              label: 'Last Name',
              onChange: function onChange(val) {
                return onFormInputChange('lname', val);
              },
              errorMsg: formErrors.lname,
              value: formData.lname,
              required: true
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'Ls02Ba' },
            _react2.default.createElement(_TextInput2.default, {
              placeholder: 'Email',
              label: 'Email',
              onChange: function onChange(val) {
                return onFormInputChange('email', val);
              },
              errorMsg: formErrors.email,
              value: formData.email,
              required: true
            }),
            _react2.default.createElement(_TextInput2.default, {
              placeholder: 'Phone Including Country Code',
              label: 'Phone',
              onChange: function onChange(val) {
                return onFormInputChange('phone', val);
              },
              errorMsg: formErrors.phone,
              value: formData.phone,
              required: true
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'Ls02Ba' },
            _react2.default.createElement(_TextInput2.default, {
              placeholder: 'City',
              label: 'City',
              onChange: function onChange(val) {
                return onFormInputChange('city', val);
              },
              errorMsg: formErrors.city,
              value: formData.city,
              required: true
            }),
            _react2.default.createElement(_Dropdown2.default, {
              placeholder: 'Country',
              label: 'Country',
              onChange: function onChange(val) {
                return onFormInputChange('country', val);
              },
              errorMsg: formErrors.country,
              options: formData.country,
              required: true
            })
          )
        ),
        _react2.default.createElement(
          'h4',
          null,
          'TOPCODER INFORMATION'
        ),
        _react2.default.createElement(
          'p',
          null,
          'If you have a Topcoder profile, please share. ',
          _react2.default.createElement(
            'a',
            { href: 'https://accounts.topcoder.com/member/registration?utm_source=community&utm_campaign=recruit&utm_medium=GigWork-application-page', target: '_blank', rel: 'noopener noreferrer' },
            'Not a Member'
          ),
          '?'
        ),
        _react2.default.createElement(
          'div',
          { className: '_32oAtP' },
          _react2.default.createElement(
            'div',
            { className: 'Ls02Ba' },
            _react2.default.createElement(_TextInput2.default, {
              placeholder: 'Topcoder Username',
              label: 'Topcoder Username',
              onChange: function onChange(val) {
                return onFormInputChange('handle', val);
              },
              errorMsg: formErrors.handle,
              value: formData.handle
            }),
            _react2.default.createElement(_TextInput2.default, {
              placeholder: 'Topcoder Profile (topcoder.com/members/[username])',
              label: 'Topcoder Profile',
              onChange: function onChange(val) {
                return onFormInputChange('tcProfileLink', val);
              },
              errorMsg: formErrors.tcProfileLink,
              value: formData.handle ? 'topcoder.com/members/' + formData.handle : null
            })
          )
        ),
        _react2.default.createElement(
          'h4',
          null,
          'SHARE YOUR EXPECTATIONS'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Your Professional Work History'
        ),
        _react2.default.createElement(
          'div',
          { className: '_32oAtP' },
          _react2.default.createElement(
            'div',
            { className: 'Ls02Ba' },
            _react2.default.createElement(_TextInput2.default, {
              placeholder: 'Weekly Pay Expectation in $ (eg. 500)',
              label: 'Weekly Pay Expectation',
              onChange: function onChange(val) {
                return onFormInputChange('payExpectation', val);
              },
              errorMsg: formErrors.payExpectation,
              value: formData.payExpectation
            }),
            _react2.default.createElement(_Datepicker2.default, {
              placeholder: 'Available From',
              label: 'Available From',
              onChange: function onChange(val) {
                return onFormInputChange('availFrom', val ? val.toISOString() : null);
              },
              errorMsg: formErrors.availFrom,
              value: formData.availFrom
            })
          )
        ),
        _react2.default.createElement(
          'h4',
          null,
          'RESUME & SKILLS'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Upload Your Resume or CV'
        ),
        _react2.default.createElement(
          'div',
          { className: '_32oAtP' },
          _react2.default.createElement(_FilePicker2.default, {
            file: formData.fileCV,
            onFilePick: function onFilePick(files) {
              return onFormInputChange('fileCV', files[0]);
            },
            inputOptions: {
              accept: '.pdf,.docx'
            },
            infoText: 'Drag & drop your resume or CV here - please omit contact information *',
            errorMsg: formErrors.fileCV
          }),
          _react2.default.createElement('div', { className: 'a3SadA' }),
          _react2.default.createElement(_DropdownTerms2.default, {
            terms: formData.skills,
            label: 'Tech Skills',
            placeholder: 'Tech Skills',
            onChange: function onChange(val) {
              return onFormInputChange('skills', val);
            },
            errorMsg: formErrors.skills,
            addNewOptionPlaceholder: 'Type to add another skill...',
            required: true
          })
        ),
        _react2.default.createElement(
          'h4',
          null,
          'FINAL QUESTIONS'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Please Complete the Following Questions'
        ),
        _react2.default.createElement(
          'div',
          { className: '_32oAtP' },
          _react2.default.createElement(_TextInput2.default, {
            placeholder: 'How did you hear about this gig?',
            label: 'How did you hear about this gig?',
            onChange: function onChange(val) {
              return onFormInputChange('reffereal', val);
            },
            errorMsg: formErrors.reffereal,
            value: formData.reffereal,
            required: true
          }),
          _react2.default.createElement('div', { className: 'a3SadA' }),
          _react2.default.createElement(_TextInput2.default, {
            placeholder: 'Why do you think you\'re a good fit for this gig?',
            label: 'Why do you think you\'re a good fit for this gig?',
            onChange: function onChange(val) {
              return onFormInputChange('whyFit', val);
            },
            errorMsg: formErrors.whyFit,
            value: formData.whyFit
          }),
          _react2.default.createElement(
            'p',
            null,
            'Are you able to work during the specified timezone? (',
            _react2.default.createElement(
              'strong',
              null,
              '' + (0, _gigs.getCustomField)(job.custom_fields, 'Timezone')
            ),
            ')'
          ),
          _react2.default.createElement(_RadioButton2.default, {
            onChange: function onChange(val) {
              return onFormInputChange('timezoneConfirm', val);
            },
            errorMsg: formErrors.timezoneConfirm,
            options: formData.timezoneConfirm,
            size: 'lg'
          }),
          _react2.default.createElement(
            'p',
            null,
            'Are you ok to work with the duration of the gig? (',
            _react2.default.createElement(
              'strong',
              null,
              '' + (0, _gigs.getCustomField)(job.custom_fields, 'Duration')
            ),
            ')'
          ),
          _react2.default.createElement(_RadioButton2.default, {
            onChange: function onChange(val) {
              return onFormInputChange('durationConfirm', val);
            },
            errorMsg: formErrors.durationConfirm,
            options: formData.durationConfirm,
            size: 'lg'
          }),
          _react2.default.createElement(
            'div',
            { className: '_1t8WPO' },
            _react2.default.createElement(_TextInput2.default, {
              placeholder: 'Add any other notes you might have',
              label: 'Notes',
              onChange: function onChange(val) {
                return onFormInputChange('notes', val);
              },
              errorMsg: formErrors.notes
            })
          )
        ),
        _react2.default.createElement('div', { className: 'D6NcCm' }),
        _react2.default.createElement(
          'div',
          { className: '_3C7Hb4' },
          _react2.default.createElement(
            'div',
            { className: '_2R3wJO' },
            _react2.default.createElement(
              'div',
              { className: '_2OPSZ7' },
              _react2.default.createElement(_Checkbox2.default, {
                onChange: function onChange(val) {
                  return onFormInputChange('agreedTerms', val);
                },
                checked: formData.agreedTerms,
                errorMsg: formErrors.agreedTerms,
                size: 'lg'
              }),
              _react2.default.createElement(
                'span',
                { className: '_1u376Y' },
                'I agree to ',
                _react2.default.createElement(
                  _Modal2.default,
                  { id: '2gkc8LtNkZw6p0AExwSIcA' },
                  _react2.default.createElement(
                    'span',
                    { className: '_35z8bp' },
                    'Candidate Terms'
                  )
                ),
                ' *'
              )
            )
          ),
          _react2.default.createElement(
            'span',
            null,
            'View Our Equal ',
            _react2.default.createElement(
              _Modal2.default,
              { id: 'VAeo0vZ5tQFjPZlIcdt0m' },
              _react2.default.createElement(
                'span',
                { className: '_35z8bp' },
                'Employment Opportunity Policy'
              )
            )
          )
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', className: '_7MgUVI', onClick: onApplyClick, disabled: !_lodash2.default.isEmpty(formErrors) || applying },
          'APPLY TO THIS JOB'
        )
      ) : null
    )
  );
}

GigApply.defaultProps = {
  formErrors: {},
  applying: false,
  application: null
};

GigApply.propTypes = {
  job: _propTypes2.default.shape().isRequired,
  formErrors: _propTypes2.default.shape(),
  formData: _propTypes2.default.shape().isRequired,
  onFormInputChange: _propTypes2.default.func.isRequired,
  onApplyClick: _propTypes2.default.func.isRequired,
  applying: _propTypes2.default.bool,
  application: _propTypes2.default.shape()
};

/***/ }),

/***/ 4082:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _getClassName2 = __webpack_require__(89);

var _getClassName3 = _interopRequireDefault(_getClassName2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDropzone = __webpack_require__(4838);

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

__webpack_require__(4084);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * FilestackFilePicker component
 */
/**
 * GUIKit FilePicker based on filestack-react
 */

var _styleModuleImportMap = {
  './styles.scss': {
    'container': 'WSiyZm',
    'hasError': '_3z-2aq',
    'btn': 'GSLdqH',
    'infoText': 'rVqt9H',
    'withFile': '_1pCghd',
    'errorMessage': 'HIM_PK'
  }
};
function FilestackFilePicker(_ref) {
  var onFilePick = _ref.onFilePick,
      btnText = _ref.btnText,
      infoText = _ref.infoText,
      options = _ref.options,
      errorMsg = _ref.errorMsg,
      inputOptions = _ref.inputOptions,
      file = _ref.file;

  var fileName = file ? file.name : null;
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(
      _reactDropzone2.default,
      (0, _extends3.default)({
        onDrop: function onDrop(acceptedFiles) {
          fileName = acceptedFiles[0].name;
          onFilePick(acceptedFiles);
        }
      }, options),
      function (_ref2) {
        var getRootProps = _ref2.getRootProps,
            getInputProps = _ref2.getInputProps;
        return _react2.default.createElement(
          'section',
          (0, _extends3.default)({}, getRootProps(), {
            className: (0, _getClassName3.default)('container ' + (errorMsg ? 'hasError' : ''), _styleModuleImportMap)
          }),
          _react2.default.createElement('input', getInputProps(inputOptions)),
          fileName ? _react2.default.createElement(
            'p',
            { className: 'rVqt9H _1pCghd' },
            fileName
          ) : _react2.default.createElement(
            'p',
            { className: 'rVqt9H' },
            infoText,
            _react2.default.createElement(
              'span',
              null,
              'OR'
            )
          ),
          _react2.default.createElement(
            'button',
            { className: 'GSLdqH', type: 'button' },
            btnText
          )
        );
      }
    ),
    errorMsg ? _react2.default.createElement(
      'span',
      { className: 'HIM_PK' },
      errorMsg
    ) : null
  );
}

FilestackFilePicker.defaultProps = {
  infoText: '',
  btnText: 'SELECT A FILE',
  options: {},
  errorMsg: '',
  inputOptions: {},
  file: null
};

/**
 * Prop Validation
 */
FilestackFilePicker.propTypes = {
  infoText: _propTypes2.default.string,
  btnText: _propTypes2.default.string,
  onFilePick: _propTypes2.default.func.isRequired,
  options: _propTypes2.default.shape(),
  errorMsg: _propTypes2.default.string,
  inputOptions: _propTypes2.default.shape(),
  file: _propTypes2.default.shape()
};

exports.default = FilestackFilePicker;

/***/ }),

/***/ 4083:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (file, acceptedFiles) {
  if (file && acceptedFiles) {
    var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(',');
    var fileName = file.name || '';
    var mimeType = (file.type || '').toLowerCase();
    var baseMimeType = mimeType.replace(/\/.*$/, '');
    return acceptedFilesArray.some(function (type) {
      var validType = type.trim().toLowerCase();

      if (validType.charAt(0) === '.') {
        return fileName.toLowerCase().endsWith(validType);
      } else if (validType.endsWith('/*')) {
        // This is something like a image/* mime type
        return baseMimeType === validType.replace(/\/.*$/, '');
      }

      return mimeType === validType;
    });
  }

  return true;
};

/***/ }),

/***/ 4084:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"primary-green-xs":"_3uGB3-","primary-green-sm":"_1jAifV","primary-green-md":"_2TFmx_","primary-green-lg":"_3Q3B7Q","primary-white-xs":"_1PoYkb","primary-white-sm":"_3IAdGk","primary-white-md":"_1m3_HO","primary-white-lg":"I2mQR-","primary-borderless-xs":"_28QcCS","primary-borderless-sm":"_3UXObe","primary-borderless-md":"lb4smP","primary-borderless-lg":"_2AA7LQ","sec-gray-xs":"_17giUx","sec-gray-sm":"RB1RkG","sec-gray-md":"_3ThKd3","sec-gray-lg":"vhPaYg","warn-red-xs":"_2DFyvF","warn-red-sm":"_2VfdtF","warn-red-md":"_2xJjfB","warn-red-lg":"k1SzbV","themedButtonDisabled":"_3qxIys","container":"WSiyZm","hasError":"_3z-2aq","btn":"GSLdqH","infoText":"rVqt9H","withFile":"_1pCghd","errorMessage":"HIM_PK"};

/***/ }),

/***/ 4085:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"loading-wrap":"_3YkbNx","loading-text":"_1gho3G","container":"d-xrPd","error":"_1vX8GD","checkboxes-row":"_2R3wJO","checkbox":"_2OPSZ7","label":"_1u376Y","wrap":"sDX0DP","back-link":"_1jaj9k","separator":"D6NcCm","apply-state":"_3MFlED","cta-buttons":"_2sZaxL","form-wrap":"lAapQI","form-section":"_32oAtP","form-row":"Ls02Ba","last-input":"_1t8WPO","input-bot-margin":"a3SadA","bottom-section":"_3C7Hb4","primaryBtn":"_7MgUVI","moldal-link":"_35z8bp"};

/***/ }),

/***/ 4086:
/***/ (function(module, exports) {

module.exports = "https://community-app-cdn.topcoder.com/static-assets/images/45f7aad529e8f7b216ff50b8f0a6733f.png";

/***/ }),

/***/ 4087:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ['J2EE', 'Java', 'JavaBean', 'EJB', 'JSP', 'Servlet', 'Applet', 'Java Application', 'JMS', 'Web Services', '.NET', 'VB', 'C++', 'COM', 'XML', 'XSL', 'HTML', 'HTTP', 'C#', 'VB.NET', 'JSF', 'J2ME', 'MIDP 2.0', 'XUL', 'JavaScript', 'IIS', 'Oracle 10g', 'Oracle 9i', 'SQL Server', 'COM+', 'Windows Workflow Foundation', 'Windows Communication Foundation', 'XAML', 'Microsoft SilverLight', 'Spring', 'Dojo', 'AJAX', 'Struts', 'CSS', 'WPF', 'ClickOnce', 'PostgreSQL', '.NET System.Addins', 'MSMQ', 'SWT', 'Eclipse Plugin', 'JSON', 'JUnit', 'Swing', 'JPA', 'Hibernate', 'LDAP', 'Active Directory', 'C', 'MySQL', 'Apache Derby', 'JBoss Seam', 'Fortran', 'PHP', 'Ruby', 'Objective C', 'Ruby on Rails', 'Python', 'UML', 'Word/Rich Text', 'SQL', 'PL/SQL', 'SSIS', 'Windows Server', 'Sharepoint 3.0', 'COBOL', 'IBM WebSphere DataPower', 'Perl', 'SAP', 'Siebel', 'Xcode', 'Blackberry SDK', 'BizTalk', 'Sencha Touch 2', 'HTML5', 'PhoneGap', 'Android', 'Node.js', 'Drools', 'Salesforce', 'iBATIS/MyBatis', 'Apex', 'Visualforce', 'jQuery', 'Angular.js (1.0)', 'MongoDB', 'Twitter Bootstrap', 'API', 'Redis', 'Backbone.js', 'Google App Engine', 'Google API', 'Chatter', 'CoffeeScript', 'iOS', 'Databasedotcom', 'Elasticsearch', 'Express', 'Force.com Sites', 'Go', 'Groovy', 'NoSQL', 'Photoshop', 'Play! Framework', 'REST', 'SFDC Mobile', 'OSX', 'Bootstrap', 'Other', 'HPE Haven OnDemand', 'jQuery Mobile', 'Titanium', 'Swift', 'XMPP', 'Jabber', 'Cisco', 'Data Science', 'Lightning', 'R', 'Vertica', 'tvOS', 'Ant', 'Maven', 'Gradle', 'Spark', 'Docker', 'ReactJS', 'Grommet', 'Matlab', 'Predix', 'Ionic', 'IBM Cognitive', 'IBM Watson', 'AI', 'Cognitive', 'Angular 2+', 'Blockchain', 'ASP.NET Core', 'Continuous Integration', 'AWS', 'Beanstalk', 'Box', 'Brivo Labs', 'Actian X – Hybrid Database', 'Cloud Foundry', 'CloudFactor', 'DocuSign', 'Facebook', 'FinancialForce', 'Actian DataConnect – Data Integration', 'Gaming', 'Google', 'Heroku', 'Actian Vector – SMP Analytics Database', 'Actian Versant – NoSQL Object Database', 'IBM Cloud', 'Actian Ingres – Relational Database', 'Linux', 'MESH01', 'Microsoft Azure', 'Mobile', 'Actian OpenRoad - 4GL', 'Actian PSQL – Embeddable Database', 'Actian Data Management', 'Salesforce.com', 'Smartsheet', 'Twilio', 'Wordpress', 'Hyperledger Fabric', 'Actian Data Integration', 'Actian Data Analytics', 'QA', 'Marvel - Design', 'Ethereum', 'Solidity', 'Xamarin', 'MarkLogic', 'UI Prototype', 'Frontend', 'Quorum', 'R3 Corda', 'Hashgraph', 'Hyperledger Sawtooth', 'Multichain', 'ipfs', 'ActionScript', 'ADO.NET', 'Advanced Math', 'Akka', 'Algorithm', 'Apache Camel', 'Apache Cordova', 'Apache Flume', 'Apache Kafka', 'Appcelerator', 'Appium', 'Apple', 'Apple HIG', 'Atom', 'Axure', 'Bash', 'BigQuery', 'Bower', 'Branding', 'Brute Force', 'Calabash', 'CartoDB', 'Cassandra', 'Castor', 'Chrome', 'Class', 'Clojure', 'Cocoa', 'Codeigniter', 'Commerce Server 2009', 'Compression', 'Concept Design', 'Couchbase', 'Custom Tag', 'Customer Experience (Cx)', 'D3.JS', 'Database', 'Dc.js', 'Django', 'Doctrine', 'Dropwizard', 'Drupal', 'Dynamic Programming', 'EC2', 'Ember.js', 'Entity-Framework', 'Espruino', 'Excel', 'F#', 'File', 'Flash', 'Flex', 'Flight.js', 'Flux', 'Forms', 'Foundation', 'Function', 'Geometry', 'Gimp', 'Git', 'Github', 'Gitlab', 'Google Dart', 'Google-Maps', 'Graph Theory', 'Graphic Design', 'Greedy', 'Gremlin', 'Grunt.js', 'Gulp', 'Hadoop', 'HAML', 'Haskell', 'IBM AiX', 'IBM COGNOS', 'IBM DB2', 'IBM Design', 'IBM Lotus Domino', 'IBM Lotus Notes', 'IBM Pl/1', 'IBM Rational Application Developer', 'IBM Rational Data Architect', 'IBM Rational Software Architect', 'IBM Rational Team Concert', 'IBM REXX', 'IBM Websphere Application Server', 'IBM WebSphere DataStage', 'IBM Websphere Message Broker', 'IBM WebSphere MQ', 'IBM WebSphere Portal', 'IDOL OnDemand', 'Illustrator', 'Image', 'InDesign', 'IndexedDB', 'Infographic', 'Information Architecture (IA)', 'Inkscape', 'Interaction Design (Ixd)', 'InVision', 'JDBC', 'Jekyll', 'JetBrains', 'Jface', 'Jruby', 'Knockout', 'Kraken.js', 'Laravel', 'Leaflet.js', 'Less', 'Linq', 'List', 'Logo', 'Lua', 'Machine Learning', 'MariaDB', 'Math', 'Meteor.js', 'Mobile Design', 'Moodle', 'Mozilla', 'Multithreading', 'Neo4J', 'NGINX', 'Nodewebkit', 'Npm', 'Oauth', 'Om', 'OmniGraffle', 'Openam', 'Openstack', 'OSGi', 'Performance', 'Phantomjs', 'PowerShell', 'Print', 'Product Design', 'Protractor', 'Q & Bluebird', 'Qt', 'Recursion', 'Redhat', 'Regex', 'Remoting', 'Require.js', 'Responsive Design', 'Responsive Web Design', 'RMI', 'S3', 'safari', 'SASS', 'Scala', 'SCSS', 'Search', 'Security', 'Shell', 'Simple Math', 'Simple Search', 'Simulation', 'Sinatra', 'Sketch', 'Sockets', 'Sorting', 'Sqlite', 'String', 'String Manipulation', 'String Parsing', 'Swagger', 'Sympfony', 'Transact-SQL', 'Travis', 'Trello', 'TypeScript', 'Ubuntu', 'UITableView', 'User Experience (Ux)', 'User Interface (Ui)', 'Validation', 'VBA', 'Vert.X', 'vim', 'Visual-Studio', 'WCF', 'Website Design', 'Windows', 'Windows Phone', 'Winforms', 'Winforms Controls', 'Yii', 'Zend framework', 'Zepto.js', 'Zipkin', 'MapReduce', 'Big data', 'Hadoop Admin', 'Tableau', 'Ab Initio', 'Power BI', 'Informatica Big Data', 'Informatica IDQ / IDE', 'QlikView', 'Talend', 'BackOffice Associates', 'Webmethods', 'TIBCO', 'IBM integration', 'Dell Boomi', 'Angular 4', 'Microservices', 'Apigee', 'ASP.NET MVC 5', 'ASP.NET Web API', 'CA', 'DevOps', 'Google Cloud', 'LoadRunner', 'Api Connect', 'Integrator', 'IBM Cloud Private', 'IBM Integration Bus', 'Websphere Liberty', 'JMeter', 'Kubernetes', 'Microsoft Dynamics', 'Office365', 'Microsoft Exchange', 'Open Source', 'OpenShift', 'Selenium', 'Sharepoint 2016', 'Aris', 'Cumulocity', 'Tosca', 'Business-to-business', 'FuseESB', 'WSO2 ESB', 'Mainframe', 'JBehave', 'Splunk', 'Oracle EBS', 'Hybris', 'Pega', 'Relational Algebra', 'Outliers', 'Smoothing', 'Computer Vision', 'Object Detection', 'Pattern Recognition', 'Pattern Matching', 'Video Tracking', 'Pose Estimation', 'NLP', 'Speech Recognition', 'NLG', 'DSS', 'Teaching systems', 'Deep Learning', 'Robotics', 'Recommendation System', 'IOT', 'Expert Systems', 'Genetic Algorithm', 'Evolutionary Algorithm', 'Image Processing', 'OCR', 'Event Detection', '3D Reconstruction', 'Gaussian Filtering', 'Median Filtering', 'Imputation', 'Random Sampling', 'Montecarlo', 'Statistical distributions', 'Regression', 'NLU', 'Dimensionality Reduction', 'Factor Analysis', 'K Means', 'Canopy Clustering', 'TF IDR', 'Feature Hashing', 'Wrapper Methods', 'Sensitivity Analysis', 'Self organizing Maps', 'Deduplication', 'Normalization', 'Format Conversion', 'FFT', 'DWT', 'Coordinate Transformation', 'Statistical Count', 'Standard Deviation', 'Mean', 'Range', 'Boxplot', 'Scatter Plots', 'Distributive Aggregation', 'Distribution fitting', 'Baseball Card Aggregation', 'Enrichment', 'Clustering', 'Baseball Card Aggregation', 'Enrichment', 'Annotation', 'Clustering', 'X Means', 'Canopy', 'Apriori', 'Topic Modeling', 'Non-Elliptical Clustering', 'Fractals', 'Database Scan', 'Guassian Mixture Model', 'K-Means', 'Tree', 'GLM', 'Regression', 'LASSO', 'Elastic Net', 'Stepwise regression', 'T Testing', 'ANOVA', 'Classification', 'Bayesian Network', 'Neural Network', 'Random Forest', 'Decision Tree', 'Nearest Neighbors', 'Naivebayes', 'Hidden Markov Model', 'SVM', 'Nearest Neighbors', 'Collaborative filtering', 'Content-based methods', 'Graph-based methods', 'Logical reasoning', 'Optimization', 'Stochastic', 'Stimulated Annealing', 'Gradient Dissent', 'Linear Programming', 'Integer Programming', 'Non-Linear Optimization', 'Markov Models', 'Agent Based Modelling', 'Montecarlo', 'System Dynamics', 'Activity Based Simulation', 'ODE', 'PDE', 'Fuzzy Logic', 'Deep Fake', 'Algorithimic Trading', 'Clinical Trials', 'Medical Records', 'Diagnostics', 'Angular 8', 'React Native', 'Flutter testing', 'Dummy Challenge', 'Domino', 'Bamboo', 'Jenkins', 'Puppet', 'Ansible', 'Terraform', 'Landslide', 'XSLT', 'BizTalk', 'Three.js', 'Unity 3D', 'CI/CD', 'Databricks', 'Angular', 'Azure', 'Spring Boot', 'Devops', 'Kotlin'];

/***/ }),

/***/ 4088:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var codes = __webpack_require__(4089);
var registeredLocales = {};

/*
 * All codes map to ISO 3166-1 alpha-2
 */
var alpha2 = {},
  alpha3 = {},
  numeric = {},
  invertedNumeric = {};

codes.forEach(function(codeInformation) {
  var s = codeInformation;
  alpha2[s[0]] = s[1];
  alpha3[s[1]] = s[0];
  numeric[s[2]] = s[0];
  invertedNumeric[s[0]] = s[2];
});

function formatNumericCode(code) {
  return String('000'+(code ? code : '')).slice(-3);
}

function registerLocale(localeData) {
  if (!localeData.locale) {
    throw new TypeError('Missing localeData.locale');
  }

  if (!localeData.countries) {
    throw new TypeError('Missing localeData.countries');
  }

  registeredLocales[localeData.locale] = localeData.countries;
}

exports.registerLocale = registerLocale;

/*
 * @param code Alpha-3 code
 * @return Alpha-2 code or undefined
 */
function alpha3ToAlpha2(code) {
  return alpha3[code];
}
exports.alpha3ToAlpha2 = alpha3ToAlpha2;

/*
 * @param code Alpha-2 code
 * @return Alpha-3 code or undefined
 */
function alpha2ToAlpha3(code) {
  return alpha2[code];
}
exports.alpha2ToAlpha3 = alpha2ToAlpha3;

/*
 * @param code Alpha-3 code
 * @return Numeric code or undefined
 */
function alpha3ToNumeric(code) {
  return invertedNumeric[alpha3ToAlpha2(code)];
}
exports.alpha3ToNumeric = alpha3ToNumeric;

/*
 * @param code Alpha-2 code
 * @return Numeric code or undefined
 */
function alpha2ToNumeric(code) {
  return invertedNumeric[code];
}
exports.alpha2ToNumeric = alpha2ToNumeric;

/*
 * @param code Numeric code
 * @return Alpha-3 code or undefined
 */
function numericToAlpha3(code) {
  var padded = formatNumericCode(code);
  return alpha2ToAlpha3(numeric[padded]);
}
exports.numericToAlpha3 = numericToAlpha3;

/*
 * @param code Numeric code
 * @return Alpha-2 code or undefined
 */
function numericToAlpha2(code) {
  var padded = formatNumericCode(code);
  return numeric[padded];
}
exports.numericToAlpha2 = numericToAlpha2;

/*
 * @param code ISO 3166-1 alpha-2, alpha-3 or numeric code
 * @return ISO 3166-1 alpha-3
 */
function toAlpha3(code) {
  if (typeof code === "string") {
    if (/^[0-9]*$/.test(code)) {
      return numericToAlpha3(code);
    }
    if(code.length === 2) {
      return alpha2ToAlpha3(code.toUpperCase());
    }
    if (code.length === 3) {
      return code.toUpperCase();
    }
  }
  if (typeof code === "number") {
    return numericToAlpha3(code);
  }
  return undefined;
}
exports.toAlpha3 = toAlpha3;

/*
 * @param code ISO 3166-1 alpha-2, alpha-3 or numeric code
 * @return ISO 3166-1 alpha-2
 */
function toAlpha2(code) {
  if (typeof code === "string") {
    if (/^[0-9]*$/.test(code)) {
      return numericToAlpha2(code);
    }
    if (code.length === 2) {
      return code.toUpperCase();
    }
    if(code.length === 3) {
      return alpha3ToAlpha2(code.toUpperCase());
    }
  }
  if (typeof code === "number") {
    return numericToAlpha2(code);
  }
  return undefined;
}
exports.toAlpha2 = toAlpha2;

/*
 * @param code ISO 3166-1 alpha-2, alpha-3 or numeric code
 * @param lang language for country name
 * @return name or undefined
 */
exports.getName = function(code, lang) {
  try {
    var d = registeredLocales[lang.toLowerCase()];
    return d[toAlpha2(code)];
  } catch (err) {
    return undefined;
  }
};

/*
 * @param lang language for country names
 * @return Object of country code mapped to county name
 */
exports.getNames = function(lang) {
  var d = registeredLocales[lang.toLowerCase()];
  if (d === undefined) {
    return {};
  }
  return d;
};

/*
 * @param name name
 * @param lang language for country name
 * @return ISO 3166-1 alpha-2 or undefined
 */
exports.getAlpha2Code = function(name, lang) {
  try {
    var p, codenames = registeredLocales[lang.toLowerCase()];
    for (p in codenames) {
      if (codenames.hasOwnProperty(p)) {
        if (codenames[p].toLowerCase() === name.toLowerCase()) {
          return p;
        }
      }
    }
    return undefined;
  } catch (err) {
    return undefined;
  }
};

/*
 * @return Object of alpha-2 codes mapped to alpha-3 codes
 */
exports.getAlpha2Codes = function() {
  return alpha2;
};

/*
 * @param name name
 * @param lang language for country name
 * @return ISO 3166-1 alpha-3 or undefined
 */
exports.getAlpha3Code = function(name, lang) {
  var alpha2 = this.getAlpha2Code(name, lang);
  if (alpha2) {
    return this.toAlpha3(alpha2);
  } else {
    return undefined;
  }
};

/*
 * @return Object of alpha-3 codes mapped to alpha-2 codes
 */
exports.getAlpha3Codes = function() {
  return alpha3;
};

/*
 * @return Object of numeric codes mapped to alpha-2 codes
 */
exports.getNumericCodes = function() {
  return numeric;
};

/*
 * @return Array of supported languages
 */
exports.langs = function() {
  return Object.keys(registeredLocales);
};

/*
 * @param code ISO 3166-1 alpha-2, alpha-3 or numeric code
 * @return Boolean
 */
exports.isValid = function(code) {
  if (!code) {
    return false;
  }

  var coerced = code.toString().toUpperCase();
  return alpha3.hasOwnProperty(coerced) || alpha2.hasOwnProperty(coerced) ||
    numeric.hasOwnProperty(coerced);
};


/***/ }),

/***/ 4089:
/***/ (function(module) {

module.exports = [["AF","AFG","004","ISO 3166-2:AF"],["AX","ALA","248","ISO 3166-2:AX"],["AL","ALB","008","ISO 3166-2:AL"],["DZ","DZA","012","ISO 3166-2:DZ"],["AS","ASM","016","ISO 3166-2:AS"],["AD","AND","020","ISO 3166-2:AD"],["AO","AGO","024","ISO 3166-2:AO"],["AI","AIA","660","ISO 3166-2:AI"],["AQ","ATA","010","ISO 3166-2:AQ"],["AG","ATG","028","ISO 3166-2:AG"],["AR","ARG","032","ISO 3166-2:AR"],["AM","ARM","051","ISO 3166-2:AM"],["AW","ABW","533","ISO 3166-2:AW"],["AU","AUS","036","ISO 3166-2:AU"],["AT","AUT","040","ISO 3166-2:AT"],["AZ","AZE","031","ISO 3166-2:AZ"],["BS","BHS","044","ISO 3166-2:BS"],["BH","BHR","048","ISO 3166-2:BH"],["BD","BGD","050","ISO 3166-2:BD"],["BB","BRB","052","ISO 3166-2:BB"],["BY","BLR","112","ISO 3166-2:BY"],["BE","BEL","056","ISO 3166-2:BE"],["BZ","BLZ","084","ISO 3166-2:BZ"],["BJ","BEN","204","ISO 3166-2:BJ"],["BM","BMU","060","ISO 3166-2:BM"],["BT","BTN","064","ISO 3166-2:BT"],["BO","BOL","068","ISO 3166-2:BO"],["BQ","BES","535","ISO 3166-2:BQ"],["BA","BIH","070","ISO 3166-2:BA"],["BW","BWA","072","ISO 3166-2:BW"],["BV","BVT","074","ISO 3166-2:BV"],["BR","BRA","076","ISO 3166-2:BR"],["IO","IOT","086","ISO 3166-2:IO"],["BN","BRN","096","ISO 3166-2:BN"],["BG","BGR","100","ISO 3166-2:BG"],["BF","BFA","854","ISO 3166-2:BF"],["BI","BDI","108","ISO 3166-2:BI"],["KH","KHM","116","ISO 3166-2:KH"],["CM","CMR","120","ISO 3166-2:CM"],["CA","CAN","124","ISO 3166-2:CA"],["CV","CPV","132","ISO 3166-2:CV"],["KY","CYM","136","ISO 3166-2:KY"],["CF","CAF","140","ISO 3166-2:CF"],["TD","TCD","148","ISO 3166-2:TD"],["CL","CHL","152","ISO 3166-2:CL"],["CN","CHN","156","ISO 3166-2:CN"],["CX","CXR","162","ISO 3166-2:CX"],["CC","CCK","166","ISO 3166-2:CC"],["CO","COL","170","ISO 3166-2:CO"],["KM","COM","174","ISO 3166-2:KM"],["CG","COG","178","ISO 3166-2:CG"],["CD","COD","180","ISO 3166-2:CD"],["CK","COK","184","ISO 3166-2:CK"],["CR","CRI","188","ISO 3166-2:CR"],["CI","CIV","384","ISO 3166-2:CI"],["HR","HRV","191","ISO 3166-2:HR"],["CU","CUB","192","ISO 3166-2:CU"],["CW","CUW","531","ISO 3166-2:CW"],["CY","CYP","196","ISO 3166-2:CY"],["CZ","CZE","203","ISO 3166-2:CZ"],["DK","DNK","208","ISO 3166-2:DK"],["DJ","DJI","262","ISO 3166-2:DJ"],["DM","DMA","212","ISO 3166-2:DM"],["DO","DOM","214","ISO 3166-2:DO"],["EC","ECU","218","ISO 3166-2:EC"],["EG","EGY","818","ISO 3166-2:EG"],["SV","SLV","222","ISO 3166-2:SV"],["GQ","GNQ","226","ISO 3166-2:GQ"],["ER","ERI","232","ISO 3166-2:ER"],["EE","EST","233","ISO 3166-2:EE"],["ET","ETH","231","ISO 3166-2:ET"],["FK","FLK","238","ISO 3166-2:FK"],["FO","FRO","234","ISO 3166-2:FO"],["FJ","FJI","242","ISO 3166-2:FJ"],["FI","FIN","246","ISO 3166-2:FI"],["FR","FRA","250","ISO 3166-2:FR"],["GF","GUF","254","ISO 3166-2:GF"],["PF","PYF","258","ISO 3166-2:PF"],["TF","ATF","260","ISO 3166-2:TF"],["GA","GAB","266","ISO 3166-2:GA"],["GM","GMB","270","ISO 3166-2:GM"],["GE","GEO","268","ISO 3166-2:GE"],["DE","DEU","276","ISO 3166-2:DE"],["GH","GHA","288","ISO 3166-2:GH"],["GI","GIB","292","ISO 3166-2:GI"],["GR","GRC","300","ISO 3166-2:GR"],["GL","GRL","304","ISO 3166-2:GL"],["GD","GRD","308","ISO 3166-2:GD"],["GP","GLP","312","ISO 3166-2:GP"],["GU","GUM","316","ISO 3166-2:GU"],["GT","GTM","320","ISO 3166-2:GT"],["GG","GGY","831","ISO 3166-2:GG"],["GN","GIN","324","ISO 3166-2:GN"],["GW","GNB","624","ISO 3166-2:GW"],["GY","GUY","328","ISO 3166-2:GY"],["HT","HTI","332","ISO 3166-2:HT"],["HM","HMD","334","ISO 3166-2:HM"],["VA","VAT","336","ISO 3166-2:VA"],["HN","HND","340","ISO 3166-2:HN"],["HK","HKG","344","ISO 3166-2:HK"],["HU","HUN","348","ISO 3166-2:HU"],["IS","ISL","352","ISO 3166-2:IS"],["IN","IND","356","ISO 3166-2:IN"],["ID","IDN","360","ISO 3166-2:ID"],["IR","IRN","364","ISO 3166-2:IR"],["IQ","IRQ","368","ISO 3166-2:IQ"],["IE","IRL","372","ISO 3166-2:IE"],["IM","IMN","833","ISO 3166-2:IM"],["IL","ISR","376","ISO 3166-2:IL"],["IT","ITA","380","ISO 3166-2:IT"],["JM","JAM","388","ISO 3166-2:JM"],["JP","JPN","392","ISO 3166-2:JP"],["JE","JEY","832","ISO 3166-2:JE"],["JO","JOR","400","ISO 3166-2:JO"],["KZ","KAZ","398","ISO 3166-2:KZ"],["KE","KEN","404","ISO 3166-2:KE"],["KI","KIR","296","ISO 3166-2:KI"],["KP","PRK","408","ISO 3166-2:KP"],["KR","KOR","410","ISO 3166-2:KR"],["KW","KWT","414","ISO 3166-2:KW"],["KG","KGZ","417","ISO 3166-2:KG"],["LA","LAO","418","ISO 3166-2:LA"],["LV","LVA","428","ISO 3166-2:LV"],["LB","LBN","422","ISO 3166-2:LB"],["LS","LSO","426","ISO 3166-2:LS"],["LR","LBR","430","ISO 3166-2:LR"],["LY","LBY","434","ISO 3166-2:LY"],["LI","LIE","438","ISO 3166-2:LI"],["LT","LTU","440","ISO 3166-2:LT"],["LU","LUX","442","ISO 3166-2:LU"],["MO","MAC","446","ISO 3166-2:MO"],["MK","MKD","807","ISO 3166-2:MK"],["MG","MDG","450","ISO 3166-2:MG"],["MW","MWI","454","ISO 3166-2:MW"],["MY","MYS","458","ISO 3166-2:MY"],["MV","MDV","462","ISO 3166-2:MV"],["ML","MLI","466","ISO 3166-2:ML"],["MT","MLT","470","ISO 3166-2:MT"],["MH","MHL","584","ISO 3166-2:MH"],["MQ","MTQ","474","ISO 3166-2:MQ"],["MR","MRT","478","ISO 3166-2:MR"],["MU","MUS","480","ISO 3166-2:MU"],["YT","MYT","175","ISO 3166-2:YT"],["MX","MEX","484","ISO 3166-2:MX"],["FM","FSM","583","ISO 3166-2:FM"],["MD","MDA","498","ISO 3166-2:MD"],["MC","MCO","492","ISO 3166-2:MC"],["MN","MNG","496","ISO 3166-2:MN"],["ME","MNE","499","ISO 3166-2:ME"],["MS","MSR","500","ISO 3166-2:MS"],["MA","MAR","504","ISO 3166-2:MA"],["MZ","MOZ","508","ISO 3166-2:MZ"],["MM","MMR","104","ISO 3166-2:MM"],["NA","NAM","516","ISO 3166-2:NA"],["NR","NRU","520","ISO 3166-2:NR"],["NP","NPL","524","ISO 3166-2:NP"],["NL","NLD","528","ISO 3166-2:NL"],["NC","NCL","540","ISO 3166-2:NC"],["NZ","NZL","554","ISO 3166-2:NZ"],["NI","NIC","558","ISO 3166-2:NI"],["NE","NER","562","ISO 3166-2:NE"],["NG","NGA","566","ISO 3166-2:NG"],["NU","NIU","570","ISO 3166-2:NU"],["NF","NFK","574","ISO 3166-2:NF"],["MP","MNP","580","ISO 3166-2:MP"],["NO","NOR","578","ISO 3166-2:NO"],["OM","OMN","512","ISO 3166-2:OM"],["PK","PAK","586","ISO 3166-2:PK"],["PW","PLW","585","ISO 3166-2:PW"],["PS","PSE","275","ISO 3166-2:PS"],["PA","PAN","591","ISO 3166-2:PA"],["PG","PNG","598","ISO 3166-2:PG"],["PY","PRY","600","ISO 3166-2:PY"],["PE","PER","604","ISO 3166-2:PE"],["PH","PHL","608","ISO 3166-2:PH"],["PN","PCN","612","ISO 3166-2:PN"],["PL","POL","616","ISO 3166-2:PL"],["PT","PRT","620","ISO 3166-2:PT"],["PR","PRI","630","ISO 3166-2:PR"],["QA","QAT","634","ISO 3166-2:QA"],["RE","REU","638","ISO 3166-2:RE"],["RO","ROU","642","ISO 3166-2:RO"],["RU","RUS","643","ISO 3166-2:RU"],["RW","RWA","646","ISO 3166-2:RW"],["BL","BLM","652","ISO 3166-2:BL"],["SH","SHN","654","ISO 3166-2:SH"],["KN","KNA","659","ISO 3166-2:KN"],["LC","LCA","662","ISO 3166-2:LC"],["MF","MAF","663","ISO 3166-2:MF"],["PM","SPM","666","ISO 3166-2:PM"],["VC","VCT","670","ISO 3166-2:VC"],["WS","WSM","882","ISO 3166-2:WS"],["SM","SMR","674","ISO 3166-2:SM"],["ST","STP","678","ISO 3166-2:ST"],["SA","SAU","682","ISO 3166-2:SA"],["SN","SEN","686","ISO 3166-2:SN"],["RS","SRB","688","ISO 3166-2:RS"],["SC","SYC","690","ISO 3166-2:SC"],["SL","SLE","694","ISO 3166-2:SL"],["SG","SGP","702","ISO 3166-2:SG"],["SX","SXM","534","ISO 3166-2:SX"],["SK","SVK","703","ISO 3166-2:SK"],["SI","SVN","705","ISO 3166-2:SI"],["SB","SLB","090","ISO 3166-2:SB"],["SO","SOM","706","ISO 3166-2:SO"],["ZA","ZAF","710","ISO 3166-2:ZA"],["GS","SGS","239","ISO 3166-2:GS"],["SS","SSD","728","ISO 3166-2:SS"],["ES","ESP","724","ISO 3166-2:ES"],["LK","LKA","144","ISO 3166-2:LK"],["SD","SDN","729","ISO 3166-2:SD"],["SR","SUR","740","ISO 3166-2:SR"],["SJ","SJM","744","ISO 3166-2:SJ"],["SZ","SWZ","748","ISO 3166-2:SZ"],["SE","SWE","752","ISO 3166-2:SE"],["CH","CHE","756","ISO 3166-2:CH"],["SY","SYR","760","ISO 3166-2:SY"],["TW","TWN","158","ISO 3166-2:TW"],["TJ","TJK","762","ISO 3166-2:TJ"],["TZ","TZA","834","ISO 3166-2:TZ"],["TH","THA","764","ISO 3166-2:TH"],["TL","TLS","626","ISO 3166-2:TL"],["TG","TGO","768","ISO 3166-2:TG"],["TK","TKL","772","ISO 3166-2:TK"],["TO","TON","776","ISO 3166-2:TO"],["TT","TTO","780","ISO 3166-2:TT"],["TN","TUN","788","ISO 3166-2:TN"],["TR","TUR","792","ISO 3166-2:TR"],["TM","TKM","795","ISO 3166-2:TM"],["TC","TCA","796","ISO 3166-2:TC"],["TV","TUV","798","ISO 3166-2:TV"],["UG","UGA","800","ISO 3166-2:UG"],["UA","UKR","804","ISO 3166-2:UA"],["AE","ARE","784","ISO 3166-2:AE"],["GB","GBR","826","ISO 3166-2:GB"],["US","USA","840","ISO 3166-2:US"],["UM","UMI","581","ISO 3166-2:UM"],["UY","URY","858","ISO 3166-2:UY"],["UZ","UZB","860","ISO 3166-2:UZ"],["VU","VUT","548","ISO 3166-2:VU"],["VE","VEN","862","ISO 3166-2:VE"],["VN","VNM","704","ISO 3166-2:VN"],["VG","VGB","092","ISO 3166-2:VG"],["VI","VIR","850","ISO 3166-2:VI"],["WF","WLF","876","ISO 3166-2:WF"],["EH","ESH","732","ISO 3166-2:EH"],["YE","YEM","887","ISO 3166-2:YE"],["ZM","ZMB","894","ISO 3166-2:ZM"],["ZW","ZWE","716","ISO 3166-2:ZW"],["XK","XKX","","ISO 3166-2:XK"]];

/***/ }),

/***/ 4090:
/***/ (function(module) {

module.exports = {"locale":"en","countries":{"AF":"Afghanistan","AL":"Albania","DZ":"Algeria","AS":"American Samoa","AD":"Andorra","AO":"Angola","AI":"Anguilla","AQ":"Antarctica","AG":"Antigua and Barbuda","AR":"Argentina","AM":"Armenia","AW":"Aruba","AU":"Australia","AT":"Austria","AZ":"Azerbaijan","BS":"Bahamas","BH":"Bahrain","BD":"Bangladesh","BB":"Barbados","BY":"Belarus","BE":"Belgium","BZ":"Belize","BJ":"Benin","BM":"Bermuda","BT":"Bhutan","BO":"Bolivia","BA":"Bosnia and Herzegovina","BW":"Botswana","BV":"Bouvet Island","BR":"Brazil","IO":"British Indian Ocean Territory","BN":"Brunei Darussalam","BG":"Bulgaria","BF":"Burkina Faso","BI":"Burundi","KH":"Cambodia","CM":"Cameroon","CA":"Canada","CV":"Cape Verde","KY":"Cayman Islands","CF":"Central African Republic","TD":"Chad","CL":"Chile","CN":"China","CX":"Christmas Island","CC":"Cocos (Keeling) Islands","CO":"Colombia","KM":"Comoros","CG":"Congo","CD":"Congo, the Democratic Republic of the","CK":"Cook Islands","CR":"Costa Rica","CI":"Cote D'Ivoire","HR":"Croatia","CU":"Cuba","CY":"Cyprus","CZ":"Czech Republic","DK":"Denmark","DJ":"Djibouti","DM":"Dominica","DO":"Dominican Republic","EC":"Ecuador","EG":"Egypt","SV":"El Salvador","GQ":"Equatorial Guinea","ER":"Eritrea","EE":"Estonia","ET":"Ethiopia","FK":"Falkland Islands (Malvinas)","FO":"Faroe Islands","FJ":"Fiji","FI":"Finland","FR":"France","GF":"French Guiana","PF":"French Polynesia","TF":"French Southern Territories","GA":"Gabon","GM":"Gambia","GE":"Georgia","DE":"Germany","GH":"Ghana","GI":"Gibraltar","GR":"Greece","GL":"Greenland","GD":"Grenada","GP":"Guadeloupe","GU":"Guam","GT":"Guatemala","GN":"Guinea","GW":"Guinea-Bissau","GY":"Guyana","HT":"Haiti","HM":"Heard Island and Mcdonald Islands","VA":"Holy See (Vatican City State)","HN":"Honduras","HK":"Hong Kong","HU":"Hungary","IS":"Iceland","IN":"India","ID":"Indonesia","IR":"Iran, Islamic Republic of","IQ":"Iraq","IE":"Ireland","IL":"Israel","IT":"Italy","JM":"Jamaica","JP":"Japan","JO":"Jordan","KZ":"Kazakhstan","KE":"Kenya","KI":"Kiribati","KP":"North Korea","KR":"South Korea","KW":"Kuwait","KG":"Kyrgyzstan","LA":"Lao People's Democratic Republic","LV":"Latvia","LB":"Lebanon","LS":"Lesotho","LR":"Liberia","LY":"Libya","LI":"Liechtenstein","LT":"Lithuania","LU":"Luxembourg","MO":"Macao","MK":"Macedonia, the Former Yugoslav Republic of","MG":"Madagascar","MW":"Malawi","MY":"Malaysia","MV":"Maldives","ML":"Mali","MT":"Malta","MH":"Marshall Islands","MQ":"Martinique","MR":"Mauritania","MU":"Mauritius","YT":"Mayotte","MX":"Mexico","FM":"Micronesia, Federated States of","MD":"Moldova, Republic of","MC":"Monaco","MN":"Mongolia","MS":"Montserrat","MA":"Morocco","MZ":"Mozambique","MM":"Myanmar","NA":"Namibia","NR":"Nauru","NP":"Nepal","NL":"Netherlands","NC":"New Caledonia","NZ":"New Zealand","NI":"Nicaragua","NE":"Niger","NG":"Nigeria","NU":"Niue","NF":"Norfolk Island","MP":"Northern Mariana Islands","NO":"Norway","OM":"Oman","PK":"Pakistan","PW":"Palau","PS":"Palestinian Territory, Occupied","PA":"Panama","PG":"Papua New Guinea","PY":"Paraguay","PE":"Peru","PH":"Philippines","PN":"Pitcairn","PL":"Poland","PT":"Portugal","PR":"Puerto Rico","QA":"Qatar","RE":"Reunion","RO":"Romania","RU":"Russian Federation","RW":"Rwanda","SH":"Saint Helena","KN":"Saint Kitts and Nevis","LC":"Saint Lucia","PM":"Saint Pierre and Miquelon","VC":"Saint Vincent and the Grenadines","WS":"Samoa","SM":"San Marino","ST":"Sao Tome and Principe","SA":"Saudi Arabia","SN":"Senegal","SC":"Seychelles","SL":"Sierra Leone","SG":"Singapore","SK":"Slovakia","SI":"Slovenia","SB":"Solomon Islands","SO":"Somalia","ZA":"South Africa","GS":"South Georgia and the South Sandwich Islands","ES":"Spain","LK":"Sri Lanka","SD":"Sudan","SR":"Suriname","SJ":"Svalbard and Jan Mayen","SZ":"Swaziland","SE":"Sweden","CH":"Switzerland","SY":"Syrian Arab Republic","TW":"Taiwan","TJ":"Tajikistan","TZ":"Tanzania, United Republic of","TH":"Thailand","TL":"Timor-Leste","TG":"Togo","TK":"Tokelau","TO":"Tonga","TT":"Trinidad and Tobago","TN":"Tunisia","TR":"Turkey","TM":"Turkmenistan","TC":"Turks and Caicos Islands","TV":"Tuvalu","UG":"Uganda","UA":"Ukraine","AE":"United Arab Emirates","GB":"United Kingdom","US":"United States of America","UM":"United States Minor Outlying Islands","UY":"Uruguay","UZ":"Uzbekistan","VU":"Vanuatu","VE":"Venezuela","VN":"Viet Nam","VG":"Virgin Islands, British","VI":"Virgin Islands, U.S.","WF":"Wallis and Futuna","EH":"Western Sahara","YE":"Yemen","ZM":"Zambia","ZW":"Zimbabwe","AX":"Åland Islands","BQ":"Bonaire, Sint Eustatius and Saba","CW":"Curaçao","GG":"Guernsey","IM":"Isle of Man","JE":"Jersey","ME":"Montenegro","BL":"Saint Barthélemy","MF":"Saint Martin (French part)","RS":"Serbia","SX":"Sint Maarten (Dutch part)","SS":"South Sudan","XK":"Kosovo"}};

/***/ }),

/***/ 4838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(0);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./node_modules/file-selector/node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}

// CONCATENATED MODULE: ./node_modules/file-selector/dist/es5/file.js
var COMMON_MIME_TYPES = new Map([
    ['avi', 'video/avi'],
    ['gif', 'image/gif'],
    ['ico', 'image/x-icon'],
    ['jpeg', 'image/jpeg'],
    ['jpg', 'image/jpeg'],
    ['mkv', 'video/x-matroska'],
    ['mov', 'video/quicktime'],
    ['mp4', 'video/mp4'],
    ['pdf', 'application/pdf'],
    ['png', 'image/png'],
    ['zip', 'application/zip'],
    ['doc', 'application/msword'],
    ['docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
]);
function toFileWithPath(file, path) {
    var f = withMimeType(file);
    if (typeof f.path !== 'string') { // on electron, path is already set to the absolute path
        var webkitRelativePath = file.webkitRelativePath;
        Object.defineProperty(f, 'path', {
            value: typeof path === 'string'
                ? path
                // If <input webkitdirectory> is set,
                // the File will have a {webkitRelativePath} property
                // https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitdirectory
                : typeof webkitRelativePath === 'string' && webkitRelativePath.length > 0
                    ? webkitRelativePath
                    : file.name,
            writable: false,
            configurable: false,
            enumerable: true
        });
    }
    return f;
}
function withMimeType(file) {
    var name = file.name;
    var hasExtension = name && name.lastIndexOf('.') !== -1;
    if (hasExtension && !file.type) {
        var ext = name.split('.')
            .pop().toLowerCase();
        var type = COMMON_MIME_TYPES.get(ext);
        if (type) {
            Object.defineProperty(file, 'type', {
                value: type,
                writable: false,
                configurable: false,
                enumerable: true
            });
        }
    }
    return file;
}
//# sourceMappingURL=file.js.map
// CONCATENATED MODULE: ./node_modules/file-selector/dist/es5/file-selector.js


var FILES_TO_IGNORE = [
    // Thumbnail cache files for macOS and Windows
    '.DS_Store',
    'Thumbs.db' // Windows
];
/**
 * Convert a DragEvent's DataTrasfer object to a list of File objects
 * NOTE: If some of the items are folders,
 * everything will be flattened and placed in the same list but the paths will be kept as a {path} property.
 * @param evt
 */
function fromEvent(evt) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, isDragEvt(evt) && evt.dataTransfer
                    ? getDataTransferFiles(evt.dataTransfer, evt.type)
                    : getInputFiles(evt)];
        });
    });
}
function isDragEvt(value) {
    return !!value.dataTransfer;
}
function getInputFiles(evt) {
    var files = isInput(evt.target)
        ? evt.target.files
            ? fromList(evt.target.files)
            : []
        : [];
    return files.map(function (file) { return toFileWithPath(file); });
}
function isInput(value) {
    return value !== null;
}
function getDataTransferFiles(dt, type) {
    return __awaiter(this, void 0, void 0, function () {
        var items, files;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!dt.items) return [3 /*break*/, 2];
                    items = fromList(dt.items)
                        .filter(function (item) { return item.kind === 'file'; });
                    // According to https://html.spec.whatwg.org/multipage/dnd.html#dndevents,
                    // only 'dragstart' and 'drop' has access to the data (source node)
                    if (type !== 'drop') {
                        return [2 /*return*/, items];
                    }
                    return [4 /*yield*/, Promise.all(items.map(toFilePromises))];
                case 1:
                    files = _a.sent();
                    return [2 /*return*/, noIgnoredFiles(flatten(files))];
                case 2: return [2 /*return*/, noIgnoredFiles(fromList(dt.files)
                        .map(function (file) { return toFileWithPath(file); }))];
            }
        });
    });
}
function noIgnoredFiles(files) {
    return files.filter(function (file) { return FILES_TO_IGNORE.indexOf(file.name) === -1; });
}
// IE11 does not support Array.from()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Browser_compatibility
// https://developer.mozilla.org/en-US/docs/Web/API/FileList
// https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList
function fromList(items) {
    var files = [];
    // tslint:disable: prefer-for-of
    for (var i = 0; i < items.length; i++) {
        var file = items[i];
        files.push(file);
    }
    return files;
}
// https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem
function toFilePromises(item) {
    if (typeof item.webkitGetAsEntry !== 'function') {
        return fromDataTransferItem(item);
    }
    var entry = item.webkitGetAsEntry();
    // Safari supports dropping an image node from a different window and can be retrieved using
    // the DataTransferItem.getAsFile() API
    // NOTE: FileSystemEntry.file() throws if trying to get the file
    if (entry && entry.isDirectory) {
        return fromDirEntry(entry);
    }
    return fromDataTransferItem(item);
}
function flatten(items) {
    return items.reduce(function (acc, files) { return __spread(acc, (Array.isArray(files) ? flatten(files) : [files])); }, []);
}
function fromDataTransferItem(item) {
    var file = item.getAsFile();
    if (!file) {
        return Promise.reject(item + " is not a File");
    }
    var fwp = toFileWithPath(file);
    return Promise.resolve(fwp);
}
// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry
function fromEntry(entry) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, entry.isDirectory ? fromDirEntry(entry) : fromFileEntry(entry)];
        });
    });
}
// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry
function fromDirEntry(entry) {
    var reader = entry.createReader();
    return new Promise(function (resolve, reject) {
        var entries = [];
        function readEntries() {
            var _this = this;
            // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry/createReader
            // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryReader/readEntries
            reader.readEntries(function (batch) { return __awaiter(_this, void 0, void 0, function () {
                var files, err_1, items;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!!batch.length) return [3 /*break*/, 5];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, Promise.all(entries)];
                        case 2:
                            files = _a.sent();
                            resolve(files);
                            return [3 /*break*/, 4];
                        case 3:
                            err_1 = _a.sent();
                            reject(err_1);
                            return [3 /*break*/, 4];
                        case 4: return [3 /*break*/, 6];
                        case 5:
                            items = Promise.all(batch.map(fromEntry));
                            entries.push(items);
                            // Continue reading
                            readEntries();
                            _a.label = 6;
                        case 6: return [2 /*return*/];
                    }
                });
            }); }, function (err) {
                reject(err);
            });
        }
        readEntries();
    });
}
// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileEntry
function fromFileEntry(entry) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    entry.file(function (file) {
                        var fwp = toFileWithPath(file, entry.fullPath);
                        resolve(fwp);
                    }, function (err) {
                        reject(err);
                    });
                })];
        });
    });
}
//# sourceMappingURL=file-selector.js.map
// CONCATENATED MODULE: ./node_modules/file-selector/dist/es5/index.js

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/attr-accept/dist/es/index.js
var es = __webpack_require__(4083);
var es_default = /*#__PURE__*/__webpack_require__.n(es);

// CONCATENATED MODULE: ./node_modules/react-dropzone/dist/es/utils/index.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

 // Error codes

var FILE_INVALID_TYPE = 'file-invalid-type';
var FILE_TOO_LARGE = 'file-too-large';
var FILE_TOO_SMALL = 'file-too-small';
var TOO_MANY_FILES = 'too-many-files'; // File Errors

var getInvalidTypeRejectionErr = function getInvalidTypeRejectionErr(accept) {
  accept = Array.isArray(accept) && accept.length === 1 ? accept[0] : accept;
  var messageSuffix = Array.isArray(accept) ? "one of ".concat(accept.join(', ')) : accept;
  return {
    code: FILE_INVALID_TYPE,
    message: "File type must be ".concat(messageSuffix)
  };
};
var getTooLargeRejectionErr = function getTooLargeRejectionErr(maxSize) {
  return {
    code: FILE_TOO_LARGE,
    message: "File is larger than ".concat(maxSize, " bytes")
  };
};
var getTooSmallRejectionErr = function getTooSmallRejectionErr(minSize) {
  return {
    code: FILE_TOO_SMALL,
    message: "File is smaller than ".concat(minSize, " bytes")
  };
};
var TOO_MANY_FILES_REJECTION = {
  code: TOO_MANY_FILES,
  message: 'Too many files'
}; // Firefox versions prior to 53 return a bogus MIME type for every file drag, so dragovers with
// that MIME type will always be accepted

function fileAccepted(file, accept) {
  var isAcceptable = file.type === 'application/x-moz-file' || es_default()(file, accept);
  return [isAcceptable, isAcceptable ? null : getInvalidTypeRejectionErr(accept)];
}
function fileMatchSize(file, minSize, maxSize) {
  if (isDefined(file.size)) {
    if (isDefined(minSize) && isDefined(maxSize)) {
      if (file.size > maxSize) return [false, getTooLargeRejectionErr(maxSize)];
      if (file.size < minSize) return [false, getTooSmallRejectionErr(minSize)];
    } else if (isDefined(minSize) && file.size < minSize) return [false, getTooSmallRejectionErr(minSize)];else if (isDefined(maxSize) && file.size > maxSize) return [false, getTooLargeRejectionErr(maxSize)];
  }

  return [true, null];
}

function isDefined(value) {
  return value !== undefined && value !== null;
}

function allFilesAccepted(_ref) {
  var files = _ref.files,
      accept = _ref.accept,
      minSize = _ref.minSize,
      maxSize = _ref.maxSize,
      multiple = _ref.multiple;

  if (!multiple && files.length > 1) {
    return false;
  }

  return files.every(function (file) {
    var _fileAccepted = fileAccepted(file, accept),
        _fileAccepted2 = _slicedToArray(_fileAccepted, 1),
        accepted = _fileAccepted2[0];

    var _fileMatchSize = fileMatchSize(file, minSize, maxSize),
        _fileMatchSize2 = _slicedToArray(_fileMatchSize, 1),
        sizeMatch = _fileMatchSize2[0];

    return accepted && sizeMatch;
  });
} // React's synthetic events has event.isPropagationStopped,
// but to remain compatibility with other libs (Preact) fall back
// to check event.cancelBubble

function isPropagationStopped(event) {
  if (typeof event.isPropagationStopped === 'function') {
    return event.isPropagationStopped();
  } else if (typeof event.cancelBubble !== 'undefined') {
    return event.cancelBubble;
  }

  return false;
}
function isEvtWithFiles(event) {
  if (!event.dataTransfer) {
    return !!event.target && !!event.target.files;
  } // https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/types
  // https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#file


  return Array.prototype.some.call(event.dataTransfer.types, function (type) {
    return type === 'Files' || type === 'application/x-moz-file';
  });
}
function isKindFile(item) {
  return _typeof(item) === 'object' && item !== null && item.kind === 'file';
} // allow the entire document to be a drag target

function onDocumentDragOver(event) {
  event.preventDefault();
}

function isIe(userAgent) {
  return userAgent.indexOf('MSIE') !== -1 || userAgent.indexOf('Trident/') !== -1;
}

function isEdge(userAgent) {
  return userAgent.indexOf('Edge/') !== -1;
}

function isIeOrEdge() {
  var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.navigator.userAgent;
  return isIe(userAgent) || isEdge(userAgent);
}
/**
 * This is intended to be used to compose event handlers
 * They are executed in order until one of them calls `event.isPropagationStopped()`.
 * Note that the check is done on the first invoke too,
 * meaning that if propagation was stopped before invoking the fns,
 * no handlers will be executed.
 *
 * @param {Function} fns the event hanlder functions
 * @return {Function} the event handler to add to an element
 */

function composeEventHandlers() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (event) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    return fns.some(function (fn) {
      if (!isPropagationStopped(event) && fn) {
        fn.apply(void 0, [event].concat(args));
      }

      return isPropagationStopped(event);
    });
  };
}
// CONCATENATED MODULE: ./node_modules/react-dropzone/dist/es/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDropzone", function() { return useDropzone; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function es_slicedToArray(arr, i) { return es_arrayWithHoles(arr) || es_iterableToArrayLimit(arr, i) || es_nonIterableRest(); }

function es_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function es_iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function es_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint prefer-template: 0 */




/**
 * Convenience wrapper component for the `useDropzone` hook
 *
 * ```jsx
 * <Dropzone>
 *   {({getRootProps, getInputProps}) => (
 *     <div {...getRootProps()}>
 *       <input {...getInputProps()} />
 *       <p>Drag 'n' drop some files here, or click to select files</p>
 *     </div>
 *   )}
 * </Dropzone>
 * ```
 */

var Dropzone = Object(react["forwardRef"])(function (_ref, ref) {
  var children = _ref.children,
      params = _objectWithoutProperties(_ref, ["children"]);

  var _useDropzone = useDropzone(params),
      open = _useDropzone.open,
      props = _objectWithoutProperties(_useDropzone, ["open"]);

  Object(react["useImperativeHandle"])(ref, function () {
    return {
      open: open
    };
  }, [open]); // TODO: Figure out why react-styleguidist cannot create docs if we don't return a jsx element

  return react_default.a.createElement(react["Fragment"], null, children(_objectSpread({}, props, {
    open: open
  })));
});
Dropzone.displayName = 'Dropzone';
Dropzone.propTypes = {
  /**
   * Render function that exposes the dropzone state and prop getter fns
   *
   * @param {object} params
   * @param {Function} params.getRootProps Returns the props you should apply to the root drop container you render
   * @param {Function} params.getInputProps Returns the props you should apply to hidden file input you render
   * @param {Function} params.open Open the native file selection dialog
   * @param {boolean} params.isFocused Dropzone area is in focus
   * @param {boolean} params.isFileDialogActive File dialog is opened
   * @param {boolean} params.isDragActive Active drag is in progress
   * @param {boolean} params.isDragAccept Dragged files are accepted
   * @param {boolean} params.isDragReject Some dragged files are rejected
   * @param {File[]} params.draggedFiles Files in active drag
   * @param {File[]} params.acceptedFiles Accepted files
   * @param {FileRejection[]} params.fileRejections Rejected files and why they were rejected
   */
  children: prop_types_default.a.func,

  /**
   * Set accepted file types.
   * See https://github.com/okonet/attr-accept for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all.
   * See: https://github.com/react-dropzone/react-dropzone/issues/276
   */
  accept: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.arrayOf(prop_types_default.a.string)]),

  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple: prop_types_default.a.bool,

  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: prop_types_default.a.bool,

  /**
   * If true, disables click to open the native file selection dialog
   */
  noClick: prop_types_default.a.bool,

  /**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */
  noKeyboard: prop_types_default.a.bool,

  /**
   * If true, disables drag 'n' drop
   */
  noDrag: prop_types_default.a.bool,

  /**
   * If true, stops drag event propagation to parents
   */
  noDragEventsBubbling: prop_types_default.a.bool,

  /**
   * Minimum file size (in bytes)
   */
  minSize: prop_types_default.a.number,

  /**
   * Maximum file size (in bytes)
   */
  maxSize: prop_types_default.a.number,

  /**
   * Maximum accepted number of files
   * The default value is 0 which means there is no limitation to how many files are accepted.
   */
  maxFiles: prop_types_default.a.number,

  /**
   * Enable/disable the dropzone
   */
  disabled: prop_types_default.a.bool,

  /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  getFilesFromEvent: prop_types_default.a.func,

  /**
   * Cb for when closing the file dialog with no selection
   */
  onFileDialogCancel: prop_types_default.a.func,

  /**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */
  onDragEnter: prop_types_default.a.func,

  /**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */
  onDragLeave: prop_types_default.a.func,

  /**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */
  onDragOver: prop_types_default.a.func,

  /**
   * Cb for when the `drop` event occurs.
   * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
   *
   * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
   * `accept` must be a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) or a valid file extension.
   * If `multiple` is set to false and additional files are dropped,
   * all files besides the first will be rejected.
   * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
   *
   * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
   * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
   *
   * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
   * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
   *
   * ```js
   * function onDrop(acceptedFiles) {
   *   const req = request.post('/upload')
   *   acceptedFiles.forEach(file => {
   *     req.attach(file.name, file)
   *   })
   *   req.end(callback)
   * }
   * ```
   *
   * @param {File[]} acceptedFiles
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  onDrop: prop_types_default.a.func,

  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropAccepted: prop_types_default.a.func,

  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */
  onDropRejected: prop_types_default.a.func
};
/* harmony default export */ var dist_es = __webpack_exports__["default"] = (Dropzone);
/**
 * A function that is invoked for the `dragenter`,
 * `dragover` and `dragleave` events.
 * It is not invoked if the items are not files (such as link, text, etc.).
 *
 * @callback dragCb
 * @param {DragEvent} event
 */

/**
 * A function that is invoked for the `drop` or input change event.
 * It is not invoked if the items are not files (such as link, text, etc.).
 *
 * @callback dropCb
 * @param {File[]} acceptedFiles List of accepted files
 * @param {FileRejection[]} fileRejections List of rejected files and why they were rejected
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 */

/**
 * A function that is invoked for the `drop` or input change event.
 * It is not invoked if the items are files (such as link, text, etc.).
 *
 * @callback dropAcceptedCb
 * @param {File[]} files List of accepted files that meet the given criteria
 * (`accept`, `multiple`, `minSize`, `maxSize`)
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 */

/**
 * A function that is invoked for the `drop` or input change event.
 *
 * @callback dropRejectedCb
 * @param {File[]} files List of rejected files that do not meet the given criteria
 * (`accept`, `multiple`, `minSize`, `maxSize`)
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 */

/**
 * A function that is used aggregate files,
 * in a asynchronous fashion, from drag or input change events.
 *
 * @callback getFilesFromEvent
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 * @returns {(File[]|Promise<File[]>)}
 */

/**
 * An object with the current dropzone state and some helper functions.
 *
 * @typedef {object} DropzoneState
 * @property {Function} getRootProps Returns the props you should apply to the root drop container you render
 * @property {Function} getInputProps Returns the props you should apply to hidden file input you render
 * @property {Function} open Open the native file selection dialog
 * @property {boolean} isFocused Dropzone area is in focus
 * @property {boolean} isFileDialogActive File dialog is opened
 * @property {boolean} isDragActive Active drag is in progress
 * @property {boolean} isDragAccept Dragged files are accepted
 * @property {boolean} isDragReject Some dragged files are rejected
 * @property {File[]} draggedFiles Files in active drag
 * @property {File[]} acceptedFiles Accepted files
 * @property {FileRejection[]} fileRejections Rejected files and why they were rejected
 */

var initialState = {
  isFocused: false,
  isFileDialogActive: false,
  isDragActive: false,
  isDragAccept: false,
  isDragReject: false,
  draggedFiles: [],
  acceptedFiles: [],
  fileRejections: []
};
/**
 * A React hook that creates a drag 'n' drop area.
 *
 * ```jsx
 * function MyDropzone(props) {
 *   const {getRootProps, getInputProps} = useDropzone({
 *     onDrop: acceptedFiles => {
 *       // do something with the File objects, e.g. upload to some server
 *     }
 *   });
 *   return (
 *     <div {...getRootProps()}>
 *       <input {...getInputProps()} />
 *       <p>Drag and drop some files here, or click to select files</p>
 *     </div>
 *   )
 * }
 * ```
 *
 * @function useDropzone
 *
 * @param {object} props
 * @param {string|string[]} [props.accept] Set accepted file types.
 * See https://github.com/okonet/attr-accept for more information.
 * Keep in mind that mime type determination is not reliable across platforms. CSV files,
 * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
 * Windows. In some cases there might not be a mime type set at all.
 * See: https://github.com/react-dropzone/react-dropzone/issues/276
 * @param {boolean} [props.multiple=true] Allow drag 'n' drop (or selection from the file dialog) of multiple files
 * @param {boolean} [props.preventDropOnDocument=true] If false, allow dropped items to take over the current browser window
 * @param {boolean} [props.noClick=false] If true, disables click to open the native file selection dialog
 * @param {boolean} [props.noKeyboard=false] If true, disables SPACE/ENTER to open the native file selection dialog.
 * Note that it also stops tracking the focus state.
 * @param {boolean} [props.noDrag=false] If true, disables drag 'n' drop
 * @param {boolean} [props.noDragEventsBubbling=false] If true, stops drag event propagation to parents
 * @param {number} [props.minSize=0] Minimum file size (in bytes)
 * @param {number} [props.maxSize=Infinity] Maximum file size (in bytes)
 * @param {boolean} [props.disabled=false] Enable/disable the dropzone
 * @param {getFilesFromEvent} [props.getFilesFromEvent] Use this to provide a custom file aggregator
 * @param {Function} [props.onFileDialogCancel] Cb for when closing the file dialog with no selection
 * @param {dragCb} [props.onDragEnter] Cb for when the `dragenter` event occurs.
 * @param {dragCb} [props.onDragLeave] Cb for when the `dragleave` event occurs
 * @param {dragCb} [props.onDragOver] Cb for when the `dragover` event occurs
 * @param {dropCb} [props.onDrop] Cb for when the `drop` event occurs.
 * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
 *
 * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
 * `accept` must be a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) or a valid file extension.
 * If `multiple` is set to false and additional files are dropped,
 * all files besides the first will be rejected.
 * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
 *
 * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
 * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
 *
 * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
 * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
 *
 * ```js
 * function onDrop(acceptedFiles) {
 *   const req = request.post('/upload')
 *   acceptedFiles.forEach(file => {
 *     req.attach(file.name, file)
 *   })
 *   req.end(callback)
 * }
 * ```
 * @param {dropAcceptedCb} [props.onDropAccepted]
 * @param {dropRejectedCb} [props.onDropRejected]
 *
 * @returns {DropzoneState}
 */

function useDropzone() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      accept = _ref2.accept,
      _ref2$disabled = _ref2.disabled,
      disabled = _ref2$disabled === void 0 ? false : _ref2$disabled,
      _ref2$getFilesFromEve = _ref2.getFilesFromEvent,
      getFilesFromEvent = _ref2$getFilesFromEve === void 0 ? fromEvent : _ref2$getFilesFromEve,
      _ref2$maxSize = _ref2.maxSize,
      maxSize = _ref2$maxSize === void 0 ? Infinity : _ref2$maxSize,
      _ref2$minSize = _ref2.minSize,
      minSize = _ref2$minSize === void 0 ? 0 : _ref2$minSize,
      _ref2$multiple = _ref2.multiple,
      multiple = _ref2$multiple === void 0 ? true : _ref2$multiple,
      _ref2$maxFiles = _ref2.maxFiles,
      maxFiles = _ref2$maxFiles === void 0 ? 0 : _ref2$maxFiles,
      onDragEnter = _ref2.onDragEnter,
      onDragLeave = _ref2.onDragLeave,
      onDragOver = _ref2.onDragOver,
      onDrop = _ref2.onDrop,
      onDropAccepted = _ref2.onDropAccepted,
      onDropRejected = _ref2.onDropRejected,
      onFileDialogCancel = _ref2.onFileDialogCancel,
      _ref2$preventDropOnDo = _ref2.preventDropOnDocument,
      preventDropOnDocument = _ref2$preventDropOnDo === void 0 ? true : _ref2$preventDropOnDo,
      _ref2$noClick = _ref2.noClick,
      noClick = _ref2$noClick === void 0 ? false : _ref2$noClick,
      _ref2$noKeyboard = _ref2.noKeyboard,
      noKeyboard = _ref2$noKeyboard === void 0 ? false : _ref2$noKeyboard,
      _ref2$noDrag = _ref2.noDrag,
      noDrag = _ref2$noDrag === void 0 ? false : _ref2$noDrag,
      _ref2$noDragEventsBub = _ref2.noDragEventsBubbling,
      noDragEventsBubbling = _ref2$noDragEventsBub === void 0 ? false : _ref2$noDragEventsBub;

  var rootRef = Object(react["useRef"])(null);
  var inputRef = Object(react["useRef"])(null);

  var _useReducer = Object(react["useReducer"])(reducer, initialState),
      _useReducer2 = es_slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var isFocused = state.isFocused,
      isFileDialogActive = state.isFileDialogActive,
      draggedFiles = state.draggedFiles; // Fn for opening the file dialog programmatically

  var openFileDialog = Object(react["useCallback"])(function () {
    if (inputRef.current) {
      dispatch({
        type: 'openDialog'
      });
      inputRef.current.value = null;
      inputRef.current.click();
    }
  }, [dispatch]); // Update file dialog active state when the window is focused on

  var onWindowFocus = function onWindowFocus() {
    // Execute the timeout only if the file dialog is opened in the browser
    if (isFileDialogActive) {
      setTimeout(function () {
        if (inputRef.current) {
          var files = inputRef.current.files;

          if (!files.length) {
            dispatch({
              type: 'closeDialog'
            });

            if (typeof onFileDialogCancel === 'function') {
              onFileDialogCancel();
            }
          }
        }
      }, 300);
    }
  };

  Object(react["useEffect"])(function () {
    window.addEventListener('focus', onWindowFocus, false);
    return function () {
      window.removeEventListener('focus', onWindowFocus, false);
    };
  }, [inputRef, isFileDialogActive, onFileDialogCancel]); // Cb to open the file dialog when SPACE/ENTER occurs on the dropzone

  var onKeyDownCb = Object(react["useCallback"])(function (event) {
    // Ignore keyboard events bubbling up the DOM tree
    if (!rootRef.current || !rootRef.current.isEqualNode(event.target)) {
      return;
    }

    if (event.keyCode === 32 || event.keyCode === 13) {
      event.preventDefault();
      openFileDialog();
    }
  }, [rootRef, inputRef]); // Update focus state for the dropzone

  var onFocusCb = Object(react["useCallback"])(function () {
    dispatch({
      type: 'focus'
    });
  }, []);
  var onBlurCb = Object(react["useCallback"])(function () {
    dispatch({
      type: 'blur'
    });
  }, []); // Cb to open the file dialog when click occurs on the dropzone

  var onClickCb = Object(react["useCallback"])(function () {
    if (noClick) {
      return;
    } // In IE11/Edge the file-browser dialog is blocking, therefore, use setTimeout()
    // to ensure React can handle state changes
    // See: https://github.com/react-dropzone/react-dropzone/issues/450


    if (isIeOrEdge()) {
      setTimeout(openFileDialog, 0);
    } else {
      openFileDialog();
    }
  }, [inputRef, noClick]);
  var dragTargetsRef = Object(react["useRef"])([]);

  var onDocumentDrop = function onDocumentDrop(event) {
    if (rootRef.current && rootRef.current.contains(event.target)) {
      // If we intercepted an event for our instance, let it propagate down to the instance's onDrop handler
      return;
    }

    event.preventDefault();
    dragTargetsRef.current = [];
  };

  Object(react["useEffect"])(function () {
    if (preventDropOnDocument) {
      document.addEventListener('dragover', onDocumentDragOver, false);
      document.addEventListener('drop', onDocumentDrop, false);
    }

    return function () {
      if (preventDropOnDocument) {
        document.removeEventListener('dragover', onDocumentDragOver);
        document.removeEventListener('drop', onDocumentDrop);
      }
    };
  }, [rootRef, preventDropOnDocument]);
  var onDragEnterCb = Object(react["useCallback"])(function (event) {
    event.preventDefault(); // Persist here because we need the event later after getFilesFromEvent() is done

    event.persist();
    stopPropagation(event);
    dragTargetsRef.current = [].concat(_toConsumableArray(dragTargetsRef.current), [event.target]);

    if (isEvtWithFiles(event)) {
      Promise.resolve(getFilesFromEvent(event)).then(function (draggedFiles) {
        if (isPropagationStopped(event) && !noDragEventsBubbling) {
          return;
        }

        dispatch({
          draggedFiles: draggedFiles,
          isDragActive: true,
          type: 'setDraggedFiles'
        });

        if (onDragEnter) {
          onDragEnter(event);
        }
      });
    }
  }, [getFilesFromEvent, onDragEnter, noDragEventsBubbling]);
  var onDragOverCb = Object(react["useCallback"])(function (event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);

    if (event.dataTransfer) {
      try {
        event.dataTransfer.dropEffect = 'copy';
      } catch (_unused) {}
      /* eslint-disable-line no-empty */

    }

    if (isEvtWithFiles(event) && onDragOver) {
      onDragOver(event);
    }

    return false;
  }, [onDragOver, noDragEventsBubbling]);
  var onDragLeaveCb = Object(react["useCallback"])(function (event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event); // Only deactivate once the dropzone and all children have been left

    var targets = dragTargetsRef.current.filter(function (target) {
      return rootRef.current && rootRef.current.contains(target);
    }); // Make sure to remove a target present multiple times only once
    // (Firefox may fire dragenter/dragleave multiple times on the same element)

    var targetIdx = targets.indexOf(event.target);

    if (targetIdx !== -1) {
      targets.splice(targetIdx, 1);
    }

    dragTargetsRef.current = targets;

    if (targets.length > 0) {
      return;
    }

    dispatch({
      isDragActive: false,
      type: 'setDraggedFiles',
      draggedFiles: []
    });

    if (isEvtWithFiles(event) && onDragLeave) {
      onDragLeave(event);
    }
  }, [rootRef, onDragLeave, noDragEventsBubbling]);
  var onDropCb = Object(react["useCallback"])(function (event) {
    event.preventDefault(); // Persist here because we need the event later after getFilesFromEvent() is done

    event.persist();
    stopPropagation(event);
    dragTargetsRef.current = [];

    if (isEvtWithFiles(event)) {
      Promise.resolve(getFilesFromEvent(event)).then(function (files) {
        if (isPropagationStopped(event) && !noDragEventsBubbling) {
          return;
        }

        var acceptedFiles = [];
        var fileRejections = [];
        files.forEach(function (file) {
          var _fileAccepted = fileAccepted(file, accept),
              _fileAccepted2 = es_slicedToArray(_fileAccepted, 2),
              accepted = _fileAccepted2[0],
              acceptError = _fileAccepted2[1];

          var _fileMatchSize = fileMatchSize(file, minSize, maxSize),
              _fileMatchSize2 = es_slicedToArray(_fileMatchSize, 2),
              sizeMatch = _fileMatchSize2[0],
              sizeError = _fileMatchSize2[1];

          if (accepted && sizeMatch) {
            acceptedFiles.push(file);
          } else {
            var errors = [acceptError, sizeError].filter(function (e) {
              return e;
            });
            fileRejections.push({
              file: file,
              errors: errors
            });
          }
        });

        if (!multiple && acceptedFiles.length > 1 || multiple && maxFiles >= 1 && acceptedFiles.length > maxFiles) {
          // Reject everything and empty accepted files
          acceptedFiles.forEach(function (file) {
            fileRejections.push({
              file: file,
              errors: [TOO_MANY_FILES_REJECTION]
            });
          });
          acceptedFiles.splice(0);
        }

        dispatch({
          acceptedFiles: acceptedFiles,
          fileRejections: fileRejections,
          type: 'setFiles'
        });

        if (onDrop) {
          onDrop(acceptedFiles, fileRejections, event);
        }

        if (fileRejections.length > 0 && onDropRejected) {
          onDropRejected(fileRejections, event);
        }

        if (acceptedFiles.length > 0 && onDropAccepted) {
          onDropAccepted(acceptedFiles, event);
        }
      });
    }

    dispatch({
      type: 'reset'
    });
  }, [multiple, accept, minSize, maxSize, getFilesFromEvent, onDrop, onDropAccepted, onDropRejected, noDragEventsBubbling]);

  var composeHandler = function composeHandler(fn) {
    return disabled ? null : fn;
  };

  var composeKeyboardHandler = function composeKeyboardHandler(fn) {
    return noKeyboard ? null : composeHandler(fn);
  };

  var composeDragHandler = function composeDragHandler(fn) {
    return noDrag ? null : composeHandler(fn);
  };

  var stopPropagation = function stopPropagation(event) {
    if (noDragEventsBubbling) {
      event.stopPropagation();
    }
  };

  var getRootProps = Object(react["useMemo"])(function () {
    return function () {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$refKey = _ref3.refKey,
          refKey = _ref3$refKey === void 0 ? 'ref' : _ref3$refKey,
          onKeyDown = _ref3.onKeyDown,
          onFocus = _ref3.onFocus,
          onBlur = _ref3.onBlur,
          onClick = _ref3.onClick,
          onDragEnter = _ref3.onDragEnter,
          onDragOver = _ref3.onDragOver,
          onDragLeave = _ref3.onDragLeave,
          onDrop = _ref3.onDrop,
          rest = _objectWithoutProperties(_ref3, ["refKey", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"]);

      return _objectSpread(_defineProperty({
        onKeyDown: composeKeyboardHandler(composeEventHandlers(onKeyDown, onKeyDownCb)),
        onFocus: composeKeyboardHandler(composeEventHandlers(onFocus, onFocusCb)),
        onBlur: composeKeyboardHandler(composeEventHandlers(onBlur, onBlurCb)),
        onClick: composeHandler(composeEventHandlers(onClick, onClickCb)),
        onDragEnter: composeDragHandler(composeEventHandlers(onDragEnter, onDragEnterCb)),
        onDragOver: composeDragHandler(composeEventHandlers(onDragOver, onDragOverCb)),
        onDragLeave: composeDragHandler(composeEventHandlers(onDragLeave, onDragLeaveCb)),
        onDrop: composeDragHandler(composeEventHandlers(onDrop, onDropCb))
      }, refKey, rootRef), !disabled && !noKeyboard ? {
        tabIndex: 0
      } : {}, {}, rest);
    };
  }, [rootRef, onKeyDownCb, onFocusCb, onBlurCb, onClickCb, onDragEnterCb, onDragOverCb, onDragLeaveCb, onDropCb, noKeyboard, noDrag, disabled]);
  var onInputElementClick = Object(react["useCallback"])(function (event) {
    event.stopPropagation();
  }, []);
  var getInputProps = Object(react["useMemo"])(function () {
    return function () {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref4$refKey = _ref4.refKey,
          refKey = _ref4$refKey === void 0 ? 'ref' : _ref4$refKey,
          onChange = _ref4.onChange,
          onClick = _ref4.onClick,
          rest = _objectWithoutProperties(_ref4, ["refKey", "onChange", "onClick"]);

      var inputProps = _defineProperty({
        accept: accept,
        multiple: multiple,
        type: 'file',
        style: {
          display: 'none'
        },
        onChange: composeHandler(composeEventHandlers(onChange, onDropCb)),
        onClick: composeHandler(composeEventHandlers(onClick, onInputElementClick)),
        autoComplete: 'off',
        tabIndex: -1
      }, refKey, inputRef);

      return _objectSpread({}, inputProps, {}, rest);
    };
  }, [inputRef, accept, multiple, onDropCb, disabled]);
  var fileCount = draggedFiles.length;
  var isDragAccept = fileCount > 0 && allFilesAccepted({
    files: draggedFiles,
    accept: accept,
    minSize: minSize,
    maxSize: maxSize,
    multiple: multiple
  });
  var isDragReject = fileCount > 0 && !isDragAccept;
  return _objectSpread({}, state, {
    isDragAccept: isDragAccept,
    isDragReject: isDragReject,
    isFocused: isFocused && !disabled,
    getRootProps: getRootProps,
    getInputProps: getInputProps,
    rootRef: rootRef,
    inputRef: inputRef,
    open: composeHandler(openFileDialog)
  });
}

function reducer(state, action) {
  /* istanbul ignore next */
  switch (action.type) {
    case 'focus':
      return _objectSpread({}, state, {
        isFocused: true
      });

    case 'blur':
      return _objectSpread({}, state, {
        isFocused: false
      });

    case 'openDialog':
      return _objectSpread({}, state, {
        isFileDialogActive: true
      });

    case 'closeDialog':
      return _objectSpread({}, state, {
        isFileDialogActive: false
      });

    case 'setDraggedFiles':
      /* eslint no-case-declarations: 0 */
      var isDragActive = action.isDragActive,
          draggedFiles = action.draggedFiles;
      return _objectSpread({}, state, {
        draggedFiles: draggedFiles,
        isDragActive: isDragActive
      });

    case 'setFiles':
      return _objectSpread({}, state, {
        acceptedFiles: action.acceptedFiles,
        fileRejections: action.fileRejections
      });

    case 'reset':
      return _objectSpread({}, state, {
        isFileDialogActive: false,
        isDragActive: false,
        draggedFiles: [],
        acceptedFiles: [],
        fileRejections: []
      });

    default:
      return state;
  }
}

/***/ })

}]);