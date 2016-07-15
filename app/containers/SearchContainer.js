/*jshint esversion: 6 */

// Bring in React and ReactDom
let React = require('react');
let Results = require('../components/Results.js');
let Search = require('../components/Search.js');
let queryOmdb = require('../utils/OmdbHelpers.js').queryOmdb;

// import classnames from 'classnames';

let SearchContainer = React.createClass({
  // let classes = classnames('search-container', {
  //   'searched': ,
  //   'not-searched': ,
  // }),
  handleSearchSubmit: function(text) {
    let component = this; // cache reference to component's context
    console.log('search handled');
    queryOmdb(text.search).then(function(result) {
      component.setState({
        movies: result,
        search: ''
      });
    }).then(function() {
      component.setState({
        searched: true
      });
    });
  },

  getInitialState: function() {
    return {
      searched: false,
      search: '',
      movies: []
    };
  },

  render: function() {
    if (this.state.searched) {
      return (
        <div>
          <Search onSearchSubmit={this.handleSearchSubmit}/>
          <Results movies={this.state.movies}/>
        </div>
      );
    }
    return (
      <Search onSearchSubmit={this.handleSearchSubmit}/>
    );
  }
});

module.exports = SearchContainer;
