'use strict'

var app = angular.module('routingApp');

app.controller('peopleCtrl', function($scope, SwapiService){

$scope.$watch(function(){

return SwapiService.people;

}, function(currentPeople, oldPeople){

  $scope.people = currentPeople

})

// SwapiService.getPeople()
// .then(function(res){

// $scope.people = res.data.results
// }, function(err){
//   console.error(err)
// })

});

app.controller('personCtrl', function($scope, $state){

$scope.goToPerson = function(param) {
  $state.go('person', {
    personId: param
  });
}

  $scope.goHome = function(){

    $state.go('home');

  };

});