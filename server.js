/**
 * Module dependencies.
 */

function startServer() {
    var express = require('express'),
        http = require('http'),
        path = require('path'),
        app = express(),
        methodOverride = require('method-override'),
        request = require('request'),
        Firebase = require('firebase'),
        _ = require('lodash');

    /*-----------------------*/
    /**
     * LOAD STRIPE STUFF
     */
    // var chargesRef = new Firebase("https://jsjoboard.firebaseio.com/charges");
    var chargesRef = "https://jsjoboard.firebaseio.com/charges";

    // Load Stripe keys
    var stripeData = {
        stripeKey: process.env.stripeKey
    };
    if(!stripeData.stripeKey){
        stripeData = require("./stuff.js").data;
    };

    var stripeFire = require("./node_modules/stripe-fire")(stripeData.stripeKey)
    // var charges = stripeFire.charges(chargesRef);
    // console.log(chargesRef)
    stripeFire.charges(chargesRef);
    // var charges = stripeFire.charges(chargesRef, function(err, charge) {
    //     // Called after a create/update charge request is sent to Stripe
    //     console.log(charge);
    //     console.log(err);
    // });

    /*-----------------------*/

    function querify(queryParamsObject){
        return '?'+_.map(queryParamsObject || {}, function(val, key){
            return key+'='+val
        }).join('&');
    }

    // adds a new rule to proxy a localUrl -> webUrl
    // i.e. proxify ('/my/server/google', 'http://google.com/')
    function proxify(localUrl, webUrl){
        app.get(localUrl, function(req, res) {
            var url = [
                webUrl,
                querify(req.query)
            ].join("");

            req.pipe(request(url)).pipe(res);
        });
    }

    // add your proxies here.
    //
    // examples:
    // proxify('/yummly/recipes', 'http://api.yummly.com/v1/api/recipes');
    // proxify('/brewery/styles', 'https://api.brewerydb.com/v2/styles');

    // all environments
    app.set('port', process.argv[3] || process.env.PORT || 3000);
    app.use(methodOverride());
    app.use(express.static(path.join(__dirname, '')));

    http.createServer(app).listen(app.get('port'), function() {
        console.log('Express server listening on port ' + app.get('port'));
    });
}

module.exports.startServer = startServer;