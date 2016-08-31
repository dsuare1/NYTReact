// Inclue the React library
var React = require('react');

// Include the Router
var Router = require('react-router');
var Route = Router.Route;

//  Include the IndexRoute (catch-all route)
var IndexRoute	= Router.IndexRoute;

// Reference the high-level components
var Main = require('../Components/Main/Main');
var Search = require('../Components/Children/Search/Search');
var Saved = require('../Components/Children/Saved/Saved');

// Export the Routes
module.exports = (

	<Route path='/' component={Main}>

		<Route path='Search' component={Search} />

		<Route path='Saved' component={Saved} />

	</Route>

// import { hashHistory } from 'react-router'
// <Router history={hashHistory} />

);