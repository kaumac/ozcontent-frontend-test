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
});