require('angular');
// require('ng-showdown');
require('angular-route');

(function() {

  "use strict";

  // Declare variable app, which equals a new AngularJS module
  // with the name 'intelly'. ngRoute is a dependency used for
  // routing and deeplinking services
  var app = angular.module('intellyApp', ['ngRoute', 'intellyApp.config']);

  // $routeProvider is a provider in the ngRoute module
  // used for configuring routes.
  // App routes are declared with $routeProvider.
  app.config(["$routeProvider", function($routeProvider) {
      // The $location service parses the URL in the browser address bar (based on the window.location) and makes the URL available to your application
      // This method is getter / setter.

      // Return path of current url
      // Add a new route definition to the $route service.
      // The route path (/blog-post) is (matched against $location.path)
      // which is a getter/setter that parses the address bar url
      // and makes it available to our app
      $routeProvider.when('/gists', {
        // This is the route object:
        templateUrl: "views/blog/blog-post.html",
        controller: "BlogsCtrl as vm"
      }).
      when('/gists/new', {
        templateUrl: "views/posts/blog-post-form.html",
        controller: "BlogFormCtrl as vm",
      }).
      when('/gists/:gist_id', {
        templateUrl: "views/posts/blog-post-detail.html",
        controller: "BlogCtrl as vm"
      }).
       when('/gists/:gist_id/edit', {
        templateUrl: "views/posts/blog-post-form.html",
        controller: "BlogFormCtrl as vm"
      }).
       when('/gists/:gist_id/destroy', {
        templateUrl: "views/posts/blog-post-detail.html",
        controller: "BlogFormCtrl as vm"
      }).
       otherwise({
        redirectTo: "/gists"
      });
    }]);
})();
