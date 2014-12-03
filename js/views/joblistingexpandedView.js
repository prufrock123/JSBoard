;(function(window, undefined){

	window.app = window.app || {};

	var JobListingExpandedView = Backbone.View.extend({
		tagname: "div",
		className: "row jobListingExpanded",
		template: "<div class='small-12 columns'><h2>{jobTitle}</h2><h4>{type}</h4><p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>",
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