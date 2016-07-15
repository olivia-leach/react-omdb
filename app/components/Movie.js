/*jshint esversion: 6 */

// Bring in React and ReactDom
let React = require('react');
let ReactDOM = require("react-dom");

let Movie = React.createClass({
  render: function() {
    return (
      <div className="col-md-3 col-sm-4 col-xs-6">
        <div className="card">
          <div className="img-container">
            <img src={this.props.poster}/>
          </div>
          <p>{this.props.title}</p>
        </div>
      </div>
    );
  }
});

module.exports = Movie;
