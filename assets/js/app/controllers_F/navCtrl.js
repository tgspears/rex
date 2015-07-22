RexApp.controller('navCtrl', ['$scope', '$rootScope', '$mdSidenav', 'UserService', '$mdToast', '$location', function($scope, $rootScope, $mdSidenav, UserService, $mdToast, $location){


  $scope.UserService = UserService;
  $scope.$watchCollection('UserService',function(){
    $scope.currentUser = UserService.currentUser;
  })


  $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };

  $scope.closeLeftMenu = function() {
    if(!$scope.currentUser){
      $mdToast.show($mdToast.simple().content('Log in or sign up to become awesome!'));
    }
    $mdSidenav('left').toggle();
  };

  $scope.logOut = function(){
    
    UserService.logout(function(err,data){
      $location.path('/');
      $mdToast.show($mdToast.simple().content('You have been logged out!'));
    })
    $scope.closeLeftMenu();
  }

  $scope.showMyRex = function(){
    $('#myRexModal').openModal();
  }

  
}])