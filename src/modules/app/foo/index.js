'use strict';

module.exports =
  angular.module('zuluapp.foo', [])
  .config(function ($stateProvider) {
    $stateProvider
    .state('rate', {
      url: '/rate',
      templateUrl: 'app/foo/layout.html',
      controller: 'rateController'
    })
    .state('home', {
      url: '',
      templateUrl: 'app/foo/home.html',
      controller: 'homeController'
    });
  })
  .controller('rateController', require('./rateController'))
  .controller('homeController', require('./homeController'));
