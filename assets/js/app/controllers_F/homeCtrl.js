RexApp.controller('homeCtrl', ['$scope', '$http', 'UserService', '$mdToast', '$mdDialog', '$mdToast', '$mdBottomSheet',function($scope, $http, UserService, $mdToast, $mdDialog, $mdToast,$mdBottomSheet){

// Current user
$scope.UserService = UserService;
  $scope.$watchCollection('UserService',function(){
    $scope.currentUser = UserService.currentUser;
  })

// Opens modals and bottom sheet
  $scope.showSignup = function(){
    $('#signupModal').openModal();
  }

  $scope.showLogin = function(){
    $('#loginModal').openModal();
  }

  $scope.openBottomSheet = function() {
    $mdBottomSheet.show({
      templateUrl: '/views/about.html'
    });
  };

// If statement for login vs signup content in modal
  $scope.showDialog =function(type) {
       if(type==='signup'){

       $mdDialog.show({
         templateUrl:'views/auth/authSignupModal.html',
         clickOutsideToClose: true,
         controller: 'authModalCtrl'
      });

     } else if(type==='login'){

       $mdDialog.show({
         templateUrl:'views/auth/authLoginModal.html',
         clickOutsideToClose: true,
         controller: 'authModalCtrl'
     })
    } else {
      $mdToast.show($mdToast.simple().content("We're sorry! Something went wrong! Please try again."))
        $location.path('/')
    }
  }

  $scope.closeDialog = function(){
    $mdDialog.hide();
  }
}])

