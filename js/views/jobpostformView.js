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

            var self = this;
            var chargesRef = new Firebase("https://jsjoboard.firebaseio.com/charges");
            var h = this.handler()

            chargesRef.limitToLast(1).once("child_added", function(snapshot){
                chargesRef.limitToLast(1).once("child_changed", function(snapshot){
                    if(snapshot.err){
                        return
                    } else {
                        self.addJob()
                    }
                })
            })

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
                    // console.log(token)
                    // console.log(token.id)
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
            // event.preventDefault();
            var self = this;
            // debugger;
            // var arr = this.$el.find('input').serializeArray();
            // var obj = this.createObject(arr)
            var obj = this.createObject()
                // debugger;
            var status = app.auth.onAuth;

            status.done(function(authData) {
                obj.uid = authData.uid;
            });

            this.collection.create(obj)

            window.location.hash = "#";

        },
        // createObject: function(array) {
        //     var object = {};
        //     for (var i = 0; i < array.length; i++) {
        //         object[array[i].name] = array[i].value
        //     };
        //     return object;
        // },
        createObject: function() {
            var input = {};
            // debugger;
            this.$el.find(':input').each(function() {
                // debugger;
                if(this.id==="customButton"){
                    return;
                } else {
                    input[this.name] = this.value;
                };
            })
            return input;
        },
        initialize: function() {
        }
    })

    app.JobPostFormView = JobPostFormView;

})(window, undefined);
