;(function(window, undefined){

	window.app = window.app || {};


	var RegistrationFormView = Backbone.View.extend({
		tagname: "div",
		// collection: new app.JobListings(),
		// collection: function(){
		// 	return new app.JobListings()
		// },
		// syncCollection: function(){
		// 	this.listenTo(this.collection, "sync", render)
		// },
		className: "registrationForm",
		template: "registrationForm",
		profile: "<div class='row'><div class='small-12 columns'><h1>{password.email}</h1><button id='logout'>Logout</button></div></div>",
		render: function(){
			// debugger;
			var self = this;
			self.el.innerHTML = ""

			var status = app.auth.onAuth;

			status.done(function(authData){
				self.renderProfile(authData);
			});
			status.fail(function(){
				$.get("./templates/" + self.template + ".html").then(function(templateString){
					self.el.innerHTML = templateString;
				})
			});
		},
		renderProfile: function(authData){
			var self = this;
			self.el.innerHTML = _.template(this.profile, authData);
			// this.filter(authData)
			var subview = new app.ProfileView({
				collection: this.collection
			})
			// debugger;
			this.$el.append(subview.el);

			// this.joblistings = new app.JobListings()
			// this.joblistingsview = new app.JobListingsView({
			// 	collection: this.joblistings
			// })
		},
		// renderFiltered: function(filtered){
		// 	var self = this;
		// 	this.el.innerHTML = "";
		// 	// console.dir(this.collection);
		// 	$.get("./templates/" + this.template + ".html").then(function(templateString){
		// 		self.el.innerHTML = templateString
		// 	}).done(function(){
		// 		filtered.forEach(function(model){
		// 			var subview = new app.JobListingView({model: model});
		// 			self.$el.append(subview.el);
		// 		})
		// 	})
		// },
		// filter: function(authData){
		// 	debugger;
		// 	// event.preventDefault();
		// 	// var collection = new app.JobListings();
		// 	var filteredCollection = this.collection.byUid(authData.uid)
		// 	this.renderFiltered(filteredCollection);
		// },
		events: {
			"submit form": "createUser",
			"click #logout": "logOut"
		},
		createUser: function(event){
			var self = this;
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
						debugger;
						self.render();
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
			// status.done(function(authData){
			// 	self.renderProfile(authData);
			// })
		},
		logOut: function(event){
			event.preventDefault;

			var self = this;

			var status = app.auth.onAuth;

			status.done(function(authData){
				app.auth.logout();
				debugger;
				self.render();
			})

			// window.location.hash = "#users";
		},
		createObject: function(array){
			var object = {};
			for (var i=0; i<array.length; i++){
				object[array[i].name] = array[i].value
			};
			return object;
		},
		initialize: function(){
			// this.collection = new app.JobListings();
			// this.listenTo(this.collection, "sync", this.render)
		}
	})

	app.RegistrationFormView = RegistrationFormView;

})(window, undefined);