RexApp.controller('homeCtrl', ['$scope', '$http', 'UserService', '$mdToast', '$mdDialog', '$mdToast', '$mdBottomSheet',function($scope, $http, UserService, $mdToast, $mdDialog, $mdToast,$mdBottomSheet){


$scope.UserService = UserService;
  $scope.$watchCollection('UserService',function(){
    $scope.currentUser = UserService.currentUser;
    // console.log('HOME LOG'+UserService.currentUser)
  })


  // console.log("HOME CTRL LOADED")

  $scope.showSignup = function(){
    // console.log('showSignup')
    $('#signupModal').openModal();
  }

  $scope.showLogin = function(){
    // console.log('showLogin')
    $('#loginModal').openModal();
  }

  $scope.openBottomSheet = function() {
    $mdBottomSheet.show({
      templateUrl: '/views/about.html'
    });
  };


  $scope.showDialog =function(type) {
    // console.log('made it this far.')
       if(type==='signup'){

       // var parentEl = angular.element(document.body);
       $mdDialog.show({
         // parent: parentEl,
         // targetEvent: $event,
         templateUrl:'views/auth/authSignupModal.html',
         clickOutsideToClose: true,
         // locals: {
         //   items: $scope.items
         // },
         controller: 'authModalCtrl'
      });
     } else if(type==='login'){
      // var parentEl = angular.element(document.body);
       $mdDialog.show({
         // parent: parentEl,
         // targetEvent: $event,
         templateUrl:'views/auth/authLoginModal.html',
         clickOutsideToClose: true,
         // locals: {
         //   items: $scope.items
         // },
         controller: 'authModalCtrl'
     })
    } else {
      $mdToast.show($mdToast.simple().content("We're sorry! Something went wrong! Please try again."))
        $location.path('/')

    }
  }

    // $scope.showLoginDialog =function($event) {
    //    var parentEl = angular.element(document.body);
    //    $mdDialog.show({
    //      parent: parentEl,
    //      targetEvent: $event,
    //      templateUrl:'views/auth/authLoginModal.html',
    //      clickOutsideToClose: true,
    //      // locals: {
    //      //   items: $scope.items
    //      // },
    //      controller: 'authModalCtrl'
    //   });
    // }


  $scope.closeDialog = function(){
    // console.log('clicked closeDialog()')
    $mdDialog.hide();
  }



}])

