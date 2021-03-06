
window.onload = app;

// runs when the DOM is loaded
function app(){
    "use strict";

    // load some scripts (uses promises :D)
    loader.load(

        // Styles
        {url: "./bower_components/normalize.css/normalize.css"},
        {url: "./bower_components/typeplate-starter-kit/css/typeplate.css"},
        {url: "./dist/style.css"},
        {url: "./dist/foundation-icons/foundation-icons.css"},
        // {url: '//fonts.googleapis.com/css?family=Poiret+One'},

        // Dependencies
        {url: "./bower_components/jquery/dist/jquery.min.js"},
        {url: "./bower_components/lodash/dist/lodash.min.js"},
        {url: "./bower_components/backbone/backbone.js"},
        {url: "./bower_components/backbonefire/dist/backbonefire.js"},
        {url: "./bower_components/firebase/firebase.js"},

        // Models
        {url: "./js/models/jobListing.js"},
        // {url: "./js/models/user.js"},

        // Collections
        {url: "./js/collections/joblistings.js"},
        // {url: "./js/collections/users.js"},

        // Routers
        {url: "./js/routers/jobboardRouter.js"},

        // Views
        {url: "./js/views/appview.js"},
        {url: "./js/views/joblistingsView.js"},
        {url: "./js/views/joblistingView.js"},
        {url: "./js/views/joblistingexpandedView.js"},
        {url: "./js/views/jobpostformView.js"},
        {url: "./js/views/registrationformView.js"},
        {url: "./js/views/profileView.js"},

        // Templates
        {url: "./templates/jobPostForm.html"},
        // {url: ""},

        // Utilities
        {url: "//checkout.stripe.com/checkout.js"},
        {url: "./js/stripeCheckout.js"},
        {url: "./js/utilities/Auth.js"},

        // foundation js
        {url: "./bower_components/foundation/js/foundation.js"},
        {url: "./bower_components/foundation/js/foundation/foundation.offcanvas.js"}
        // {url: "./css/foundation-icons.css"}
    ).then(function(){

        _.templateSettings.interpolate = /{([\s\S]+?)}/g;
        document.body.style.opacity = 1;
        $(document).foundation();
        var router = new app.JobBoardRouter();

        // login/logout stuff
        
        
    });

}
    
