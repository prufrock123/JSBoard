;
(function(window, undefined) {

    window.app = window.app || {};

    var JobListingsView = Backbone.View.extend({
        tagname: "div",
        id: "container",
        className: "jobListings",
        template: "subNav",
        // el: document.querySelector("#container"),
        // className: "jobListings",
        render: function() {
            var self = this;
            $.get("./templates/" + this.template + ".html").then(function(templateString) {
                self.el.innerHTML = templateString
            }).done(function() {
                self.collection.forEach(function(model) {
                    var subview = new app.JobListingView({
                        model: model
                    });
                    self.$el.append(subview.el);
                })
            })

        },
        renderFiltered: function(filtered) {
            var self = this;
            $.get("./templates/" + this.template + ".html").then(function(templateString) {
                self.el.innerHTML = templateString
            }).done(function() {
                filtered.forEach(function(model) {
                    var subview = new app.JobListingView({
                        model: model
                    });
                    self.$el.append(subview.el);
                })
            })
        },
        events: {
            "click .sub-nav a": "filter"
        },
        filter: function(event) {
            // event.preventDefault();
            if(event.target.id){
	            var filteredCollection = this.collection.byType(event.target.id)
	            this.renderFiltered(filteredCollection);
	        } else {
	        	this.render();
	        }
        },
        // filterProfile: function(authData){
        // 	var filteredCollection = this.collection.byUid(authData.uid)
        // 	this.renderFiltered(filteredCollection);
        // },
        initialize: function(options) {
            this.listenTo(this.collection, "sync", this.render)
        }
    });

    app.JobListingsView = JobListingsView;

})(window, undefined);
