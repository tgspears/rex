/**
 * RexController
 *
 * @description :: Server-side logic for managing rexes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var yelp = require("yelp").createClient({
  consumer_key: 'DGhvxpFiEk-RNYqp7BcjDw',
  consumer_secret: 'ihXNLNUwBj58u2uTDF0POmvmD4Q',
  token: '7CzABFWKgI3FecwjmyZG-ThVGB-XfVdJ',
  token_secret: 'JS84EZg8qIh5sVOimgnyIzuKSXM'
});

module.exports = {
  yelpSearch: function(req,res){
	  yelp.search({term:req.body.term, location:req.body.location}, function(error,data){
	  	console.log(data)
	  	res.send({data: data, error: error})
	  });
	}

};