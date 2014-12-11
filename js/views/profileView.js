;(function(window, undefined){

	window.app = window.app || {};

	var ProfileView = Backbone.View.extend({
		tagname: "div",
		// id: "container",
		className: "profileView",
		render: function(){
			var self = this;

			var status = app.auth.onAuth;	
			status.done(function(authData){
				self.filterProfile(authData)
			});
	
			// this.collection.forEach(function(model){
			// 	var subview = new app.JobListingView({model: model});
			// 	self.$el.append(subview.el);
			// })
			// 	})
			// } else {	

			// }

		},
		renderFiltered: function(filtered){
			var self = this;
			this.el.innerHTML = "";
	
			filtered.forEach(function(model){
				var subview = new app.JobListingView({model: model});
				self.$el.append(subview.el);
				// debugger;	
				subview.$el.addClass('activeCustom');
			})
		},
		filterProfile: function(authData){
			var filteredCollection = this.collection.byUid(authData.uid)
			this.renderFiltered(filteredCollection);
		},
		initialize: function(){
			this.listenTo(this.collection, "sync", this.render)
		}
	});

	app.ProfileView = ProfileView;

})(window, undefined);