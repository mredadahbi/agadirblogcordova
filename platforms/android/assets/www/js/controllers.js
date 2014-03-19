angular.module('App.controllers', [])


.controller('categoriesController', function($scope,agadirblogAPIservice) {

  console.log('--------');
  $scope.categories = [];


  agadirblogAPIservice.getCategories().success(function (response) {
        //Dig into the responde to get the relevant data
        console.log('--------');
        console.log(response);
        console.log('--------');
        $scope.categories = response;
    });

    console.log('--------');
});