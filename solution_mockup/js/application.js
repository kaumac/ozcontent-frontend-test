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

  // // =====================================================
  // // Select hotel view
  // // =====================================================
  // .state('select_hotel', {
  //   url: "/select_hotel",
  //   templateUrl: "templates/select_hotel/show.html",
  //   controller: "SelectHotelController"
  // })

  // // =====================================================
  // // Checkin views
  // // =====================================================
  // .state('checkin', {
  //   url: "/checkin",
  //   templateUrl: "templates/checkin/show.html",
  //   controller: "CheckinController",
  //   abstract: true
  // })
  // .state('checkin.dashboard', {
  //   url: '/dashboard',
  //   views: {
  //     'checkinView': {
  //       templateUrl: 'templates/checkin/dashboard/show.html',
  //       controller : 'DashboardController'
  //     }
  //   }
  // })
  // .state('checkin.hotel_informations', {
  //   url: '/hotel_informations',
  //   views: {
  //     'checkinView': {
  //       templateUrl: 'templates/checkin/hotel_informations/show.html',
  //       controller : 'HotelInformationsController'
  //     }
  //   }
  // })

  // =====================================================
  // Router route fallback
  // =====================================================
  $urlRouterProvider.otherwise('/content_wizard/stopo');
})