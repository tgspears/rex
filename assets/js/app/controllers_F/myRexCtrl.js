RexApp.controller('myRexCtrl', ['$scope','$http', function($scope,$http){

	console.log("MY REX CTRL LOADED");

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
      alert('DELETED')

      $scope.showRex();

      Rex.query(function(data){
        $scope.rexes = data;
      })
    })
  }
    $scope.showRex();

}]);