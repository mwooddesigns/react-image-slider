import React from "react";

var Slide = React.createClass({
  render: function() {
    console.log(this.props.key);
    if(this.props.isActive == "true") {
      return <img src={this.props.image} className="slide active" />
    } else {
      return <img src={this.props.image} className="slide" />
    }
  }
});

module.exports = Slide;
