'use strict';

/**
 * @ngdoc overview
 * @name websiteTeerzoApp
 * @description
 * # websiteTeerzoApp
 *
 * Main module of the application.
 */
var websiteApp = angular
  .module('websiteTeerzoApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angulartics',
    'angulartics.google.analytics'
  ])
  .config( function ($routeProvider, $locationProvider, $analyticsProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'html/views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'html/views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/projects', {
        templateUrl: 'html/views/projects.html',
        controller: 'ProjectsCtrl',
        controllerAs: 'projects'
      })
      .when('/frontend', {
        templateUrl: 'html/views/frontend.html',
        controller: 'FrontendCtrl',
        controllerAs: 'frontend'
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.hashPrefix('');
      $analyticsProvider.virtualPageviews(true);
  });

websiteApp.run(function($rootScope, $http, $location) {
 
  $rootScope.headerBtnHover = function($event) {
    // console.log($event);
    $($event.target).addClass('active');
  };
  $rootScope.headerBtnLeave = function($event) {
    // console.log($event);
    $($event.target).removeClass('active');
  };

  $rootScope.getURL = function() {
    var loc = $location.url();
    // console.log(loc);
  };

  $rootScope.projects = [];

  $rootScope.gaEvent = function(name,type ) {
    ga('send','event','link', type, name);
  };




  // $http({method: 'get', url: 'https://api.instagram.com/oembed?url=http://instagr.am/p/fA9uwTtkSN/'}).
  // then(function(response) {
  //   console.log(response);
  // });







  var initialize = function() {
    // console.log('Teerzo app initialize()');

    //  var feed = new Instafeed({
    //     // get: 'tagged',
    //     // tagName: 'awesome',
    //     clientId: '24719bfeb6514fae8c14eec8430b3e1b'
    // });
    // feed.run();

    LoadProjects();
  };
  var LoadProjects = function() {
    $http.get('resources/projects.json').then(
      function projectsSuccess(response) {
        // console.log(response);r
        $rootScope.projects = response.data;
      }, 
      function projectsError(response) {
    
    }); 




};

// websiteApp.run(function($analyticsProvider, $analytics) {
  // if( $analyticsProvider ) {

  // }
  // if( $analytics ) {
  //   $analytics.pageTrack('/');
  // }
  initialize();
});


//  appModule.config(['$locationProvider', function($locationProvider) {
//   $locationProvider.hashPrefix("");
// }]);