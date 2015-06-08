RexApp.controller('searchRexCtrl', ['$scope', '$http', '$location', 'UserService', function($scope,$http,$location,UserService){
	// console.log('Search Controller Loaded!')

	$scope.UserService = UserService;

  $scope.$watchCollection('UserService',function(){
    $scope.currentUser = UserService.currentUser;
		// console.log($scope.currentUser)
    if($scope.currentUser==false){
      $location.path('/')
    }
  });

	// $scope.newYelpRex = {
	// 		name:null,
	// 		street:null,
	// 		city:null,
	// 		state:null,
	// 		country:null,
	// 		phone:null,
	// 		email:null,
	// 		category:null,
	// 		website:null,
	// 		notes:null
	// }


	$scope.yelpSearch = function(){

		var yelpReq = {
			method: 'GET',
			url: '/yelp',
			params: {
				location:$scope.searchLocation,
				term:$scope.searchTerm
			}
		}

		// console.log(yelpReq)

		$http(yelpReq).success(function(data){
			// console.log(data);
			$scope.results = data.data.businesses;
			// console.log('NAME:', data.data.businesses[0].name)
			$scope.total = data.data.total;
		})

   }


   $scope.addYelpRex = function(idx){


   	var newYelpRex = {
			name:$scope.results[idx].name,
			street:$scope.results[idx].location.address[0],
			city:$scope.results[idx].location.city,
			state:$scope.results[idx].location.state_code,
			country:$scope.results[idx].location.country_code,
			phone:$scope.results[idx].phone,
			// email:$scope.results[idx].email,
			// category:$scope.results[idx].category,
			website:$scope.results[idx].url
			// notes:$scope.results[idx].notes
		}

		console.log(newYelpRex);

		$http.post('/api/rex', newYelpRex)
		.success(function(data){
			var id=data.id
			$location.path('/editit/'+id)
			// alert(data.name+' has been added to your Rex!')
		})

   }


}])