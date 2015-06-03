RexApp.controller('myRexCtrl', ['$scope','$http', function($scope,$http){

	console.log("MY REX CTRL LOADED");

	$scope.rexes = []

 	$http({method : 'GET',url : '/api/rex'})
  .success(function(data, status) {
      $scope.rexes = data;
      console.log('data',data)
   })
  .error(function(data, status) {
      alert("Error");
  });

}]);