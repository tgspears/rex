RexApp.controller('addRexCtrl',['$scope', '$http','$routeParams', '$location', '$mdToast', 'UserService',function($scope, $http,$routeParams,$location,$mdToast,UserService){

console.log('ADD REX CTRL LOADED!')

	var id = $routeParams.id
	$scope.whatMode = "Add"

	if (id){
		console.log(id)
		$http({method : 'GET',url : '/api/rex/'+id})
		  .success(function(data, status) {
		      $scope.rex = data;
		      console.log('data',data)
		   })
		  .error(function(data, status) {
		      alert("Error",data);
		});
		$scope.whatMode = "Edit"
	}

	$scope.addRex = function(){
		console.log("add rex working!");

		var rexInfo = {
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

		if(id){
			$http.put('/api/rex/'+id, rexInfo)
			.success(function(data){
				console.log(data)
				// alert(data.name+' has been edited!')
				$mdToast.show($mdToast.simple().content('Your Rex has been updated.'))
				$location.path('/myrex')
			})
		}else{
			$http.post('/api/rex', rexInfo)
			.success(function(data){
				// alert(data.name+' has been added to your Rex!')
				$mdToast.show($mdToast.simple().content(data.name+'has been added to your Rex!'))
				$location.path('/myrex')
			})
		}
	}

}]);

RexApp.directive("value", function() {
    return {
        priority: 500,
        require: "?ngModel",
        link: function(scope, element, attr, ngModel) {
            if(!ngModel) {
                return;
            }
            var value = attr.value;
            ngModel.$setViewValue(value);
        }
    };
});
