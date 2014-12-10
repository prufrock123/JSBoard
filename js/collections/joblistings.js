// ;(function(window, undefined){
// 	window.app = window.app || {};

// 	var JobListings = Backbone.Collection.extend({
// 		model: app.JobListing
// 	})

// 	app.JobListings = JobListings;

// })(window, undefined);

;
(function(window, undefined) {
    window.app = window.app || {};

    var JobListings = Backbone.Firebase.Collection.extend({
        model: app.JobListing,
        url: 'https://jsjoboard.firebaseio.com/jobs',
        byType: function(jobType) {
        	// debugger;
            var filtered = this.filter(function(jobListing) {
                return jobListing.get("type") === jobType;
            });
            return filtered
        }

    });


app.JobListings = JobListings;

})(window, undefined);
