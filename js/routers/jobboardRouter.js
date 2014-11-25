;(function(window, undefined){

	window.app = window.app || {};

	var JobBoardRouter = Backbone.Router.extend({
		routes: {
			"*default": "page1"
		},
		page1: function(){
			this.joblistingsview.render();
		},
		initialize: function(){
			// app view
			this.appview = new app.AppView();

			// data
			this.joblistings = new app.JobListings([
				{ jobTitle: "Developer", type: "full-time" },
				{ jobTitle: "Developer", type: "part-time" },
				{ jobTitle: "Developer", type: "full-time" },
				{ jobTitle: "Developer", type: "contract" },
				{ jobTitle: "Developer", type: "full-time" },
				{ jobTitle: "Developer", type: "full-time" }
			]);
			console.dir(this.joblistings)

			// append a JobListingsView only ONCE
			this.joblistingsview = new app.JobListingsView({
				collection: this.joblistings
			});
			this.appview.$el.find(".container").append(this.joblistingsview.el);

			Backbone.history.start();
		}
	});

	app.JobBoardRouter = JobBoardRouter;

})(window, undefined);