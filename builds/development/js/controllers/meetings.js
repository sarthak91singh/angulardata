myApp.controller('MeetingsController',function($scope,$firebaseObject, $firebaseArray, FIREBASE_URL){

	console.log("Inside MeetingsController");
	var regUserGlobal;
	var meetingRef;




	// Register the callback to be fired every time auth state changes
	var ref = new Firebase("https://sarthakangularapp.firebaseio.com");
	ref.onAuth(authDataCallback);

	// Create a callback which logs the current auth state
	function authDataCallback(authData) {
	  if (authData) {
	  	$scope.currentUser.regUser = authData.uid;
	  	regUserGlobal = authData.uid
	  	console.log("AUTHDATA IS:", authData);
	    console.log("User " + authData.uid + " is logged in with " + authData.provider);
	  } else {
	    console.log("User is logged out");
	  }

	  meetingRef = new Firebase(FIREBASE_URL + "/users/" + regUserGlobal + "/meetings");

	}




	$scope.addMeeting = function(){
		console.log("Inside addMeeting function.....");
		console.log("Global USER ID",regUserGlobal);
		meetingRef.push({
			name: $scope.meetingname,
			date: "29 Feb"
		});
	};





	$scope.deleteMeeting = function(key){
		var newRef = meetingRef.child(key);
		console.log(newRef);
		newRef.remove();
	};







	var myref = new Firebase(FIREBASE_URL + "/meetings");
	var meetings = $firebaseObject(meetingRef);
	$scope.meetings = meetings;

	var meetingsArray = $firebaseArray(meetingRef);

	console.log("Meetings array is:", meetingsArray);




	meetingsArray.$loaded(function(data){
		$scope.meetingsLength = meetingsArray.length;
		console.log("LENGTH:",meetingsArray.length);
	});






	meetingsArray.$watch(function(data){
		$scope.meetingsLength = meetingsArray.length;
	});


});