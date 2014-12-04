;(function(window, undefined){

	window.app = window.app || {};


	var JobPostFormView = Backbone.View.extend({
		tagname: "div",
		className: "jobPostForm",
		template: "jobPostForm",
		render: function(){
			var self = this;
			$.get("./templates/" + this.template + ".html").then(function(templateString){
				self.el.innerHTML = templateString;
			})
		},
		events: {
			"submit form": "addJob"
		},
		addJob: function(event){
			event.preventDefault();
			// debugger;
			var arr = this.$el.find('input').serializeArray();
			var obj = this.createObject(arr)

			this.collection.create(obj);
		},
		createObject: function(array){
			var object = {};
			for (var i=0; i<array.length; i++){
				object[array[i].name] = array[i].value
			};
			return object;
		},
		initialize: function(){
		}
	})

	app.JobPostFormView = JobPostFormView;

})(window, undefined);