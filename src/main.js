"use strict";
var 
React = require('react'),
Router = require('react-router'),
routes = require('./routes'),
InitializeActions = require('./actions/initializeActions');

InitializeActions.initApp();

Router.run(routes, function (Handler) {
	React.render(<Handler />, document.getElementById('app'));
});