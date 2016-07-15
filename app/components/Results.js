/*jshint esversion: 6 */

// Bring in React and ReactDom
let React = require('react');
let ReactDOM = require('react-dom');
let Movie = require('./Movie.js');

let Results = React.createClass({
  render: function() {
    console.log(this.props.movies);
    let movieNodes = this.props.movies.map(function(movie, id) {
      if (movie.Poster !="N/A") {
        return ( <Movie key={id} poster={movie.Poster} title={movie.Title} /> );
      }
    });
    return (
      <div className="col-md-10 col-md-offset-1 movie-list">
        {movieNodes}
      </div>
    );
  }
});

module.exports = Results;
