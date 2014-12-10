;(function(window, undefined){

	window.app = window.app || {};


	var RegistrationFormView = Backbone.View.extend({
		tagname: "div",
		className: "registrationForm",
		template: "registrationForm",
		render: function(){
			var self = this;
			$.get("./templates/" + this.template + ".html").then(function(templateString){
				self.el.innerHTML = templateString;
			})
		},
		events: {
			"submit form": "createUser"
		},
		createUser: function(event){
			event.preventDefault();
			// debugger;
			var arr = this.$el.find('input').serializeArray();
			var obj = this.createObject(arr)

			// 1. check if user is logged in
			var status = app.auth.onAuth;
			// 2. if user not logged in...
			status.fail(function(errorMessage){
				// 3. ...try to login the user
				app.auth.login(obj)
					.then(function(authData){
						// logged in successfully, go to "post a job"
						window.location.hash = "#post";
					}).fail(function(errorMessage){
						// wrong password or login doesn't exist
						// if wrong password, alert() that and try again
						// else if login doesn't exist
						app.auth.createUser(obj).then(function(){
							// alert that user created and navigate to...
							window.location.hash = "#post";
						})
					})
			})
		},
		createObject: function(array){
			var object = {};
			for (var i=0; i<array.length; i++){
				object[array[i].name] = array[i].value
			};
			return object;
		},
		initialize: function(){
		}
	})

	app.RegistrationFormView = RegistrationFormView;

})(window, undefined);