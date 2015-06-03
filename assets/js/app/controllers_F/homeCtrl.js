RexApp.controller('homeCtrl', ["$scope", '$http', function($scope, $http){

  console.log("HOME CTRL LOADED")

  $scope.showSignup = function(){
    console.log('showSignup')
    $('#signupModal').openModal();
  }

  $scope.showLogin = function(){
    console.log('showLogin')
    $('#loginModal').openModal();
  }

  $scope.signup = function(){
  	console.log("signup!")

  	var newUser = {
  		username:$scope.newUser.username,
  		email:$scope.newUser.email,
  		password:$scope.newUser.password
  	}

  	$http.post('/api/user', newUser)
  	.success(function(data){
  		console.log('WORKING'+data)
  	})
  }



}])

