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

var sendgrid = require("sendgrid")(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);

module.exports = {

  yelpSearch: function(req,res){

  	console.log(req.params);
	  yelp.search({term:req.query.term, location:req.query.location}, function(error,data){
	  	console.log(data)
	  	res.send({data: data, error: error})
	  });

	},

	sendEmail: function(req,res){

		console.log('sendEmail_B');
		console.log(req.params);

		var email = new sendgrid.Email();

		sendgrid.send({
			to:req.query.to,
			from:'sendrexgospears@gmail.com',
			subject:req.query.subject,
			text:req.query.text
		}, function(err,json){
			if(err){
				return console.error(err);
			}
			console.log(json);
		});

	}
};