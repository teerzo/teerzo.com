'use strict';

/**
 * @ngdoc function
 * @name websiteTeerzoApp.controller:FrontendCtrl
 * @description
 * # FrontendCtrl
 * Controller of the websiteTeerzoApp
 */
angular.module('websiteTeerzoApp')
  .controller('FrontendCtrl', function ($scope, $analytics) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    if( $analytics ) {
      $analytics.pageTrack('/frontend');
    }

    $scope.packages = [
      { 
        name: 'ThreeJS',
        collapse: true, 
        entries: [
          { name: 'Threejs content #1', description: 'Events.js 160' },
          { name: 'Threejs content #2', description: 'Events.js 141' },
          { name: 'Threejs content #3', description: 'Events.js 140' },
        ] 
      },
      { 
        name: 'Angular',
        collapse: true, 
        entries: [
          { name: 'Angular content #1', description: 'Events.js 160' },
          { name: 'Angular content #2', description: 'Events.js 160' },
          { name: 'Angular content #3', description: 'Events.js 160' },
        ] 
      },
      { 
        name: 'Bower',
        collapse: true, 
        entries: [
          { name: 'Bower content #1', description: 'Events.js 160' },
          { name: 'Bower content #2', description: 'Events.js 160' },
          { name: 'Bower content #3', description: 'Events.js 160' },
        ] 
      },
      { 
        name: 'Grunt',
        collapse: true, 
        entries: [
          { name: 'Grunt content #1', description: 'Events.js 160' },
          { name: 'Grunt content #2', description: 'Events.js 160' },
          { name: 'Grunt content #3', description: 'Events.js 160' },
        ] 
      },
      { 
        name: 'Gulp',
        collapse: true, 
        entries: [
          { name: 'Gulp content #1', description: 'Events.js 160' },
          { name: 'Gulp content #2', description: 'Events.js 160' },
          { name: 'Gulp content #3', description: 'Events.js 160' },
        ] 
      },
    ];

  });
