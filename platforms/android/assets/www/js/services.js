angular.module('App.services', [])

.factory('agadirblogAPIservice', function($http) {

    var agadirblogAPI = {};

    agadirblogAPI.getCategories = function() {
      return $http({
        method: 'GET',
        url: 'http://5c2d4922.ngrok.com/api/categories'
      });
    }

    return agadirblogAPI;
  });