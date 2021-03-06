var React = require('react');

var styles = require('./style.js');

var Search = require('../Children/Search/Search');
var Results = require('../Children/Results/Results');
var Saved = require('../Children/Saved/Saved');

var helpers = require('../utils/helpers.js');

var Main = React.createClass({

	getInitialState: function() {
		return {
			searchTerm: "",
			results: "",
			saved: []
		}
	},

	setTerm: function(searchTerm) {
		this.setState({
			searchTerm: searchTerm
		})
	},

	componentDidUpdate: function(prevProps, prevState){
		if (prevState.searchTerm != this.state.searchTerm) {
			console.log('the state of the "Main" component just updated by clicking the submit button; the value of the input is now the value on this coponent\'s "searchTerm" state ');
			console.log('"Main"\'s search term: ' + this.state.searchTerm);
			helpers.runSearch(this.state.searchTerm)
				.then(function(data) {
					var results = [];
					for (var i = 0; i < data.length; i++) {
						results.push(data[i]);
					};
					this.setState({
						results: results,
					})
				}.bind(this))
		}
	},

	componentDidMount: function() {
		helpers.getSaved()
			.then(function(response) {
				this.setState({
					history: response
				})
			})
	},

	render: function(){

		return(

			<div>
				<div className="jumbotron text-center" style={styles.jumbotron}>
					<div className="container">
						<h2 className="main-header" style={styles.mainHeader}>NYT Article Search</h2>
					</div>
				</div>

				{/*<div className="row text-center">
									<a href="#/Search"><button className="btn btn-lg btn-default main-button" id="articleSearch" style={styles.button}>Search for Articles</button></a>
									<a href="#/Saved"><button className="btn btn-lg btn-default main-button" id="viewSaved" style={styles.button}>View Saved Articles</button></a>
								</div>*/}

				{/* <div>
					 this is used in conjunction with React Router; for now, fuck it 
					 {this.props.children}
				</div> */}

					<div className="container">
						<div className="row">
							<div className="col-md-4">
								<Search setTerm={this.setTerm} />
							</div>
							<div className="col-md-8">
								<Results results={this.state.results} />
							</div>
						</div>
						<div className="row">
							<div className="col-md-8 col-md-offset-2">
								<Saved saved={this.state.saved}/>
							</div>
						</div>
					</div>
			</div>
		)
	}
});

module.exports = Main;