RexApp.controller('searchRexCtrl', ['$scope', '$http', '$location', 'UserService', function($scope,$http,$location,UserService){

	$scope.UserService = UserService;

// current user
  $scope.$watchCollection('UserService',function(){
    $scope.currentUser = UserService.currentUser;
    if($scope.currentUser==false){
      $location.path('/')
    }
  });

// yelp search function
	$scope.yelpSearch = function(){
		var yelpReq = {
			method: 'GET',
			url: '/yelp',
			params: {
				location:$scope.searchLocation,
				term:$scope.searchTerm
			}
		}
		$http(yelpReq).success(function(data){
			$scope.results = data.data.businesses;
			$scope.total = data.data.total;
		})
   }

// add yelp to user's rexes
   $scope.addYelpRex = function(idx){
   	var newYelpRex = {
			name:$scope.results[idx].name,
			street:$scope.results[idx].location.address[0],
			city:$scope.results[idx].location.city,
			state:$scope.results[idx].location.state_code,
			country:$scope.results[idx].location.country_code,
			phone:$scope.results[idx].phone,
			website:$scope.results[idx].url
		}
		console.log(newYelpRex);
		$http.post('/api/rex', newYelpRex)
		.success(function(data){
			var id=data.id
			$location.path('/editit/'+id)
		})
   }

}])