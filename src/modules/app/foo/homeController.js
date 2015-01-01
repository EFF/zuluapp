'use strict';

module.exports = /*@ngInject*/
  function fooController($scope, $state, $timeout) {
    $scope.navigateToRate = function(){
      angular.element('.big-section').addClass('animated fadeOutDown');
      $timeout(function(){
        $state.go('rate');
      }, 600);
    };
  };
