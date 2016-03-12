'use strict'

var app = angular.module('routingApp');

 

app.controller('peopleCtrl', function($scope, SwapiService, $stateParams, $state){
  var currentPg = $stateParams.id || 1;

  $scope.$watch(function(){
    return SwapiService.people;
    console.log('hi')
  }, function(currentPeople, oldPeople){
    $scope.people = currentPeople.slice((currentPg-1)*20, currentPg*20)

  })

  $scope.goToPerson = function(index) {
    $state.go('person', {
      personId: index
    });
  }
});

app.controller('personCtrl', function($scope, $state, $stateParams, SwapiService){
var personId = $stateParams.personId  
$scope.person = SwapiService.people[personId]
console.log('$scope.person ' , $scope.person);


});