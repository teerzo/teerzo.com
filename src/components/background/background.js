// Packages
import ReactDOM from 'react-dom'
import React, { Suspense, useRef, useState, useEffect, useMemo } from 'react'
import { Canvas, useFrame, useLoader, extend, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { OrbitControls, Plane } from '@react-three/drei';
import { useLocation } from 'react-router-dom';
import { LayerMaterial, Depth, Fresnel } from "lamina";

import CustomLayer from './custom-layer';

// Components
import useReactPath from '../../helpers/useReactPath';

// Objects
import FloatingCubes from '../../scenes/floating-cubes';
import CubeWall from '../../scenes/cube-wall';
import Cube from '../../objects/cube';
import Object from '../../objects/object';
import Text from '../../objects/text';

// Styles
import './background.scss';

// Shaders
import vertexShader from 'shaders/vertexShader';
import fragmentShader from 'shaders/fragmentShader';

extend({ CustomLayer });


export default function Background({ route, ...props }) {
    return (
        <div id="background" className="background">
            <Suspense fallback={null}>
                <Scene route={route} {...props} />
            </Suspense>
        </div>
    )
}

function Scene({ route, ...props }) {
    let location = useLocation();

    const [timer, setTimer] = useState(0);
    const [page, setPage] = useState(location ? location.pathname.replace('/', '') : '');
    const [lastPage, setLastPage] = useState(null);

    const defaultCamera = {
        home: {
            // target: new THREE.Vector3(0, 1, 0),
            // position: new THREE.Vector3(0, 0, 4)

            target: new THREE.Vector3(-2, 0, 0),
            position: new THREE.Vector3(-2, 0, 4)
        },
        projects: {
            target: new THREE.Vector3(0, -1.5, 0),
            position: new THREE.Vector3(-4, 1, 4)
        },
        about: {
            target: new THREE.Vector3(0, 0, 0),
            position: new THREE.Vector3(3, -1, 3)
        }
    }

    const [target, setTarget] = useState(getPageDefault().target);
    const [cameraPos, setCameraPos] = useState(getPageDefault().position);


    // const [projectsTarget, setProjectsTarget] = useState(defaultCamera.projects.target);
    // const [aboutTarget, setAboutTarget] = useState(defaultCamera.about.target);

    // const [textProject, setTextProjects] = useState(new THREE.Vector3(0, 0, 0.5))
    // const [projectsTextRotation, setProjectsTextRotation] = useState(new THREE.Vector3(45, 0, 0))

    useEffect(() => {
        changePage();
    }, [page]);


    useEffect(() => {
        let str = location.pathname.replace('/', '');
        setLastPage(page);
        setPage(str);
    }, [location])


    function getPageDefault() {
        if (page !== null) {
            if (page === '') {
                return defaultCamera.home;
            }
            else if (page === 'projects') {
                return defaultCamera.projects;
            }
            else if (page === 'about') {
                return defaultCamera.about;
            }
        }
        // return {
        //     target: new THREE.Vector3(0, 0, 0),
        //     position: new THREE.Vector3(0, 0, 0)
        // }
    }

    function changePage() {
        setTarget(getPageDefault().target);
        setCameraPos(getPageDefault().position);

        // if (page === '') {
        //     setProjectsTarget(new THREE.Vector3(0, 10, 0));
        //     setAboutTarget(new THREE.Vector3(2, 10, 0));
        // }
        // else if (page === 'projects') {
        //     setProjectsTarget(new THREE.Vector3(0, 0, 0));
        //     setAboutTarget(new THREE.Vector3(1, 10, 0));
        // }
        // else if (page === 'about') {
        //     setProjectsTarget(new THREE.Vector3(0, 10, 0));
        //     setAboutTarget(new THREE.Vector3(0, 0, 0));
        // }
    }

    return (
        <Canvas gl={{ antialias: true }} dpr={window.devicePixelRatio}>
            {/* Lights */}
            <ambientLight intensity={0.03} />
            <directionalLight position={[0.3, 0.15, 1]} intensity={2} />

            {/* Cameras */}
            <CameraControls page={page} lastPage={lastPage} target={target} position={cameraPos} />

            {/* Objects */}
            <CubeWall />
            {/* <Planet /> */}

            {/* {page === '' ?
                <Object color={'red'} opacity={0.1} wireframe={true}
                    scale={1} position={new THREE.Vector3(0, 0, 0)}
                >
                    <Text text={'Ayyyy lmao floating text'}
                        position={new THREE.Vector3(0, 0, 1)}
                        fontSize={0.5}
                        font={'Roboto'}
                    />
                </Object>
                : <> </>
            }

            <Object color={'red'} opacity={0.1} wireframe={true}
                scale={1} position={projectsTarget}
                rotation={projectsTextRotation}
            >
                <Text text={'Projects'}
                    position={textProject}
                    rotation={projectsTextRotation}
                    fontSize={0.5}
                    font={'Roboto'}
                />
            </Object>

            <Object color={'white'} opacity={0.1} wireframe={true}
                scale={1} position={aboutTarget}  >
                <Text text={'About'}
                    position={textProject}
                    rotation={projectsTextRotation}
                    fontSize={0.5}
                    font={'Roboto'}
                />
            </Object> */}

            {/* <Cube color={'red'} position={target} scale={0.5} /> */}
            {/* <Cube color={'green'} position={new THREE.Vector3(0, 1, 0)} />
            <Cube color={'blue'} position={new THREE.Vector3(1, 0, 0)} />
            <Cube color={'yellow'} position={new THREE.Vector3(0, -1, 0)} />
            <Cube color={'orange'} position={new THREE.Vector3(-1, 0, 0)} /> */}

        </Canvas>
    )
};

const CameraControls = ({ page, target, position, ...props }) => {
    // Get a reference to the Three.js Camera, and the canvas html element.
    // We need these to setup the OrbitControls component.
    // https://threejs.org/docs/#examples/en/controls/OrbitControls
    const {
        camera,
        gl: { domElement },
    } = useThree();
    // Ref to the controls, so that we can update them on every frame using useFrame
    const controls = useRef();

    const [lerping, setLerp] = useState(false);

    useEffect(() => {
        if (camera.position !== position) {
            startLerp();
        }
    }, [target, position])

    useFrame(({ clock, camera }) => {
        // const num = Math.sin(clock.getElapsedTime());
        if (lerping) {
            controls.current.target.lerp(target, 0.001);
            camera.position.lerp(position, 0.001);

            checkDistance(camera.position, position);
        }
        controls.current.update()
    });

    function startLerp() {
        setLerp(true);
        controls.current.enabled = false;
    }

    function endLerp() {
        setLerp(false);
        controls.current.enabled = true;
    }

    function checkDistance( a, b) {
        if( a === position) {
            endLerp();
        }
        else if( a.distanceTo(b) < 0.1) {
            endLerp();
        } 
    }

    return <OrbitControls ref={controls} args={[camera, domElement]} />;
};

function Planet() {
    const materialRef = useRef();
    const mesh = useRef();

    const mapping = ['uv'];


    useFrame((state) => {
        const { clock } = state;
        // materialRef.current.time = clock.getElapsedTime();
        mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
    });

    const uniforms = useMemo(
        () => ({
            u_time: { value: 0.0 },
            u_colorA: { value: 'vec3(0.071,0.302,0.847)' },
            // u_colorA: { value: '#124dd8' },
            u_colorB: { value: '0x2bffe7' },
            // u_colorB: { value: '#2bffe7' },
            u_cloudTint: { value: '0x001741' },
            // u_cloudTint: { value: '#001741' },
            u_gain: { value: 0.5 },
            u_lacunarity: { value: 2.0 },

            // static u_colorA = "#124dd8";
            // static u_colorB = "#2bffe7";
            // static u_cloudTint = "#001741";
            // static u_gain = 0.5;
            // static u_lacunarity = 2.0;
            // static u_time = 0.0;
        }), []
    );

    return (
        <>
            <Cube color={'red'} position={new THREE.Vector3(0, -1, 0)} scale={0.5} />

            <mesh ref={mesh} position={[0, 0, 0]} rotation={[0, Math.PI, 0]} scale={0.5}>
                <icosahedronGeometry args={[2, 11]} />
                <shaderMaterial
                    fragmentShader={fragmentShader}
                    vertexShader={vertexShader}
                    uniforms={uniforms}
                // wireframe
                />
                {/* 
                <LayerMaterial lighting="lambert">
                    <customLayer ref={materialRef} time={0.0} lacunarity={2.3} args={[mapping]} /> 
                </LayerMaterial> */}
            </mesh>
        </>
    )
}

// <LayerMaterial lighting="lambert">
//     {/* First layer is our own custom layer that's based of the FBM shader */}
//     {/* 
//        Notice how we can use *any* uniforms as prop here 👇
//        You can tweak the colors by adding a colorA or colorB prop!
//     */}
//     {/* <customLayer ref={materialRef} time={0.0} lacunarity={2.3} /> */}
//     {/* {useCustomLayer} */}
//     {/* Second layer is a depth based gradient that we "add" on top of our custom layer*/}
//     <Depth colorA="blue" colorB="aqua" alpha={0.9} mode="add" />
//     {/* Third Layer is a Fresnel shading effect that we add on*/}
//     <Fresnel color="#FEB3D9" mode="add" />
// </LayerMaterial>

