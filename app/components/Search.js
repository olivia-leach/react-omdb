/*jshint esversion: 6 */

// Bring in React and ReactDom
let React = require('react');
let ReactDOM = require("react-dom");

let Search = React.createClass({

  getInitialState: function() {
    return {
      searched: this.props.searched
    };
  },

  handleSearchSubmit: function(e) {
    e.preventDefault();
    console.log('search submitted');
    this.setState({
      searched: true
    });
    console.log('search: ' + this.state.searched);
  },

  render: function() {
    return (
      <form className="search" onSubmit={this.handleSearchSubmit}>
        <input className="search-bar" type="text" placeholder="Search for a movie..."/>
      </form>
    );
  }
});

module.exports = Search;
