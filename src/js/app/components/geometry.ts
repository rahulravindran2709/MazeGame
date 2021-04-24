import * as THREE from 'three';

import Material from './material';
import Config from '../../data/config';

// This helper class can be used to create and then place geometry in the scene
export default class Geometry {
  scene: THREE.Scene;
  geo: THREE.BufferGeometry;
  dimension: number;
  constructor(scene: THREE.Scene, mazeDimension: number) {
    this.scene = scene;
    this.geo = null;
    this.dimension = mazeDimension;
  }
  makeSphere(radius: number, widthSegments = 32, heightSegments = 32) {
    this.geo = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
  }
  makePlane(width: number, height: number, widthSegments = 1, heightSegments = 1) {
    this.geo = new THREE.PlaneGeometry(width, height, widthSegments, heightSegments);
  }
  makeBox(width: number, height: number, depth: number, widthSegments: number, heightSegments: number, depthSegments: number) {
    this.geo = new THREE.BoxGeometry(width, height, depth, widthSegments, heightSegments, depthSegments);
  }
  makeBall() {
    this.makeSphere(0.25, 32, 16);
    return this.geo;
  }
  makeGround() {
    this.makePlane(this.dimension * 10,
      this.dimension * 10,
      this.dimension,
      this.dimension);
    return this.geo;
  }

  // place(position, rotation) {
  //   const material = new Material(0xeeeeee).standard;
  //   const mesh = new THREE.Mesh(this.geo, material);

  //   // Use ES6 spread to set position and rotation from passed in array
  //   mesh.position.set(...position);
  //   mesh.rotation.set(...rotation);

  //   if(Config.shadow.enabled) {
  //     mesh.receiveShadow = true;
  //   }

  //   this.scene.add(mesh);
  // }
}
