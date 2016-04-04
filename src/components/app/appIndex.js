"use strict";

var
React = require('react');
 
var App = React.createClass({
  getInitialState: function () {
    var state = {};
    console.log(this.props);
    state.appName = this.props.params.appName;
    return state;
  },

  componentWillMount: function () {
    var self = this;
    //console.log(self);
    switch(self.state.appName){
      case "website":
      console.log('website');
      self.setState({
        appDesc: "Official website for 3z.com",
        appImgSrc: "/images/app-website/"
      });
      break;
      case "dotability":
      console.log('dotability');
      self.setState({
        appDesc: "Mobile app that allow dota 2 player retrieve their profile and match histories.",
        appImgSrc: "/images/app-dotability/"
      });
      break;
      default:break;
    }
  },

  render: function() {
    var self = this;
    return (
      <div style={{
        padding: '20px'
      }}>
        <h2>{self.state.appName}</h2>
        <div>{self.state.appDesc}</div>

        <div style={{marginTop: "10px"}}>
          <img 
          src={self.state.appImgSrc + "1.png"} 
          style={{
            width: "100%"
          }} />

          <img 
          src={self.state.appImgSrc + "2.png"} 
          style={{
            width: "100%"
          }} />
        </div>
      </div>
    );
  }
});

module.exports = App;
