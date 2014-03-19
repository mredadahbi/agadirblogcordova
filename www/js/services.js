angular.module('App.services', [])

.factory('agadirblogAPIservice', function($http) {

    var agadirblogAPI = {};

    agadirblogAPI.getCategories = function() {
      return $http({
        method: 'GET',
        url: 'http://localhost:3000/api/categories'
      });
    }

    return agadirblogAPI;
  });