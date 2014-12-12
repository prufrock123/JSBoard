;(function(window, undefined){
	window.app = window.app || {};

	var JobListingView = Backbone.View.extend({
		tagName: "a",
		className: "row jobListing",
		template: "<div class='small-1 columns'><i class='fi-arrow-right size-36'></i></div><div class='small-11 columns'><h2>{jobTitle}</h2><h4>{type}</h4><p>{email}</p></div><hr/>",
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