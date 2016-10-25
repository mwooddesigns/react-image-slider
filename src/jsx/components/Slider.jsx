import React from "react";
import ReactDOM from "react-dom";

import Slide from './Slide';

var Slider = React.createClass({
  getInitialState: function() {
    return {currentSlide: 1}
  },
  incrementSlide: function() {
    var nextSlide = this.state.currentSlide + 1;
    this.setState({currentSlide: nextSlide});
    console.log(nextSlide);
  },
  render: function() {
    return (
      <div>
        <Slide image="http://placehold.it/350x150"/>
        <p onClick={this.incrementSlide}>Slide number {this.state.currentSlide}</p>
      </div>
    );
  }
});

ReactDOM.render(<Slider/>, document.getElementById("image-slider"));
