myApp.factory('Authentication', function($firebaseObject, $firebaseAuth, $routeParams, $location, FIREBASE_URL){

	var ref = new Firebase(FIREBASE_URL);
	var auth = $firebaseAuth(ref);

	var myObject ={
		login: function(user){
			return auth.$authWithPassword({
			email: user.email,
			password: user.password
		});
		},

		register: function(user){
			return auth.$createUser({
			email: user.email,
			password: user.password
			});


			// ......FOR CREATING CUSTOM FIELDS IN FIREBASE DATABASE....

			/*.then(function(regUser){

				var ref = new Firebase(FIREBASE_URL + '/users');
				var firebaseUsers = $firebaseObject(ref);

				firebaseUsers.$set(regUser.uid, {
					date: Firebase.ServerValue.TIMESTAMP,
					regUser: regUser.uid,
					firstname: user.firstname,
					lastname: user.lastname,
					email: user.email
				})

			});*/
		}
	};

	return myObject;


});