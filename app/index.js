/*jshint esversion: 6 */

// Bring in React and ReactDom
let React = require('react');
let ReactDOM = require("react-dom");
let PropTypes = React.PropTypes;
let styles = require("./styles/index");

let Home = React.createClass({
  render: function() {
    return (
      <div class="home">
        <h1>Home</h1>
      </div>
    );
  }
});

// Render Home
ReactDOM.render(
  <Home />, // our component
  document.getElementById("app") // where to render
);
