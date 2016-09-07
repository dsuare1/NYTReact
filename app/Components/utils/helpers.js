var axios = require('axios');

var nytKey = "7ea8e56808f84197b3a70e18412abf37";

// var nytKey = require('./NYT_key.js');

var helpers = {
	runSearch: function(term) {
		console.log(term);
		var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' + nytKey + '&q=' + term;
		console.log(queryURL);
		return axios.get(queryURL)
			.then(function(response) {
				console.log(response);
			})
	}
}

module.exports = helpers;