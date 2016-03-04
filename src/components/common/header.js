"use strict";

var React = require('react'),
	Router = require('react-router');

var	Link = Router.Link;

var styles = {
	header: {

	},
	logo: {
		marginTop: "-10px",
		height: "40px",
		width: "40px",
		borderRadius: "5px"
	},
	section: {

		padding: "0 50px 0 50px"
	}
};

var Header = React.createClass({
	toggleNavMenu: function (event) {
		event.preventDefault();
		if($("#header-navbar-collapse").css("display") === "none"){
			$("#header-navbar-collapse").show();
		} else {
			$("#header-navbar-collapse").hide();
		}
	},

	render: function () {	
		return (
			<nav className="navbar navbar-inverse navbar-fixed-top" 
			role="navigation" style={styles.header}>
			<div style={styles.section}>
				<div className="navbar-header">
					<button type="button"
							className="navbar-toggle" 
							onClick={this.toggleNavMenu}>
						<span className="sr-only">Toggle</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>

					<Link to="app" className="navbar-brand">
						<img src="images/site-logo.png" style={styles.logo} />
					</Link>
				</div>

				<div className="collapse navbar-collapse" id="header-navbar-collapse">
					<ul className="nav navbar-nav navbar-right">
						<li><Link to="app">Home</Link></li>
						<li><Link to="about">About</Link></li>
					</ul>
				</div>
			</div>
			</nav>
		);
	}
});

module.exports = Header;