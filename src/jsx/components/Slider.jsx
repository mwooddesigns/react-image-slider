import React from "react";
import ReactDOM from "react-dom";

import Slide from './Slide';

var Slider = React.createClass({
  render: function() {
    return (
      <Slide/>
    );
  }
});

ReactDOM.render(<Slider/>, document.getElementById("image-slider"));
