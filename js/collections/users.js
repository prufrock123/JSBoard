// ;(function(window, undefined){
// 	window.app = window.app || {};

// 	var Users = Backbone.Firebase.Collection.extend({
// 		model: app.User,
// 		url: 'https://jsjoboard.firebaseio.com/users'
// 	})

// 	app.Users = Users;

// })(window, undefined);

;(function(window, undefined){
	window.app = window.app || {};

	var Users = Backbone.Collection.extend({
		model: app.User,
		// url: 'https://jsjoboard.firebaseio.com'

		// createUser: function(data){

		// 	this.url.createUser({
		// 		email: data.email,
		// 		password: data.password
		// 	}, function(error){
		// 		if(error){
		// 			promise.reject(error);
		// 		} else {
		// 			promise.resolve();
		// 		}
		// 	})
		// }
	})

	app.Users = Users;

})(window, undefined);