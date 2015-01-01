'use strict';
var Keen = require('keen.io');

module.exports = /*@ngInject*/
  function fooController($scope, $http, $timeout) {
  	var professionals = null;
    var ratedProfessionals = {count:0};
  	// todo : move this in a service
  	var keenClient = Keen.configure({
  		projectId : '549f3c95d2eaaa02da157052',
  		writeKey : '4aafd774120ea18ea0b8522458b590384916fa73a164f41d7bcc4496ad48965fceff0c7e331f7af3cf059f9341df2566a07acd4a804ebc612c13cda8ef8b7681fe87db390a6a05e3ef0e8655dd83a810b2bfea073681cff011c18f805a63548b9da0b5c8b821b11020de6aa1a93eee0c',
  		readKey : '9222548f081068ff4fdc103eb1be1279ca4cd679093f92db2ffabe5daf9d93ece5e0ca8f82bdba5a3d75dcd74cb3c7944724e954d31dd3bd4930aa932011c2d2fd11e749f44d71456f4b68ea36316b90f0a07137a4dded3ee83136cb161538d9d87baaa4aaab21be7b50e952bb73857b'
  	});
    
    $scope.currentStats = {
      average: 0,
      visible: false
    };
    $scope.currentAverage = 0;
    $scope.NUMBER_IN_CURRENT_STATS = 10;
    $scope.currentRatedProfessional = null;

  	function getNextProfesionnal(){
  		var professionnalIndex = Math.floor(Math.random() * professionals.length);
        var professional = professionals[professionnalIndex];
        while(ratedProfessionals[professional.ID] && ratedProfessionals.count < professional.length){
            if(professionnalIndex == professionals.length){
                professionnalIndex = 0;
            } else{
                professionnalIndex++
            }
            professional = professionals[professionnalIndex];
        }
        $scope.currentRatedProfessional = professionals[professionnalIndex];
  	}

    function updateCurrentAverage(rating){
      var numberOfCurrentRated = ratedProfessionals.count % $scope.NUMBER_IN_CURRENT_STATS; 
      $scope.currentStats.average = (($scope.currentStats.average * numberOfCurrentRated) + rating) / (numberOfCurrentRated + 1);
    }

    function addToRated(ID, rating){
      updateCurrentAverage(rating);
      ratedProfessionals[ID] = rating;
      ratedProfessionals.count++;
    }

    function displayStats(){
      $scope.currentStats.visible = true;
      angular.element('#stats').removeClass('fadeOutDown');
      angular.element('#stats').addClass('animated fadeInDown');
    }

    function displayNextProfessional(delay){
      $timeout(function(){
        getNextProfesionnal();
        angular.element('#professional').addClass('animated fadeInDown'); 
        angular.element('#professional').removeClass('fadeOutDown');
      }, delay || 1000);
    }

    function getNextView(){
      if (ratedProfessionals.count > 0 && ratedProfessionals.count % $scope.NUMBER_IN_CURRENT_STATS == 0) {
        displayStats();
      } else{
        displayNextProfessional();
      }
    }

    $scope.continue = function(){
      angular.element('#stats').removeClass('fadeInDown');
      angular.element('#stats').addClass('fadeOutDown');
      $timeout(function(){
        $scope.currentStats.visible = false;
        $scope.currentStats.average = 0;
      }, 1000);
      displayNextProfessional();
    };

  	$scope.rate = function(rating, event){
  		event.currentTarget.blur();
  		angular.element('#professional').addClass('animated fadeOutDown');
  		// keenClient.addEvent('rating', {professionalID: $scope.currentRatedProfessional.ID, rating:rating});
      addToRated($scope.currentRatedProfessional.ID, rating);
      getNextView()
  	};

  	$http.get('assets/data/professionals.json')
  	.success(function(data){
		professionals = data;
    // getNextProfesionnal()
    displayNextProfessional(1);
	});
  };
