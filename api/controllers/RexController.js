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

	  yelp.search({term:req.query.term, location:req.query.location}, function(error,data){

	  	res.send({data: data, error: error})
	  });

	},

	sendEmail: function(req,res){


		var email = new sendgrid.Email();

		sendgrid.send({
			to:req.query.to,// To
			from:'SendRexGoSpears@gmail.com',
			subject:req.query.username+" thinks you'd like to know about "+req.query.name,
			html:'<p>'+req.query.text+'</p><h1>'+req.query.name+'</h1><p>'+req.query.street+'</p><p>'+req.query.city+', '+req.query.state+' - '+req.query.country+'</p><p><a href="tel:'+req.query.phone+'">tel. '+req.query.phone+'</a></p><p><a href="email:'+req.query.email+'">email. '+req.query.email+'</a></p><p><a href="'+req.query.website+'">site. '+req.query.website+'</a></p>'
		}, function(err,json){
			if(err){
				return console.error(err);
			}
			console.log();
		});


	}
};