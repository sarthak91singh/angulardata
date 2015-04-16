myApp.controller('RegistrationController',function($scope, $location, $firebaseAuth){

	console.log("Inside RegistrationController");
	var ref = new Firebase("https://sarthakangularapp.firebaseio.com/meetings");

	var auth = $firebaseAuth(ref);

	$scope.login = function(){

		console.log("auth is:",auth);

		auth.$authWithPassword({
			email: $scope.user.email,
			password: $scope.user.password
		}).then(function(){
			$location.path('/meetings');
		}).catch(function(error){
			$scope.message = error.message;
		});
	}

	$scope.register = function(){
		$location.path('/meetings');
	}


});