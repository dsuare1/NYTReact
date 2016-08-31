// Include React 
var React = require('react');

var styles = require('./style.js');

var Search = React.createClass({

	// Here we render the function
	render: function(){

		return(

			<div className="container">
				<div className="row">
					<div className="col-md-4">
					<br />
						<div className="panel panel-default" style={styles.panel}>
							<div className="panel-heading" style={styles.panelHeading}>
								<h3 className="panel-title"><i className="fa fa-list-alt"></i>   Search Parameters</h3>
							</div>
							<div className="panel-body">

								<form role="form" method="GET" action="/search">

								  <div className="form-group">
								    <label htmlFor="search">Search Term:</label>
								    <input type="text" name="search" className="form-control" id="searchTerm" />
								  </div>

								  <div className="form-group">
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
								  </div>

								  <button type="submit" className="btn btn-default" id="runSearch"><i className="fa fa-search"></i> Search</button>
			  					  <button type="button" className="btn btn-default" id="clearAll" style={styles.clearButton}><i className="fa fa-trash"></i> Clear Fields</button>

								</form>
							</div>
						</div>
					</div>
					<div className="col-md-8">
						<br />
						<div className="panel panel-default" style={styles.panel}>
							<div className="panel-heading" style={styles.panelHeading}>
								<h3 className="panel-title"><i className="fa fa-list-alt"></i>   Search Results</h3>
							</div>
							<div className="panel-body">
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
});

// Export the componen back for use in other files
module.exports = Search;