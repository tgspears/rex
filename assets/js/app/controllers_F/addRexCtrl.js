RexApp.controller('addRexCtrl',['$scope', '$http','$routeParams', '$location', '$mdToast', 'UserService',function($scope, $http,$routeParams,$location,$mdToast,UserService){

	console.log('ADD REX CTRL LOADED!')

		
	$scope.UserService = UserService;


  $scope.$watchCollection('UserService',function(){
    $scope.currentUser = UserService.currentUser;
		console.log($scope.currentUser)
    if($scope.currentUser==false){
      $location.path('/')
    }
  });

  $scope.showList = function(){

    console.log($scope.currentUser)

    // console.log("made it into showList")
    $http({
      method:'GET',
      url:'/api/list',
      params:{
        userId:UserService.currentUser.id
      }
    })
    .success(function(data, status){
      $scope.lists = data;
      console.log('lists',data)
    })
    .error(function(data,status){
      $mdToast.show($mdToast.simple().content('Oops! An error has occurred. Please try again.'))
    })
  }

	var id = $routeParams.id
	$scope.whatMode = "ADD"

	if (id){
		console.log(id)
		$http({method:'GET',url:'/api/rex/'+id})
		  .success(function(data, status) {
		      $scope.rex = data;
		      console.log('data',data)
		   })
		  .error(function(data, status) {
		      alert("Error in get method",data);
		});
		$scope.whatMode = "EDIT"
	}

	$scope.addRex = function(){
		console.log("add rex working!");

		var rexInfo = {
			name:$scope.newRex.name,
			street:$scope.newRex.street,
			city:$scope.newRex.city,
			state:$scope.newRex.state,
			country:$scope.newRex.country,
			phone:$scope.newRex.phone,
			email:$scope.newRex.email,
			category:$scope.newRex.category,
			website:$scope.newRex.website,
			notes:$scope.newRex.notes,
			list_id:$scope.newRex.listId
		}

		console.log('rexInfo: '+rexInfo[0])

		if(id){
			$http.put('/api/rex/'+id, rexInfo)
			.success(function(data){
				console.log(data)
				// alert(data.name+' has been edited!')
				$mdToast.show($mdToast.simple().content('Your Rex has been updated.'))
				$location.path('/myrex')
			})
		}else{
			$http.post('/api/rex', rexInfo)
			.success(function(data){
				// alert(data.name+' has been added to your Rex!')
				$mdToast.show($mdToast.simple().content(data.name+' has been added to your Rex!'))
				$location.path('/myrex')
			})
		}
	}

	$scope.showList();

}]);

RexApp.directive("value", function() {
    return {
        priority: 500,
        require: "?ngModel",
        link: function(scope, element, attr, ngModel) {
            if(!ngModel) {
                return;
            }
            var value = attr.value;
            ngModel.$setViewValue(value);
        }
    };
});
