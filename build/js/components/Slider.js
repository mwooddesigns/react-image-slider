"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Slide = require("./Slide");

var _Slide2 = _interopRequireDefault(_Slide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var target = document.getElementById("image-slider");

var images = target.getAttribute("data-images").split(",");

console.log(images);

var Slider = _react2.default.createClass({
  displayName: "Slider",

  getInitialState: function getInitialState() {
    return {
      currentSlide: 1,
      images: target.getAttribute("data-images").split(",")
    };
  },
  incrementSlide: function incrementSlide() {
    var nextSlide = this.state.currentSlide + 1;
    this.setState({ currentSlide: nextSlide });
    console.log(nextSlide);
  },
  render: function render() {
    return _react2.default.createElement(
      "div",
      null,
      this.state.images.map(function (image) {
        return _react2.default.createElement(_Slide2.default, { image: image });
      }),
      _react2.default.createElement(
        "p",
        { onClick: this.incrementSlide },
        "Slide number ",
        this.state.currentSlide
      )
    );
  }
});

_reactDom2.default.render(_react2.default.createElement(Slider, null), target);
