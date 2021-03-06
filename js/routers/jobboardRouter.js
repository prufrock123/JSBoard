;(function(window, undefined){

	window.app = window.app || {};

	var JobBoardRouter = Backbone.Router.extend({
		routes: {
			"filtered": "page5",
			"users": "page4",
			"post": "page3",
			"joblisting/:id": "page2",
			"*defaults": "page1"
		},
		page1: function(){
			this.joblistingsview.render();
			
			this.joblistingsview.el.classList.add('activeCustom');
			this.joblistingexpandedview.el.classList.remove('activeCustom');
			this.jobpostformview.el.classList.remove('activeCustom');
			this.registrationformview.el.classList.remove('activeCustom');	
		},
		page2: function(id){
			// debugger;
			// console.dir(this);
			var joblistingmodel = this.joblistings.filter(function(model){
				return model.cid === id;
			});

			if(!joblistingmodel.length){
				window.location.hash = "#";
				return;
			}

			joblistingmodel = joblistingmodel[0];

			this.joblistingexpandedview.render(
				joblistingmodel
			);

			this.joblistingsview.el.classList.remove('activeCustom');
			this.joblistingexpandedview.el.classList.add('activeCustom');
			this.jobpostformview.el.classList.remove('activeCustom');
			this.registrationformview.el.classList.remove('activeCustom');	
		},
		page3: function(){

			if(!app.auth.isLoggedIn()){
				// alert that you need to be logged in, then navigate to ...
				window.location.hash = "#";
				return;
			}

			this.joblistingsview.el.classList.remove('activeCustom');
			this.joblistingexpandedview.el.classList.remove('activeCustom');
			this.jobpostformview.el.classList.add('activeCustom');
			this.registrationformview.el.classList.remove('activeCustom');			
			this.jobpostformview.render();
		},
		page4: function(){
			this.joblistingsview.el.classList.remove('activeCustom');
			this.joblistingexpandedview.el.classList.remove('activeCustom');
			this.jobpostformview.el.classList.remove('activeCustom');
			this.registrationformview.el.classList.add('activeCustom');			
			this.registrationformview.render();
		},
		page5: function(){
			this.joblistingsview.el.classList.add('activeCustom');
			this.joblistingexpandedview.el.classList.remove('activeCustom');
			this.jobpostformview.el.classList.remove('activeCustom');
			this.registrationformview.el.classList.remove('activeCustom');			
		},
		initialize: function(){
			// app view
			this.appview = new app.AppView();

			// this.users = new app.Users();
			// this.user = new app.User();

			// data
			this.joblistings = new app.JobListings()

			// this.joblistings.add([
			// 	{ jobTitle: "Developer", type: "full-time" },
			// 	{ jobTitle: "Developer", type: "part-time" },
			// 	{ jobTitle: "Developer", type: "full-time" },
			// 	{ jobTitle: "Developer", type: "contract" },
			// 	{ jobTitle: "Developer", type: "full-time" },
			// 	{ jobTitle: "Developer", type: "full-time" }
			// ]);

			// this.
			// console.dir(this.joblistings)

			// append a JobListingsView only ONCE
			this.joblistingsview = new app.JobListingsView({
				collection: this.joblistings
			});
			this.appview.$el.find(".container").append(this.joblistingsview.el);

			// append a JobListingExpandedView
			this.joblistingexpandedview = new app.JobListingExpandedView();
			this.appview.$el.find(".container").append(this.joblistingexpandedview.el);

			// append a JobPostFormView
			this.jobpostformview = new app.JobPostFormView({collection: this.joblistings});
			this.appview.$el.find(".container").append(this.jobpostformview.el);

			// append a RegistrationFormView
			this.registrationformview = new app.RegistrationFormView({collection: this.joblistings});
			// this.registrationformview = new app.RegistrationFormView({model: this.user});
			this.appview.$el.find(".container").append(this.registrationformview.el);

			Backbone.history.start();
		}
	});

	app.JobBoardRouter = JobBoardRouter;

})(window, undefined);