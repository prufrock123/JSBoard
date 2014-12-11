;
(function(window, undefined) {

    window.app = window.app || {};


    var JobPostFormView = Backbone.View.extend({
        tagname: "div",
        className: "jobPostForm",
        template: "jobPostForm",
        render: function() {
            var self = this;
            $.get("./templates/" + this.template + ".html").then(function(templateString) {
                    self.el.innerHTML = templateString;
                })
                // debugger;
        },
        events: {
            // "click #jobPostSubmit": "addJob",
            "submit form": "processPayment"
        },
        processPayment: function(event) {
        	event.preventDefault();
            var h = this.handler()

            h.open({
                name: 'Demo Site',
                description: '2 widgets ($20.00)',
                amount: 2000
            });
        },
        handler: function() {
            return StripeCheckout.configure({
                key: 'pk_test_cS222704wqEfzHQpnhWvoiOE',
                // image: '/128x128.png',
                token: function(token) {
                    console.log(token)
                    console.log(token.id)
                    var chargesRef = new Firebase("https://jsjoboard.firebaseio.com/charges");
                    chargesRef.push({
                        amount: 2000,
                        currency: "usd",
                        card: token.id,
                    });
                }
            })
        },
        addJob: function(event) {
            event.preventDefault();
            var self = this;
            // debugger;
            var arr = this.$el.find('input').serializeArray();
            var obj = this.createObject(arr)
                // debugger;
            var status = app.auth.onAuth;

            status.done(function(authData) {
                obj.uid = authData.uid;
            });

            this.collection.create(obj)

            window.location.hash = "#";

        },
        createObject: function(array) {
            var object = {};
            for (var i = 0; i < array.length; i++) {
                object[array[i].name] = array[i].value
            };
            return object;
        },
        initialize: function() {}
    })

    app.JobPostFormView = JobPostFormView;

})(window, undefined);
