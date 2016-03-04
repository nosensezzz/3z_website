"use strict";

var 
React = require('react'),
InputComponent = require('../common/textInput');

var AutherForm = React.createClass({
	propTypes: {
		author: React.PropTypes.object.isRequired,
		onSave: React.PropTypes.func.isRequired,
		onChange: React.PropTypes.func.isRequired,
		errors: React.PropTypes.object
	},
	
	render: function () {
		
		return (
			<form>
				<h1>Manage Auther</h1>
				<InputComponent
					name="firstName"
					label="First Name"
					value={this.props.author.firstName}
					onChange={this.props.onChange}
					error={this.props.errors.firstName} />

				<InputComponent
					name="lastName"
					label="Last Name"
					value={this.props.author.lastName}
					onChange={this.props.onChange}
					error={this.props.errors.lastName} />

				<input type="submit" 
						value="save" 
						className="btn btn-default"
						onClick={this.props.onSave} />
			</form>
		);
	}
});

module.exports = AutherForm;