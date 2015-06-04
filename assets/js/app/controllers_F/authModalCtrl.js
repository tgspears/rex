RexApp.controller('authModalCtrl', ['$scope', 'UserService', '$modal', '$http', '$mdDialog', function($scope,UserService,$modal,$http, $mdDialog){
  console.log("MY AUTH CTRL LOADED");

  $scope.closeDialog = function(){
    console.log('clicked closeDialog()')
    $mdDialog.hide();
  }
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
      $scope.closeDialog();
    })
  }


}])