/**
 * RexController
 *
 * @description :: Server-side logic for managing rexes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

// var yelp = require("yelp").createClient({
//   consumer_key: 'DGhvxpFiEk-RNYqp7BcjDw',
//   consumer_secret: 'ihXNLNUwBj58u2uTDF0POmvmD4Q',
//   token: '7CzABFWKgI3FecwjmyZG-ThVGB-XfVdJ',
//   token_secret: 'JS84EZg8qIh5sVOimgnyIzuKSXM'
// });

var yelp = require("yelp").createClient({
  consumer_key: process.env.YELP_CONSUMER_KEY,
  consumer_secret: process.env.YELP_CONSUMER_SECRET,
  token: process.env.YELP_CONSUMER_TOKEN,
  token_secret: process.env.YELP_TOKEN_SECRET
});


module.exports = {
  yelpSearch: function(req,res){
  	console.log(req.params);
	  yelp.search({term:req.query.term, location:req.query.location}, function(error,data){
	  	console.log(data)
	  	res.send({data: data, error: error})
	  });
	// res.send(req.params)

	}

};