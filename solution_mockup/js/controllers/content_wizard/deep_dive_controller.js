'use strict';

angular.module('solutionPrototype').controller('ContentWizardDeepDiveController', function($scope, $rootScope, $state, articles) {
	$scope.articles = articles;
	$scope.selectedArticles = {};

	$scope.add_article = function(article_id) {
		$scope.selectedArticles[article_id] = true;
		$scope.$emit('articleSelected', article_id);
	}

	$scope.remove_article = function(article_id) {
		delete $scope.selectedArticles[article_id];
		$scope.$emit('articleRemoved', article_id);
	}
	
	$scope.$on('articleSelected', function() {
		var selectedArticlesCount = Object.keys($scope.selectedArticles).length;
		if(selectedArticlesCount >= 3) {
			var goToCreation = confirm('3 or more articles selected, it should trigger the fixed header with continue button and show a modal asking the user if he wants to go to content creation.\nWill work on this later =P.\nFor now just press "OK" to go to content creation =)');
			if (goToCreation == true) {
		    $state.go('contentWizard.contentCreation');
			} else {
				alert('This is not the button you are looking for! (Star wars?)\nTry again, not a lot of options here, just press "OK" next time =)');
				$scope.selectedArticles = {};
			}
		}
	});

	$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){ 
  	$rootScope.$broadcast('wizard_step_changed', 'deep_dive');
  });
});