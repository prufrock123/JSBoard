;(function(window, undefined){
	window.app = window.app || {};

	var JobListingView = Backbone.View.extend({
		tagName: "a",
		className: "row jobListing",
		template: "<div class='small-12 columns'><h2>{jobTitle}</h2><h4>{type}</h4><p>consectetur adipiscing elit et dolore magna aliqua.</p></div>",
		initialize: function(){
			this.render();
		},
		render: function(){
			this.el.setAttribute('href', "#joblisting/"+this.model.cid);
			this.el.innerHTML = _.template(this.template, this.model.attributes);
		}
	});

	app.JobListingView = JobListingView;

})(window, undefined);