import * as THREE from "three";

export const cameraParam = {
  position_x: 19,
  position_y: -2.3,
  position_z: -1,
  rotation_x: 1.5,
  rotation_y: 1.3,
  rotation_z: -1.4,

  orbitTarget : new THREE.Vector3(0,0,  0)
};

export const setCamera = (camera, orbit) => {
console.log("setCamera", camera, "orbit", orbit.target,);
  cameraParam.position_x = camera.position.x;
  cameraParam.position_y = camera.position.y;
  cameraParam.position_z = camera.position.z;
  cameraParam.rotation_x = camera.rotation._x;
  cameraParam.rotation_y = camera.rotation._y;
  cameraParam.rotation_z = camera.rotation._z; 
};
