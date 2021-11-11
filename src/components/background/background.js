
import ReactDOM from 'react-dom'
import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

import './background.scss';

export default function Background(props) {

    return (
        <>
            <div id="background" className="background">
                <Canvas>
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <Box position={[-1.2, 0, 0]} />
                    <Box position={[1.2, 0, 0]} />
                    <Box position={[1.2, 0, 0]} />
                    <Box position={[1.2, 0, 0]} />
                    <Box position={[1.2, 0, 0]} />
                    <Box position={[1.2, 0, 0]} />
                    <Box position={[1.2, 0, 0]} />
                    <Box position={[1.2, 0, 0]} />
                    <Box position={[1.2, 0, 0]} />
                    <Box position={[1.2, 0, 0]} />
                    <Box position={[1.2, 0, 0]} />
                    <Box position={[1.2, 0, 0]} />
                    <Box position={[1.2, 0, 0]} />
                    <Box position={[1.2, 0, 0]} />
                    <Box position={[1.2, 0, 0]} />
                    <Box position={[1.2, 0, 0]} />
                    <Box position={[1.2, 0, 0]} />
                    <Box position={[1.2, 0, 0]} />
                    <Box position={[1.2, 0, 0]} />
                    <Box position={[1.2, 0, 0]} />
                    <Box position={[1.2, 0, 0]} />
                    <Box position={[1.2, 0, 0]} />
                    <Box position={[1.2, 0, 0]} />
                    <Box position={[1.2, 0, 0]} />
                    <Box position={[1.2, 0, 0]} />
                </Canvas>
            </div>
        </>
    )
}

function rand(min, max) {
    return Math.random() * (max - min) + min;
}
function Box(props) {
    const [lifeSpan, setLifeSpan] = useState(0);
    const [maxLifeSpan, setMaxLifeSpan] = useState(1);

    const [moveSpeed, setMoveSpeed] = useState([1, 1, 1]);
    const [moveDir, setMoveDir] = useState([1, 1, 1]);
    const [rotateSpeed, setRotateSpeed] = useState([1, 1, 1]);
    const [rotateDir, setRotateDir] = useState([1, 1, 1]);

    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)

    useEffect(() => {
        const mLifeSpan = rand(10, 20);
        setMaxLifeSpan(mLifeSpan);

        const mSpeed = [rand(1, 3), rand(1, 3), rand(1, 3)];
        setMoveSpeed(mSpeed);

        const mDir = [rand(-1, 1), rand(1, 1), rand(-1, 1)];
        setMoveDir(mDir);

        const rSpeed = [rand(1, 3), rand(1, 3), rand(1, 3)];
        setRotateSpeed(rSpeed);

        const rDir = [rand(0, 1), rand(0, 1), rand(0, 0)];
        setRotateDir(rDir);

        ref.current.position.x = rand(-10, 10);
        ref.current.position.y = rand(-10, -8);
        ref.current.position.z = rand(-10, 0);

    }, [])

    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => {
        ref.current.rotation.x += (rotateDir[0] * rotateSpeed[0] * delta);
        ref.current.rotation.y += (rotateDir[1] * rotateSpeed[1] * delta);
        ref.current.rotation.z += (rotateDir[2] * rotateSpeed[2] * delta);

        ref.current.position.x += (moveDir[0] * moveSpeed[0] * delta);
        ref.current.position.y += (moveDir[1] * moveSpeed[1] * delta);
        ref.current.position.z += (moveDir[2] * moveSpeed[2] * delta);

        let lSpan = lifeSpan + 1.0 * delta;
        if (lSpan >= maxLifeSpan) {
            lSpan = 0;
            ref.current.position.x = rand(-10, 10);
            ref.current.position.y = rand(-10, -8);
            ref.current.position.z = rand(-10, 0);
        }
        setLifeSpan(lSpan);
    })
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 1.5 : 1}
            onClick={(event) => click(!clicked)}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}
