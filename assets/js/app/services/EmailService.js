// RexApp.factory('EmailService',['$http',function($http){
// 	return{
// 		var sendgrid = require("sendgrid")(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);

// 		sendEmail:function(sendTo,title,rexId){

// 			console.log('triggered sendEmail')
// 			$http({method:'GET',url:'/api/rex/'+rexId})
// 				.success(function(data,status){
// 					var email = new sendgrid.Email();

// 					sendgrid.send({
// 						to: 'tg.spears@gmail.com',
// 						from: 'tg.spears@gmail.com',
// 						subject: 'Testing',
// 						text: 'Testing Testing'
// 					}, function(err,json){
// 						if err {return console.error(err);}
// 						console.log(json);
// 					}
// 					})
// 				})

// 		}
// 	}
// }])



// module.exports = {
// 	sendEmail: function(req,res){
// 		console.log('triggered email');
// 		var email = new sendgrid.Email();

// 		email.addTo("tg.spears@gmail.com");
// 		email.setForm("tg.spears@gmail.com");
// 		email.setSubject("Testing");
// 		email.setHtml("Testing Testing");

// 		sendgrid.send(email);
// 	},
