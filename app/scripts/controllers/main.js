'use strict';

var THREE;


/**
 * @ngdoc function
 * @name websiteTeerzoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the websiteTeerzoApp
 */
angular.module('websiteTeerzoApp')
  .controller('MainCtrl', function ($scope, $analytics) {
    // console.log('main.controller();');
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    if( $analytics ) {
      $analytics.pageTrack('/');
    }
    
  })
  .directive('teerzoMain', function($window) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs){


       

        console.log('teerzoMain - directive');
        console.log(attrs);
        // Scene variables

        var camera, scene, geometry, renderer, material, object, container;


        // Element dimensions

        scope.width           = element[0].offsetWidth;
        scope.height          = element[0].offsetHeight;
        scope.objectColor     = '#ffaa44';
        scope.backgroundColor = '#333333';

        // Initialization function

        scope.init = function(){


          // container = angular.element('<div>')[0];
          container = element[0];
          
          // element[0].appendChild(container);

          camera   = new THREE.PerspectiveCamera(75, element[0].offsetWidth / element[0].offsetHeight, 1, 1000);

              camera.position.x = 5;
              camera.position.y = 0;
              camera.position.z = 20;
          

          scene    = new THREE.Scene();

          geometry = new THREE.BoxGeometry(10,10,10);

          material = new THREE.MeshBasicMaterial({color: '#00FF00', wireframe: true});

          object   = new THREE.Mesh(geometry, material);
         
              object.position.x = 0;
              object.position.y = 0;
              object.position.z = 0;
          
              scene.add(object);

          renderer = new THREE.WebGLRenderer({antialias: true});

          renderer.setSize(element[0].offsetWidth, element[0].offsetHeight);
          renderer.setClearColor(scope.backgroundColor);


          container.appendChild(renderer.domElement);



        }; // @end scope.init


        scope.render = function(){

          camera.lookAt(scene.position);

          // Traverse the scene, rotate the Mesh object(s)
          scene.traverse(function(element){

            if(element instanceof  THREE.Mesh){

              element.rotation.x += 0.0065;
              element.rotation.y += 0.0065;
            

            }

          renderer.render(scene, camera);

          });

        }; // @end scope.render


        scope.animate = function(){

          requestAnimationFrame(scope.animate);
          scope.render();

        };


        scope.init();
        scope.animate();
        

         var resize = function() {
          //  console.log('resize', element[0].offsetWidth);
          //  console.log(renderer.domElement);
           renderer.domElement.width = element[0].offsetWidth + 'px';
          // renderer.domElement.width =
          renderer.setSize(element[0].offsetWidth, element[0].offsetHeight);
          camera = new THREE.PerspectiveCamera(75, element[0].offsetWidth / element[0].offsetHeight, 1, 1000);
           camera.position.x = 5;
              camera.position.y = 0;
              camera.position.z = 20;
        };
        angular.element($window).bind('resize', function(){
          resize();
        });
      }





      };


  });
// angular.module('websiteTeerzoApp').directive('mainScene', mainScene);



  // .run(function($scope){
    //  $scope.domElements = {
    //   wrapper: null,
    //   canvas: null,
    // };

    // $scope.main = {
    //   wrapper: null,
    //   canvas: null,
    //   scene: null,
    //   renderer: null,
    //   camera: null,
    //   size: {
    //     width: 0,
    //     height: 0,
    //   }
    // };

    // $scope.domElements.wrapper = document.getElementById('main-wrapper');
    // $scope.domElements.canvas = document.getElementById('main-canvas');
    // // var mainCanvasWrapper = document.getElementById('main-canvas');

    // $scope.initialize = function() {

    //   // # Main Size
    //   $scope.main.size.width = $scope.domElements.wrapper.offsetWidth; 
    //   $scope.main.size.height = 200; // $scope.domElements.wrapper.offsetWidth; 

    //   // # Main Renderer
    //   $scope.main.renderer = new THREE.WebGLRenderer($scope.domElements.canvas);
    //   $scope.main.renderer.setSize(  $scope.main.size.width, $scope.main.size.height );


    //   // # Main Scene
    //   $scope.main.scene = new THREE.Scene();

    //   // # Main Camera
    //   $scope.main.camera = new THREE.PerspectiveCamera(75, $scope.main.size.width/ $scope.main.size.height,1,10000);
    //   $scope.main.camera.position.z = 1000;

    //   var geometry = new THREE.BoxGeometry( 200, 200, 200 );
    //   var material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );
    //   var mesh     = new THREE.Mesh( geometry, material );

    //   mesh.update = function() {
    //     mesh.rotation.x += 0.01;
    //     mesh.rotation.y += 0.02;
    //   };

    //   $scope.main.scene.add(mesh);


    //   $scope.loop();
    // };
    // $scope.loop = function() {
    //    requestAnimationFrame( $scope.loop );
 
    //     // mesh.rotation.x += 0.01;
    //     // mesh.rotation.y += 0.02;
    //     console.log($scope.main.renderer);
    //     // if( !$scope.main.renderer ) {
    //     //   debugger;
    //     // }
    //     if( $scope.main.renderer && $scope.main.scene && $scope.main.camera ) {
    //       $scope.main.renderer.render( $scope.main.scene, $scope.main.camera );
    //     }
    // };

    //  $scope.initialize();
  // });