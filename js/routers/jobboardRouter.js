;(function(window, undefined){

	window.app = window.app || {};

	var JobBoardRouter = Backbone.Router.extend({
		routes: {
			"post": "page3",
			"joblisting/:id": "page2",
			"*defaults": "page1"
		},
		page1: function(){
			// this.joblistingsview.render();

			this.joblistingexpandedview.el.classList.remove('active');
			this.joblistingsview.el.classList.add('active');
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

			this.joblistingsview.el.classList.remove('active');
			this.joblistingexpandedview.el.classList.add('active');
		},
		page3: function(){
			
			this.joblistingsview.el.classList.remove('active');
			this.joblistingexpandedview.el.classList.remove('active');
			this.jobpostformview.el.classList.add('active');			
			this.jobpostformview.render();
		},
		initialize: function(){
			// app view
			this.appview = new app.AppView();

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

			Backbone.history.start();
		}
	});

	app.JobBoardRouter = JobBoardRouter;

})(window, undefined);