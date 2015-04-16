myApp.controller('MeetingsController',function($scope,$firebaseObject){
	console.log("Inside MeetingsController");
	var ref = new Firebase("https://sarthakangularapp.firebaseio.com/meetings");

	$scope.meetings = $firebaseObject(ref);

	var meetings = $scope.meetings;

	$scope.addMeeting = function(){
		console.log("Inside addMeeting function.....");
		ref.push({
			name: $scope.meetingname,
			date: "29 Feb"
		});
	};

	$scope.deleteMeeting = function(key){
		var newRef = ref.child(key);
		console.log(newRef);
		newRef.remove();
	};

});