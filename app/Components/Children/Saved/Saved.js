var React = require('react');

var styles = require('./style.js');

var Saved = React.createClass({

	// Here we render the function
	render: function(){

		return(

			<div className="panel panel-default" style={styles.panel}>
				<div className="panel-heading" style={styles.panelHeading}>
					<h4 className="panel-title">Saved</h4>
				</div>
				<div className="panel-body">
					{this.props.saved.map(function(article, i)
						{
							return <p key={i}><a href={article.web_url}>{article.snippet}</a></p> 
						}
					)}
				</div>
			</div>
		)
	}
});

// Export the componen back for use in other files
module.exports = Saved;