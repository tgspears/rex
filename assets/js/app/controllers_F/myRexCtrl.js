RexApp.controller('myRexCtrl', ['$scope','$http', '$mdToast', '$mdDialog', function($scope,$http,$mdToast,$mdDialog){

	console.log("MY REX CTRL LOADED");

	$scope.rexes = []

  // RexApp.run([function(){
  // }])
  
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
         controller: 'listCtrl'
      });
    }
  


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
