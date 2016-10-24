"use strict";
;"use strict";

var React = require("react");
var ReactDOM = require("react-dom");

var Slider = React.createClass({
  displayName: "Slider",

  render: function render() {
    return React.createElement(
      "h1",
      null,
      "Test"
    );
  }
});

ReactDOM.render(React.createElement(Slide, null), document.getElementById("image-slider"));
