"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("./dropdown.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Dropdown(props) {
  var options = props.data.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: item,
      value: item
    }, item);
  });
  return /*#__PURE__*/_react["default"].createElement("select", {
    className: "dropdown",
    name: props.name,
    id: props.id
  }, options);
}

var _default = Dropdown;
exports["default"] = _default;
