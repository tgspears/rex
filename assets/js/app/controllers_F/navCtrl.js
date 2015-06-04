RexApp.controller('navCtrl', ['$scope', '$rootScope', '$mdSidenav', 'UserService', function($scope, $rootScope, $mdSidenav, UserService){

  console.log('NAV CTRL LOADED')

  $scope.UserService = UserService;
  $scope.$watchCollection('UserService',function(){
          $scope.currentUser = UserService.currentUser;
          
    
      console.log('NAV LOG'+UserService.currentUser)
    })


   $scope.openLeftMenu = function() {
    console.log("MENU FIRING")
    $mdSidenav('left').toggle();
  };

   $scope.showSignup = function(){
    console.log('showSignup')
    $('#signupModal').openModal();
  }

  $scope.showLogin = function(){
    console.log('showLogin')
    controller:'authModalCtrl';
    $('#loginModal').openModal();
  }

  $scope.logOut = function(){
    console.log('This will log you out');
    UserService.logout(function(err,data){
      console.log('LOGGED OUT')
    })
    // confirm('This will log you out');
  }

  $scope.showMyRex = function(){
    console.log('showMyRex')
    $('#myRexModal').openModal();
  }

  
}])