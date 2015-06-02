/**
 * RexController
 *
 * @description :: Server-side logic for managing rexes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var yelp = require('yelp');

var yelp = require('yelp').createClient({
  consumer_key:process.env.YELP_CONSUMER_KEY,
  consumer_secret:process.env.YELP_CONSUMER_SECRET,
  token:process.env.YELP_CONSUMER_TOKEN,
  token_secret:process.env.YELP_CONSUMER_SECRET
});

yelp.search({term:'food', location:'seattle'}, function(error,data){
  console.log(error);
  console.log(data);
});

module.exports = {
  yelp: function(req,res){
  yelp.search({term:'food', location:'seattle'}, function(error,data){
  console.log(error);
  console.log(data);
});
  }

};

