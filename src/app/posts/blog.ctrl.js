require('../app.js');

(function () {

  "use strict";

  angular.module("intellyApp").controller("BlogCtrl", ["GistsService", "$routeParams", "$log", function (GistsService, $routeParams, $log, $showdown) {

    var vm = this;

    initialize();

    function initialize() {
      /*** Retrieve the current set of route parameters ***/
      // Determine if the route parameters is defined by
      // using $location service to parse the url and return object
      GistsService.get($routeParams.gist_id).then(successHandler, errorHandler);

      function successHandler(response) {
        // Route parameters are defined, $location service parses the url - return as object
        // Set vm.gist equal to the object returned
        vm.gist = response.data;

        $log.info("response", response);
      }

      function errorHandler(response) {
        $log.error("response", response);
      }
    }
  }]);
}());
