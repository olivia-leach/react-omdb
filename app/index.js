/*jshint esversion: 6 */

// Bring in React and ReactDom
let React = require('react');
let ReactDOM = require('react-dom');
let PropTypes = React.PropTypes;
let Home = require('./components/Home.js');

require('./styles/main.scss');

// Render Home
ReactDOM.render(
  <Home />, // our component
  document.getElementById('app') // where to render
);
