/*jshint esversion: 6 */

// Bring in React and ReactDom
let React = require('react');
let Results = require('../components/Results.js');
let Search = require('../components/Search.js');
let queryOmdb = require('../utils/OmdbHelpers.js');

// import classnames from 'classnames';

let SearchContainer = React.createClass({
  // let classes = classnames('search-container', {
  //   'searched': ,
  //   'not-searched': ,
  // }),
  handleSearchSubmit: function(text) {
    console.log('search handled');
    this.setState({
      searched: true
    });
    this.setState({
      search: text
    });
    queryOmdb(text.search);
  },

  getInitialState: function() {
    return {
      searched: false,
      search: ''
    };
  },

  render: function() {
    if (this.state.searched) {
      return (
        <Results />
      );
    }
    return (
      <Search onSearchSubmit={this.handleSearchSubmit}/>
    );
  }
});

module.exports = SearchContainer;
