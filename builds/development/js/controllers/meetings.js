myApp.controller('MeetingsController',function($scope,$firebaseObject){
	console.log("Inside MeetingsController");
	var ref = new Firebase("https://sarthakangularapp.firebaseio.com/meetings");

	$scope.meetings = $firebaseObject(ref);
	

});