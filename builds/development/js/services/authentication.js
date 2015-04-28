myApp.factory('Authentication', function($firebaseObject, $rootScope, $firebaseAuth, $routeParams, $location, FIREBASE_URL){

	var ref = new Firebase(FIREBASE_URL);
	var auth = $firebaseAuth(ref);

	auth.$onAuth(function(authUser){
		if(authUser){
			console.log("authentication is successful !!!!!!");
			console.log("AuthUser is:",authUser);

			var refOriginal = new Firebase("https://sarthakangularapp.firebaseio.com");
			refOriginal.child("users").child(authUser.uid).set({
		    	provider: authUser.provider,
        		name: getName(authUser)
    		});

			var ref = new Firebase("https://sarthakangularapp.firebaseio.com/users/" + authUser.uid);
			var user = $firebaseObject(ref);
			$rootScope.currentUser = user;
			
			console.log("User Name is:",user.name);

			// Hey, I'm not able to display name of 'user' object in the console.
		}
		else{
			console.log("authentication is  NOT successful !!!!!!");
			$rootScope.currentUser = "";
		}

		function getName(authUser) {
		    switch(authUser.provider) {
			    case 'password':
				    return authUser.password.email.replace(/@.*/, '');
			    case 'twitter':
				    return authUser.twitter.displayName;
			    case 'facebook':
				    return authUser.facebook.displayName;
			}
		};
	});

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