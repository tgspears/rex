RexApp.controller('sendEmailModalCtrl', ['rex','$scope','UserService','$mdDialog','$http', function(rex,$scope,UserService,$mdDialog,$http){

	$scope.rex = rex;

  $scope.closeDialog = function(){
    $mdDialog.hide();
  }

  $scope.sendEmail = function(target,name,city,email){

    var emailParams = {
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

    if(!emailParams.name){
      emailParams.name = 'N/A';
    }
    if(!emailParams.street){
      emailParams.street = 'N/A';
    }
    if(!emailParams.city){
      emailParams.city = 'N/A';
    }
    if(!emailParams.state){
      emailParams.state = 'N/A';
    }
    if(!emailParams.country){
      emailParams.country = 'N/A';
    }
    if(!emailParams.phone){
      emailParams.phone = 'N/A';
    }
    if(!emailParams.email){
      emailParams.email = 'N/A';
    }
    if(!emailParams.category){
      emailParams.category = 'N/A';
    }
    if(!emailParams.website){
      emailParams.website = 'N/A';
    }
    if(!emailParams.notes){
      emailParams.notes = 'N/A';
    }

    console.log(emailParams);

    var emailReq = {
      method: 'GET',
      url:'/email',
      params:emailParams
    }

    $http(emailReq).success(function(data){
      console.log();
    })

    $scope.closeDialog();

  }

}])