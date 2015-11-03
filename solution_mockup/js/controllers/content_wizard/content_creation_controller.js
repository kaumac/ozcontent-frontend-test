'use strict';

angular.module('solutionPrototype').controller('ContentWizardContentCreationController', function($scope, $rootScope, $state, FIREBASE_URL, CommentsService) {
	var firepadRef = new Firebase(FIREBASE_URL + 'editor/');
  var codeMirror = CodeMirror(document.getElementById('firepad'), { lineWrapping: true, scrollbarStyle: 'null' });
  var firepad = Firepad.fromCodeMirror(firepadRef, codeMirror,
    {
    	richTextShortcuts: true,
    	richTextToolbar: true,
    	defaultText: 'Hello, World!'
    }
  );

  $scope.commentsSidebarVisible = false;
  $scope.toggle_sidebar = function() {
  	$scope.commentsSidebarVisible = !$scope.commentsSidebarVisible;
  }

  $scope.newCommentModalVisible = false;
  $scope.toggle_new_comment_modal = function() {
  	$scope.newCommentModalVisible = !$scope.newCommentModalVisible;
  }

  $scope.submit_comment = function() {
  	var currentSelection = codeMirror.getCursor();
  	var positions = {line: currentSelection.line, ch: currentSelection.ch};
  	CommentsService.create_comment($scope.newCommentModel, positions).then(function(commentId) {
  		console.log(commentId);
  	})
  }

  CommentsService.get_comments().then(function(articleComments) {
  	$scope.articleComments = articleComments;
  // 	$scope.articleComments.$watch(function(event) {
		// });
  });

  $scope.highlight_text = function(positions) {
  	codeMirror.markText(positions, {line: positions.line, ch: positions.ch + 10}, {
		  className: "magic-text",
		  inclusiveLeft: true,
		  atomic: true
		});
  }
});