myApp.controller('MeetingsController',function($scope,$firebaseObject, $firebaseArray, FIREBASE_URL){
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




// Create a callback which logs the current auth state
function authDataCallback(authData) {
  if (authData) {
  	$scope.currentUser.regUser = authData.uid;
  	console.log("AUTHDATA IS:", authData);
    console.log("User " + authData.uid + " is logged in with " + authData.provider);
  } else {
    console.log("User is logged out");
  }
}

// Register the callback to be fired every time auth state changes
var ref = new Firebase("https://sarthakangularapp.firebaseio.com");
ref.onAuth(authDataCallback);


});