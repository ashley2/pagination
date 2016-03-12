'use strict'

var app = angular.module('routingApp');

app.service('SwapiService', function($http){

 this.people = [] // array of obj of all the people

 this.getPeople = () => {
  for(var i = 1; i <= 87; i++ ){

   $http.get(`http://swapi.co/api/people/${i}`)
   .then(res => {

    this.people.push(res.data) 

  }, err  => {
    console.error('SwapiService error', err)
  })
 }
}
})
