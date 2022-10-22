import React, { useEffect, useState, useContext } from "react";
import DatGui from "../threejs/DatGui";
import * as THREE from "three";
import "../threejs/threeJS.css";
import * as dat from "dat.gui";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import { ModelContext } from "../Context/ModelContext";

function Threescene({ leftPanelDetails }) {
  const [datGui, setDatGui] = useState(new dat.GUI());
  const [screenSmall, setScreenSmall] = useState(false);
  const { model } = useContext(ModelContext);

  console.log(model);

  // const loadModel = (scene,object)=>{
  // scene.remove(object)
  // }

  // useEffect(()=>{
  // loadModel()
  // }, model)

  useEffect(() => {
    const scene = new THREE.Scene();

    // Canvas

    const canvas = document.getElementById("myThreeJSCanvas");

    // Debug

    //Sizes

    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    const screenSize = {
      X: window.innerWidth,
      Y: window.innerHeight,
    };

    //Gui Parameter

    const parameters = {
      positionX: 14,
      positionY: -12,
      positionZ: 4,
      color: "#000070",
    };

    let mixer = null;

    let actionMap = new Map();
    let actionClip;
    let action;

    // GLTF loader
    const loader = new GLTFLoader();

    // Renderer

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.setSize(
      window.innerWidth - leftPanelDetails.current.clientWidth,
      leftPanelDetails.current.clientHeight
    );

    function loadscene(path, scene) {
   

      
      loader.load(path, (gltf) => {
          const root = gltf.scene;

          root.traverse((child) => {
            child.frustumCulled = false;
           
          });
          camera.lookAt(root.position);

          root.scale.set(2.8, 2.8, 2.8);
          root.position.set(0, -27, 0);
          root.rotateY(125);

          camera.lookAt(root.position);
          camera.position.x = parameters.positionX;
          camera.position.y = parameters.positionY;

          scene.add(gltf.scene);

          console.log(scene)
        }
      );
    }

    window.addEventListener("resize", (event) => {
      //Update Screen Size on resize

      sizes.width = window.innerWidth - leftPanelDetails.current.clientWidth;
      sizes.height = leftPanelDetails.current.clientHeight;

      if (sizes.width < 120) {
        renderer.setSize(0, 0);
      } else {
        canvas.width = sizes.width;
        canvas.height = sizes.height;

        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();
        renderer.setSize(sizes.width, sizes.height);
      }
    });

    /* Camera */

    const camera = new THREE.PerspectiveCamera(
      75,
      (sizes.width - leftPanelDetails.current.clientWidth) /
        leftPanelDetails.current.clientHeight,
      0.01,
      1000
    );

    scene.add(camera);

    /* Scene */

    const sceneBgColor = new THREE.Color("white");
    scene.background = new THREE.Color(parameters.color);
    scene.fog = new THREE.FogExp2(0xefd1b5, 0.0025);

    //Orbit Control

    const orbit = new OrbitControls(camera, canvas);
    orbit.enableDamping = true;

    //Lights

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.4);
    hemiLight.color.setHSL(0.6, 1, 1);
    hemiLight.groundColor.setHSL(0.095, 1, 0.75);
    hemiLight.position.set(0, 50, 0);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.1);
    dirLight.color.setHSL(0.1, 1, 0.95);
    dirLight.position.set(1, 1.75, 1);
    dirLight.position.multiplyScalar(30);
    scene.add(dirLight);

    //Particles

    const vertices = [];

    for (let i = 0; i < 10000; i++) {
      const x = THREE.MathUtils.randFloatSpread(2000);
      const y = THREE.MathUtils.randFloatSpread(2000);
      const z = THREE.MathUtils.randFloatSpread(2000);

      vertices.push(x, y, z);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );

    const material = new THREE.PointsMaterial({ color: 0x3837d4 });

    const points = new THREE.Points(geometry, material);

    points.sizes = 0.001;
    points.sizeAttenuation = true;

    scene.add(points);

    // Load Models
    loadscene(model.object,scene)

    if (datGui) {
      datGui.add(parameters, "positionX", -20, 20, 1).onChange(() => {
        camera.position.x = parameters.positionX;
        camera.updateProjectionMatrix();
      });
      datGui.add(parameters, "positionY", -20, 20, 1).onChange(() => {
        camera.position.y = parameters.positionY;
        camera.updateProjectionMatrix();
      });
      datGui.add(parameters, "positionZ", -20, 20, 1).onChange(() => {
        camera.position.z = parameters.positionZ;
        camera.updateProjectionMatrix();
      });

      datGui.addColor(parameters, "color").onChange((e) => {
        scene.background.set(e);
      });
    }

    const clock = new THREE.Clock();
    let previousTime = 0;

    //Animation
    const tick = () => {
      const elapsedTime = clock.getElapsedTime();
      const deltaTime = elapsedTime - previousTime;
      previousTime = elapsedTime;

      points.rotation.y += 0.05 * deltaTime;

      if (mixer) {
        mixer.update(deltaTime);
      }

      orbit.update();
 
      renderer.render(scene, camera);
      window.requestAnimationFrame(tick);
    };

    tick();
  }, [leftPanelDetails, model]);

  return <canvas id="myThreeJSCanvas" />;
}

export default Threescene;
