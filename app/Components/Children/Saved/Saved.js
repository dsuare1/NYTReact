// Include React 
var React = require('react');

var styles = require('./style.js');

var Saved = React.createClass({

	// Here we render the function
	render: function(){

		return(

			<div className="row">
				<div className="col-md-8 col-md-offset-2">
				<br />
					<div className="panel panel-default" style={styles.panel}>
						<div className="panel-heading" style={styles.panelHeading}>
							<h4 className="panel-title">Saved</h4>
						</div>
						<div className="panel-body">
						</div>
					</div>
				</div>
			</div>
		)
	}
});

// Export the componen back for use in other files
module.exports = Saved;