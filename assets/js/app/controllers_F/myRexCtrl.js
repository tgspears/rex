RexApp.controller('myRexCtrl', ['$scope','$http', '$mdToast', '$mdDialog', 'UserService', function($scope,$http,$mdToast,$mdDialog,UserService){

	console.log("MY REX CTRL LOADED");

  $scope.UserService = UserService;


  $scope.$watchCollection('UserService',function(){
    $scope.currentUser = UserService.currentUser;
    console.log($scope.currentUser)
    if($scope.currentUser==false){
      $location.path('/')
    }
  });

	$scope.rexes = []

  // RexApp.run([function(){
  // }])
  



  $scope.showRex = function(){
    
    $http({method : 'GET',url : '/api/rex'})
    .success(function(data, status) {
        $scope.rexes = data;
        console.log('data',data)
     })
    .error(function(data, status) {
        alert("Error");
    });
  }

  $scope.deleteRex = function(idx){
    $http.delete('/api/rex/'+idx)
    .success(function(data,status){
      $mdToast.show($mdToast.simple().content('Your Rex has been deleted.'))

      $scope.showRex();

      Rex.query(function(data){
        $scope.rexes = data;
      })
    })
  }
    $scope.showRex();



}]);
