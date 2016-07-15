/*jshint esversion: 6 */

// Bring in React and ReactDom
let React = require('react');
let ReactDOM = require("react-dom");
let SearchContainer = require('../containers/SearchContainer.js');

let Home = React.createClass({
  render: function() {
    return (
      <div className="col-md-12 text-center">
        <div className="jumbotron col-md-10 col-md-offset-1">
          <h1 className="display-3">Super Cool Search</h1>
          <p className="lead">Enter movie to search for its poster</p>
        </div>
        <SearchContainer />
      </div>
    );
  }
});

module.exports = Home;
