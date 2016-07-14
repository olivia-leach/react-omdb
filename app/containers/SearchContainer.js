/*jshint esversion: 6 */

// Bring in React and ReactDom
let React = require('react');
// import classnames from 'classnames';

let SearchContainer = React.createClass({
  // let classes = classnames('search-container', {
  //   'searched': ,
  //   'not-searched': ,
  // }),
  getInitialState: function() {
    return {
      searched: true
    };
  },

  handleSearch: 'test',

  render: function() {
    return (
      <div className="col-md-12 text-center">
        <h1>{this.handleSearch}</h1>
        <input className="search-bar" type="text" placeholder="Search for a movie..."/>
      </div>
    );
  }
});

module.exports = SearchContainer;
