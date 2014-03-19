angular.module('App.controllers', [])


.controller('categoriesController', function($scope,agadirblogAPIservice) {

  $scope.nameFilter = '';
  $scope.categories = [];
  $scope.methode = function(){
    //$scope.nameFilter =  '' ;
  };
  console.log($scope.nameFilter);

  agadirblogAPIservice.getCategories().success(function (response) {
        //Dig into the responde to get the relevant data
        console.log(response);
        $scope.categories = response;
    });
})

.controller('loginController', function($scope,UserService) {





});
