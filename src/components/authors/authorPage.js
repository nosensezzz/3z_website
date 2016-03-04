"use strict";

var 
React = require('react'),
Router = require('react-router'),

AuthorActions = require('../../actions/authorActions'),
AuthorStore = require('../../stores/authorStore'),

AuthorList = require('./authorList');

var Link = Router.Link;

var styles = {
	section: {
		minHeight: "600px"
	}
};

var AuthorPage = React.createClass({
	getInitialState: function () {
		return {
			authors: AuthorStore.getAllAuthors()
		};
	},

	componentWillMount: function () {
		AuthorStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function () {
		AuthorStore.removeChangeListener(this._onChange);
	},

	_onChange: function () {
		this.setState({
			authors: AuthorStore.getAllAuthors()
		});
	},

	render: function () {
		var self = this;

		return (
			<section style={styles.section}>
				<Link to="addAuthor">Add author</Link>
				<AuthorList authors={this.state.authors} />
			</section>
		);
	}
});

module.exports = AuthorPage;