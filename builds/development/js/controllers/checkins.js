myApp.controller('CheckInsController',function($scope, $rootScope, $firebaseObject, $routeParams, $location, 
	FIREBASE_URL, Authentication){

console.log("inside CHECKIN controller !!!");

	$scope.whichMeeting = $routeParams.mid;
	$scope.whichUser = $routeParams.uid;

	var myRef = new Firebase(FIREBASE_URL + '/users/' + $scope.whichUser + '/meetings/' + $scope.whichMeeting + '/checkin');
	
	$scope.addCheckin = function(){
//		var checkinsObject = $firebaseObject(myRef);
console.log($routeParams.uid,$routeParams.mid);
		var myData = {
			firstname : $scope.user.firstname,
			lastname : $scope.user.lastname,
			email : $scope.user.email,
			
		};

		myRef.push(myData).then(function(){
			console.log("HEHEHEHEHE !!!!!!");
		});

	}
});