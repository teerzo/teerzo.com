import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Canvas, useFrame, useLoader, extend, useThree } from '@react-three/fiber'
import { Text } from "troika-three-text";
import * as THREE from 'three'

// Register Text as a react-three-fiber element
extend({ Text });

const fonts = {
    Tourney: "https://fonts.googleapis.com/css2?family=Tourney:wght@500;900&display=swap",
    Roboto: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,300&display=swap"
}

function ThreeText(props) {
    // State:
    
    const [position, setPosition] = useState(props.position ? props.position : new THREE.Vector3(0,0,0));
    // const [rotation, setRotation] = useState(props.rotation);
    const [rotation, setRotation] = useState([0, 0, 0, 0]);

    const [fontSize, setFontSize] = useState(props.fontSize);

    const [opts, setOpts] = useState({
        font: "Tourney",
        // fontSize: props.fontSize,
        color: "#99ccff",
        maxWidth: 1,
        lineHeight: 1,
        letterSpacing: 0,
        textAlign: "center",
        materialType: "MeshPhongMaterial",
        border: '1px solid red'
    });

    useFrame(({ clock, camera }) => {
        let pos = new THREE.Vector3().copy(position);
        // pos.x = 0 + Math.sin(clock.getElapsedTime()) * 1 - 2;
        setPosition(pos);

        // let rot = rotation;
        // rot[0] = 0 + Math.sin(clock.getElapsedTime()) * 2;
        // rot[1] = 0 + Math.sin(clock.getElapsedTime()) * 2;
        // rot[2] = 0 + Math.sin(clock.getElapsedTime()) * 2;
        // setRotation(rot);

        // setRotation([ Math.sin(clock.getElapsedTime()) * 2, 100, 0, 0]);
    
        // let size = fontSize;
        // size += Math.sin(clock.getElapsedTime()) * 0.005;
        // setFontSize(size);
    })

    return (
        <>
            <text
                position={position}
                rotation={rotation}
                {...opts}
                text={props.text}
                font={fonts[opts.font]}
                fontSize={fontSize}
                anchorX="center"
                anchorY="middle"
            >
                {opts.materialType === "MeshPhongMaterial" ? (
                    <meshPhongMaterial attach="material" color={opts.color} />
                ) : null}
            </text>
        </>
    );
}

export default ThreeText;