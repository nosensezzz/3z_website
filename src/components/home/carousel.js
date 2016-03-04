"use strict";

var
React = require('react');

var styles = {
	main: {

	},
	img: {
		width: "200px",
		borderRadius: "100px",
		margin: "auto"
	},
	imgContainer: {
		backgroundColor: "#191F23",
		height: "420px"
	},
	textArea: {
		textAlign: "center",
		color: "white"
	},
	textTitle: {
	},
	textHr: {
		width: "200px"
	},
	hrIcon: {

	}
};

var Carousel = React.createClass({

	render: function () {
		//console.log(window);
		var width = window.innerWidth,
			height;
		return (
			<div id="home-carousel" className="carousel slide">
				<div className="carousel-inner" style={styles.imgContainer}>
					<div className="active item">
						<img src="/images/avatar-latte.png" style={styles.img} />
					</div>
					<span style={styles.textArea}>
						<div>
							<img src="/images/carousel-hr-icon.png" style={styles.hrIcon} />
						</div>
						<h2 style={styles.textTitle}>nosense3z</h2>
						<p>Web, App... Design and Develop.</p>
					</span>
				</div>
			</div>
		);
	}
});

module.exports = Carousel;
