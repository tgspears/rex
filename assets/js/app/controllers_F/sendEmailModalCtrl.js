RexApp.controller('sendEmailModalCtrl', ['rex','$scope','UserService','$mdDialog','$http', function(rex,$scope,UserService,$mdDialog,$http){

	$scope.rex = rex;

	console.log('wasd',$scope.rex);

  $scope.closeDialog = function(){
    $mdDialog.hide();
  }

  $scope.sendEmail = function(target,name,city,email){

    console.log(UserService.currentUser.username)

    var emailReq = {
      method: 'GET',
      url:'/email',
      params:{
        to:$scope.emailReq.to,
        name:$scope.rex.name,
        street:$scope.rex.street,
        city:$scope.rex.city,
        state:$scope.rex.state,
        country:$scope.rex.country,
        phone:$scope.rex.phone,
        email:$scope.rex.email,
        website:$scope.rex.website,
        notes:$scope.rex.notes,
        username:UserService.currentUser.username,
        text:$scope.emailReq.text
      }
    }

    console.log(emailReq);

    $http(emailReq).success(function(data){
      console.log(data);
    })

    $scope.closeDialog();

  }

}])