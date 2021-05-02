import * as THREE from "three";

// USe this class as a helper to set up some default materials
export default class Material {
  constructor() {}

  makePhongMaterial(texture: THREE.Texture) {
    return new THREE.MeshPhongMaterial({ map: texture });
  }
}
