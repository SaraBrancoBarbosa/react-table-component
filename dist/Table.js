"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Column = _interopRequireDefault(require("./Column"));
var _SearchBar = _interopRequireDefault(require("./SearchBar"));
var _usePagination = _interopRequireDefault(require("./pagination/usePagination"));
var _Pagination = _interopRequireDefault(require("./pagination/Pagination"));
var _ShowEntriesOptions = _interopRequireDefault(require("./ShowEntriesOptions"));
var _SortItem = _interopRequireDefault(require("./SortItem"));
var _useSort2 = _interopRequireDefault(require("./hooks/useSort"));
require("./index.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
// To convert the date to the format "YYYY/MM/DD"
Date.prototype.tableDate = function () {
  var month = ("" + (this.getMonth() + 1)).padStart(2, "0");
  var day = ("" + this.getDate()).padStart(2, "0");
  var year = this.getFullYear();
  return [year, month, day].join("/");
};

// To format the columns headers by adding properties: column ID, type, and visibility
var formatHeaders = function formatHeaders(headers) {
  return [{
    // A column for the rows indexation
    name: "internalIndex",
    visible: false,
    filterable: false,
    type: "number",
    columnId: 0
  }].concat(_toConsumableArray(headers.map(function (header, index) {
    var value = typeof header === "string" ? {
      columnId: index + 1,
      name: header,
      type: "string",
      visible: true
    } : _objectSpread(_objectSpread({
      columnId: index + 1
    }, header), {}, {
      visible: header.visible !== undefined ? header.visible : true
    });
    return value;
  })));
};
function TableComponent(_ref) {
  var headers = _ref.headers,
    rows = _ref.rows,
    _ref$showPagination = _ref.showPagination,
    showPagination = _ref$showPagination === void 0 ? true : _ref$showPagination,
    _ref$showSearchBar = _ref.showSearchBar,
    showSearchBar = _ref$showSearchBar === void 0 ? true : _ref$showSearchBar,
    _ref$showSortItem = _ref.showSortItem,
    showSortItem = _ref$showSortItem === void 0 ? true : _ref$showSortItem,
    getId = _ref.getId,
    _ref$onDelete = _ref.onDelete,
    onDelete = _ref$onDelete === void 0 ? null : _ref$onDelete;
  // To format the headers and store them in columnHeaders
  var columnHeaders = (0, _react.useMemo)(function () {
    return formatHeaders(headers);
  }, [headers]);

  // To add an internal index to each row and memoize the result
  var indexedRows = (0, _react.useMemo)(function () {
    return rows.map(function (row, internalIndex) {
      return [internalIndex].concat(_toConsumableArray(row));
    });
  }, [rows]);

  // To set up pagination for the table rows (items per page and current page)
  var _useState = (0, _react.useState)(10),
    _useState2 = _slicedToArray(_useState, 2),
    rowsPerPage = _useState2[0],
    setRowsPerPage = _useState2[1];
  var paginationProps = (0, _usePagination["default"])({
    itemsPerPage: rowsPerPage,
    totalItems: indexedRows.length
  });
  var currentItemIndex = paginationProps.currentItemIndex,
    itemsPerPage = paginationProps.itemsPerPage,
    totalItems = paginationProps.totalItems,
    setCurrentPage = paginationProps.setCurrentPage;

  // To extract the indexes of the columns that are filterable
  var filterableColumns = (0, _react.useMemo)(function () {
    return columnHeaders.filter(function (header) {
      return header.filterable === true;
    }).map(function (header) {
      return header.columnId;
    });
  }, [columnHeaders]);

  // Sort hook
  var _useSort = (0, _useSort2["default"])(indexedRows, columnHeaders),
    sortConfig = _useSort.sortConfig,
    setSortConfig = _useSort.setSortConfig,
    sortedRows = _useSort.sortedRows;

  // Search bar text
  var _useState3 = (0, _react.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    filterText = _useState4[0],
    setFilterText = _useState4[1];

  // To filter the rows based on the search bar text (applied to filterable columns)
  var filteredRows = (0, _react.useMemo)(function () {
    return filterText === "" ? sortedRows : sortedRows.filter(function (row) {
      return filterableColumns.some(function (columnId) {
        return row[columnId].toLowerCase().includes(filterText.toLowerCase());
      });
    });
  }, [filterText, filterableColumns, sortedRows]);

  // To get the rows to be displayed (after filtering and applying pagination)
  var currentRows = (0, _react.useMemo)(function () {
    return filteredRows.slice(currentItemIndex, Math.min(currentItemIndex + itemsPerPage, totalItems));
  }, [filteredRows, currentItemIndex, itemsPerPage, totalItems]);

  // To handle row deletion by passing the row's ID to the onDelete callback
  var handleDelete = function handleDelete(index) {
    var row = currentRows[index];
    var dataId = getId(row);
    onDelete === null || onDelete === void 0 || onDelete(dataId);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "table_wrapper"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "entries-and-search"
  }, showPagination && /*#__PURE__*/_react["default"].createElement(_ShowEntriesOptions["default"], {
    rowsPerPage: rowsPerPage,
    setRowsPerPage: setRowsPerPage,
    setCurrentPage: setCurrentPage
  }), showSearchBar && /*#__PURE__*/_react["default"].createElement(_SearchBar["default"], {
    setFilterText: setFilterText,
    setCurrentPage: setCurrentPage
  })), /*#__PURE__*/_react["default"].createElement("table", {
    role: "grid"
  }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", {
    role: "row"
  }, columnHeaders.map(function (column, index) {
    return /*#__PURE__*/_react["default"].createElement(_react.Fragment, {
      key: "column-".concat(index)
    }, column.visible && /*#__PURE__*/_react["default"].createElement("th", {
      key: index
    }, column.name, showSortItem && /*#__PURE__*/_react["default"].createElement(_SortItem["default"], {
      setSortConfig: setSortConfig,
      sortConfig: sortConfig,
      index: index
    })));
  }), onDelete && /*#__PURE__*/_react["default"].createElement("th", {
    key: "button-delete"
  }, "Delete"))), /*#__PURE__*/_react["default"].createElement("tbody", null, currentRows.map(function (row, index) {
    return /*#__PURE__*/_react["default"].createElement("tr", {
      key: index,
      role: "row",
      className: "row"
    }, row.map(function (field, fieldIndex) {
      return /*#__PURE__*/_react["default"].createElement(_react.Fragment, {
        key: "row-".concat(fieldIndex)
      }, columnHeaders[fieldIndex].visible && /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_Column["default"], {
        column: columnHeaders[fieldIndex],
        value: field
      })));
    }), onDelete && /*#__PURE__*/_react["default"].createElement("td", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/_react["default"].createElement("button", {
      onClick: function onClick() {
        return handleDelete(index);
      },
      type: "button",
      className: "button button-delete"
    }, "X")));
  }))), showPagination && /*#__PURE__*/_react["default"].createElement("div", {
    className: "info-and-pagination"
  }, /*#__PURE__*/_react["default"].createElement(_Pagination["default"], paginationProps)));
}
TableComponent.propTypes = {
  headers: _propTypes["default"].array.isRequired,
  rows: _propTypes["default"].array.isRequired,
  showPagination: _propTypes["default"].bool,
  showSearchBar: _propTypes["default"].bool,
  showSortItem: _propTypes["default"].bool,
  getId: _propTypes["default"].func,
  onDelete: _propTypes["default"].func
};
var _default = exports["default"] = TableComponent;