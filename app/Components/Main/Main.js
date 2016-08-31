var React = require('react');

var styles = require('./style.js');

var Main = React.createClass({

	getInitialState: function() {
		return {
			gitHubLink: "https://github.com/dsuare1/NYTReact",
			linkedInLink: "https://www.linkedin.com/in/derricksuarez",
			portfolioLink: "http://www.derricksuarez.com"
		}
	},

	render: function(){

		return(

			<div>
				<div className="jumbotron text-center" style={styles.jumbotron}>
					<div className="container">
						<h2 className="main-header" style={styles.mainHeader}>NYT Article Search</h2>
					</div>
				</div>

				<div className="row text-center">
					<a href="#/Search"><button className="btn btn-lg btn-default main-button" id="articleSearch" style={styles.button}>Search for Articles</button></a>
					<a href="#/Saved"><button className="btn btn-lg btn-default main-button" id="viewSaved" style={styles.button}>View Saved Articles</button></a>
				</div>

				<div>
					{this.props.children}
				</div>

				<br />
				<footer className="footer" style={styles.footer}>
					<div className="container">
						<p style={styles.footerText}>&copy; Derrick Suarez 2016</p>
						<p style={styles.footerText} className="hover"><a href={this.state.gitHubLink} style={styles.links}>GitHub</a></p>
						<p style={styles.footerText} className="hover"><a href={this.state.linkedInLink} style={styles.links}>LinkedIn</a></p>
						<p style={styles.footerText} className="hover"><a href={this.state.portfolioLink}>Portfolio</a></p>
					</div>
				</footer>
			</div>
		)
	}
});

module.exports = Main;