myApp.controller('MeetingsController',function($scope,$firebaseObject, $firebaseArray){
	console.log("Inside MeetingsController");
	var ref = new Firebase("https://sarthakangularapp.firebaseio.com/meetings");

	var meetings = $firebaseObject(ref);
	$scope.meetings = meetings;

	var meetingsArray = $firebaseArray(ref);

	meetingsArray.$loaded(function(data){		
		$scope.meetingsLength = meetingsArray.length;
		console.log("LENGTH:",meetingsArray.length);
	});

	meetingsArray.$watch(function(data){
		$scope.meetingsLength = meetingsArray.length;		
	});

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