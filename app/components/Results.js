/*jshint esversion: 6 */

// Bring in React and ReactDom
let React = require('react');
let ReactDOM = require("react-dom");

let Results = React.createClass({
  render: function() {
    return (
      <div className="jumbotron">Results</div>
    );
  }
});

module.exports = Results;
