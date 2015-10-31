'use strict';

angular.module('solutionPrototype').controller('ContentWizardSidebarController', function($scope, $rootScope) {
	$scope.wizard_steps = {
		'contentWizard.discovery': {
			'name': 'Discovery'
		},
		'contentWizard.deepDive': {
			'name': 'Deep dive'
		},
		'contentWizard.contentCreation': {
			'name': 'Content creation'
		},
		'contentWizard.publishDraft': {
			'name': 'Publish draft'
		}
	}

	$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){ 
		if(fromState.name) {
			$scope.wizard_steps[fromState.name].status = 'done';
		}
		$scope.wizard_steps[toState.name].status = 'current';
	})

	// var changeStep = function(step) {
	// 	$scope.wizard_steps[$scope.currentStep].status = 'done';
	// 	$scope.currentStep = step;
	// 	$scope.wizard_steps[step].status = 'current';
	// 	console.log($scope.wizard_steps);
	// }
  // $rootScope.$on('wizard_step_changed', function(event, step) {
  // 	changeStep(step);
  // });
});