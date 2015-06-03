RexApp.controller('searchRexCtrl', ['$scope', function($scope){
	console.log('Search Controller Loaded!')

	$scope.yelpSearch = function(){

		var yelpterms = {
			location:$scope.searchLocation,
			term:$scope.searchTerm
		}

		console.log(yelpterms)

	}

}])