"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Slide = require("./Slide");

var _Slide2 = _interopRequireDefault(_Slide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Slider = _react2.default.createClass({
  displayName: "Slider",

  render: function render() {
    return _react2.default.createElement(_Slide2.default, null);
  }
});

_reactDom2.default.render(_react2.default.createElement(Slider, null), document.getElementById("image-slider"));
