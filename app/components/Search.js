/*jshint esversion: 6 */

// Bring in React and ReactDom
let React = require('react');
let ReactDOM = require('react-dom');

let Search = React.createClass({

  getInitialState: function() {
    return {
      searched: this.props.searched,
      search: ''
    };
  },

  handleSearchChange: function(e) {
    this.setState({
      search: e.target.value
    });
  },

  handleSubmit: function(e) {
    e.preventDefault();
    console.log('search submitted');
    let search = this.state.search.trim();
    if (!search) {
      return;
    }
    this.props.onSearchSubmit({
      search: search
    });
    // this.setState({
    //   search: 'test'
    // });
  },

  render: function() {
    return (
      <form className="search" onSubmit={this.handleSubmit}>
        <input
          className="search-bar"
          type="text"
          placeholder="Search for a movie..."
          value={this.state.search}
          onChange={this.handleSearchChange}
        />
      </form>
    );
  }
});

module.exports = Search;
