RexApp.controller('navCtrl', ['$scope', '$rootScope', '$mdSidenav', 'UserService', '$mdToast', '$location', function($scope, $rootScope, $mdSidenav, UserService, $mdToast, $location){

// current user
  $scope.UserService = UserService;
  $scope.$watchCollection('UserService',function(){
    $scope.currentUser = UserService.currentUser;
  })

// side nav open function
  $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };

// side nav close function
  $scope.closeLeftMenu = function() {
    if(!$scope.currentUser){
      $mdToast.show($mdToast.simple().content('Log in or sign up to become awesome!'));
    }
    $mdSidenav('left').toggle();
  };

// logout user function
  $scope.logOut = function(){
    
    UserService.logout(function(err,data){
      $location.path('/');
      $mdToast.show($mdToast.simple().content('You have been logged out!'));
    })
    $scope.closeLeftMenu();
  }

// open modal with rexes
  $scope.showMyRex = function(){
    $('#myRexModal').openModal();
  }

  
}])