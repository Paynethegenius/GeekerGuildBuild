import * as THREE from "three";


const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6);
hemiLight.color.setHSL(0.6, 0.1, 1);
hemiLight.groundColor.setHSL(0.095, 1, 0.75);
hemiLight.position.set(0, 50, 0);


const dirLight = new THREE.DirectionalLight(0xffffff, 1.1);
dirLight.color.setHSL(0.1, 1, 0.95);
dirLight.position.set(1, 1.75, 1);
dirLight.position.multiplyScalar(30);

export {hemiLight, dirLight}