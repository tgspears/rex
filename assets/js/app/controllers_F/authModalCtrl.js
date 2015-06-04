RexApp.controller('authModalCtrl', ['$scope', 'UserService', '$modal', '$http', '$mdDialog', '$mdToast', function($scope,UserService,$modal,$http, $mdDialog,$mdToast){
  console.log("MY AUTH CTRL LOADED");

  $scope.closeDialog = function(){
    console.log('clicked closeDialog()')
    $mdDialog.hide();
  }
  $scope.login = function(){
    UserService.login($scope.email, $scope.password, function(err,data){
      if(err){
        console.log(err);
        $mdToast.show($mdToast.simple().content('Oops! Invalid login credentials. Please try again.'))
        $location.path('/')
      } else {
        console.log(data);
        $mdToast.show($mdToast.simple().content('You have been logged in!'))
        $scope.closeDialog();
  
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