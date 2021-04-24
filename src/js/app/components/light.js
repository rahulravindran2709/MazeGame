import * as THREE from 'three';

import Config from '../../data/config';

// Sets up and places all lights in scene
export default class Light {
  constructor(scene) {
    this.scene = scene;

    this.init();
  }

  init() {

    // Point light
    this.pointLight = new THREE.PointLight(Config.pointLight.color, Config.pointLight.intensity, Config.pointLight.distance);
    this.pointLight.position.set(Config.pointLight.x, Config.pointLight.y, Config.pointLight.z);
    this.pointLight.visible = Config.pointLight.enabled;

    
  }

  place(lightName) {
    switch(lightName) {
      case 'point':
        this.scene.add(this.pointLight);
        break;
    }
  }
}
