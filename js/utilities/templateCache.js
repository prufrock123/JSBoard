	TemplateCache = {
		get: function(selector) {
			if (!this.templates) {
				this.templates = {};
			}

		    var template = this.templates[selector];
			if (!template) {
				var tmpl = $.get("./templates/" + selector + ".html").then(function(template){
							return $(template).html();
							});
				template = _.template(tmpl);
				this.templates[selector] = template;
	    		}
			return template;	
			}
	}
	
	var JobPostFormView = Backbone.View.extend({
		tagname: "div",
		className: "jobPostForm",
		template: "postJobForm",
		render: function(){
			var self = this;
			var template = TemplateCache.get(this.template);
			var html = template(this.model.toJSON());
			this.$el.html(html);
		},
		initialize: function(){
			
		}
	})