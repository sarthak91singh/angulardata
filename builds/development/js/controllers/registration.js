myApp.controller('RegistrationController',function($scope, $rootScope, $location, $firebaseAuth, Authentication){

	console.log("Inside RegistrationController");

	$scope.login = function(){



		Authentication.login($scope.user)
		.then(function(){
			$location.path('/meetings');
			$rootScope.showUserInfo = true;
		}).catch(function(error){
			$scope.message = error.message;
		});
	}

	$scope.register = function(){
		Authentication.register($scope.user)
		.then(function(){
			Authentication.login($scope.user);
			$location.path('/meetings');
			$rootScope.showUserInfo = true;
		}).catch(function(error){
			$scope.message = error.message;
		});
	}


});