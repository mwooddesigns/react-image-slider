"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Slide = _react2.default.createClass({
  displayName: "Slide",

  render: function render() {
    console.log(this.props.key);
    if (this.props.isActive == "true") {
      return _react2.default.createElement("img", { src: this.props.image, className: "slide active" });
    } else {
      return _react2.default.createElement("img", { src: this.props.image, className: "slide" });
    }
  }
});

module.exports = Slide;
