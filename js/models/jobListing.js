;(function(window,undefined){

	window.app = window.app || {};

	var JobListing = Backbone.Model.extend({
		validate: function(attrs){
			if(!attrs.jobTitle){
				return "JobListings must have a job title."
			}
		},
		initialize: function(){
		}
	})

	app.JobListing = JobListing;

})(window, undefined);