'use strict';

var initialize = function() { 

    var iceskating = {};
    var element = jQuery('.wrapper-canvas-iceskating');

    // Scene variables

    var camera, scene, geometry, renderer, material, object, container;


    // Element dimensions

    iceskating.width           = element[0].offsetWidth;
    iceskating.height          = element[0].offsetHeight;
    iceskating.objectColor     = '#ffaa44';
    iceskating.backgroundColor = '#333333';

    // console.log( 'test', element[0].offsetHeight);
        // debugger;
    // iceskating.height = iceskating.height === 0 ? element[0].offsetHeight : 400 + 'px';

    // Initialization function

    iceskating.init = function(){


        // container = angular.element('<div>')[0];
        container = element[0];
        
        // element[0].appendChild(container);

        camera   = new THREE.PerspectiveCamera(75, element[0].offsetWidth / element[0].offsetHeight, 1, 1000);

            camera.position.x = 5;
            camera.position.y = 0;
            camera.position.z = 50;
        

        scene    = new THREE.Scene();

        geometry = new THREE.BoxGeometry(10,10,10);

        material = new THREE.MeshBasicMaterial({color: '#00FF00', wireframe: true});

        object   = new THREE.Mesh(geometry, material);
        
            object.position.x = 0;
            object.position.y = 10;
            object.position.z = 0;
        
            scene.add(object);


        var groundGeometry = new THREE.BoxGeometry(30,0.1,30);
        var groundMaterial = new THREE.MeshBasicMaterial({color: '#966a24', wireframe: false});
        var groundObject = new THREE.Mesh(groundGeometry, groundMaterial);
        groundObject.position.x = 0;
        groundObject.position.y = 0;
        groundObject.position.z = 0;
        scene.add(groundObject);

        var treeGeo = new THREE.BoxGeometry(5,10,5);
        var treeMat = new THREE.MeshBasicMaterial({color: '#00FF00', wireframe: false});
        var treeObj1 = new THREE.Mesh(treeGeo, treeMat);
        treeObj1.position.x = -30;
        treeObj1.position.y = 0;
        treeObj1.position.z = 0;

        scene.add(treeObj1);

        var treeObj2 = new THREE.Mesh(treeGeo, treeMat);
        treeObj2.position.x = -30;
        treeObj2.position.y = 0;
        treeObj2.position.z = -20;
        treeObj2.scale.x *= 1.2;
        treeObj2.scale.y *= 1.2;
        treeObj2.scale.z *= 1.2;
        scene.add(treeObj2);


        renderer = new THREE.WebGLRenderer({antialias: true});

        renderer.setSize(element[0].offsetWidth, element[0].offsetHeight);
        renderer.setClearColor(iceskating.backgroundColor);


        container.appendChild(renderer.domElement);
        // renderer.domElement.width =
        // iceskating.width           = element[0].offsetWidth;
    // iceskating.height          = element[0].offsetHeight;
        


    }; // @end iceskating.init


    iceskating.render = function(){

        camera.lookAt(scene.position);

        // Traverse the scene, rotate the Mesh object(s)
        scene.traverse(function(element){

        // if(element instanceof  THREE.Mesh){

        // //     element.rotation.x += 0.0065;
        // //     element.rotation.y += 0.0065;
        

        // }

        renderer.render(scene, camera);

        });

    }; // @end iceskating.render


    iceskating.animate = function(){

        requestAnimationFrame(iceskating.animate);
        iceskating.render();

    };
    iceskating.resize = function() {
        //  console.log('resize', element[0].offsetWidth);
        //  console.log(renderer.domElement);
        renderer.domElement.width = element[0].offsetWidth + 'px';
        // renderer.domElement.height = (element[0].offsetHeight === 19 ? element[0].offsetHeight : 200 )  + 'px';
        // renderer.domElement.height = 100 + 'px';
        // console.log(renderer.domElement);
        // renderer.domElement
        // jQuery(renderer.domElement).css('height', element[0].offsetHeight + 'px');
        jQuery(renderer.domElement).css('min-height', 330);
        // console.log('height', element[0].offsetHeight, renderer.domElement.height);
        // debugger;

        // renderer.domElement.width =
        renderer.setSize(element[0].offsetWidth, element[0].offsetHeight);
        camera = new THREE.PerspectiveCamera(75, element[0].offsetWidth / element[0].offsetHeight, 1, 1000);
        camera.position.x = 0;
            camera.position.y = 15;
            camera.position.z = 60;
    };

    iceskating.init();
    iceskating.resize();
    iceskating.animate();
    

        
    // angular.element($window).bind('resize', function(){
    //     resize();
    // });





    // window.alert(wrapper);
};


jQuery(window).on('load', function() {
    initialize();
    
});
