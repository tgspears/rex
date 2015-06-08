var RexApp = angular.module('RexApp', ['ngRoute','ngMaterial', 'ui.bootstrap']);


RexApp.controller('sidenavController', function($scope, $mdSidenav) {
  // $scope.openLeftMenu = function() {
  //   console.log("MENU FIRING")
  //   $mdSidenav('left').toggle();
  // };

  // $scope.showSignup = function(){
  //   console.log('showSignup')
  //   $('#signupModal').openModal();
  // }

  // $scope.showLogin = function(){
  //   console.log('showLogin')
  //   $('#loginModal').openModal();
  // }

  // $scope.logOut = function(){
  //   console.log('This will log you out');
  //   confirm('This will log you out');
  // }

  // $scope.showMyRex = function(){
  //   console.log('showMyRex')
  //   $('#myRexModal').openModal();
  // } 

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
  // .when('/locations',{
  //   templateUrl:'/views/myrex.html',
  //   controller:'myRexCtrl'
  // })
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

  // console.log('ANGULAR READY')

  UserService.check(function(err,data){
    // console.log('check', err, data);
  })

}])
