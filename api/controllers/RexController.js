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

		console.log(req.params);

		var email = new sendgrid.Email();

		// NEEDS //
		// to
		// name
		// street
		// city
		// state
		// country
		// phone
		// email
		// website
		// notes
		// username (of sending user)
		// text (user to user notes)

		sendgrid.send({
			to:req.query.to,// To
			from:'SendRexGoSpears@gmail.com',
			subject:req.query.username+" thinks you'd like to know about "+req.query.name,// This person thinks you'd like to know about this place!
			text:req.query.text,// User to user note
			html:'<h1>'+req.query.name+'</h1><span>'+req.query.street+' '+req.query.city+','+req.query.state+','+req.query.country+'</span><p>'+req.query.phone+'</p><p>'+req.query.email+'</p><p>'+req.query.website+'</p><p>'+req.query.notes+'</p>',// Contains - Name,Street,City,State,Country,Phone,Email,Website,Notes
		}, function(err,json){
			if(err){
				return console.error(err);
			}
			console.log(json);
		});

	}
};