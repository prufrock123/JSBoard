;(function(window, undefined){

	window.app = window.app || {};

	var JobListingsView = Backbone.View.extend({
		tagname: "div",
		className: "jobListings",
		render: function(collection){
			this.collection = collection;

			var self = this;
			this.collection.forEach(function(model){
				var subview = new app.JobListingView({model: model});
				self.$el.append(subview.el);
			})
		},
		events: {
			"click .fullTime": "filterFullTime"
		},
		filterFullTime: function(event){
			event.preventDefault();
			var fullTimeJobs = this.collection.where({type: "full-time"});
			this.render(fullTimeJobs);
		},
		initialize: function(){
		}
	});

	app.JobListingsView = JobListingsView;

})(window, undefined);