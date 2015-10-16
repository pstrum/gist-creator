require('../app.js');
require('./blogs.filter.js');

(function() {

  'use strict';

  angular.module('intellyApp').controller("BlogsCtrl", ["GistsService", "$anchorScroll", "$location", "$routeParams", "$log", function(GistsService, $anchorScroll, $location, $routeParams, $log) {

    var vm = this;

    // Initialize the controller
    initialize();

    vm.pagination = {
      currentPage: 0,
      perPage: 5,
      getOffset: function () {
        return vm.pagination.currentPage * vm.pagination.perPage;
      },
      prevPage: function () {
        vm.pagination.currentPage--;
        toBreadcrumbs();
      },
      nextPage: function () {
        vm.pagination.currentPage++;
        toBreadcrumbs();
      }
    };

    function initialize () {
      getgists();
    }

    function getgists () {
      // Run the get method from the GistsService service
      // Then (or success) send in a callback with the response (from promise)
      GistsService.get($routeParams.gist_id).then(successHandler, errorHandler);

      function successHandler(response) {
        // Store the data in the gists array
        // Set the property 'gists' (array) equal to an array of objects

        vm.gists = response.data;

        vm.status = response.status;

        $log.info("response", response);
        $log.info(vm.status);
      }

      function errorHandler(response) {
        $log.error("response", response);
      }
    }

    function deleteBlog (blog) {
      GistsService.delete(blog).then(function () {
        getBlogs();
      });
    }

    function toBreadcrumbs () {
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash('blog-scroll');

      // call $anchorScroll()
      $anchorScroll();
    }

  }]);
}());
