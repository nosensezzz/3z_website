"use strict";

var 
React = require('react'),
Router = require('react-router');

var
DefaultRoute = Router.DefaultRoute,
Route = Router.Route,
NotFoundRoute = Router.NotFoundRoute,
Redirect = Router.Redirect;

var routes = (
	<Route name="app" path="/" handler={require('./components/app')}>
		<DefaultRoute handler={require('./components/homePage')} />
		<Route path="app/:appName" handler={require('./components/app/appIndex')} />	
		<Route name="about" handler={require('./components/about/aboutPage')} />
		<NotFoundRoute handler={require('./components/notFoundPage')} />
		<Redirect from="about-us" to="about" />
	</Route>
);

module.exports = routes;

/*
<Route name="manageAuthor" path="author/:id" handler={require('./components/authors/manageAuthorPage')} />
<Route name="authors" handler={require('./components/authors/authorPage')} />
<Route name="addAuthor" path="author" handler={require('./components/authors/manageAuthorPage')} />
*/