var RexApp = angular.module('RexApp', ['ngRoute','ngMaterial', 'ui.bootstrap']);


RexApp.controller('sidenavController', function($scope, $mdSidenav) {

});

RexApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $locationProvider.html5Mode(true);
  $routeProvider
  .when('/',{
    templateUrl: '/views/home.html',
    controller: 'homeCtrl'
  })
  .when('/myrex',{
    templateUrl: '/views/myList.html',
    controller:'listCtrl'
  })
  .when('/addrex', {
    templateUrl: '/views/addRex.html',
    controller: 'addRexCtrl'
  })
  .when('/search', {
    templateUrl:'/views/search.html',
    controller:'searchRexCtrl'
  })
  .when('/editrex/:id',{
    templateUrl:'/views/editit.html',
    controller:'addRexCtrl'
  })
  .when('/list/:id',{
    templateUrl:'/views/myRex.html',
    controller:'myRexCtrl'
  })
  .when('/editit/:id',{
    templateUrl:'/views/editit.html',
    controller:'addRexCtrl'
  })
  .otherwise({
    templateUrl:'/views/404.html'
  })
}])

RexApp.run(['$rootScope', 'UserService',function($rootScope, UserService){

  console.log('ANGULAR READY')

  UserService.check(function(err,data){
    // console.log('check', err, data);
  })

}])
