angular.module('solutionPrototype').factory('CommentsService', function(FIREBASE_URL, $q, $firebaseArray) {
  var firebase_reference = new Firebase(FIREBASE_URL);
  var comments_reference = firebase_reference.child('editor').child('comments');

  var CommentsService = {
    create_comment: function(comment, positions) {
      var deferred = $q.defer();

      $firebaseArray(comments_reference).$add({
        message: comment,
        user: 'guest',
        positions: positions
      }).then(function(comment_reference) {
        deferred.resolve(comment_reference.key());
      });
      return deferred.promise;
    },
    get_comments: function() {
      var deferred = $q.defer();
      deferred.resolve($firebaseArray(comments_reference));
      return deferred.promise;
    }
  };

  return CommentsService;
})