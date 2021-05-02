import * as THREE from "three";

import "../../utils/orbitControls";
import Config from "../../data/config";

// Controls based on orbit controls
export default class Controls {
  threeControls: THREE.OrbitControls;
  constructor(camera: THREE.Camera, container: HTMLElement) {
    // Orbit controls first needs to pass in THREE to constructor
    const orbitControls = new THREE.OrbitControls(camera, container);
    this.threeControls = orbitControls;

    //this.init();
  }

  init() {
    this.threeControls.target.set(
      Config.controls.target.x,
      Config.controls.target.y,
      Config.controls.target.z
    );
    this.threeControls.autoRotate = Config.controls.autoRotate;
    this.threeControls.autoRotateSpeed = Config.controls.autoRotateSpeed;
    this.threeControls.rotateSpeed = Config.controls.rotateSpeed;
    this.threeControls.zoomSpeed = Config.controls.zoomSpeed;
    this.threeControls.minDistance = Config.controls.minDistance;
    this.threeControls.maxDistance = Config.controls.maxDistance;
    this.threeControls.minPolarAngle = Config.controls.minPolarAngle;
    this.threeControls.maxPolarAngle = Config.controls.maxPolarAngle;
    this.threeControls.enableDamping = Config.controls.enableDamping;
    this.threeControls.enableZoom = Config.controls.enableZoom;
    this.threeControls.dampingFactor = Config.controls.dampingFactor;
  }
}
