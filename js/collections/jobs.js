;(function(window, undefined){
	window.app = window.app || {};

	var JobListings = Backbone.Collection.extend({
		model: app.JobListing
	})

	app.JobListings = JobListings;

})(window, undefined);