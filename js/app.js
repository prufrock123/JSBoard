
window.onload = app;

// runs when the DOM is loaded
function app(){
    "use strict";

    // load some scripts (uses promises :D)
    loader.load(
        {url: "./bower_components/jquery/dist/jquery.min.js"},
        {url: "./bower_components/lodash/dist/lodash.min.js"},
        {url: "./bower_components/backbone/backbone.js"},
        {url: "./bower_components/foundation/js/foundation.js"},
        {url: "./bower_components/foundation/js/foundation/foundation.offcanvas.js"},
        {url: "./js/collections/joblistings.js"},
        {url: "./js/models/jobListing.js"},
        {url: "./js/routers/jobboardRouter.js"},
        {url: "./js/views/appview.js"},
        {url: "./js/views/joblistingsView.js"},
        {url: "./js/views/joblistingView.js"},
        {url: "./dist/style.css"}
    ).then(function(){
        _.templateSettings.interpolate = /{([\s\S]+?)}/g;
        document.body.style.opacity = 1;
        $(document).foundation();


        var router = new app.JobBoardRouter();
        
    });

}
    
