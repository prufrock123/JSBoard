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
			// debugger;
		},
		events: {
			"click #jobPostSubmit": "addJob"
		},
		processPayment: {
			
		},
		addJob: function(event){
			event.preventDefault();
			var self = this;
			// debugger;
			var arr = this.$el.find('input').serializeArray();
			var obj = this.createObject(arr)

			var status = app.auth.onAuth;

			status.done(function(authData){
				obj.uid = authData.uid;
			});



			this.collection.create(obj)

			
				window.location.hash = "#";
			
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