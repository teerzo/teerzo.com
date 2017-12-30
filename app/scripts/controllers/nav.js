'use strict';

var websiteApp;

websiteApp.directive('nav', function() {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'html/nav.html'
  };
});

websiteApp.directive('iconHover', function () {
    return {
        restrict: 'A',
        scope: {
            hoverClass: '@'
        },
        link: function (scope, element) {
            element.on('mouseenter', function() {
              console.log('in');
                element.addClass('active');
            });
            element.on('mouseleave', function() {
              console.log('out');
              
                element.removeClass('active');
            });
        }
    };
});