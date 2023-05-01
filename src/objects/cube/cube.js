import ReactDOM from 'react-dom'
import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'


export default function Cube({color, position, rotation, ...props}) {

    const [initialPosition, setInitPosition] = useState( position ? position : new THREE.Vector3(0,0,0));

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


        ref.current.position.lerp(position, 0.1);



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


        if (position) {
            // console.log('props', props);
            ref.current.position.x = position.x;
            ref.current.position.y = position.y;
            ref.current.position.z = position.z;
        }

        if( rotation ) {
            ref.current.rotation.x = rotation.x;
            ref.current.rotation.y = rotation.y;
            ref.current.rotation.z = rotation.z;
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

    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh
            {...props}
            ref={ref}
            scale={props.scale ? props.scale : 1}
            >
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshStandardMaterial color={color} wireframe={props.wireframe ? props.wireframe : false} opacity={props.opacity ? props.opacity : 1} />
            {props.children}
        </mesh>
    )
}

function rand(min, max) {
    return Math.random() * (max - min) + min;
}