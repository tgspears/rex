RexApp.controller('authModalCtrl', ['$scope', 'UserService', function($scope,UserService){
  console.log("MY AUTH CTRL LOADED");

  $scope.login = function(){
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