RexApp.controller('addRexCtrl', ['$scope',function($scope){

console.log('ADD REX CTRL LOADED!')

$scope.rexes=[];

  $scope.addRex = function(){
    var rex = new Rex();
    rex.name = "Razzi's Pizzeria";
    rex.street= "1234 Main St";
    rex.city = "Seattle";
    rex.state="WA";
    rex.country = "USA";
    rex.phone = "123-323-4343";
    rex.website = "www.razzis.com";
    rex.email = "info@razzis.com";
    rex.$save(function(data){
      console.log(data);
    })
  }




}])