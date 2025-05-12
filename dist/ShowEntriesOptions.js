"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function ShowEntriesOptions(_ref) {
  var setRowsPerPage = _ref.setRowsPerPage,
    rowsPerPage = _ref.rowsPerPage,
    setCurrentPage = _ref.setCurrentPage;
  // To manage the entries to show
  var handleRowsPerPageChange = (0, _react.useCallback)(function (e) {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(0);
  }, [setRowsPerPage, setCurrentPage]);
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("label", null, "Show ", " ", /*#__PURE__*/_react["default"].createElement("select", {
    value: rowsPerPage,
    onChange: handleRowsPerPageChange
  }, /*#__PURE__*/_react["default"].createElement("option", {
    value: "10"
  }, "10"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "25"
  }, "25"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "50"
  }, "50"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "100"
  }, "100")), " ", "entries"));
}
ShowEntriesOptions.propTypes = {
  setRowsPerPage: _propTypes["default"].func.isRequired,
  rowsPerPage: _propTypes["default"].number.isRequired,
  setCurrentPage: _propTypes["default"].func.isRequired
};
var _default = exports["default"] = ShowEntriesOptions;