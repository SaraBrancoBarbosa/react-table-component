"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Column = function Column(_ref) {
  var column = _ref.column,
    value = _ref.value;
  if (column.type === "date") return value instanceof Date ? value.tableDate() : value.toString();
  if (column.type === "number") return "" + value;
  if (!(typeof value === "string")) return JSON.stringify(value);
  return value;
};
var _default = exports["default"] = Column;