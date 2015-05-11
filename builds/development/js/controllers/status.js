myApp.controller('StatusController',function($scope, $rootScope, $location, Authentication){



	$scope.logout = function(){
		Authentication.logout();
		$location.path('/login');

	$rootScope.showUserInfo = false;
	};
});