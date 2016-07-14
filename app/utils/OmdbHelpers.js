/*jshint esversion: 6 */

// Bring in React and ReactDom
let React = require('react');

function queryOmdb (query) {
  console.log('in utils');
  let term = query.replace(/\s/, "+"); // replace any white space characters with a "+"
  let url = "http://omdbapi.com/?s=" + term;

  // fetch all movies matching the passed in title as JSON
  return $.getJSON(url).then(function(response) {
    return response.Search;
  });
}

module.exports = {
  queryOmdb: queryOmdb
};
