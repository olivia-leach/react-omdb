/*jshint esversion: 6 */

// Bring in React and ReactDom
let React = require('react');
let ReactDOM = require('react-dom');
let PropTypes = React.PropTypes;
let styles = require('./styles/index');
let Home = require('./components/Home.js');

// Render Home
ReactDOM.render(
  <Home />, // our component
  document.getElementById('app') // where to render
);
