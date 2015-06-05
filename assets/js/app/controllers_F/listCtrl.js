RexApp.controller('listCtrl', ['$mdDialog', '$scope', 'UserService', '$location', '$mdToast', '$http', '$routeParams',function($mdDialog,$scope,UserService,$location,$mdToast,$http){

	console.log("LIST CTRL UP AND RUNNING!")

	$scope.UserService = UserService;
  $scope.lists = [];


  $scope.$watchCollection('UserService',function(){
    $scope.currentUser = UserService.currentUser;
		console.log($scope.currentUser)
    if($scope.currentUser==false){
      $location.path('/')
    }
  });

   $scope.closeDialog = function(){
    console.log('clicked closeDialog()')
    $mdDialog.hide();
  }

  $scope.addList = function(){
    console.log("LIST ADD FUNCTION REACHED.")

    var newList = {
      title:$scope.newList.title,
      userId: $scope.currentUser.id
    }

    $http.post('/api/list', newList)
    .success(function(data){
      $mdToast.show($mdToast.simple().content(data.title+' has been added!'))
      $scope.closeDialog();
    })

    console.log(newList)


  }

  $scope.showDialog =function($event) {
       // var parentEl = angular.element(document.body);
       $mdDialog.show({
         // parent: parentEl,
         // targetEvent: $event,
         templateUrl:'views/addListModal.html',
         clickOutsideToClose: true,
         // locals: {
         //   items: $scope.items
         // },
         controller: 'listCtrl'
      });
    }

  $scope.showList = function(){

    console.log($scope.currentUser)

    // console.log("made it into showList")
    $http({
      method:'GET',
      url:'/api/list',
      params:{
        userId:UserService.currentUser.id
      }
    })
    .success(function(data, status){
      $scope.lists = data;
      console.log('lists',data)
    })
    .error(function(data,status){
      $mdToast.show($mdToast.simple().content('Oops! An error has occurred. Please try again.'))
    })
  }

  $scope.showList();

}])