"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = require("react");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ShowEntriesOptions(_ref) {
  var setRowsPerPage = _ref.setRowsPerPage,
    rowsPerPage = _ref.rowsPerPage,
    setCurrentPage = _ref.setCurrentPage;
  // To manage the entries to show
  var handleRowsPerPageChange = (0, _react.useCallback)(function (e) {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(0);
  }, [setRowsPerPage, setCurrentPage]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Show ", " ", /*#__PURE__*/React.createElement("select", {
    value: rowsPerPage,
    onChange: handleRowsPerPageChange
  }, /*#__PURE__*/React.createElement("option", {
    value: "10"
  }, "10"), /*#__PURE__*/React.createElement("option", {
    value: "25"
  }, "25"), /*#__PURE__*/React.createElement("option", {
    value: "50"
  }, "50"), /*#__PURE__*/React.createElement("option", {
    value: "100"
  }, "100")), " ", "entries"));
}
ShowEntriesOptions.propTypes = {
  setRowsPerPage: _propTypes["default"].func.isRequired,
  rowsPerPage: _propTypes["default"].number.isRequired,
  setCurrentPage: _propTypes["default"].func.isRequired
};
var _default = exports["default"] = ShowEntriesOptions;