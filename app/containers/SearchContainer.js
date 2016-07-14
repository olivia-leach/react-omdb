/*jshint esversion: 6 */

// Bring in React and ReactDom
let React = require('react');
let Results = require('../components/Results.js');
let Search = require('../components/Search.js');
// import classnames from 'classnames';

let SearchContainer = React.createClass({
  // let classes = classnames('search-container', {
  //   'searched': ,
  //   'not-searched': ,
  // }),
  getInitialState: function() {
    return {
      searched: false
    };
  },

  render: function() {
    if (this.state.searched) {
      return (
        <Results />
      );
    }
    return (
      <Search searched={this.state.searched}/>
    );
  }
});

module.exports = SearchContainer;
