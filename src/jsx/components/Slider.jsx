var React = require("react");
var ReactDOM = require("react-dom");

var Slider = React.createClass({
  render: function() {
    return (
      <h1>Test</h1>
    );
  }
});

ReactDOM.render(<Slider/>, document.getElementById("image-slider"));
