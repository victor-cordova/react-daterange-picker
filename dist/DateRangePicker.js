"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactLifecyclesCompat = require("react-lifecycles-compat");

var _makeEventProps = _interopRequireDefault(require("make-event-props"));

var _mergeClassNames = _interopRequireDefault(require("merge-class-names"));

var _reactFit = _interopRequireDefault(require("react-fit"));

var _entry = _interopRequireDefault(require("react-calendar/dist/entry.nostyle"));

var _DateInput = _interopRequireDefault(require("react-date-picker/dist/DateInput"));

var _utils = require("./shared/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var baseClassName = 'react-daterange-picker';
var outsideActionEvents = ['mousedown', 'focusin', 'touchstart'];

var DateRangePicker =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(DateRangePicker, _PureComponent);

  function DateRangePicker() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DateRangePicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DateRangePicker)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "onOutsideAction", function (event) {
      if (_this.wrapper && !_this.wrapper.contains(event.target)) {
        _this.closeCalendar();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "openCalendar", function () {
      _this.setState({
        isOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closeCalendar", function () {
      _this.setState(function (prevState) {
        if (!prevState.isOpen) {
          return null;
        }

        return {
          isOpen: false
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleCalendar", function () {
      _this.setState(function (prevState) {
        return {
          isOpen: !prevState.isOpen
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (value) {
      var closeCalendar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      _this.setState({
        isOpen: !closeCalendar
      });

      var onChange = _this.props.onChange;

      if (onChange) {
        onChange(value);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeFrom", function (valueFrom) {
      var closeCalendar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var value = _this.props.value;

      var _concat = [].concat(value),
          _concat2 = _slicedToArray(_concat, 2),
          valueTo = _concat2[1];

      _this.onChange([valueFrom, valueTo], closeCalendar);
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeTo", function (valueTo) {
      var closeCalendar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var value = _this.props.value;

      var _concat3 = [].concat(value),
          _concat4 = _slicedToArray(_concat3, 1),
          valueFrom = _concat4[0];

      _this.onChange([valueFrom, valueTo], closeCalendar);
    });

    _defineProperty(_assertThisInitialized(_this), "onFocus", function (event) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onFocus = _this$props.onFocus;

      if (onFocus) {
        onFocus(event);
      } // Internet Explorer still fires onFocus on disabled elements


      if (disabled) {
        return;
      }

      _this.openCalendar();
    });

    _defineProperty(_assertThisInitialized(_this), "stopPropagation", function (event) {
      return event.stopPropagation();
    });

    _defineProperty(_assertThisInitialized(_this), "clear", function () {
      return _this.onChange(null);
    });

    return _this;
  }

  _createClass(DateRangePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      outsideActionEvents.forEach(function (eventName) {
        return document.addEventListener(eventName, _this2.onOutsideAction);
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var isOpen = this.state.isOpen;
      var _this$props2 = this.props,
          onCalendarClose = _this$props2.onCalendarClose,
          onCalendarOpen = _this$props2.onCalendarOpen;

      if (isOpen !== prevState.isOpen) {
        (0, _utils.callIfDefined)(isOpen ? onCalendarOpen : onCalendarClose);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;

      outsideActionEvents.forEach(function (eventName) {
        return document.removeEventListener(eventName, _this3.onOutsideAction);
      });
    }
  }, {
    key: "renderInputs",
    value: function renderInputs() {
      var _this$props3 = this.props,
          calendarIcon = _this$props3.calendarIcon,
          clearIcon = _this$props3.clearIcon,
          disabled = _this$props3.disabled,
          format = _this$props3.format,
          locale = _this$props3.locale,
          maxDetail = _this$props3.maxDetail,
          maxDate = _this$props3.maxDate,
          minDate = _this$props3.minDate,
          name = _this$props3.name,
          required = _this$props3.required,
          showLeadingZeros = _this$props3.showLeadingZeros,
          value = _this$props3.value;
      var isOpen = this.state.isOpen;

      var _concat5 = [].concat(value),
          _concat6 = _slicedToArray(_concat5, 2),
          valueFrom = _concat6[0],
          valueTo = _concat6[1];

      var commonProps = {
        className: "".concat(baseClassName, "__inputGroup"),
        disabled: disabled,
        format: format,
        isCalendarOpen: isOpen,
        locale: locale,
        maxDate: maxDate,
        maxDetail: maxDetail,
        minDate: minDate,
        required: required,
        showLeadingZeros: showLeadingZeros
      };
      return _react.default.createElement("div", {
        className: "".concat(baseClassName, "__wrapper")
      }, _react.default.createElement(_DateInput.default, _extends({}, commonProps, {
        name: "".concat(name, "_from"),
        onChange: this.onChangeFrom,
        returnValue: "start",
        value: valueFrom
      })), _react.default.createElement("span", {
        className: "".concat(baseClassName, "__range-divider")
      }, "\u2013"), _react.default.createElement(_DateInput.default, _extends({}, commonProps, {
        name: "".concat(name, "_to"),
        onChange: this.onChangeTo,
        returnValue: "end",
        value: valueTo
      })), clearIcon !== null && _react.default.createElement("button", {
        className: "".concat(baseClassName, "__clear-button ").concat(baseClassName, "__button"),
        disabled: disabled,
        onClick: this.clear,
        onFocus: this.stopPropagation,
        type: "button"
      }, clearIcon), calendarIcon !== null && _react.default.createElement("button", {
        className: "".concat(baseClassName, "__calendar-button ").concat(baseClassName, "__button"),
        disabled: disabled,
        onClick: this.toggleCalendar,
        onFocus: this.stopPropagation,
        onBlur: this.resetValue,
        type: "button"
      }, calendarIcon));
    }
  }, {
    key: "renderCalendar",
    value: function renderCalendar() {
      var isOpen = this.state.isOpen;

      if (isOpen === null) {
        return null;
      }

      var _this$props4 = this.props,
          calendarClassName = _this$props4.calendarClassName,
          datePickerClassName = _this$props4.className,
          onChange = _this$props4.onChange,
          value = _this$props4.value,
          calendarProps = _objectWithoutProperties(_this$props4, ["calendarClassName", "className", "onChange", "value"]);

      var className = "".concat(baseClassName, "__calendar");
      return _react.default.createElement(_reactFit.default, null, _react.default.createElement("div", {
        className: (0, _mergeClassNames.default)(className, "".concat(className, "--").concat(isOpen ? 'open' : 'closed'))
      }, _react.default.createElement(_entry.default, _extends({
        className: calendarClassName,
        onChange: this.onChange,
        selectRange: true,
        value: value || null
      }, calendarProps))));
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props5 = this.props,
          className = _this$props5.className,
          disabled = _this$props5.disabled;
      var isOpen = this.state.isOpen;
      return _react.default.createElement("div", _extends({
        className: (0, _mergeClassNames.default)(baseClassName, "".concat(baseClassName, "--").concat(isOpen ? 'open' : 'closed'), "".concat(baseClassName, "--").concat(disabled ? 'disabled' : 'enabled'), className)
      }, this.eventProps, {
        onFocus: this.onFocus,
        ref: function ref(_ref) {
          if (!_ref) {
            return;
          }

          _this4.wrapper = _ref;
        }
      }), this.renderInputs(), this.renderCalendar());
    }
  }, {
    key: "eventProps",
    get: function get() {
      return (0, _makeEventProps.default)(this.props);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.isOpen !== prevState.isOpenProps) {
        return {
          isOpen: nextProps.isOpen,
          isOpenProps: nextProps.isOpen
        };
      }

      return null;
    }
  }]);

  return DateRangePicker;
}(_react.PureComponent);

exports.default = DateRangePicker;

var CalendarIcon = _react.default.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "19",
  height: "19",
  viewBox: "0 0 19 19"
}, _react.default.createElement("g", {
  stroke: "black",
  strokeWidth: "2"
}, _react.default.createElement("rect", {
  width: "15",
  height: "15",
  x: "2",
  y: "2",
  fill: "none"
}), _react.default.createElement("line", {
  x1: "6",
  y1: "0",
  x2: "6",
  y2: "4"
}), _react.default.createElement("line", {
  x1: "13",
  y1: "0",
  x2: "13",
  y2: "4"
})));

var ClearIcon = _react.default.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "19",
  height: "19",
  viewBox: "0 0 19 19"
}, _react.default.createElement("g", {
  stroke: "black",
  strokeWidth: "2"
}, _react.default.createElement("line", {
  x1: "4",
  y1: "4",
  x2: "15",
  y2: "15"
}), _react.default.createElement("line", {
  x1: "15",
  y1: "4",
  x2: "4",
  y2: "15"
})));

DateRangePicker.defaultProps = {
  calendarIcon: CalendarIcon,
  clearIcon: ClearIcon,
  isOpen: null,
  name: 'daterange'
};
DateRangePicker.propTypes = _objectSpread({}, _entry.default.propTypes, {
  calendarClassName: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)]),
  calendarIcon: _propTypes.default.node,
  className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)]),
  clearIcon: _propTypes.default.node,
  disabled: _propTypes.default.bool,
  format: _propTypes.default.string,
  isOpen: _propTypes.default.bool,
  name: _propTypes.default.string,
  onCalendarClose: _propTypes.default.func,
  onCalendarOpen: _propTypes.default.func,
  required: _propTypes.default.bool,
  showLeadingZeros: _propTypes.default.bool
});
(0, _reactLifecyclesCompat.polyfill)(DateRangePicker);