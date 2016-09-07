var React = require('react');

var styles = require('./style.js');

var Results = React.createClass({

	// Here we render the function
	render: function() {

		var myResults = null;

		if (this.props.results.length > 0) {
			console.log('inside if statement');
			myResults = this.props.results.map(function(item) {
		        return (
		          	<li key={item._id} style={styles.li}>{item.snippet}<br/><a href={item.web_url}>{item.web_url}</a></li>
		        )
		    });
		}

		return(

			<div className="panel panel-default" style={styles.panel}>
				<div className="panel-heading" style={styles.panelHeading}>
					<h4 className="panel-title">Results</h4>
				</div>
				<div className="panel-body">
					{myResults}
				</div>
			</div>
		)
	}
});

// Export the componen back for use in other files
module.exports = Results;