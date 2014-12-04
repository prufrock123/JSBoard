// ;(function(window, undefined){
// 	window.app = window.app || {};

// 	var JobListings = Backbone.Collection.extend({
// 		model: app.JobListing
// 	})

// 	app.JobListings = JobListings;

// })(window, undefined);

;(function(window, undefined){
	window.app = window.app || {};

	var JobListings = Backbone.Firebase.Collection.extend({
		model: app.JobListing,
		url: 'https://jsjoboard.firebaseio.com/'
	})

	app.JobListings = JobListings;

})(window, undefined);