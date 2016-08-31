var axios = require('axios');

var nytKey = require('./NYT_key.js');

var helpers = {
	runSearch: function(term) {
		console.log(term);
		var queryURL = '"https://api.nytimes.com/svc/search/v2/articlesearch.json?' + term + '"';
		console.log(queryURL);
		return axios.get(queryURL)
			.then(function(response) {
				console.log(response);
			})
	}
}

module.exports = helpers;