"use strict";

var React = require('react');

var styles = {
	footer: {
		backgroundImage: "url('images/footer-background.png')",
		padding: "10px 10px 0px 10px"
	},
	section: {
		padding: "20px 10px 20px 10px"
	},
	infosContainer: {
		margin: "0 0 30px 0",
		overflow: "auto"
	},
	infos: {
		textAlign: "center",
		color: "white"
	},
	copyright: {
		color: "white",
		padding: "0px 30px 10px 30px",
		margin: "0 0 0 0",
		textAlign: "right"
	}
};

var Footer = React.createClass({
	render: function () {	
		return (
			<footer id="app-footer" className ="" style={styles.footer}>
				<div id="app-footer-infos" style={styles.infosContainer}>
					<div className="footer-col col-xs-12 col-md-4" style={styles.infos}>
						<h3>Location</h3>
						<p>Forest Hills, Queens</p>
						<p>New York, 11375</p>
					</div>

					<div className="footer-col col-xs-12 col-md-4" style={styles.infos}>
						<h3>Contact</h3>
						<p>Email: nosensezzz@gmai.com</p>
						<p>Phone: 601-497-5126</p>
					</div>
					<div className="footer-col col-xs-12 col-md-4" style={styles.infos}>
						<h3>Cooperation</h3>
						<p>About us</p>
						<p>Contact us
						</p>
						<p>Hire & Co-work</p>
					</div>
				</div>
				<div style={styles.copyright}>
					<h4 style={styles.copyrighttext}>Copyright © nosensezzz 2015</h4>
				</div>
			</footer>
		);
	}
});

module.exports = Footer;