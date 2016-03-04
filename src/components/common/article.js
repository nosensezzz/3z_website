"use strict";

var
React = require('react'),
Router = require('react-router');

var
Link = Router.Link;

var styles = {
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

var Article = React.createClass({
	ElemClicked: function(e){
		e.preventDefault();
		switch(this.props.appName){
			case "website":
			break;
			case "dotability":
			break;
			default:break;
		}
		window.location = "#app/" + this.props.appName;
	},

	render: function () {

		return (
				<article 
				className="col-xs-12 col-sm-6 col-md-4">
					<div className="panel panel-default">
						<div style={styles.galleryContent}>
							<a onClick={this.ElemClicked} title="" className="zoom"
								data-title="amazing test" data-footer="footer test"
								data-type="image" data-toggle="lightbox"
								style={styles.galleryContainer} >
								<img src={this.props.src} style={styles.galleryPicture} className="img-responsive img-rounded" />
								<span className="overlay" style={styles.galleryFooter}>
									<h4>{this.props.title} <span style={styles.gallerySubtext}>{this.props.platform}</span></h4>
								</span>
							</a>
						</div>
					</div>
				</article>
		);
	}
});

module.exports = Article;
