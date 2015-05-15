var myApp = angular.module('myApp', ['ngRoute','firebase'])
.constant('FIREBASE_URL','https://sarthakangularapp.firebaseio.com/meetings');

//var myApp = angular.module('myApp', ['ngRoute','firebase', 'appControllers']);

//var appControllers = angular.module('appControllers',['firebase']);

myApp.config(['$routeProvider',function($routeProvider){
	$routeProvider.
	when('/login',{
		templateUrl: 'views/login.html',
		controller: 'RegistrationController'
	}).
	when('/register',{
		templateUrl: 'views/register.html',
		controller: 'RegistrationController'
	}).
	when('/meetings',{
		templateUrl: 'views/meetings.html',
		controller: 'MeetingsController',
		resolve: {
			currentAuth: function(Authentication){
				return Authentication.requireAuth();
			}
		}
	}).
	when('/checkins/:uid/:mid',{
		templateUrl: 'views/checkins.html',
		controller: 'CheckInsController'
	}).	
	otherwise({
		redirectTo: '/login'
	});

}]);