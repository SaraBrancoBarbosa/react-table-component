"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var usePagination = function usePagination(_ref) {
  var totalItems = _ref.totalItems,
    itemsPerPage = _ref.itemsPerPage,
    _ref$defaultPage = _ref.defaultPage,
    defaultPage = _ref$defaultPage === void 0 ? -1 : _ref$defaultPage;
  var _useState = (0, _react.useState)(defaultPage >= 0 ? defaultPage : 0),
    _useState2 = _slicedToArray(_useState, 2),
    currentPage = _useState2[0],
    handleCurrentPage = _useState2[1];
  var _useState3 = (0, _react.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    currentItemIndex = _useState4[0],
    setCurrentItemIndex = _useState4[1];
  var setCurrentPage = function setCurrentPage(page) {
    setCurrentItemIndex(page * itemsPerPage);
    handleCurrentPage(page);
  };
  return {
    currentPage: currentPage,
    currentItemIndex: currentItemIndex,
    itemsPerPage: itemsPerPage,
    totalItems: totalItems,
    setCurrentPage: setCurrentPage
  };
};
var _default = exports["default"] = usePagination;