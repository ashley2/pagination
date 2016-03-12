'use strict'

var app = angular.module('routingApp', ['ui.router']);

// app.run(function(){
//   console.log('app.run')
// });

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('home', { url: '/', templateUrl: '/html/home.html'})
  .state('person', { url: '/person', templateUrl: 'html/person.html',controller: 'personCtrl'})
  .state('people',{ url: '/people',templateUrl: '/html/people.html', controller: 'peopleCtrl'})


  $urlRouterProvider.otherwise('/');

});

  app.run(function(SwapiService){
    SwapiService.getPeople();
  })