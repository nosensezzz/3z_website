"use strict";

var
React = require('react'),

CarouselArea = require('./home/carousel'),
Protfolio = require('./home/portfolio');

var Home = React.createClass({

	render: function () {
		return (
			<div>
				<CarouselArea />
				<Protfolio />
			</div>
		);
	}
});

module.exports = Home;