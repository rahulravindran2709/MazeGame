import * as THREE from "three";
import { AmbientLight, PointLight, Scene } from "three";
import Config from "../../data/config";

// Sets up and places all lights in scene
export default class Light {
  scene;
  pointLight: PointLight;
  ambientLight: AmbientLight;
  constructor(scene: Scene) {
    this.scene = scene;

    this.init();
  }

  init() {
    // Point light
    this.pointLight = new THREE.PointLight(
      Config.pointLight.color,
      Config.pointLight.intensity,
      Config.pointLight.distance,
      Config.pointLight.decay
    );
    this.pointLight.position.set(
      Config.pointLight.x,
      Config.pointLight.y,
      Config.pointLight.z
    );
    this.pointLight.visible = Config.pointLight.enabled;

    this.ambientLight = new THREE.AmbientLight(Config.ambientLight.color);
    this.ambientLight.visible = Config.ambientLight.enabled;
  }

  place(lightName: "point" | "ambient") {
    switch (lightName) {
      case "point":
        this.scene.add(this.pointLight);
        break;
      case "ambient":
        this.scene.add(this.ambientLight);
        break;
    }
  }
}
