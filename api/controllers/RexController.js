/**
 * RexController
 *
 * @description :: Server-side logic for managing rexes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

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