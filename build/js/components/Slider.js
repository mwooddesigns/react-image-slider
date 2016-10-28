"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Slide = require("./Slide");

var _Slide2 = _interopRequireDefault(_Slide);

var _Control = require("./Control");

var _Control2 = _interopRequireDefault(_Control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var target = document.getElementById("image-slider");

var Slider = _react2.default.createClass({
  displayName: "Slider",

  componentWillMount: function componentWillMount() {
    var images = target.getAttribute("data-images").split(",");
  },
  getInitialState: function getInitialState() {
    return {
      currentSlide: 0,
      images: target.getAttribute("data-images").split(",")
    };
  },
  incrementSlide: function incrementSlide() {
    var nextSlide = this.state.currentSlide + 1;
    if (nextSlide >= this.state.images.length) {
      nextSlide = 0;
    }
    this.setState({ currentSlide: nextSlide });
  },
  decrementSlide: function decrementSlide() {
    var previousSlide = this.state.currentSlide + 1;
    if (previousSlide < 0) {
      previousSlide = this.state.images.length - 1;
    }
    this.setState({ currentSlide: previousSlide });
  },
  render: function render() {
    var slide = this.state.currentSlide;
    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "div",
        { className: "slider clearfix" },
        this.state.images.map(function (image, i) {
          if (slide == i) {
            return _react2.default.createElement(_Slide2.default, { image: image, key: i, isActive: "true" });
          } else {
            return _react2.default.createElement(_Slide2.default, { image: image, key: i, isActive: "false" });
          }
        }),
        _react2.default.createElement(_Control2.default, { clickHandler: this.decrementSlide, direction: "prev" }),
        _react2.default.createElement(_Control2.default, { clickHandler: this.incrementSlide, direction: "next" })
      ),
      _react2.default.createElement(
        "p",
        null,
        "Slide number ",
        this.state.currentSlide + 1
      )
    );
  }
});

_reactDom2.default.render(_react2.default.createElement(Slider, null), target);
