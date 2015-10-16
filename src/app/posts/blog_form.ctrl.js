require('../app.js');

(function () {

  "use strict";


  // on initialize check to see if there is an id in the url


  angular.module("intellyApp").controller("BlogFormCtrl", ["GistsService", "$routeParams", "$location", "$http", "$log", function (GistsService, $routeParams, $location, $http, $log) {

    var vm = this;

    var urlRoot = "/api/blog-post";

    vm.save = submitForm;

    vm.gist = {};
    vm.gist.files = {};

    vm.delete = deleteBlog;

    initialize();

    function initialize() {

      if ($routeParams.gist_id) {
        GistsService.get($routeParams.gist_id).then(successHandler, errorHandler);
      } else {
        vm.gistFilename = Object.keys(vm.gist.files)[0];
      }

      function successHandler(response) {

        vm.gist = response.data;
        vm.gistFilename = Object.keys(vm.gist.files)[0];

        $log.info("response", response);
      }

      function errorHandler(response) {
        $log.error("response", response);
      }
    }

    function getgists () {
      // Run the get method from the GistsService service
      // Then (or success) send in a callback with the response (from promise)
      GistsService.get($routeParams.gist_id).then(successHandler, errorHandler);

      function successHandler(response) {
        // Store the data in the gists array
        // Set the property 'gists' (array) equal to an array of objects

        vm.gists = response.data;

        $log.info("response", response);
      }

      function errorHandler(response) {
        $log.error("response", response);
      }
    }

    function submitForm () {

      var method;

      method = $routeParams.gist_id ? "update" : "create";

      // Pass in the vm.gist object, which is the data param for the POST method
      GistsService[method](vm.gist).then(successHandler, errorHandler);

      function successHandler (response) {
        $location.path("/gists/" + response.data.id);
        $log.info("response", response.data.id);
      }

      function errorHandler(response) {
        $log.error("response", response);
      }
    }

    function deleteBlog (gist_id) {
      GistsService.delete(gist_id).then(successHandler, errorHandler);

      function successHandler(response) {
        $log.info("response", response);
        $location.path("/gists/");
      }

      function errorHandler(response) {
        $log.error("response", response);
      }
    }
  }]);
}());
