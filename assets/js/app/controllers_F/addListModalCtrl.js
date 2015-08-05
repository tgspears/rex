RexApp.controller('addListModalCtrl', ['$scope', '$http', 'UserService', '$mdToast', '$mdDialog', function($scope,$http,UserService,$mdToast,$mdDialog){


	$scope.UserService = UserService;
  $scope.lists = [];

// Current user
  $scope.$watchCollection('UserService',function(){
    $scope.currentUser = UserService.currentUser;

    if($scope.currentUser==false){
      $location.path('/')
    }
  });

// Shows lists for current user
	$scope.showList = function(){

    $http({
      method:'GET',
      url:'/api/list',
      params:{
        userId:UserService.currentUser.id
      }
    })
    .success(function(data, status){
      $scope.lists = data;

    })
    .error(function(data,status){
      $mdToast.show($mdToast.simple().content('Oops! An error has occurred. Please try again.'))
    })
  }

  // Add lists for current user

   $scope.addList = function(){

    var newList = {
      title:$scope.newList.title,
      userId: $scope.currentUser.id
    }

    $http.post('/api/list', newList)
    .success(function(data){
      $scope.lists.push(data)
      $mdToast.show($mdToast.simple().content(data.title+' has been added!'))
      $scope.closeDialog(data);
    })
      $scope.showList();
  }

  // Close modal function

   $scope.closeDialog = function(data){
    console.log('clicked closeDialog()'+data)
    $mdDialog.hide();
  }
  $scope.showList();

}])