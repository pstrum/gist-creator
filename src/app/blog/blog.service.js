require('../app.js');

// Organize and share code
(function () {

  "use strict";

  // Name the service and specify the $http service as a dependency -- inject it to use it
  angular.module("intellyApp").service("GistsService", ["$http", "mytoken", function ($http, mytoken) {
    // Declare urlRoot
    var urlRoot = "https://api.github.com/";
    var username = "petemaverickmitchell";

    // Declare gist object with 4 methods
    var Gist = {
      // Get function with  gist ID as argument
      // Function will return a promise
      get: function (id) {
        // Determine if a reference (gist ID) is defined
        if (angular.isDefined(id)) {
          // Send in the URL with ID to the get method
          return $http.get(urlRoot + "gists/" + id, {
            headers: {"Authorization": "token " + mytoken}
          });
        } else {
          // Send in the base URL
          // return $http.get(urlRoot + "/users/jedfoster/gists");
          return $http.get(urlRoot + "users/" + username + "/gists", {
            headers: {"Authorization": "token " + mytoken}
          });
        }
      },

      update: function (model) {
        return $http.patch(urlRoot + "gists/" + model.id, model, {
            headers: {"Authorization": "token " + mytoken}
        });
      },
      create: function (model) {
        return $http.post(urlRoot + "gists", model, {
          headers: {"Authorization": "token " + mytoken}
        });
      },
      delete: function (id) {
        return $http.delete(urlRoot + "gists/" + id, {
          headers: {"Authorization": "token " + mytoken}
        });
      }
    };
    // Service must return the object
    return Gist;
  }]);
}());
