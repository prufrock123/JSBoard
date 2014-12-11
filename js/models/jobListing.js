;(function(window,undefined){

	window.app = window.app || {};

	var JobListing = Backbone.Model.extend({
		defaults: {
			"jobTitle": "Not given",
			"type": "Not given",
			"aboutUs": "Not given",
			"email": "Not given"
		},
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