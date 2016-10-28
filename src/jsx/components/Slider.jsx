import React from "react";
import ReactDOM from "react-dom";

import Slide from './Slide';
import Control from './Control';

var target = document.getElementById("image-slider");

var Slider = React.createClass({
  componentWillMount: function() {
    var images = target.getAttribute("data-images").split(",");
  },
  getInitialState: function() {
    return {
      currentSlide: 0,
      images: target.getAttribute("data-images").split(",")
    };
  },
  incrementSlide: function() {
    var nextSlide = this.state.currentSlide + 1;
    if(nextSlide >= this.state.images.length) {
      nextSlide = 0;
    }
    this.setState({currentSlide: nextSlide});
  },
  decrementSlide: function() {
    var previousSlide = this.state.currentSlide + 1;
    if(previousSlide < 0) {
      previousSlide = this.state.images.length - 1;
    }
    this.setState({currentSlide: previousSlide});
  },
  render: function() {
    var slide = this.state.currentSlide;
    return (
      <div>
        <div className = "slider clearfix">
          {this.state.images.map(function(image, i){
            if(slide == i) {
              return <Slide image={image} key={i} isActive="true" />
            } else {
              return <Slide image={image} key={i} isActive="false" />
            }
          })}
          <Control clickHandler={this.decrementSlide} direction="prev" />
          <Control clickHandler={this.incrementSlide} direction="next" />
        </div>
        <p>Slide number {this.state.currentSlide + 1}</p>
      </div>
    );
  }
});

ReactDOM.render(<Slider/>, target);
