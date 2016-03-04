"use strict";

var
React = require('react');
 
var App = React.createClass({
  getInitialState: function () {
    var state = {};
    state.appName = this.props.params.appName;
    return state;
  },

  componentWillMount: function () {
    var self = this;
    //console.log(self);
    switch(self.state.appName){
      case "website":
      console.log('website');
      break;
      case "dotability":
      console.log('dotability');
      break;
      default:break;
    }
  },

  render: function() {
    return (
      <div style={{
        padding: '20px'
      }}>
        <h1>User id: </h1>
      </div>
    );
  }
});

module.exports = App;
