/*jshint esversion: 6 */

// Bring in React and ReactDom
let React = require('react');
let ReactDOM = require("react-dom");
let SearchContainer = require('../containers/SearchContainer.js');

let Home = React.createClass({
  render: function() {
    return (
      <div className="home">
        <div className="jumbotron col-sm-12 text-center">
          <h1>Search</h1>
        </div>
        <div className="col-md-12 text-center">
          <SearchContainer />
        </div>
      </div>
    );
  }
});

module.exports = Home;
