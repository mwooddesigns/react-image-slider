"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Slide = _react2.default.createClass({
  displayName: "Slide",

  render: function render() {
    return _react2.default.createElement(
      "h1",
      null,
      "I'm a component being rendered by a parent."
    );
  }
});

module.exports = Slide;
