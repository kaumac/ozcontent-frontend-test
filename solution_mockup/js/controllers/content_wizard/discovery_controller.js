'use strict';

angular.module('solutionPrototype').controller('ContentWizardDiscoveryController', function($scope, $rootScope, $state, topics) {
	$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){ 
  	// $rootScope.$broadcast('wizard_step_changed', {
  	// 	current: 'discovery',
  	// 	previous
  	// });
  });

  $scope.topics = topics;

  $scope.select_topic = function() {
  	$state.go('contentWizard.deepDive');
  }
});