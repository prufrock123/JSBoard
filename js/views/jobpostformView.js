;(function(window, undefined){

	window.app = window.app || {};

	var JobPostFormView = Backbone.View.extend({
		tagname: "div",
		className: "jobPostForm",
		template: "postJobForm",
		render: function(){
			var self = this;
			var template = TemplateCache.get(this.template);
			var html = template(this.model.toJSON());
			this.$el.html(html);

			// $.get("./templates/" + this.template + ".html", function(template){
			// 	var html = $(template).html();
			// 	self.$el.html(html);
			// })
		},
		initialize: function(){
			
		}
	})

	app.JobPostFormView = JobPostFormView;

})(window, undefined);