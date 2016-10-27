import React from "react";
import ReactDOM from "react-dom";

import Slide from './Slide';

var target = document.getElementById("image-slider");

var images = target.getAttribute("data-images").split(",");

console.log(images);

var Slider = React.createClass({
  getInitialState: function() {
    return {
      currentSlide: 1,
      images: target.getAttribute("data-images").split(",")
    };
  },
  incrementSlide: function() {
    var nextSlide = this.state.currentSlide + 1;
    this.setState({currentSlide: nextSlide});
    console.log(nextSlide);
  },
  render: function() {
    return (
      <div>
        {this.state.images.map(function(image){
          return <Slide image={image}/>
        })}
        <p onClick={this.incrementSlide}>Slide number {this.state.currentSlide}</p>
      </div>
    );
  }
});

ReactDOM.render(<Slider/>, target);
