'use strict'

var app = angular.module('routingApp');

app.service('SwapiService', function($http){

  // this.people = [] 

  this.getPeople = () => {
   $http.get('http://swapi.co/api/people')
   .then(res => {


    //SwapiService.people
    this.people = res.data.results
  }, err  => {
    console.error('SwapiService error', err)
  })
 }

//in some controller
// $scope.people = SwapiService.people

})