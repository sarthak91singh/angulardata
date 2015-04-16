myApp.controller('RegistrationController',function($scope, $location, $firebaseAuth, Authentication){

	console.log("Inside RegistrationController");

	$scope.login = function(){

		

		Authentication.login($scope.user)
		.then(function(){
			$location.path('/meetings');
		}).catch(function(error){
			$scope.message = error.message;
		});
	}

	$scope.register = function(){
		$location.path('/meetings');
	}


});