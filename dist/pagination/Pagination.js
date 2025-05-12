"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Pagination(_ref) {
  var _ref$itemsPerPage = _ref.itemsPerPage,
    itemsPerPage = _ref$itemsPerPage === void 0 ? 10 : _ref$itemsPerPage,
    totalItems = _ref.totalItems,
    _ref$currentItemIndex = _ref.currentItemIndex,
    currentItemIndex = _ref$currentItemIndex === void 0 ? 0 : _ref$currentItemIndex,
    _ref$currentPage = _ref.currentPage,
    currentPage = _ref$currentPage === void 0 ? 0 : _ref$currentPage,
    _ref$setCurrentPage = _ref.setCurrentPage,
    setCurrentPage = _ref$setCurrentPage === void 0 ? function () {} : _ref$setCurrentPage;
  var pagesCount = Math.ceil(totalItems / itemsPerPage);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", null, "Showing ", currentItemIndex + 1, " to ", Math.min(currentItemIndex + itemsPerPage, totalItems), " of ", totalItems, " entries"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "table-pagination"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return setCurrentPage(currentPage - 1);
    }
    // To forbid the click when on the first page
    ,
    disabled: currentPage === 0,
    className: "previous-page"
  }, "Previous"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "current-page"
  }, currentPage + 1), /*#__PURE__*/_react["default"].createElement("button", {
    // To forbid the click when on the last page
    onClick: function onClick() {
      return setCurrentPage(currentPage + 1);
    },
    disabled: currentPage >= pagesCount - 1,
    className: "next-page"
  }, "Next")));
}
Pagination.propTypes = {
  totalItems: _propTypes["default"].number.isRequired,
  currentPage: _propTypes["default"].number,
  itemsPerPage: _propTypes["default"].number,
  currentItemIndex: _propTypes["default"].number,
  setCurrentPage: _propTypes["default"].func
};
var _default = exports["default"] = Pagination;