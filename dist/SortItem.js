"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function SortItem(_ref) {
  var setSortConfig = _ref.setSortConfig,
    sortConfig = _ref.sortConfig,
    index = _ref.index;
  // Handle column header click (sorting)
  var handleSort = function handleSort(index) {
    setSortConfig(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        key: index,
        direction: prevState.key === index ?
        // Toggle direction if same column clicked
        prevState.direction === "asc" ? "desc" : "asc"
        // Default to ascending if new column
        : "asc"
      });
    });
  };
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: "sort-symbol",
    onClick: function onClick() {
      return handleSort(index);
    }
  }, sortConfig.key === index ? sortConfig.direction === "asc" ? "↑" : "↓" : "↕");
}
SortItem.propTypes = {
  setSortConfig: _propTypes["default"].func.isRequired,
  sortConfig: _propTypes["default"].shape({
    key: _propTypes["default"].number,
    direction: _propTypes["default"].oneOf(["asc", "desc"])
  }).isRequired,
  index: _propTypes["default"].number.isRequired
};
var _default = exports["default"] = SortItem;