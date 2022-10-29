import React, { useEffect, useContext, useState } from "react";
// import DatGui from "../threejs/DatGui";
import * as THREE from "three";
import "../threejs/threeJS.css";
// import * as dat from "dat.gui";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import sceneModel from "../Model/contentoFulla.glb";


import { ModelContext } from "../Context/ModelContext";
import { cameraParam, setCamera } from "../threejs/camera.js";

import { dirLight, hemiLight } from "./lights";


function Threescene({ leftPanelDetails }) {
  // const [datGui, setDatGui] = useState(new dat.GUI());

 const {dismissLoader, setDismissLoader
} = useContext(ModelContext);

  useEffect(() => {
    const scene = new THREE.Scene();

    // Get Canvas for rendering
    const canvas = document.getElementById("myThreeJSCanvas");

    //Sizes
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    //Gui Parameter
    const parameters = {
      color: "#000070",
    };
    //Animation Parameters
    let mixer = null;
    let actionMap = new Map();
    let actionClip;
    let action;

     //DracoLoader
     const draco = new DRACOLoader()
draco.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
draco.setDecoderConfig({ type: 'js' });



    // GLTF loader
    const loader = new GLTFLoader();
    loader.setDRACOLoader(draco)
  

   

// Specify path to a folder containing WASM/JS decoding libraries.



    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.setSize(
      window.innerWidth - leftPanelDetails.current.clientWidth,
     window.innerHeight
    );

    // Default Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      (sizes.width - leftPanelDetails.current.clientWidth) /
      window.innerHeight,
      0.01,
      1000
    );
    scene.add(camera);

    //Loader Function
    function loadscene(path, scene, s) {
      loader.load(
        path,
        (gltf) => {
          //asset fetch
          const root = gltf.scene;
          root.scale.set(s, s, s);
          root.position.set(0, -26, 0);

          root.traverse((child)=>{
              child.frustumCulled  = false
          })

          //camera parameter fetch and set
          camera.lookAt(root.position);
          camera.position.x = cameraParam.position_x;
          camera.position.y = cameraParam.position_y;
          camera.position.z = cameraParam.position_z;
          camera.rotation.x = cameraParam.rotation_x;
          camera.rotation.y = cameraParam.rotation_y;
          camera.rotation.z = cameraParam.rotation_z;

          //Update scene
          scene.add(root);

          mixer = new THREE.AnimationMixer(root);

      const animations = gltf.animations;

      actionMap = new Map();

      for (let i = 0; i < animations.length; i++) {
        actionMap.set(animations[i].name, [
          new THREE.AnimationClip(
            animations[i].name,
            animations[i].duration,
            animations[i].tracks
          ),
        ]);

        //animOptionsByName[animations[i].name] = animations[i].name;
      }

    

      const HoverAction = mixer.clipAction(
        actionMap.get("HoverAction|CINEMA_4D_Main|Layer0")[0]
      );
      const BladesCase = mixer.clipAction(
        actionMap.get("BladesCaseSmooth|CINEMA_4D_Main|Layer0")[0]
      );
      const Contento = mixer.clipAction(
        actionMap.get("Armature|mixamo.com|Layer0")[0]
      );
      const Tweeto = mixer.clipAction(
        actionMap.get("Pivot|CINEMA_4D_Main|Layer0")[0]
      );

      Tweeto.timeScale = 4;
      Contento.timeScale = 0.5;

    
      // // actionWalk.setEffectiveWeight(1);

      HoverAction.play();
      BladesCase.play();

      Contento.setLoop(THREE.LoopOnce);
      Contento.setDuration(6);
      Contento.clampWhenFinished = true;
      Contento.play();
      Tweeto.play();

      setDismissLoader(false)
        },
        

        (gltf) => {
          console.log( (gltf.loaded / 192000) + '% loading' );
          console.log( (gltf.total) + '% loading' );
        }
      );
    }

    //Update Screen Size on resize using Left-Panel as reference
    window.addEventListener("resize", (event) => {
      sizes.width = window.innerWidth - leftPanelDetails.current.clientWidth;
      sizes.height = leftPanelDetails.current.clientHeight;

      console.log(sizes.height)

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

    

    /* Scene */
    const sceneBgColor = new THREE.Color("white");
    scene.background = new THREE.Color(parameters.color);
    scene.fog = new THREE.FogExp2(0xefd1b5, 0.0025);

    //Orbit Control
    const orbit = new OrbitControls(camera, canvas);
    orbit.enableDamping = true;
    orbit.autoRotate = true;
    // orbit.target = parameters.orbitTarget

    //Update Camera for other scenes
    orbit.addEventListener("end", (e) => {
      console.log(e);
      setCamera(camera, orbit);
    });

    //Lights
   
    scene.add(hemiLight);  
    scene.add(dirLight);

    //Create Particles
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

    loadscene(sceneModel, scene, 2.8);

    //GUI Initialize

    // if (datGui) {
    //   datGui.add(parameters, "positionX", -20, 20, 1).onChange(() => {
    //     camera.position.x = parameters.positionX;
    //     camera.updateProjectionMatrix();
    //   });
    //   datGui.add(parameters, "positionY", -20, 20, 1).onChange(() => {
    //     camera.position.y = parameters.positionY;
    //     camera.updateProjectionMatrix();
    //   });
    //   datGui.add(parameters, "positionZ", -20, 20, 1).onChange(() => {
    //     camera.position.z = parameters.positionZ;
    //     camera.updateProjectionMatrix();
    //   });

    //   datGui.addColor(parameters, "color").onChange((e) => {
    //     scene.background.set(e);
    //   });
    // }

    //Animation
    const clock = new THREE.Clock();
    let previousTime = 0;

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

    return () => {
      while (scene.children.length > 0) {
        scene.remove(scene.children[0]);
      }
    };
  }, [leftPanelDetails]);

  return <canvas id="myThreeJSCanvas" />;
}

export default Threescene;
