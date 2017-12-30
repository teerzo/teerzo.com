'use strict';

/**
 * @ngdoc function
 * @name websiteTeerzoApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the websiteTeerzoApp
 */
angular.module('websiteTeerzoApp')
  .controller('ProjectsCtrl', function ($scope, $analytics) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    if( $analytics ) {
      $analytics.pageTrack('/projects');
    }

    $scope.packages = [
      { 
        name: 'ThreeJS',
        collapse: true, 
        entries: [
          { name: '3D face demo', description: 'Face demo', url:'http://teerzo.github.io/Andrew/', image: './images/facedemo.png' },
          { name: 'Threejs content #2', description: 'Events.js 141', url:'https://twitter.com', image: './images/threejs-default.png' },
          { name: 'Threejs content #3', description: 'Events.js 140', url:'https://twitter.com', image: './images/threejs-default.png' },
        ] 
      },
      { 
        name: 'Angular',
        collapse: true, 
        entries: [
          { name: 'Angular content #1', description: 'Events.js 160', url:'https://twitter.com', image: './images/facedemo.png' },
          { name: 'Angular content #2', description: 'Events.js 160', url:'https://twitter.com', image: './images/facedemo.png' },
          { name: 'Angular content #3', description: 'Events.js 160', url:'https://twitter.com', image: './images/facedemo.png' },
        ] 
      }
    ];
  });
