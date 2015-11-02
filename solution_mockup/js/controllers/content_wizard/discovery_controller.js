'use strict';

angular.module('solutionPrototype').controller('ContentWizardDiscoveryController', function($scope, $rootScope, $state, topics) {
  $scope.topics = topics;

  $scope.select_topic = function() {
  	$state.go('contentWizard.deepDive');
  }
});