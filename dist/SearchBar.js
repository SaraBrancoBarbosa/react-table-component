"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = require("react");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function SearchBar(_ref) {
  var setFilterText = _ref.setFilterText,
    setCurrentPage = _ref.setCurrentPage;
  // Filter management
  var handleFilterChange = (0, _react.useCallback)(function (e) {
    setFilterText(e.target.value);
    setCurrentPage(0);
  }, [setFilterText, setCurrentPage]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 2
    }
  }, /*#__PURE__*/React.createElement("label", null, "Search: ", " ", /*#__PURE__*/React.createElement("input", {
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