"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var applySort = function applySort(rows, config, headers) {
  var key = config.key;
  if (!key) return _toConsumableArray(rows);

  // For the date columns: conversion to Date object when date type
  if (headers[key].type === "date") {
    return _toConsumableArray(rows).sort(function (a, b) {
      var valueA = new Date(a[key]);
      var valueB = new Date(b[key]);
      return config.direction === "asc" ? valueA - valueB : valueB - valueA;
    });
  }

  // For the numbers: conversion to Number object
  if (headers[key].type === "number") {
    return _toConsumableArray(rows).sort(function (a, b) {
      var valueA = Number(a[key]);
      var valueB = Number(b[key]);
      return config.direction === "asc" ? valueA - valueB : valueB - valueA;
    });
  }

  // For the mixed texts and numbers columns
  var extractNumberFromString = function extractNumberFromString(str) {
    // To extract the number
    var match = str.match(/^(\d+)/);
    // Return the number. If no number => NaN
    return match ? parseInt(match[0], 10) : NaN;
  };
  var sorted = _toConsumableArray(rows).sort(function (a, b) {
    var valueA = a[key];
    var valueB = b[key];

    // If values are numeric (or can be interpreted as numbers)
    var numberA = extractNumberFromString(valueA);
    var numberB = extractNumberFromString(valueB);
    if (!isNaN(numberA) && !isNaN(numberB)) {
      // If both have numbers => compare them
      return config.direction === "asc" ? numberA - numberB : numberB - numberA;
    }

    // If both are strings (or without numbers) => localeCompare
    return config.direction === "asc" ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
  });
  return sorted;
};
var useSort = function useSort(rows, headers) {
  // To sort the columns in asc and desc order
  var _useState = (0, _react.useState)({
      key: null,
      direction: "asc"
    }),
    _useState2 = _slicedToArray(_useState, 2),
    sortConfig = _useState2[0],
    setSortConfig = _useState2[1];
  var _useState3 = (0, _react.useState)(_toConsumableArray(rows)),
    _useState4 = _slicedToArray(_useState3, 2),
    sortedRows = _useState4[0],
    setSortedRows = _useState4[1];
  (0, _react.useEffect)(function () {
    var sorted = applySort(rows, sortConfig, headers);
    setSortedRows(sorted);
  }, [rows, sortConfig, headers]);
  return {
    sortConfig: sortConfig,
    setSortConfig: setSortConfig,
    sortedRows: sortedRows
  };
};
var _default = exports["default"] = useSort;