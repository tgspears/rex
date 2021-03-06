RexApp.controller('authModalCtrl', ['$scope', 'UserService', '$modal', '$http', '$mdDialog', '$mdToast','$location', function($scope,UserService,$modal,$http, $mdDialog,$mdToast,$location){

// Close modal
  $scope.closeDialog = function(){
 
    $mdDialog.hide();
  }

// Login user function
  $scope.login = function(){
    UserService.login($scope.email, $scope.password, function(err,data){
      if(data.error){
        console.log(err);
        $mdToast.show($mdToast.simple().content('Oops! Invalid login credentials. Please try again.'))
        $location.path('/')
      } else {

        $mdToast.show($mdToast.simple().content('You have been logged in!'))
        $scope.closeDialog();
        $location.path("/myrex");
      }
    })
  }

// Signup user function
  $scope.signup = function(){
    var newUser = {
      username:$scope.newUser.username,
      email:$scope.newUser.email,
      password:$scope.newUser.password
    }

    $http.post('/api/user', newUser)
    .success(function(data){
      $scope.closeDialog();
      UserService.login(newUser.email,newUser.password,function(err,data){
        if(data.error){
          console.log(err);
          $mdToast.show($mdToast.simple().content('Oops! Invalid login credentials. Please try again.'))
          $location.path('/')
        } else {
          $mdToast.show($mdToast.simple().content('You have been logged in!'))
          $scope.closeDialog();
        }
      })
    })
  }


}])