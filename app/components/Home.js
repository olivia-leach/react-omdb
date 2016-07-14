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
          <h1>Movie Search</h1>
        </div>
        <SearchContainer />
      </div>
    );
  }
});

module.exports = Home;
