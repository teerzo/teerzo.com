

import ReactDOM from 'react-dom'
import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

export default function CubeWall(props) {

    const [cubes, setCubes] = useState([]);

    useEffect(() => {
        initCubes();
    }, [])


    function initCubes() {
        const maxCubes = 100;
        const rows = 10;
        const cols = 10;
        const offset = 0.7;

        let arr = [];
        let index = -1;
        for (let r = 1; r <= rows; r++) {
            for (let c = 1; c <= cols; c++) {
                index += 1;
                const x =  (  r - ( rows * 0.5) - 0.5) * offset;
                const y =  (  c - ( cols * 0.5) - 0.5) * offset;
                

                // const x =  r - ( rows * 0.5) - 0.5 ;
                // const y =  c - ( cols * 0.5) - 0.5 ;

                const z = -1;

                const position = [x, y, z];
                // console.log('positoin', position);
                arr.push(<Box index={index} position={position} />);
            }
        }
        setCubes(arr);
    }

    return (
        <>
            {cubes}
        </>
    )
}

function rand(min, max) {
    return Math.random() * (max - min) + min;
}
function Box(props) {


    const [lerpRand, setLerpRand] = useState(rand(-0.5,0.5)); 
    const [zRand, setZRand] = useState(1);
    const [timerRand, setTimerRand] = useState(rand(30000,60000));

    const [initialPosition, setInitPosition] = useState(props.position);

    const [lifeSpan, setLifeSpan] = useState(0);
    const [maxLifeSpan, setMaxLifeSpan] = useState(30);

    const [moveSpeed, setMoveSpeed] = useState([10, 10, 10]);
    const [moveDir, setMoveDir] = useState([0, 0, 0]);
    const [rotateSpeed, setRotateSpeed] = useState([0, 0, 0]);
    const [rotateDir, setRotateDir] = useState([0, 0, 0]);

    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)

    useEffect(() => {

        reset();
    }, [])

    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => {
        ref.current.rotation.x += (rotateDir[0] * rotateSpeed[0] * delta);
        ref.current.rotation.y += (rotateDir[1] * rotateSpeed[1] * delta);
        ref.current.rotation.z += (rotateDir[2] * rotateSpeed[2] * delta);

        // ref.current.position.x += (moveDir[0] * moveSpeed[0] * delta);
        // ref.current.position.y += (moveDir[1] * moveSpeed[1] * delta);
        // ref.current.position.z += (moveDir[2] * moveSpeed[2] * delta);

        let mDir = moveDir;
        // mDir.x = (Math.sin((delta) * Math.PI * 2) * mDir.x);
        // mDir.y = (Math.cos((delta) * Math.PI * 2) * mDir.y);

        mDir.x = (Math.sin(delta * Math.PI * 2) * 1);
        mDir.y = (Math.cos(delta * Math.PI * 2) * 1);

        // setMoveDir(mDir);
        // rn {x: (Math.sin((Date.now()%60000)/60000 * Math.PI * 2) * radius),
        //     z: (Math.cos((Date.now()%60000)/60000 * Math.PI * 2) * radius)};

        // ref.current.position.x = (Math.sin((Date.now()%60000)/60000 * Math.PI * 2) * 1);
        // ref.current.position.y = (Math.cos((Date.now()%60000)/60000 * Math.PI * 2) * 1);
        ref.current.position.z = (Math.sin((Date.now()%timerRand)/timerRand * Math.PI * zRand) * 2) - 3;


        if (clicked) {
            let lSpan = lifeSpan + 1.0 * delta;
            if (lSpan >= maxLifeSpan) {
                reset();
            }
            else {
                setLifeSpan(lSpan);
            }
        }
    })

    function reset() {


        if (props.position) {
            // console.log('props', props);
            // ref.current.position.x = initialPosition[0];
            // ref.current.position.y = initialPosition[1];
            // ref.current.position.z = initialPosition[2];
        }

        // ref.current.position.x = rand(-10, 10);
        // ref.current.position.y = rand(-20, 5);
        // ref.current.position.z = rand(-10, 0);

        // const mLifeSpan = rand(10, 20);
        // setMaxLifeSpan(mLifeSpan);

        // const mSpeed = [0, 0, 0];
        // setMoveSpeed(mSpeed);

        // const mDir = [0, 0, 0];
        // setMoveDir(mDir);

        const rSpeed = [0,0,0];
        setRotateSpeed(rSpeed);

        const rDir = [0,0,0];
        setRotateDir(rDir);

        ref.current.rotation.x = 0;
        ref.current.rotation.y = 0;
        ref.current.rotation.z = 0;

        setLifeSpan(0);
    }

    function handleMeshClick(event) {
        if( !clicked) {
            click(true);
        } 

        // // const mSpeed = [rand(1, 3), rand(1, 3), 1];
        // const mSpeed = [rand(5, 10), rand(5, 10), 20];
        // // const mSpeed = [0,0,10];
        // setMoveSpeed(mSpeed);

        // // const mDir = [rand(-5, 5), rand(5, 5), rand(1, 5)];
        // let mDir = [rand(-1, 1), rand(1, 1), -1];
        // // mDir[3] = -1;
        // // const mDir = [rand(-5, 5), rand(5, 5), -1];
        // // const mDir = [0,0,-1];
        // setMoveDir(mDir);

          const rSpeed = [rand(1, 3), rand(1, 3), rand(1, 3)];
        setRotateSpeed(rSpeed);

        const rDir = [rand(0, 1), rand(0, 1), rand(0, 0)];
        setRotateDir(rDir);
    }

    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh
            {...props}
            ref={ref}
            scale={1}
            onClick={handleMeshClick}
            // onPointerOver={(event) => hover(true)}
            // onPointerOut={(event) => hover(false)}
            >
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            {/* <meshStandardMaterial color={ props.color ? 'red' : 'orange'} opacity={0.5} /> */}
            <meshNormalMaterial />
        </mesh>
    )
}

function StaticBox(props) {

    const [initialPosition, setInitPosition] = useState(props.position);

    const [lifeSpan, setLifeSpan] = useState(0);
    const [maxLifeSpan, setMaxLifeSpan] = useState(1);

    const [moveSpeed, setMoveSpeed] = useState([10, 10, 10]);
    const [moveDir, setMoveDir] = useState([0, 0, 0]);
    const [rotateSpeed, setRotateSpeed] = useState([0, 0, 0]);
    const [rotateDir, setRotateDir] = useState([0, 0, 0]);

    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)

    useEffect(() => {

        reset();
    }, [])

    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => {
        ref.current.rotation.x += (rotateDir[0] * rotateSpeed[0] * delta);
        ref.current.rotation.y += (rotateDir[1] * rotateSpeed[1] * delta);
        ref.current.rotation.z += (rotateDir[2] * rotateSpeed[2] * delta);

        ref.current.position.x += (moveDir[0] * moveSpeed[0] * delta);
        ref.current.position.y += (moveDir[1] * moveSpeed[1] * delta);
        ref.current.position.z += (moveDir[2] * moveSpeed[2] * delta);

      


        if (clicked) {
            let lSpan = lifeSpan + 1.0 * delta;
            if (lSpan >= maxLifeSpan) {
                reset();
            }
            else {
                setLifeSpan(lSpan);
            }
        }
    })

    function reset() {


        if (props.position) {
            // console.log('props', props);
            ref.current.position.x = initialPosition[0];
            ref.current.position.y = initialPosition[1];
            ref.current.position.z = initialPosition[2];
        }

        // ref.current.position.x = rand(-10, 10);
        // ref.current.position.y = rand(-20, 5);
        // ref.current.position.z = rand(-10, 0);

        // const mLifeSpan = rand(10, 20);
        // setMaxLifeSpan(mLifeSpan);

        const mSpeed = [0, 0, 0];
        setMoveSpeed(mSpeed);

        const mDir = [0, 0, 0];
        setMoveDir(mDir);

        // const rSpeed = [rand(1, 3), rand(1, 3), rand(1, 3)];
        // setRotateSpeed(rSpeed);

        // const rDir = [rand(0, 1), rand(0, 1), rand(0, 0)];
        // setRotateDir(rDir);

        setLifeSpan(0);
    }

    function handleMeshClick(event) {
        if( !clicked) {
            click(true);
        } 

        // const mSpeed = [rand(1, 3), rand(1, 3), 1];
        const mSpeed = [rand(5, 10), rand(5, 10), 20];
        // const mSpeed = [0,0,10];
        setMoveSpeed(mSpeed);

        // const mDir = [rand(-5, 5), rand(5, 5), rand(1, 5)];
        let mDir = [rand(-1, 1), rand(1, 1), -1];
        // mDir[3] = -1;
        // const mDir = [rand(-5, 5), rand(5, 5), -1];
        // const mDir = [0,0,-1];
        setMoveDir(mDir);

          // const rSpeed = [rand(1, 3), rand(1, 3), rand(1, 3)];
        // setRotateSpeed(rSpeed);

        // const rDir = [rand(0, 1), rand(0, 1), rand(0, 0)];
        // setRotateDir(rDir);
    }

    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh
            {...props}
            ref={ref}
            scale={1}
            >
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshStandardMaterial color={ 'red'} opacity={0.5} />
        </mesh>
    )
}