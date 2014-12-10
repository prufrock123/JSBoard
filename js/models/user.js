;(function(window,undefined){

	window.app = window.app || {};

	var User = Backbone.Model.extend({
		defaults: {
			"company": "Not given",
			"description": "Not given",
			"location": "Not given"
		},
		fireRef: new Firebase("https://jsjoboard.firebaseio.com/"),
		validate: function(attrs){
			if(!attrs.company){
				return "company must have a name."
			}
			if(!attrs.email){
				return "company must have an email."
			}
			if(!attrs.password){
				return "company must have a password."
			}
		},
		debug: function(){
			console.dir(this.attributes)
		},
		initialize: function(data){
			// this.debug;
			this.fireRef.createUser({
				email: data.email,
				password: data.password
			}, function(error) {
				if (error === null) {
					console.log("User created successfully");
				} else {
					console.log("Error creating user:", error);
				}
			})
		}
	})

	// app.f = new Firebase("https://jsjoboard.firebaseio.com/");
	// app.u1 = new User();

	app.User = User;

})(window, undefined);