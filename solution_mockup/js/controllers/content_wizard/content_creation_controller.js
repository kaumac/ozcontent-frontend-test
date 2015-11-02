'use strict';

angular.module('solutionPrototype').controller('ContentWizardContentCreationController', function($scope, $rootScope, $state, FIREBASE_URL) {
	var firepadRef = new Firebase(FIREBASE_URL);
  var codeMirror = CodeMirror(document.getElementById('firepad'), { lineWrapping: true });
  var firepad = Firepad.fromCodeMirror(firepadRef, codeMirror,
    {
    	richTextShortcuts: true,
    	richTextToolbar: true,
    	defaultText: 'Hello, World!'
    }
  );
});