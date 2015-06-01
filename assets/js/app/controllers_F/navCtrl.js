RexApp.controller('navCtrl', ['$scope', '$rootScope', '$modal', function($scope, $rootScope, $modal){

  $scope.showLogin = function(){
    $modal.open({
      templateUrl: '/views/auth/authLoginModal.html',
      controller: 'authLoginModalCtrl'
    })
  }


  console.log('NAV CTRL LOADED')
}])