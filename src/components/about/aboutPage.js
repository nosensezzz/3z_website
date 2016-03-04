"use strict";

var 
React = require('react');

var About = React.createClass({
	statics: {
		willTransitionTo: function (transition, params, query, callback) {
			// if(!confirm("are you sure")){
			// 	window.history.back();
			// } else {
			// 	callback();
			// }
			callback();
		},

		willTransitionFrom: function (transition, component) {
			// if(!confirm("leave?")){
			// 	transition.abort();
			// }
		}
	},
	render: function () {
		return (
			<div style={{
				padding: '20px'
			}}>
				<h1>About</h1>
				<p>
					This application uses the following technologies:
					<ul>
						<li>React</li>
						<li>React Router</li>
						<li>Flux</li>
						<li>Node</li>
						<li>Gulp</li>
						<li>Browserfify</li>
						<li>Bootstrap</li>
					</ul>
				</p>

				<p>
					Welcome to all kinds of potential partner to 3z studio. You can reach us by
					<ul>
						<li>Email: nosensezzz@gmail.com</li>
						<li>Wechat: noosense</li>
					</ul>
				</p>
			</div>
		);
	}
});

module.exports = About;