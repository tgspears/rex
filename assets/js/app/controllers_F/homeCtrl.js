RexApp.controller('homeCtrl', ["$scope", '$http', 'UserService', function($scope, $http, UserService){

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

  $scope.login = function(){

    console.log('HELLO')
    UserService.login($scope.email, $scope.password, function(err,data){

      if(err){
        console.log(err);
        alert('An error has occurred.');
      } else {
        console.log(data);
        alert('Invalid authentication credentials. Please try again.');
      }
    })
  }



}])

