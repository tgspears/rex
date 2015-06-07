RexApp.controller('addListModalCtrl', ['$scope', '$http', 'UserService', '$mdToast', '$mdDialog', function($scope,$http,UserService,$mdToast,$mdDialog){

	console.log('Modal controller working')

	$scope.UserService = UserService;
  $scope.lists = [];


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

   $scope.addList = function(){
    console.log("LIST ADD FUNCTION REACHED.")

    var newList = {
      title:$scope.newList.title,
      userId: $scope.currentUser.id
    }

    $http.post('/api/list', newList)
    .success(function(data){
      $scope.lists.push(data)
      $mdToast.show($mdToast.simple().content(data.title+' has been added!'))
      $scope.closeDialog();
      // $scope.$apply();
    })
      $scope.showList();

    console.log(newList)


  }

   $scope.closeDialog = function(){
    console.log('clicked closeDialog()')
    $mdDialog.hide();
  }

  $scope.showList();



}])