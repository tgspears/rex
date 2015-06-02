RexApp.controller('myRexCtrl', ['$scope', function($scope){
  console.log("MY REX CTRL LOADED");

  $scope.searchYelp = function(){
    yelp.search();
  }

}])