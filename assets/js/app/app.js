var RexApp = angular.module('RexApp', ['ngRoute','ngMaterial']);

RexApp.run(['$rootScope', function($rootScope){

  console.log('ANGULAR READY')

}])

RexApp.controller('MyController', function($scope, $mdSidenav) {
  $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };

  $scope.showSignup = function(){
    console.log('showSignup')
    $('#signupModal').openModal();
  }

  $scope.showLogin = function(){
    console.log('showLogin')
    $('#loginModal').openModal();
  }

  $scope.logOut = function(){
    console.log('This will log you out');
    confirm('This will log you out');
  }

  $scope.showMyRex = function(){
    console.log('showMyRex')
    $('#myRexModal').openModal();
  }

});

RexApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $locationProvider.html5Mode(true);
  $routeProvider
  .when('/',{
    templateUrl: '/views/home.html',
    controller: 'homeCtrl'
  })
  .when('/myrex',{
    templateUrl: '/views/myRex.html',
    controller:'myRexCtrl'
  })
  .when('/addrex', {
    templateUrl: '/views/addRex.html',
    controller: 'addRexCtrl'
  })
  .otherwise({
    templateUrl:'/views/404.html'
  })
}])

