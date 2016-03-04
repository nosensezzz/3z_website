"use strict";

var 
React = require('react'),
Router = require('react-router'),
AuthorActions = require('../../actions/authorActions'),
toastr = require('toastr');

var Link = Router.Link;

var AuthorList = React.createClass({
	propTypes: {
		authors: React.PropTypes.array.isRequired
	},

	deleteAuthor: function (id, event) {
		event.preventDefault();
		AuthorActions.deleteAuthor(id);
		toastr.success('Author Deleted');
	},

	render: function () {
		var 
		self = this,
		createAuthorRow = function (author) {
			return (
				<tr key={author.id}>

					<td><Link to="manageAuthor" 
					params={{id: author.id}}>{author.id}</Link></td>
					<td>{author.firstName} {author.lastName}</td>
					<td><a href="#" onClick={this.deleteAuthor.bind(this, author.id)} >Delete</a></td>
				</tr>
			);
		};
		return (
			<div>
				<table className="table">
					<thead>
						<th>ID</th><th>Name</th><th></th>
					</thead>
					<tbody>
						{self.props.authors.map(createAuthorRow, self)}
					</tbody>
				</table>
			</div>
		);
	}
});

module.exports = AuthorList;