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
function SearchBar(_ref) {
  var setFilterText = _ref.setFilterText,
    setCurrentPage = _ref.setCurrentPage;
  // Filter management
  var handleFilterChange = (0, _react.useCallback)(function (e) {
    setFilterText(e.target.value);
    setCurrentPage(0);
  }, [setFilterText, setCurrentPage]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      padding: 2
    }
  }, /*#__PURE__*/_react["default"].createElement("label", null, "Search: ", " ", /*#__PURE__*/_react["default"].createElement("input", {
    type: "search",
    placeholder: "",
    onChange: handleFilterChange
  })));
}
SearchBar.propTypes = {
  setFilterText: _propTypes["default"].func.isRequired,
  setCurrentPage: _propTypes["default"].func.isRequired
};
var _default = exports["default"] = SearchBar;