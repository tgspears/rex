RexApp.factory('EmailService',['$http',function($http){
	
	return{

		sendEmail:function(rexId,sendTo,subject,text){

			var sendgrid = require("sendgrid")(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);

			console.log('triggered sendEmail')
			// $http({method:'GET',url:'/api/rex/'+rexId})
			// 	.success(function(data,status){
			// 		var email = new sendgrid.Email();
			// 		sendgrid.send({
			// 			to: sendTo,
			// 			from: 'sendrexgospears@gmail.com',
			// 			subject: subject,
			// 			text: text
			// 		}, function(err,json){
			// 			if(err) {
			// 				return console.error(err);
			// 		}
			// 		console.log(json);
			// 	})
			// })
		}
	}
}])