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
			alert('3 ou mais');
		}
	});

	$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){ 
  	$rootScope.$broadcast('wizard_step_changed', 'deep_dive');
  });
});