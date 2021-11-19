
import ReactDOM from 'react-dom'
import React, { useRef, useState, useEffect } from 'react'
import {
    Canvas, useFrame,
    useLoader,
    extend,
    useThree,
} from '@react-three/fiber'
import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";


import FloatingCubes from '../../scenes/floating-cubes';

import './background.scss';
import CubeWall from '../../scenes/cube-wall';

import Cube from '../../objects/cube';

import useReactPath from '../../helpers/useReactPath';

// Extend will make OrbitControls available as a JSX element called orbitControls for us to use.
extend({ OrbitControls });


export default function Background(props) {

    const [target, setTarget] = useState(new THREE.Vector3(0,0,0));
    const [cameraPos, setCameraPos] = useState(new THREE.Vector3(0,0,10));

    const [timer, setTimer] = useState(0);
    const [page, setPage] = useState('home');

    const path = useReactPath();
    React.useEffect(() => {
      // do something when path changes ...
      console.log('path', path);
    }, [path]);


    function handleClick(event) {
        console.log('background parent click', event.target);

    }

    function handleCanvasClick(event) {
        console.log('canvas handle click', event.target);

    }

    function swapPage() {
        if( page === 'home' ) {
            setPage('projects');
            setTarget(new THREE.Vector3(0,2,0));
            setCameraPos(new THREE.Vector3(5,0,5));
        }
        else {
            setPage('home');
            setTarget(new THREE.Vector3(0,0,0));
            setCameraPos(new THREE.Vector3(0,0,10));
        }
    }

    return (
        <div className="background-parent" onClick={handleClick}>



            <div id="background" className="background">
                <Canvas gl={{ antialias: true }} onClick={handleCanvasClick}>
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <CameraControls target={target} position={cameraPos} />


                    <CubeWall />
                    {/* {page === 'home' ?
                        <HomeCamera />
                        :                       
                        <ProjectDolly />
                    } */}

                    <Cube color={'red'} position={[0, 0, 0]} />
                    <Cube color={'green'} position={[0, 1, 0]} />
                    <Cube color={'blue'} position={[1, 0, 0]} />
                    <Cube color={'yellow'} position={[0, -1, 0]} />
                    <Cube color={'orange'} position={[-1, 0, 0]} />



                </Canvas>
            </div>
            <div className="buttons">
                <button onClick={swapPage}> Home </button>
                <button onClick={swapPage}> Projects </button>
            </div>
            {props.children}
        </div>
    )
}

function HomeCamera() {
    // This one makes the camera move in and out
    useFrame(({ clock, camera }) => {
        const target = new THREE.Vector3(0, 0, 10);
        const targetPos = new THREE.Vector3(0, 0, 5);

        const cameraPos = camera.position;

        // console.log('camera pos', cameraPos);
        let lerpPosition = new THREE.Vector3(0, 0, 0).copy(cameraPos);
        let time = Math.sin(((Date.now() % 10000) / 10000 * Math.PI * 1) * 0.5) - 1;


        lerpPosition.lerpVectors(targetPos, target, Math.sin(clock.getElapsedTime()));

        // console.log('lerp position', lerpPosition);

        camera.position.x = lerpPosition.x;
        camera.position.y = lerpPosition.y;
        camera.position.z = lerpPosition.z;
        console.log('camera', camera);

        // camera.target.position.x += Math.sin(clock.getElapsedTime()) * 1;

        // console.log('camera', camera.position);

        // camera.position.z = 50 + Math.sin(clock.getElapsedTime()) * 5
    })
    return null
}


function ProjectDolly() {
    // This one makes the camera move in and out
    useFrame(({ clock, camera }) => {


        camera.position.x = 0 + Math.sin(clock.getElapsedTime()) * 5
    })
    return null
}




const CameraControls = ({target, position, ...props}) => {
    // Get a reference to the Three.js Camera, and the canvas html element.
    // We need these to setup the OrbitControls component.
    // https://threejs.org/docs/#examples/en/controls/OrbitControls
    const {
        camera,
        gl: { domElement },
    } = useThree();
    // Ref to the controls, so that we can update them on every frame using useFrame
    const controls = useRef();
    useFrame(({clock, camera}) => {
        // console.log('controls', controls.current);

        // const currentPos = 


        //     // lerp to target position
        // lerpPosition.lerpVectors(targetPos, target, Math.sin(clock.getElapsedTime()));

        // // console.log('lerp position', lerpPosition);

        // camera.position.x = lerpPosition.x;
        // camera.position.y = lerpPosition.y;
        // camera.position.z = lerpPosition.z;

        const num = Math.sin(clock.getElapsedTime());
        // console.log('num', num);

        controls.current.target.lerp(target, 0.1);
        // controls.current.position0.lerp(position, 1);

        // console.log('camera', camera);
        camera.position.lerp(position,0.1);
        

        // controls.current.position0.x += Math.sin(clock.getElapsedTime());

        controls.current.update()
    });




    return <orbitControls ref={controls} args={[camera, domElement]} />;
};