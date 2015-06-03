RexApp.controller('showRexCtrl',['$scope','$http',function($scope,$http){

	console.log('showRexCtrl online')

	var userId = '556f52fdb9216e0426b092a6'

 	$http({method : 'GET',url : '/api/rex/'+userId})
  .success(function(data, status) {
      $scope.rex = data;
      console.log('data',data)
   })
  .error(function(data, status) {
      alert("Error",data);
  });

}])