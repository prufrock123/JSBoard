;(function(window, undefined){

	window.app = window.app || {};

	var JobListingsView = Backbone.View.extend({
		tagname: "div",
		id: "container",
		className: "jobListings",
		template: "subNav",
		// el: document.querySelector("#container"),
		// className: "jobListings",
		render: function(){
			var self = this;
			// debugger;
			this.el.innerHTML = "";
			// console.dir(this.collection);
			$.get("./templates/" + this.template + ".html").then(function(templateString){
				self.el.innerHTML = templateString
			}).done(function(){
				self.collection.forEach(function(model){
					var subview = new app.JobListingView({model: model});
					self.$el.append(subview.el);
				})
			})

		},
		renderFiltered: function(filtered){
			var self = this;
			this.el.innerHTML = "";
			// console.dir(this.collection);
			$.get("./templates/" + this.template + ".html").then(function(templateString){
				self.el.innerHTML = templateString
			}).done(function(){
				filtered.forEach(function(model){
					var subview = new app.JobListingView({model: model});
					self.$el.append(subview.el);
				})
			})
		},
		events: {
			"click .sub-nav a": "filter"
		},
		filter: function(event){
			// debugger;
			// event.preventDefault();
			var filteredCollection = this.collection.byType(event.target.id)
			this.renderFiltered(filteredCollection);
		},
		initialize: function(){
			this.listenTo(this.collection, "sync", this.render)
		}
	});

	app.JobListingsView = JobListingsView;

})(window, undefined);