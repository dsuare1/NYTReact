var React = require('react');

var styles = require('./style.js');

var Search = React.createClass({

	// Here we set a generic state associated with the text being searched for
	getInitialState: function() {
		return {
			searchTerm: ""
		}
	},

	// redefines the "state" of this component with EACH change (aka, each letter the user presses produces a new state object; 'console.log(newState)'to see)
	handleChange: function(event) {
    	var newState = {};
    	newState[event.target.id] = event.target.value;
    	console.log(newState);
    	this.setState(newState);
	},

	// When a user submits... 
	handleClick: function() {
		this.props.setTerm(this.state.searchTerm);

	},

	// Here we render the function
	render: function() {

		return(

			
						<div className="panel panel-default" style={styles.panel}>
							<div className="panel-heading" style={styles.panelHeading}>
								<h3 className="panel-title">Search Parameters</h3>
							</div>
							<div className="panel-body">

								

								  <div className="form-group">
								    <label htmlFor="search">Search Term:</label>
								    <input type="text" name="search" value={this.state.value} className="form-control" id="searchTerm" style={styles.searchTerm} onChange={this.handleChange}/>
								  </div>

								  {/*<div className="form-group">
	  								    <label htmlFor="num-articles">Number of Records to Retrieve:</label>
	  									<select className="form-control" name="num-articles" defaultValue={5} id="numRecordsSelect">
	  										<option value={1}>1</option>
	  										<option value={5}>5</option>
	  										<option value={10}>10</option>
	  									</select>			  
	  								  </div>
	  
	  								  <div className="form-group">
	  								    <label htmlFor="startYear">Start Year (Optional):</label>
	  								    <input type="text" name="startYear" className="form-control" id="startYear" />
	  								  </div>
	  
	  								  <div className="form-group">
	  								    <label htmlFor="endYear">End Year (Optional):</label>
	  								    <input type="text" name="endYear" className="form-control" id="endYear" />
	  								  </div>*/}

								  <button className="btn btn-default main-button" id="runSearch" onClick={this.handleClick}>Search</button>
			  					  <button type="button" className="btn btn-default main-button" id="clearAll" style={styles.clearButton}><i className="fa fa-trash"></i> Clear Fields</button>

						
							</div>
						</div>
			
		)
	}
});

// Export the component back for use in other files
module.exports = Search;