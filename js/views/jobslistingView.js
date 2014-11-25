;(function(window, undefined){
	window.app = window.app || {};

	var JobListingView = Backbone.View.extend({
		tagName: "div",
		className: "small-12 columns jobListing",
		template: "<h2>{jobTitle}</h2><h4>{type}</h4><p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
		initialize: function(){
			this.render();
		},
		render: function(){
			this.el.innerHTML = _.template(this.template, this.model.attributes);
		}
	});

	app.JobListingView = JobListingView;

})(window, undefined);