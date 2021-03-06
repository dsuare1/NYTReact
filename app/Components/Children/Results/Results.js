var React = require('react');

var styles = require('./style.js');

var helpers = require('../../utils/helpers.js');

var Results = React.createClass({

	render: function() {

		var myResults = null;

		if (this.props.results.length > 0) {
			console.log('inside if statement');
			myResults = this.props.results.map(function(item) {
		        return (
		          	<li key={item._id} style={styles.li}>{item.snippet}<br/>
		          		<a href={item.web_url}>{item.web_url}</a>
		          		<form action="/api/save" method="POST">
		          			<input type="hidden" name="title" value={item.snippet}/>
		          			<input type="hidden" name="url" value={item.web_url}/>
                			<button className="btn main-button save-button" type="submit" style={styles.saveButton}>Save Article</button>
                		</form>
                		<hr style={styles.hr}/>
		          	</li>
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