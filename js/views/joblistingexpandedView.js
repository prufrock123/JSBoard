;(function(window, undefined){

	window.app = window.app || {};

	var JobListingExpandedView = Backbone.View.extend({
		tagname: "div",
		className: "row jobListingExpanded",
		template: "<div class='small-12 columns'><h1>{jobTitle}</h1><h4>{type}</h4><br><h4>About the company:</h4><p>{aboutUs}</p><h4>Job Description:</h4><p>{jobDescription}</p><hr/><h3>Email your application:</h3><a href='mailto:{email}?Subject=Hello'>{email}</a></div>",

		render: function(model){
			// this.el.innerHTML = this.template;
			this.el.innerHTML = _.template(this.template, model.attributes);
		},
		initialize: function(){
			this.render;
		}

	});

	app.JobListingExpandedView = JobListingExpandedView;
	
})(window, undefined);