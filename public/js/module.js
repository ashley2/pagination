'use strict'

var app = angular.module('routingApp', ['ui.router']);


app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('home', {
   url: '/',
   templateUrl: '/html/home.html'
 })
  .state('person',{ 
    url: '/person/:personId',
    templateUrl: 'html/person.html',
    controller: 'personCtrl'
  })
  .state('people',{
   url: '/people/:id',
   templateUrl: '/html/people.html', 
   controller: 'peopleCtrl'

 })


  $urlRouterProvider.otherwise('/');

});

app.run(function(SwapiService){
  SwapiService.getPeople();
})