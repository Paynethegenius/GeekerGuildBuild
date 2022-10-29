import * as THREE from "three";

export const cameraParam = {
  position_x: 12,
  position_y: 6,
  position_z: -13,
  rotation_x: -2.6,
  rotation_y: 0.5,
  rotation_z: 2.7,

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
