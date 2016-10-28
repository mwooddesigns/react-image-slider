import React from "react";

var Control = React.createClass({
  render: function() {
    if(this.props.direction == "prev") {
      return (<a className="control prev" onClick={this.props.clickHandler}><i className="fa fa-chevron-left"></i></a>)
    } else {
      return (<a className="control next" onClick={this.props.clickHandler}><i className="fa fa-chevron-right"></i></a>)
    }
  }
});

module.exports = Control;
