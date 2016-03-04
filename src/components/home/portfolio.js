"use strict";

var
React = require('react'),
Artical = require('../common/article');

var styles = {
	section: {
		backgroundColor: "white"
	},
	titleArea: {
		textAlign: "center",
		color: "#191F23"
	},
	titleHeaderFont: {
		fontFamily: "serif"
	},
	galleryContainer: {
		position: "relative"
	},
	galleryContent: {
		padding: "5px",
		backgroundColor: "#F1F1F1"
	},
	galleryPicture: {
		width: "100%"
	},
	galleryFooter: {

	},
	gallerySubtext: {
		fontSize: "15px"
	}
};

var Portfolio = React.createClass({
	getInitialState: function () {
		return {
			src: [
			"/images/ss_website.png",
			"/images/ss_dotability.png"
			]
		};
	},

	render: function () {

		return (
			<div className="jumbotron container-fluid" style={styles.section}>
					<div style={styles.titleArea}>
						<h1 style={styles.titleHeaderFont}>PORTFOLIOS</h1>
						<img src="/images/hr-icon.png" style={styles.hrIcon} />
					</div>
					<div className="row">
						<Artical 
						appName={"website"}
						src={this.state.src[0]}
						title={"Official site"}
						platform={"(web)"} />
						
						<Artical 
						appName={"dotability"}
						src={this.state.src[1]}
						title={"Dotability"}
						platform={"(ios)"} />

					</div>
			</div>
		);
	}
});

module.exports = Portfolio;
