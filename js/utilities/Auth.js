;(function(window, undefined) {

    window.app = window.app || app;

    function Auth(firebaseUrl) {
        this.ref = new Firebase(firebaseUrl || "https://jsjoboard.firebaseio.com/");
        var self = this;

        this.onAuth = $.Deferred();
        this.ref.onAuth(function(authData) {
            if (authData) {
                self.onAuth.resolve(authData);
                self.authData = authData;
            } else {
                self.onAuth.reject("Not logged in.");
                self.authData = null;
            }
        })
    }

    Auth.prototype = {
        createUser: function(data) {

            var promise = $.Deferred();

            this.ref.createUser({
                email: data.email,
                password: data.password
            }, function(error) {
                if (error) {
                    promise.reject(error);
                } else {
                    promise.resolve();
                }
            })

            return promise;
        },
        login: function(data) {
        	var promise = $.Deferred();
            this.ref.authWithPassword({
            	email: data.email,
            	password: data.password
            }, function(error, authData) {
                if (error) {
                    promise.reject(error);
                } else {
                    promise.resolve(authData);
                }
            })
            return promise;
        },
        isLoggedIn: function() {
        	return !!this.authData;
        }
    }

    app.Auth = Auth;
    app.auth = new Auth();

})(window, undefined)
