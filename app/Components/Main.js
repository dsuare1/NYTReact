// Include React 
var React = require('react');

var Main = React.createClass({

	// Here we render the function
	render: function(){

		return(

			<div className="jumbotron text-center">
				<div className="container">
					<h2>NYT Article Search</h2>
				</div>
			</div>
		)
	}
});

// Export the componen back for use in other files
module.exports = Main;