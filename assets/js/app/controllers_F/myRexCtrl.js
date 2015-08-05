RexApp.controller('myRexCtrl', ['$scope','$http', '$mdToast', '$mdDialog', 'UserService', '$routeParams','$location', function($scope,$http,$mdToast,$mdDialog,UserService,$routeParams,$location){

  
  $scope.UserService = UserService;

// current user
  $scope.$watchCollection('UserService',function(){
    $scope.currentUser = UserService.currentUser;
    if($scope.currentUser==false){
      $location.path('/')
    }
  });

	$scope.rexes = []

// shows email content in modal
  $scope.showDialog =function($event) {
     $mdDialog.show({
       templateUrl:'views/sendEmailModal.html',
       clickOutsideToClose: true,
       locals: {
         rex: $event
       },
       controller: 'sendEmailModalCtrl'
    });
  }

// shows current user's rexes
  $scope.showRex = function(){
    $http({
      method : 'GET',
      url : '/api/rex',
      params:{
        list_id: $routeParams.id
      }
    })
    .success(function(data, status) {
        $scope.rexes = data;
     })
    .error(function(data, status) {
        alert("Error");
    });
  }

// shows current user's lists
  $scope.listInfo = function(){
    $http({
      method:'GET',
      url:'/api/list',
      params:{
        id:$routeParams.id
      }
    })
    .success(function(data,status){
      $scope.listData = data;
    })
    .error(function(data,status){
      alert("error")
    })
  }


// deletes rexes
  $scope.deleteRex = function(idx){
    $http.delete('/api/rex/'+idx)
    .success(function(data,status){
      $mdToast.show($mdToast.simple().content('Your Rex has been deleted.'))
      $scope.showRex();
    })
  }

  $scope.showRex();
  $scope.listInfo();

// Accordian collapse
  $('.collapsible').collapsible({
      accordion : true // A setting that changes the collapsible behavior to expandable instead of the default accordion style
  });

}]);


