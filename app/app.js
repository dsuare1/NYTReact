// Include the Main React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');

// Grab the proeprty associated with the Router
// var Router = require('react-router').Router

// Grabs the Routes
// var routes = require('./config/routes');

var Main = require('./Components/Main/Main')

// Renders the contents according to the route page. 
ReactDOM.render(

	<Main />,
	document.getElementById('app')
	
)


/**
 *
 * used to incorporate React Router; ditching for now
 *
 * <Router>{routes}</Router>,
 * document.getElementById('app')
 *
 */
