// Packages
import ReactDOM from 'react-dom'
import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useLoader, extend, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { OrbitControls } from '@react-three/drei';
import { useLocation } from 'react-router-dom';

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

export default function Background({ route, ...props }) {
    let location = useLocation();

    const [timer, setTimer] = useState(0);
    const [page, setPage] = useState(location ? location.pathname.replace('/', '') : '');

    const defaultCamera = {
        home: {
            target: new THREE.Vector3(0, 0, 0),
            position: new THREE.Vector3(0, 0, 4)
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




    const [projectsTarget, setProjectsTarget] = useState(new THREE.Vector3(0, 0, 0));
    const [aboutTarget, setAboutTarget] = useState(new THREE.Vector3(0, 0, 0));

    const [textProject, setTextProjects] = useState(new THREE.Vector3(0, 0, 0.5))
    const [projectsTextRotation, setProjectsTextRotation] = useState(new THREE.Vector3(45, 0, 0))

    useEffect(() => {
        changePage();
    }, [page]);


    useEffect(() => {
        // console.log('location');
        let str = location.pathname.replace('/', '');
        setPage(str);
    }, [location])


    function getPageDefault() {
        // console.log('page', page);
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
        return {
            target: new THREE.Vector3(0, 0, 0),
            position: new THREE.Vector3(0, 0, 0)
        }
    }

    function changePage() {
        setTarget(getPageDefault().target);
        setCameraPos(getPageDefault().position);

        if (page === '') {
            setProjectsTarget(new THREE.Vector3(0, 10, 0));
            setAboutTarget(new THREE.Vector3(2, 10, 0));
        }
        else if (page === 'projects') {
            setProjectsTarget(new THREE.Vector3(0, 0, 0));
            setAboutTarget(new THREE.Vector3(1, 10, 0));
        }
        else if (page === 'about') {
            setProjectsTarget(new THREE.Vector3(0, 10, 0));
            setAboutTarget(new THREE.Vector3(0,0, 0));
        }

    }

    return (
        <div className="background-parent">
            <div id="background" className="background">
                <Canvas gl={{ antialias: true }} pixelRatio={window.devicePixelRatio}>
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <CameraControls target={target} position={cameraPos} />


                    <CubeWall />

                    {page === '' ?
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
                    </Object>

                    <Cube color={'red'} position={new THREE.Vector3(0, 0, 0)} />
                    <Cube color={'green'} position={new THREE.Vector3(0, 1, 0)} />
                    <Cube color={'blue'} position={new THREE.Vector3(1, 0, 0)} />
                    <Cube color={'yellow'} position={new THREE.Vector3(0, -1, 0)} />
                    <Cube color={'orange'} position={new THREE.Vector3(-1, 0, 0)} />



                </Canvas>
            </div>
            {/* <div className="buttons">
                <button onClick={swapPage}> Home </button>
                <button onClick={swapPage}> Projects </button>
            </div> */}
            {props.children}
        </div>
    )
}

function HomeCamera() {
    // This one makes the camera move in and out
    useFrame(({ clock, camera }) => {
        const target = new THREE.Vector3(0, 0, 6);
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




const CameraControls = ({ target, position, ...props }) => {
    // Get a reference to the Three.js Camera, and the canvas html element.
    // We need these to setup the OrbitControls component.
    // https://threejs.org/docs/#examples/en/controls/OrbitControls
    const {
        camera,
        gl: { domElement },
    } = useThree();
    // Ref to the controls, so that we can update them on every frame using useFrame
    const controls = useRef();
    useFrame(({ clock, camera }) => {
        controls.current.enabled = false;

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
        camera.position.lerp(position, 0.1);


        // controls.current.position0.x += Math.sin(clock.getElapsedTime());

        controls.current.update()
    });




    return <OrbitControls ref={controls} args={[camera, domElement]} />;
};