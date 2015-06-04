RexApp.controller('homeCtrl', ['$scope', '$http', 'UserService', '$mdToast', '$mdDialog', '$mdToast', function($scope, $http, UserService, $mdToast, $mdDialog, $mdToast){


$scope.UserService = UserService;
  $scope.$watchCollection('UserService',function(){
          $scope.currentUser = UserService.currentUser;
          
    
      console.log('HOME LOG'+UserService.currentUser)
    })


  console.log("HOME CTRL LOADED")

  $scope.showSignup = function(){
    console.log('showSignup')
    $('#signupModal').openModal();
  }

  $scope.showLogin = function(){
    console.log('showLogin')
    $('#loginModal').openModal();
  }

  // $scope.signup = function(){
  // 	console.log("signup!")

  // 	var newUser = {
  // 		username:$scope.newUser.username,
  // 		email:$scope.newUser.email,
  // 		password:$scope.newUser.password
  // 	}

  // 	$http.post('/api/user', newUser)
  // 	.success(function(data){
  // 		console.log('WORKING'+data)
  // 	})
  // }

  // $scope.login = function(){

  //   console.log('HELLO')
  //   UserService.login($scope.email, $scope.password, function(err,data){

  //     if(err){
  //       console.log(err);
  //       $mdToast.show($mdToast.simple().content('Oops! Invalid login credentials. Please try again.'))
  //       $location.path('/')
  //     } else {
  //       console.log(data);
  //       $mdToast.show($mdToast.simple().content('You have been logged in!'))
  //       $location.path('/')
  //       // alert('Invalid authentication credentials. Please try again.');
  //     }
  //   })
  // }


  $scope.showDialog =function(type) {
    console.log('made it this far.')
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
    console.log('clicked closeDialog()')
    $mdDialog.hide();
  }



}])

