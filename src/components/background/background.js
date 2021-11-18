
import ReactDOM from 'react-dom'
import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

import FloatingCubes from '../../scenes/floating-cubes';

import './background.scss';
import CubeWall from '../../scenes/cube-wall';

export default function Background(props) {
    function handleClick(event) {
        console.log('background parent click', event.target);

    }

    function handleCanvasClick(event) {
        console.log('canvas handle click', event.target);

    }


    return (
        <div className="background-parent" onClick={handleClick}>
            <div id="background" className="background">
                <Canvas gl={{ antialias: true }} onClick={handleCanvasClick}>
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />

                    {/* <FloatingCubes />  */}
                    <CubeWall /> 

                 
                </Canvas>
            </div>
            {props.children}
        </div>
    )
}
