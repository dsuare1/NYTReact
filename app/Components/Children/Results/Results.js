var React = require('react');

var styles = require('./style.js');

var Results = React.createClass({

	// Here we render the function
	render: function() {

		return(

			<div className="panel panel-default" style={styles.panel}>
				<div className="panel-heading" style={styles.panelHeading}>
					<h4 className="panel-title">Results</h4>
				</div>
				<div className="panel-body">
				</div>
			</div>
		)
	}
});

// Export the componen back for use in other files
module.exports = Results;