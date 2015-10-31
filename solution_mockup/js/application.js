'use strict'
angular.module('solutionPrototype', ['ui.router', 'firebase'])

.constant('_', window._)
.constant('FIREBASE_URL', 'https://testozcontent.firebaseio.com/')

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  // =====================================================
  // Welcome views
  // =====================================================
  .state('contentWizard', {
    url: "/content_wizard",
    templateUrl: "templates/content_wizard/show.html",
    abstract: true
  })
    .state('contentWizard.discovery', {
      url: "/discovery",
      templateUrl: "templates/content_wizard/discovery/show.html",
      controller: "ContentWizardDiscoveryController",
      resolve: {
          topics: function(topicsService) {
              return topicsService.getTopics();
          }
      }
    })
    .state('contentWizard.deepDive', {
      url: "/deep_dive",
      templateUrl: "templates/content_wizard/deep_dive/show.html",
      controller: "ContentWizardDeepDiveController",
      resolve: {
        articles: function(articlesService) {
          return articlesService.getArticles();
        }
      }
    })

  // =====================================================
  // Router route fallback
  // =====================================================
  $urlRouterProvider.otherwise('/content_wizard/discovery');
})