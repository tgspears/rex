var RexApp = angular.module('RexApp', ['ngRoute','ngMaterial']);

RexApp.run(['$rootScope', function($rootScope){

  console.log('ANGULAR READY')
}])

RexApp.controller('MyController', function($scope, $mdSidenav) {
  $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };
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

