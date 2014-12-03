;(function(window, undefined){

	window.app = window.app || {};

	var JobPostFormView = Backbone.View.extend({
		tagname: "div",
		className: "jobPostForm",
		template: "jobPostForm",
		render: function(){
			var self = this;
			$.get("./templates/" + this.template + ".html").then(function(template){
				var html = $(template).html();
				self.$el.html(html);
			})
		},
		initialize: function(){
			
		}
	})

	app.JobPostFormView = JobPostFormView;

})(window, undefined);