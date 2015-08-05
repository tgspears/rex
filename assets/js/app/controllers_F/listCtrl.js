RexApp.controller('listCtrl', ['$mdDialog', '$scope', 'UserService', '$location', '$mdToast', '$http', '$routeParams',function($mdDialog,$scope,UserService,$location,$mdToast,$http){


	$scope.UserService = UserService;
  $scope.lists = [];

// current user
  $scope.$watchCollection('UserService',function(){
    $scope.currentUser = UserService.currentUser;
    if($scope.currentUser==false){
      $location.path('/')
    }
  });

// closes list modal
   $scope.closeDialog = function(){
    $mdDialog.hide();
  }

// delete a list
  $scope.deleteList = function(idx){
    $http.delete('/api/list/'+idx)
    .success(function(data,status){
      $mdToast.show($mdToast.simple().content('Your List has been deleted.'))
      $scope.showList();
    })
  }

// show user lists
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

// add a list function
  $scope.addList = function(){
    var newList = {
      title:$scope.newList.title,
      userId: $scope.currentUser.id
    }
    $http.post('/api/list', newList)
    .success(function(data){
      $scope.lists.push(data)
      $mdToast.show($mdToast.simple().content(data.title+' has been added!'))
      $scope.closeDialog();
    })
    location.reload(false);
  }

// show add list content in modal
  $scope.showDialog =function($event) {
       $mdDialog.show({
         templateUrl:'views/addListModal.html',
         clickOutsideToClose: true,
         controller: 'listCtrl'
      });
    }

  $scope.showList();

}])