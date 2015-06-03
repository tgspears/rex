RexApp.controller('addRexCtrl',['$scope', '$http', function($scope, $http){

console.log('ADD REX CTRL LOADED!')

	$scope.addRex = function(){
		console.log("add rex working!");

		var newRex = {
			name:$scope.newRex.name,
			street:$scope.newRex.street,
			city:$scope.newRex.city,
			state:$scope.newRex.state,
			country:$scope.newRex.country,
			phone:$scope.newRex.phone,
			email:$scope.newRex.email,
			category:$scope.newRex.category,
			website:$scope.newRex.website,
			notes:$scope.newRex.notes
		}

		$http.post('/api/rex', newRex)
		.success(function(data){
			alert(data.name+' has been added to your Rex!')
		})
	}



}])