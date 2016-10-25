import React from "react";

var Slide = React.createClass({
  render: function() {
    return (
      <img src={this.props.image}/>
    );
  }
});

module.exports = Slide;
