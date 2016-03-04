"use strict";

window.$ = require('jquery');
window.jQuery = require('jquery');
var
React = require('react'),
Header = require('./common/header'),
Footer = require('./common/footer'),
RouteHandler = require('react-router').RouteHandler;

var styles = {
	app: {
		paddingTop: "50px",
		minHeight: $(window).height()
	}
};

var App = React.createClass({
	componentDidMount: function () {

	},
	render: function () {
		return (
			<div style={styles.main}>
				<Header />
				<div id="app" style={styles.app}>
					<RouteHandler />
				</div>
				<Footer />
			</div>
		);
	}
});

module.exports = App;
