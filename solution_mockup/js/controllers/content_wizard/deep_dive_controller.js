'use strict';

angular.module('solutionPrototype').controller('ContentWizardDeepDiveController', function($scope, $rootScope, $state) {
	$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){ 
  	$rootScope.$broadcast('wizard_step_changed', 'deep_dive');
  });
});