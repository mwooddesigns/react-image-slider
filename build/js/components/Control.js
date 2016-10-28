"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Control = _react2.default.createClass({
  displayName: "Control",

  render: function render() {
    if (this.props.direction == "prev") {
      return _react2.default.createElement(
        "a",
        { className: "control prev", onClick: this.props.clickHandler },
        _react2.default.createElement("i", { className: "fa fa-chevron-left" })
      );
    } else {
      return _react2.default.createElement(
        "a",
        { className: "control next", onClick: this.props.clickHandler },
        _react2.default.createElement("i", { className: "fa fa-chevron-right" })
      );
    }
  }
});

module.exports = Control;
