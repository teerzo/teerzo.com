// Packages
// import ReactDOM from "react-dom";
import React, {
  Suspense,
  useRef,
  useState,
  useEffect,
  useMemo,
  useReducer,
} from "react";
// import {
//   Canvas,
//   useFrame,
//   useLoader,
//   extend,
//   useThree,
// } from "@react-three/fiber";
// import { OrbitControls, Plane } from "@react-three/drei";
import { useLocation } from "react-router-dom";
// import { LayerMaterial, Depth, Fresnel } from "lamina";

// import CustomLayer from "./custom-layer";

import * as THREE from "three";
// import { useRef, useReducer, useMemo } from 'react'
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { BallCollider, Physics, RigidBody } from "@react-three/rapier";
import { easing } from "maath";
import { Effects } from "./effects";

const accents = ["#ff4060", "#ffcc00", "#20ffa0", "#4060ff"];
const shuffle = (accent = 0) => [
  { color: "#444", roughness: 0.1, metalness: 0.5 },
  { color: "#444", roughness: 0.1, metalness: 0.5 },
  { color: "#444", roughness: 0.1, metalness: 0.5 },
  { color: "white", roughness: 0.1, metalness: 0.1 },
  { color: "white", roughness: 0.1, metalness: 0.1 },
  { color: "white", roughness: 0.1, metalness: 0.1 },
  { color: accents[accent], roughness: 0.1, accent: true },
  { color: accents[accent], roughness: 0.1, accent: true },
  { color: accents[accent], roughness: 0.1, accent: true },
  { color: "#444", roughness: 0.1 },
  { color: "#444", roughness: 0.3 },
  { color: "#444", roughness: 0.3 },
  { color: "white", roughness: 0.1 },
  { color: "white", roughness: 0.2 },
  { color: "white", roughness: 0.1 },
  {
    color: accents[accent],
    roughness: 0.1,
    accent: true,
    transparent: true,
    opacity: 0.5,
  },
  { color: accents[accent], roughness: 0.3, accent: true },
  { color: accents[accent], roughness: 0.1, accent: true },
];

// Styles
import "./background.scss";

// Shaders
// import vertexShader from 'shaders/vertexShader';
// import fragmentShader from 'shaders/fragmentShader';

// extend({ CustomLayer });

export default function Background({ route, ...props }) {
  return (
    <div id="background" className="background">
      {/* <Suspense fallback={null}> */}
        <Scene route={route} {...props} />
      {/* </Suspense> */}
    </div>
  );
}

function Scene({ route, ...props }) {
  const [accent, click] = useReducer((state) => ++state % accents.length, 0);
  const connectors = useMemo(() => shuffle(accent), [accent]);

  let location = useLocation();

  const [timer, setTimer] = useState(0);
  const [page, setPage] = useState(
    location ? location.pathname.replace("/", "") : ""
  );
  const [lastPage, setLastPage] = useState(null);

  const defaultCamera = {
    home: {
      // target: new THREE.Vector3(0, 1, 0),
      // position: new THREE.Vector3(0, 0, 4)

      target: new THREE.Vector3(-2, 0, 0),
      position: new THREE.Vector3(-2, 0, 4),
    },
    projects: {
      target: new THREE.Vector3(0, -1.5, 0),
      position: new THREE.Vector3(-4, 1, 4),
    },
    about: {
      target: new THREE.Vector3(0, 0, 0),
      position: new THREE.Vector3(3, -1, 3),
    },
  };

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
    let str = location.pathname.replace("/", "");
    setLastPage(page);
    setPage(str);
  }, [location]);

  function getPageDefault() {
    if (page !== null) {
      if (page === "") {
        return defaultCamera.home;
      } else if (page === "projects") {
        return defaultCamera.projects;
      } else if (page === "about") {
        return defaultCamera.about;
      } else {
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
    <Canvas
      flat
      shadows
        onClick={click}
      dpr={[1, 1.5]}
      gl={{ antialias: false }}
      camera={{ position: [0, 0, 30], fov: 17.5, near: 10, far: 40 }}
      {...props}
    >
      <color attach="background" args={["#141622"]} />
      <Physics /*debug*/ timeStep="vary" gravity={[0, 0, 0]}>
        <Pointer />
        {connectors.map((props, i) => (
          <Sphere key={i} {...props} />
        ))}
      </Physics>
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer
            form="circle"
            intensity={100}
            rotation-x={Math.PI / 2}
            position={[0, 5, -9]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, -1, -1]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={-Math.PI / 2}
            position={[10, 1, 0]}
            scale={8}
          />
          <Lightformer
            form="ring"
            color="#4060ff"
            intensity={80}
            onUpdate={(self) => self.lookAt(0, 0, 0)}
            position={[10, 10, 0]}
            scale={10}
          />
        </group>
      </Environment>
      <Effects />
    </Canvas>
  );
}

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
  }, [target, position]);

  useFrame(({ clock, camera }) => {
    // const num = Math.sin(clock.getElapsedTime());
    if (lerping) {
      controls.current.target.lerp(target, 0.001);
      camera.position.lerp(position, 0.001);

      checkDistance(camera.position, position);
    }
    controls.current.update();
  });

  function startLerp() {
    setLerp(true);
    controls.current.enabled = false;
  }

  function endLerp() {
    setLerp(false);
    controls.current.enabled = true;
  }

  function checkDistance(a, b) {
    if (a === position) {
      endLerp();
    } else if (a.distanceTo(b) < 0.1) {
      endLerp();
    }
  }

  return <OrbitControls ref={controls} args={[camera, domElement]} />;
};

function Sphere({
  position,
  children,
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  accent,
  color = "white",
  ...props
}) {
  const api = useRef();
  const ref = useRef();
  const pos = useMemo(() => position || [r(10), r(10), r(10)], []);
  useFrame((state, delta) => {
    delta = Math.min(0.1, delta);
    api.current?.applyImpulse(
      vec.copy(api.current.translation()).negate().multiplyScalar(0.2)
    );
    easing.dampC(ref.current.material.color, color, 0.2, delta);
  });
  return (
    <RigidBody
      linearDamping={4}
      angularDamping={1}
      friction={0.1}
      position={pos}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[1]} />
      <mesh ref={ref} castShadow receiveShadow>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial {...props} />
        {children}
      </mesh>
    </RigidBody>
  );
}

function Pointer({ vec = new THREE.Vector3() }) {
  const ref = useRef();
  useFrame(({ mouse, viewport }) =>
    ref.current?.setNextKinematicTranslation(
      vec.set(
        (mouse.x * viewport.width) / 2,
        (mouse.y * viewport.height) / 2,
        0
      )
    )
  );
  return (
    <RigidBody
      position={[0, 0, 0]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[1]} />
    </RigidBody>
  );
}
