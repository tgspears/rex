RexApp.controller('listCtrl', ['$mdDialog', '$scope', 'UserService', '$location', function($mdDialog,$scope,UserService,$location){

	console.log("LIST CTRL UP AND RUNNING!")

	$scope.UserService = UserService;


  $scope.$watchCollection('UserService',function(){
    $scope.currentUser = UserService.currentUser;
		console.log($scope.currentUser)
    if($scope.currentUser==false){
      $location.path('/')
    }
  });

  $scope.showDialog =function($event) {
       var parentEl = angular.element(document.body);
       $mdDialog.show({
         parent: parentEl,
         targetEvent: $event,
         templateUrl:'views/addListModal.html',
         clickOutsideToClose: true,
         // locals: {
         //   items: $scope.items
         // },
         controller: 'myRexCtrl'
      });
    }
  


}])