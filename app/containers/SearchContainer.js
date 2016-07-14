/*jshint esversion: 6 */

// Bring in React and ReactDom
let React = require('react');
let ReactDOM = require("react-dom");

let SearchContainer = React.createClass({
  render: function() {
    return (
      <div className="search-container">
        <h4>Search</h4>
      </div>
    );
  }
});

module.exports = SearchContainer;
